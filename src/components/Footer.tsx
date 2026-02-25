"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative py-20 border-t border-neutral-800 bg-neutral-950">
      
      {/* Subtle top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-blue-500/5 blur-[120px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">

        {/* Left */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-sm text-neutral-400"
        >
          © 2025 Abhishek Kumar Singh
        </motion.p>

        {/* Right */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-xs text-neutral-500 tracking-wider uppercase"
        >
          Built with Next.js • Tailwind • Framer Motion
        </motion.div>

      </div>
    </footer>
  );
}