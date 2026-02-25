"use client";

import { motion } from "framer-motion";
import AwardsCarousel from "@/components/AwardsCarousel";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

export default function DetailsSections() {
  return (
    <section className="relative py-20">
      <div className="max-w-6xl mx-auto px-6 space-y-28">

        {/* ================= KEY SKILLS ================= */}
        <SectionBlock id="skills" title="Key Skills">
          <div className="grid md:grid-cols-3 gap-6 mt-10">

            <SkillCard title="Cloud & Platform">
              GCP (Anthos, GKE), Apigee Hybrid, OPDK, Azure Integration
            </SkillCard>

            <SkillCard title="Containerization">
              Kubernetes, Docker, Helm, KEDA, Istio, ASM, Ingress Controllers
            </SkillCard>

            <SkillCard title="DevOps & Automation">
              Terraform, Ansible, GitOps (ArgoCD), CI/CD, Shell, Python, Grunt
            </SkillCard>

            <SkillCard title="Observability & SRE">
              SLI/SLO, Error Budgets, Prometheus, Grafana, Loki, Splunk, Dynatrace
            </SkillCard>

            <SkillCard title="Security">
              OAuth2, OIDC, JWT, mTLS, HashiCorp Vault, Azure AD, PingFederate
            </SkillCard>

            <SkillCard title="Leadership">
              Technical Strategy, Incident Command, Hiring, Mentorship, FinOps
            </SkillCard>

          </div>
        </SectionBlock>

        {/* ================= LEADERSHIP ================= */}
        <SectionBlock id="leadership" title="Leadership & Engineering Culture">
          <div className="grid md:grid-cols-3 gap-6 mt-10">

            <InfoCard title="Team Building">
              Proven ability to build and retain high-performing engineering teams.
              Implemented structured mentorship programs accelerating promotions.
            </InfoCard>

            <InfoCard title="Operational Excellence">
              Championed the "You Build It, You Run It" philosophy,
              enabling product teams with observability, automation,
              and production ownership.
            </InfoCard>

            <InfoCard title="Innovation Culture">
              Established internal Hackathons and Tech Talks to foster
              knowledge sharing and experimentation with GenAI,
              automation, and serverless systems.
            </InfoCard>

          </div>
        </SectionBlock>

        {/* ================= STRATEGIC INITIATIVES ================= */}
        <SectionBlock id="initiatives" title="Strategic Technical Initiatives">
          <div className="grid md:grid-cols-2 gap-6 mt-10">

            <InfoCard title="Supervision AI Compliance Tool | GenAI, LLM">
              Built an enterprise compliance tool using LLMs to analyze
              client transcripts and automatically flag regulatory risks.
            </InfoCard>

            <InfoCard title="Automated Jira Creator Bot | OpenAI Gateway">
              Developed a chatbot that parses natural language to auto-create
              Jira tickets, reducing ticket handling time by 50%.
            </InfoCard>

            <InfoCard title="RCM Bulk Change Review | Automation">
              Engineered a bulk-processing tool for Risk & Control Management
              change validation, removing release bottlenecks.
            </InfoCard>

            <InfoCard title="Serverless Autoscaling | KEDA, Kubernetes">
              Designed a KEDA-based custom scaler to auto-scale workloads
              based on queue depth, optimizing infrastructure cost and utilization.
            </InfoCard>

          </div>
        </SectionBlock>

        {/* ================= AWARDS ================= */}
        <SectionBlock id="awards" title="Awards & Achievements">

          {/* Awards Text */}
          <div className="mt-10 space-y-4 text-sm text-neutral-400">
            <p><span className="text-white font-semibold">Put Clients First Award (2025)</span> – Morgan Stanley</p>
            <p><span className="text-white font-semibold">GRIT Award (2022)</span> – Innovation in Technology</p>
            <p><span className="text-white font-semibold">Spot Award (3x)</span> – Capgemini</p>
            <p><span className="text-white font-semibold">Highest Incident Resolver</span> – Capgemini</p>
          </div>

          {/* Awards Carousel */}
          <div className="mt-14">
            <AwardsCarousel
              images={[
                "/awards/award1.jpg",
                "/awards/award2.jpg",
                "/awards/award3.jpg",
                "/awards/award4.jpg",
              ]}
            />
          </div>

        </SectionBlock>

        {/* ================= CERTIFICATIONS ================= */}
        <SectionBlock id="certifications" title="Certifications">

          {/* Certification Pills */}
          <div className="flex flex-wrap gap-4 mt-10">
            {[
              "Architecting & Installing Apigee Hybrid API Platform (Google Cloud)",
              "Google Cloud Foundations",
              "Fundamentals of Docker & Kubernetes",
              "GitHub Actions & GitOps",
              "Getting Started with Prometheus",
              "Agentic AI Fundamentals",
              "Preparing Organization for AI Agents",
              "Kubernetes Deep Dive (Pods, Services, YAML)",
            ].map((cert, index) => (
              <motion.span
                key={index}
                whileHover={{ y: -3 }}
                className="px-5 py-2 text-sm rounded-full 
                           bg-neutral-900 border border-neutral-700
                           text-neutral-300
                           hover:border-blue-500/50 
                           transition-all duration-300"
              >
                {cert}
              </motion.span>
            ))}
          </div>

          {/* Certification Carousel */}
          <div className="mt-14">
            <AwardsCarousel
              images={[
                "/awards/cert1.jpg",
                "/awards/cert2.jpg",
                "/awards/cert3.jpg",
              ]}
            />
          </div>

        </SectionBlock>

        {/* ================= EDUCATION ================= */}
        <SectionBlock id="education" title="Education">
          <div className="mt-10 text-neutral-400 text-sm leading-relaxed">
            <p className="text-white font-semibold">
              Bachelor of Technology in Electronics & Communication
            </p>
            <p>NM Institute of Engineering and Technology (BPUT)</p>
            <p>Bhubaneswar, India | 2012 – 2016</p>
          </div>
        </SectionBlock>

      </div>
    </section>
  );
}

/* ================= Reusable Components ================= */

function SectionBlock({ id, title, children }: any) {
  return (
    <motion.div
      id={id}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={fadeUp}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-3xl font-bold mb-4 
                     bg-gradient-to-r from-blue-400 to-purple-500 
                     bg-clip-text text-transparent">
        {title}
      </h2>
      {children}
    </motion.div>
  );
}

function SkillCard({ title, children }: any) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="p-8 rounded-2xl border border-neutral-800 
                 bg-neutral-900/40 backdrop-blur-md 
                 hover:border-blue-500/40 transition-all duration-300"
    >
      <h3 className="text-white font-semibold mb-4">{title}</h3>
      <p className="text-sm text-neutral-400 leading-relaxed">{children}</p>
    </motion.div>
  );
}

function InfoCard({ title, children }: any) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="p-8 rounded-2xl border border-neutral-800 
                 bg-neutral-900/40 backdrop-blur-md 
                 hover:border-purple-500/40 transition-all duration-300"
    >
      <h3 className="text-white font-semibold mb-3">{title}</h3>
      <p className="text-sm text-neutral-400 leading-relaxed">{children}</p>
    </motion.div>
  );
}