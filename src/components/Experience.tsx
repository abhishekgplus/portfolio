export default function Experience() {
  return (
    <section id="experience" className="py-24">
      <div className="max-w-6xl mx-auto px-6">

        {/* Section Title */}
        <h2 className="text-3xl font-bold mb-16">
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Professional Experience
          </span>
        </h2>

        {/* Timeline Wrapper */}
        <div className="relative border-l border-neutral-800 pl-10 space-y-14">

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
              "Built automation ensuring zero downtime cutovers.",
              "Designed 'Hydrator' event-driven security framework for IDP credential rotation.",
              "Engineered rolling restart bot preventing cascading failures.",
              "Reduced BAU toil by 70% via self-service developer platform.",
              "Built Real-Time Farm Beacon unified observability dashboard."
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
              "Awarded GRIT Award for platform security innovation."
            ]}
          />

          <ExperienceCard
            role="Associate Consultant"
            company="Capgemini • Bengaluru, India"
            duration="Mar 2019 – Jan 2021"
            points={[
              "Managed middleware stack (JBoss, WebSphere, Apache) for Honeywell.",
              "Ensured 24/7 availability of enterprise logistics systems.",
              "Built automation reducing maintenance windows by 60%."
            ]}
          />

          <ExperienceCard
            role="Senior Analyst"
            company="Capgemini • Bengaluru, India"
            duration="Mar 2018 – Mar 2019"
            points={[
              "Managed critical P1/P2 distributed system incidents.",
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
              "Awarded Spot Award (3x) for technical excellence."
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
    <div className="relative group">

      {/* Timeline Dot */}
      <div className="absolute -left-[18px] top-2 w-3 h-3 bg-blue-500 rounded-full shadow-lg shadow-blue-500/40" />

      {/* Card */}
      <div className="bg-neutral-900/60 backdrop-blur-sm 
                      border border-neutral-800 
                      rounded-2xl p-8
                      hover:border-blue-500/40
                      transition-all duration-300">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-3 mb-5">
          <div>
            <h3 className="text-xl font-semibold text-white">
              {role}
            </h3>
            <p className="text-sm text-neutral-400 mt-1">
              {company}
            </p>
          </div>

          <span className="text-sm text-neutral-500 whitespace-nowrap">
            {duration}
          </span>
        </div>

        {/* Points */}
        <ul className="space-y-2 text-neutral-400 leading-relaxed text-sm list-disc list-inside">
          {points.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>

      </div>
    </div>
  );
}