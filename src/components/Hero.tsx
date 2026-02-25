"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-[70vh] flex items-center px-6 pt-24 pb-16 overflow-hidden">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center w-full">
        
        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <div>
            <span className="inline-block mb-4 px-4 py-1 text-xs rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400">
              Currently @ Morgan Stanley
            </span>

            <h1 className="text-5xl md:text-6xl font-bold leading-tight tracking-tight">
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Abhishek Kumar Singh
              </span>
            </h1>

            <p className="mt-4 text-lg text-neutral-400">
              Director – Wealth Management Technology
            </p>
          </div>

          <p className="text-neutral-400 leading-relaxed text-[15px] max-w-xl">
            Engineering leader architecting mission-critical distributed 
            platforms across Apigee Hybrid (Anthos/GKE) and OPDK. 
            Driving scalable API ecosystems with enterprise-grade 
            reliability, automation, and platform governance.
          </p>

          {/* TECH STACK / IDENTITY */}
          <div className="flex flex-wrap gap-3 pt-2">
            {[
              "Ex-Capgemini",
              "Apigee",
              "Advance Scripting",
              "Microsoft Azure",
              "Jira",
              "Middleware",
              "Kubernetes",
              "Docker",
              "GIT",
              "Prometheus",
              "Grafana",
              "Loki",
              "AI",
              "GCP",
              "Apigee Hybrid"
            ].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-xs rounded-full bg-neutral-900 border border-neutral-800 text-neutral-400 hover:border-blue-500/40 transition"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* CTA */}
          <div className="flex flex-wrap gap-4 pt-6">
            <a
              href="/Abhishek_Singh_CV.pdf"
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:opacity-90 transition text-white font-medium shadow-lg shadow-blue-500/20"
            >
              Download CV
            </a>

            <a
              href="https://www.linkedin.com/in/aksingh14/"
              target="_blank"
              className="px-6 py-3 rounded-xl border border-neutral-700 hover:border-blue-500 hover:bg-neutral-900 transition text-neutral-200"
            >
              Connect on LinkedIn
            </a>
          </div>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="relative flex justify-center md:justify-end"
        >
          <div className="absolute w-[350px] h-[350px] bg-blue-500/20 blur-[100px] rounded-full" />

          <Image
            src="/profile.jpg"
            alt="Abhishek Kumar Singh"
            width={380}
            height={380}
            className="relative rounded-3xl border border-neutral-800 shadow-2xl"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
}