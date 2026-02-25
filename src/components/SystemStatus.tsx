"use client";
import { motion } from "framer-motion";

export default function SystemStatus() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1 }}
      className="fixed bottom-6 right-6 z-50"
    >
      <div
        className="
          flex items-center gap-2 px-4 py-2 rounded-full
          
          bg-white/80
          dark:bg-neutral-900/70
          
          backdrop-blur-md
          
          border border-neutral-200
          dark:border-neutral-800
          
          text-xs
          text-neutral-700
          dark:text-neutral-300
          
          shadow-sm
          dark:shadow-none
        "
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
        </span>
        All Systems Operational
      </div>
    </motion.div>
  );
}