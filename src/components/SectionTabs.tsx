"use client";

import { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Linkedin, Github, Youtube } from "lucide-react";

const sections = [
  { id: "skills", label: "Skills" },
  { id: "leadership", label: "Leadership" },
  { id: "initiatives", label: "Initiatives" },
  { id: "awards", label: "Awards" },
  { id: "education", label: "Education" },
  { id: "certifications", label: "Certifications" },
];

export default function SectionTabs() {
  const [active, setActive] = useState("");

  /* Scroll Progress */
  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <>
      {/* Scroll Progress Indicator */}
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-[2px] origin-left bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-400 z-[60]"
      />

      {/* Noise Texture Overlay */}
      <div className="pointer-events-none fixed inset-0 z-40 opacity-[0.04] mix-blend-overlay">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      </div>

      {/* Navigation Tabs */}
      <div className="sticky top-0 z-50 backdrop-blur-xl bg-black/80 border-b border-neutral-800">
        <div className="max-w-6xl mx-auto px-6 py-4 flex flex-wrap items-center justify-between gap-4">

          {/* Section Links */}
          <div className="flex flex-wrap gap-3">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                onClick={() => setActive(section.id)}
                className={`px-4 py-2 rounded-full text-sm transition-all duration-300
                  ${
                    active === section.id
                      ? "bg-white text-black"
                      : "bg-neutral-900 text-neutral-400 hover:bg-neutral-800 hover:text-white"
                  }`}
              >
                {section.label}
              </a>
            ))}
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-6 text-neutral-400">
            <a
              href="https://www.linkedin.com/in/aksingh14/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white hover:scale-110 transition duration-200"
            >
              <Linkedin size={20} />
            </a>

            <a
              href="https://github.com/abhishekgplus"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white hover:scale-110 transition duration-200"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.youtube.com/@the_infra_engineer"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white hover:scale-110 transition duration-200"
            >
              <Youtube size={20} />
            </a>
          </div>

        </div>
      </div>
    </>
  );
}