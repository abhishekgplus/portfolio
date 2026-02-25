"use client";

import Image from "next/image";
import { FaLinkedin, FaGithub, FaYoutube } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-center px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-center w-full">
        
        {/* ===== LEFT CONTENT ===== */}
        <div className="space-y-8">

          {/* Name */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight leading-tight">
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Abhishek Kumar Singh
              </span>
            </h1>

            <p className="text-lg text-neutral-400">
              Director – Wealth Management Technology
            </p>
          </div>

          {/* Description */}
          <p className="text-neutral-400 leading-relaxed max-w-xl text-[15px]">
            Engineering leader architecting mission-critical distributed
            platforms across Apigee Hybrid (Anthos/GKE) and OPDK
            infrastructure. Managing 600+ nodes powering 10,000+ APIs globally
            with 99.99% availability.
          </p>

          {/* Metrics (Refined + tighter) */}
          <div className="flex flex-wrap gap-12 pt-4">
            {[
              { value: "600+", label: "Global Nodes" },
              { value: "10,000+", label: "API Proxies" },
              { value: "99.99%", label: "Availability" },
            ].map((metric, index) => (
              <div key={index} className="space-y-1">
                <h3 className="text-3xl font-semibold text-white tracking-tight">
                  {metric.value}
                </h3>
                <p className="text-xs uppercase tracking-wider text-neutral-500">
                  {metric.label}
                </p>
              </div>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 pt-4">
            <a
              href="/Abhishek_Singh_CV.pdf"
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 
                         hover:opacity-90 transition-all duration-300 
                         text-white font-medium shadow-lg shadow-blue-500/20"
            >
              Download CV
            </a>

            <a
              href="https://www.linkedin.com/in/aksingh14/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl border border-neutral-700 
                         hover:border-blue-500 hover:bg-neutral-900 
                         transition-all duration-300 font-medium text-neutral-200"
            >
              Connect on LinkedIn
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex gap-6 pt-2 text-xl text-neutral-500">
            <a
              href="https://www.linkedin.com/in/aksingh14/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://github.com/abhishekgplus"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.youtube.com/@the_infra_engineer"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-500 transition"
            >
              <FaYoutube />
            </a>
          </div>
        </div>

        {/* ===== RIGHT IMAGE WITH GLOW ===== */}
        <div className="relative flex justify-center md:justify-end">
          
          {/* Glow behind image */}
          <div className="absolute w-[420px] h-[420px] bg-blue-500/20 blur-[120px] rounded-full" />

          <Image
            src="/profile.jpg"
            alt="Abhishek Kumar Singh"
            width={380}
            height={380}
            priority
            className="relative rounded-3xl border border-neutral-800 shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}