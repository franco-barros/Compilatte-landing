import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaLaptop, FaCoffee } from "react-icons/fa";

type IconData = {
  x: number;
  size: number;
  duration: number;
  delay: number;
  type: "laptop" | "coffee";
};

export default function Background() {
  const [icons, setIcons] = useState<IconData[]>([]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const iconCount = 10; // 5 laptops, 5 cafes
    const screenWidth = window.innerWidth;
    const gap = screenWidth / iconCount;

    const generatedIcons: IconData[] = new Array(iconCount)
      .fill(null)
      .map((_, index) => ({
        x: gap * index + gap / 2 - 30,
        size: 1.5,
        duration: 8,
        delay: index * 1.5,
        type: index % 2 === 0 ? "laptop" : "coffee",
      }));

    setIcons(generatedIcons);
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {icons.map((icon, index) => (
        <motion.div
          key={index}
          initial={{
            y: -100,
            x: icon.x,
            opacity: 0,
            scale: icon.size,
          }}
          animate={{
            y: window.innerHeight + 100,
            x: Math.min(icon.x + 300, window.innerWidth),
            opacity: 0.5,
          }}
          transition={{
            duration: icon.duration,
            repeat: Infinity,
            repeatType: "loop",
            delay: icon.delay,
            ease: "linear",
          }}
          className="absolute text-green-800"
        >
          {icon.type === "laptop" ? (
            <FaLaptop size={60} />
          ) : (
            <FaCoffee size={60} />
          )}
        </motion.div>
      ))}
    </div>
  );
}
