import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Loader = ({ onComplete }) => {
  const name = "PALMONAS";
  const [currentIndex, setCurrentIndex] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        if (prev < name.length) return prev + 1;
        clearInterval(interval);
        setTimeout(() => setDone(true), 800);
        return prev;
      });
    }, 80);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (done) {
      setTimeout(() => onComplete(), 900);
    }
  }, [done, onComplete]);

  const progressPercent = (currentIndex / name.length) * 100;

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-50 bg-black flex flex-col justify-center items-center overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        >
          {/* Text */}
          <div className="z-50 flex gap-2 text-5xl md:text-7xl font-black mb-8 text-white">
            {name.split("").map((char, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={index < currentIndex ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: index * 0.03 }}
              >
                {char}
              </motion.span>
            ))}
          </div>

          {/* Progress bar */}
          <div className="z-50 w-72 md:w-[30%] h-2 bg-gray-800 rounded-full relative overflow-hidden">
            <motion.div
              className="absolute top-0 left-0 h-full bg-gradient-to-r from-white to-cyan-500"
              animate={{ width: `${progressPercent}%` }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;
