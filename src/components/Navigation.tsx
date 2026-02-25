"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Linkedin, Github, Youtube } from "lucide-react";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/80 backdrop-blur-md border-b border-neutral-800"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <Link
          href="/"
          className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"
        >
          AKS
        </Link>

        {/* Social Icons */}
        <div className="flex items-center gap-6 text-neutral-400">
          <a
            href="https://linkedin.com/in/YOUR_LINKEDIN"
            target="_blank"
            className="hover:text-white hover:scale-110 transition duration-200"
          >
            <Linkedin size={20} />
          </a>

          <a
            href="https://github.com/YOUR_GITHUB"
            target="_blank"
            className="hover:text-white hover:scale-110 transition duration-200"
          >
            <Github size={20} />
          </a>

          <a
            href="https://youtube.com/YOUR_CHANNEL"
            target="_blank"
            className="hover:text-white hover:scale-110 transition duration-200"
          >
            <Youtube size={20} />
          </a>
        </div>
      </div>
    </nav>
  );
}