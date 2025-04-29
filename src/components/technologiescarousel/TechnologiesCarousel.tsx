"use client";

import React, { useEffect, useRef, useMemo, useCallback } from "react";
import { motion, useAnimation, useMotionValue } from "framer-motion";
import deviconMap from "../../data/DevIcon";

const TechnologiesCarousel = () => {
  const controls = useAnimation();
  const carouselRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const speed = 60;

  const technologies = useMemo(() => {
    const techsArray = Object.entries(deviconMap);
    return [...techsArray, ...techsArray];
  }, []);

  const startAnimation = useCallback(() => {
    if (carouselRef.current) {
      const fullWidth = carouselRef.current.scrollWidth / 2;
      const duration = fullWidth / speed;

      controls.set({ x: -fullWidth });
      controls.start({
        x: 0,
        transition: {
          duration,
          ease: "linear",
          repeat: Infinity,
          repeatType: "loop",
        },
      });
    }
  }, [controls, speed]);

  useEffect(() => {
    startAnimation();
    return () => {
      controls.stop();
    };
  }, [startAnimation, controls]);

  return (
    <div className="overflow-hidden py-20 bg-white w-full">
      <div className="relative w-full overflow-hidden">
        <motion.div
          ref={carouselRef}
          style={{ x }}
          animate={controls}
          initial={false}
          drag="x"
          dragElastic={0.2}
          whileTap={{ cursor: "grabbing" }}
          className="flex gap-12 items-center w-max"
        >
          {technologies.map(([tech, iconClass], index) => (
            <motion.div
              key={`${tech}-${index}`}
              className="flex flex-col items-center justify-center min-w-[120px] bg-[#6d746e] rounded-xl p-4 shadow-md hover:shadow-xl transition"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              <i className={`${iconClass} text-5xl mb-3`} />
              <p className="text-md font-semibold text-green-200">{tech}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default TechnologiesCarousel;
