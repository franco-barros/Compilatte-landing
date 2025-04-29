"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import useAutoAdvance from "../../hooks/useAutoAdvance";
import { workedItems } from "../../data/WorkedItems";
import WorkedCard from "../cardworked/CardWorked";

const WorkedSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useAutoAdvance({
    itemsLength: workedItems.length,
    delay: 3000,
    isPaused: false,
    setCurrentIndex,
  });

  const { id, Icon, title, description } = workedItems[currentIndex];

  return (
    <section
      aria-label="Worked slider"
      className="w-full max-w-3xl mx-auto h-[400px] relative flex items-center justify-center"
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={id}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.6 }}
          className="w-full h-full flex items-center justify-center"
        >
          <WorkedCard Icon={Icon} title={title} description={description} />
        </motion.div>
      </AnimatePresence>
    </section>
  );
};

export default WorkedSlider;
