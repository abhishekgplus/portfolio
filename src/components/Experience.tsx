export default function Experience() {
  return (
    <section id="experience" className="py-20 section-divider">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-14">
          Professional Experience
        </h2>

        <div className="space-y-12">
          <ExperienceCard
            role="Director – Wealth Management Technology"
            company="Morgan Stanley • Bengaluru, India"
            duration="Jan 2025 – Present"
            points={[
              "Leading global Apigee Hybrid platform across GCP (Anthos) & OPDK infrastructure.",
              "Orchestrating 600+ nodes across multi-region clusters.",
              "Sustaining 99.99% availability for critical wealth management services.",
              "Driving SRE transformation with SLI/SLO frameworks & error budgets.",
              "Managing 10,000+ API Proxies & 20,000+ SharedFlows lifecycle.",
              "Collaborating with global security architects & stakeholders for governance.",
              "Recognized with 'Put Clients First' Award (Q1 2025)."
            ]}
          />

          <ExperienceCard
            role="Manager – Apigee Platform Engineering"
            company="Morgan Stanley • Bengaluru, India"
            duration="Jan 2023 – Dec 2024"
            points={[
              "Architected migration of 10,000+ APIs & 20,000+ SharedFlows to hybrid infrastructure.",
              "Built automation (Grunt/Shell) ensuring zero downtime cutovers.",
              "Designed 'Hydrator' event-driven security framework for IDP credential rotation.",
              "Engineered rolling restart bot preventing cascading failures.",
              "Reduced BAU toil by 70% through self-service developer platform.",
              "Built Real-Time Farm Beacon (RFB) unified observability dashboard."
            ]}
          />

          <ExperienceCard
            role="Senior Associate – Platform Automation"
            company="Morgan Stanley • Bengaluru, India"
            duration="Jan 2021 – Jan 2023"
            points={[
              "Designed Certificate Lifecycle Management bot for 25,000+ SSL certificates.",
              "Reduced Risk & Control Management manual workload by 80%.",
              "Eliminated expiry-based outages via automation.",
              "Awarded GRIT Award for innovation in platform security."
            ]}
          />

          <ExperienceCard
            role="Associate Consultant"
            company="Capgemini • Bengaluru, India"
            duration="Mar 2019 – Jan 2021"
            points={[
              "Managed middleware stack (JBoss, WebSphere, Apache) for Honeywell.",
              "Ensured 24/7 availability of logistics & enterprise applications.",
              "Built Python/Shell automation reducing maintenance windows by 60%."
            ]}
          />

          <ExperienceCard
            role="Senior Analyst"
            company="Capgemini • Bengaluru, India"
            duration="Mar 2018 – Mar 2019"
            points={[
              "Managed critical P1/P2 production incidents for distributed systems.",
              "Consistently met SLA targets across enterprise accounts.",
              "Recognized as 'Highest Incident Resolver'."
            ]}
          />

          <ExperienceCard
            role="Analyst"
            company="Capgemini • Bengaluru, India"
            duration="Apr 2017 – Mar 2018"
            points={[
              "Supported middleware technologies & SSL configurations.",
              "Configured clustering & load balancing (NetScaler).",
              "Awarded Spot Award (3x) for technical excellence & customer impact."
            ]}
          />
        </div>

      </div>
    </section>
  );
}

/* ================= EXPERIENCE CARD ================= */

function ExperienceCard({
  role,
  company,
  duration,
  points,
}: {
  role: string;
  company: string;
  duration: string;
  points: string[];
}) {
  return (
    <div
      className="bg-white dark:bg-neutral-900 
                 border border-neutral-200 dark:border-neutral-800 
                 rounded-2xl p-8 
                 hover:shadow-lg hover:border-neutral-300 
                 dark:hover:border-neutral-700 
                 transition duration-300"
    >
      {/* Header */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-5 gap-3">
        <div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
            {role}
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
            {company}
          </p>
        </div>

        <span className="text-sm text-gray-500 dark:text-gray-500 whitespace-nowrap">
          {duration}
        </span>
      </div>

      {/* Bullet Points */}
      <ul className="space-y-2 text-gray-700 dark:text-gray-400 leading-relaxed list-disc list-inside">
        {points.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
    </div>
  );
}