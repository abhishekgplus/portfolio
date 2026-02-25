"use client";

import { motion } from "framer-motion";

type Role = {
  title: string;
  company: string;
  location: string;
  duration: string;
  bullets: string[];
};

const roles: Role[] = [
  {
    title: "Director – Wealth Management Technology",
    company: "Morgan Stanley",
    location: "Bengaluru, India",
    duration: "Jan 2025 – Present",
    bullets: [
      "Leading the Apigee Hybrid Platform Engineering function across 600+ nodes on GCP (Anthos) and OPDK infrastructure.",
      "Driving SRE transformation with Error Budgets and refined SLI/SLO frameworks sustaining 99.99% availability.",
      "Managing lifecycle of 10,000+ API Proxies and 20,000+ SharedFlows supporting global wealth platforms.",
      "Overseeing capacity planning and disaster recovery to ensure resilience against regional failures.",
      "Collaborating with global stakeholders and security architects to define API governance standards.",
      "Reduced BAU toil through self-service enablement and platform automation.",
      "Recipient of 'Put Clients First' Award (Q1 2025) for platform stability excellence."
    ],
  },
  {
    title: "Manager – Apigee Platform Engineering",
    company: "Morgan Stanley",
    location: "Bengaluru, India",
    duration: "Jan 2023 – Dec 2024",
    bullets: [
      "Architected one of the firm’s largest API migrations (10k+ Proxies, 20k+ SharedFlows) to hybrid infrastructure.",
      "Developed custom automation (Grunt/Shell) ensuring zero downtime and 100% asset integrity during cutovers.",
      "Designed 'Hydrator' — event-driven security framework auto-rotating IDP credentials.",
      "Engineered a 'Rolling Restart' self-healing bot preventing cascading failures.",
      "Reduced BAU toil by 70% via self-service developer platform.",
      "Built Real-Time Farm Beacon (RFB) — unified observability dashboard across clusters."
    ],
  },
  {
    title: "Senior Associate – Platform Automation",
    company: "Morgan Stanley",
    location: "Bengaluru, India",
    duration: "Jan 2021 – Jan 2023",
    bullets: [
      "Designed proprietary Certificate Lifecycle Management (CLM) bot auto-renewing 25,000+ SSL certificates.",
      "Reduced Risk & Control Management workload by 80%, saving thousands of engineering hours annually.",
      "Received GRIT Award (Grassroots Innovation in Technology) for improving platform security posture."
    ],
  },
  {
    title: "Associate Consultant",
    company: "Capgemini",
    location: "Bengaluru, India",
    duration: "Mar 2019 – Jan 2021",
    bullets: [
      "Managed middleware (JBoss, WebSphere, Apache) for Honeywell logistics applications ensuring 24/7 uptime.",
      "Developed Python/Shell automation reducing maintenance windows by 60%.",
    ],
  },
  {
    title: "Senior Analyst",
    company: "Capgemini",
    location: "Bengaluru, India",
    duration: "Mar 2018 – Mar 2019",
    bullets: [
      "Managed critical P1/P2 incidents for distributed production systems meeting strict SLAs.",
      "Recognized as 'Highest Incident Resolver' for account excellence."
    ],
  },
  {
    title: "Analyst",
    company: "Capgemini",
    location: "Bengaluru, India",
    duration: "Apr 2017 – Mar 2018",
    bullets: [
      "Supported middleware technologies including SSL, clustering, and load balancing (NetScaler).",
      "Awarded Spot Award (3x) for customer obsession and technical excellence."
    ],
  }
];

export default function Experience() {
  return (
    <section id="experience" className="relative py-24">
      <div className="max-w-6xl mx-auto px-6">
        
        <h2 className="text-3xl font-bold mb-16">
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Professional Experience
          </span>
        </h2>

        <div className="relative pl-12 space-y-16">
          
          {/* Vertical Line */}
          <div className="absolute left-3 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/40 via-neutral-700 to-transparent" />

          {roles.map((role, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="relative"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-[18px] top-3 flex items-center justify-center">
                <span className="relative inline-flex h-3.5 w-3.5 rounded-full bg-blue-500 shadow-lg shadow-blue-500/40"></span>
              </div>

              <div className="relative rounded-2xl border border-neutral-800 bg-neutral-900/60 backdrop-blur-sm p-8 hover:border-blue-500/40 transition-all duration-300">
                
                {/* Header */}
                <div className="flex flex-col md:flex-row md:justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-xl font-semibold text-white">
                      {role.title}
                    </h3>
                    <p className="text-sm text-neutral-400 mt-1">
                      {role.company} • {role.location}
                    </p>
                  </div>
                  <span className="text-sm text-neutral-500 whitespace-nowrap">
                    {role.duration}
                  </span>
                </div>

                {/* Bullets */}
                <ul className="space-y-3 text-neutral-400 text-sm leading-relaxed">
                  {role.bullets.map((bullet, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="text-blue-500 mt-[2px]">•</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}