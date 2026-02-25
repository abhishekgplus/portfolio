"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Props = {
  images: string[];
};

export default function AwardsCarousel({ images }: Props) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const prev = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  useEffect(() => {
    if (paused) return;

    const interval = setInterval(() => {
      next();
    }, 4000);

    return () => clearInterval(interval);
  }, [paused]);

  return (
    <div
      className="relative w-full max-w-4xl mx-auto 
                 rounded-2xl border border-neutral-800
                 bg-gradient-to-b from-neutral-900 to-neutral-950
                 p-8 shadow-[0_0_60px_rgba(0,0,0,0.6)]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="relative flex items-center justify-center h-[420px]">

        <AnimatePresence mode="wait">
          <motion.img
            key={index}
            src={images[index]}
            alt="Award or Certification"
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -60 }}
            transition={{ duration: 0.6 }}
            className="max-h-full object-contain bg-white rounded-lg shadow-xl"
          />
        </AnimatePresence>

        {/* Left Arrow */}
        <button
          onClick={prev}
          className="absolute left-4 bg-neutral-800/80 hover:bg-neutral-700 
                     text-white p-2 rounded-full transition"
        >
          <ChevronLeft size={20} />
        </button>

        {/* Right Arrow */}
        <button
          onClick={next}
          className="absolute right-4 bg-neutral-800/80 hover:bg-neutral-700 
                     text-white p-2 rounded-full transition"
        >
          <ChevronRight size={20} />
        </button>

      </div>
    </div>
  );
}