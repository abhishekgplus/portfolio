export default function Experience() {
  return (
    <section id="experience" className="py-24 section-divider px-6 md:px-20">

      <h2 className="text-3xl font-bold mb-16">
        Professional Experience
      </h2>

      <div className="space-y-20">

        {/* Director */}
        <div>
          <h3 className="text-2xl font-semibold">
            Director – Wealth Management Technology
          </h3>
          <p className="text-gray-400">
            Morgan Stanley • Bengaluru, India • Jan 2025 – Present
          </p>

          <ul className="mt-6 space-y-3 text-gray-400 leading-relaxed">
            <li>• Leading global Apigee Hybrid platform across GCP (Anthos) & OPDK infrastructure.</li>
            <li>• Orchestrating 600+ nodes across multi-region clusters.</li>
            <li>• Sustaining 99.99% availability for critical wealth management services.</li>
            <li>• Driving SRE transformation with SLI/SLO frameworks & error budgets.</li>
            <li>• Managing 10,000+ API Proxies & 20,000+ SharedFlows lifecycle.</li>
            <li>• Collaborating with global security architects & stakeholders for governance.</li>
            <li>• Recognized with “Put Clients First” Award (Q1 2025).</li>
          </ul>
        </div>

        {/* Manager */}
        <div>
          <h3 className="text-2xl font-semibold">
            Manager – Apigee Platform Engineering
          </h3>
          <p className="text-gray-400">
            Morgan Stanley • Bengaluru, India • Jan 2023 – Dec 2024
          </p>

          <ul className="mt-6 space-y-3 text-gray-400 leading-relaxed">
            <li>• Architected migration of 10,000+ APIs & 20,000+ SharedFlows to hybrid infrastructure.</li>
            <li>• Built automation (Grunt/Shell) ensuring zero downtime cutovers.</li>
            <li>• Designed “Hydrator” event-driven security framework for IDP credential rotation.</li>
            <li>• Engineered rolling restart bot preventing cascading failures.</li>
            <li>• Reduced BAU toil by 70% through self-service developer platform.</li>
            <li>• Built Real-Time Farm Beacon (RFB) unified observability dashboard.</li>
          </ul>
        </div>

        {/* Senior Associate */}
        <div>
          <h3 className="text-2xl font-semibold">
            Senior Associate – Platform Automation
          </h3>
          <p className="text-gray-400">
            Morgan Stanley • Bengaluru, India • Jan 2021 – Jan 2023
          </p>

          <ul className="mt-6 space-y-3 text-gray-400 leading-relaxed">
            <li>• Designed Certificate Lifecycle Management bot for 25,000+ SSL certificates.</li>
            <li>• Reduced Risk & Control Management manual workload by 80%.</li>
            <li>• Eliminated expiry-based outages via automation.</li>
            <li>• Awarded GRIT Award for innovation in platform security.</li>
          </ul>
        </div>

        {/* Capgemini Associate Consultant */}
        <div>
          <h3 className="text-2xl font-semibold">
            Associate Consultant
          </h3>
          <p className="text-gray-400">
            Capgemini • Bengaluru, India • Mar 2019 – Jan 2021
          </p>

          <ul className="mt-6 space-y-3 text-gray-400 leading-relaxed">
            <li>• Managed middleware stack (JBoss, WebSphere, Apache) for Honeywell.</li>
            <li>• Ensured 24/7 availability of logistics & enterprise applications.</li>
            <li>• Built Python/Shell automation reducing maintenance windows by 60%.</li>
          </ul>
        </div>

        {/* Capgemini Senior Analyst */}
        <div>
          <h3 className="text-2xl font-semibold">
            Senior Analyst
          </h3>
          <p className="text-gray-400">
            Capgemini • Bengaluru, India • Mar 2018 – Mar 2019
          </p>

          <ul className="mt-6 space-y-3 text-gray-400 leading-relaxed">
            <li>• Managed critical P1/P2 production incidents for distributed systems.</li>
            <li>• Consistently met SLA targets across enterprise accounts.</li>
            <li>• Recognized as “Highest Incident Resolver”.</li>
          </ul>
        </div>

        {/* Capgemini Analyst */}
        <div>
          <h3 className="text-2xl font-semibold">
            Analyst
          </h3>
          <p className="text-gray-400">
            Capgemini • Bengaluru, India • Apr 2017 – Mar 2018
          </p>

          <ul className="mt-6 space-y-3 text-gray-400 leading-relaxed">
            <li>• Supported middleware technologies & SSL configurations.</li>
            <li>• Configured clustering & load balancing (NetScaler).</li>
            <li>• Awarded Spot Award (3x) for technical excellence & customer impact.</li>
          </ul>
        </div>

      </div>
    </section>
  );
}