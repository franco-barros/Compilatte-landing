import { useEffect } from "react";

interface UseAutoAdvanceProps {
  itemsLength: number;
  delay: number;
  isPaused: boolean;
  setCurrentIndex: React.Dispatch<React.SetStateAction<number>>;
}

const useAutoAdvance = ({
  itemsLength,
  delay,
  isPaused,
  setCurrentIndex,
}: UseAutoAdvanceProps) => {
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % itemsLength);
    }, delay);

    return () => clearInterval(interval);
  }, [itemsLength, delay, isPaused, setCurrentIndex]);
};

export default useAutoAdvance;
