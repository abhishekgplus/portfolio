"use client";

import { motion } from "framer-motion";

const metrics = [
  {
    value: "600+",
    label: "Global Nodes Managed",
  },
  {
    value: "10,000+",
    label: "API Proxies",
  },
  {
    value: "99.99%",
    label: "Platform Availability",
  },
  {
    value: "80%",
    label: "Operational Toil Reduction",
  },
];

export default function Metrics() {
  return (
    <section className="relative pt-8 pb-20">
      {/* subtle top divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neutral-800 to-transparent" />

      <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
        {metrics.map((metric, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group relative rounded-2xl border border-neutral-800 bg-neutral-900/40 backdrop-blur-md p-8 text-center hover:border-blue-500/40 transition-all duration-300"
          >
            <h3 className="text-3xl md:text-4xl font-semibold tracking-tight text-white">
              {metric.value}
            </h3>

            <p className="mt-3 text-sm text-neutral-400 group-hover:text-neutral-300 transition">
              {metric.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}