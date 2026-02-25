export default function DetailsSections() {
  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-6 space-y-28">

        {/* ================= SKILLS ================= */}
        <SectionTitle>Key Skills</SectionTitle>

        <div id="skills" className="grid md:grid-cols-3 gap-8">
          <SkillCard title="Cloud & Platform">
            GCP (Anthos, GKE), Apigee Hybrid, OPDK, Azure Integration
          </SkillCard>

          <SkillCard title="Containerization">
            Kubernetes, Docker, Helm, KEDA, Istio, ASM, Ingress Controllers
          </SkillCard>

          <SkillCard title="DevOps & Automation">
            Terraform, Ansible, GitOps (ArgoCD), CI/CD, Shell, Python
          </SkillCard>

          <SkillCard title="Observability & SRE">
            SLI/SLO, Error Budgets, Prometheus, Grafana, Loki, Splunk, Dynatrace
          </SkillCard>

          <SkillCard title="Security">
            OAuth2, OIDC, JWT, mTLS, Vault, Azure AD, PingFederate
          </SkillCard>

          <SkillCard title="Leadership">
            Technical Strategy, Incident Command, Hiring, Mentorship, FinOps
          </SkillCard>
        </div>

        {/* ================= LEADERSHIP ================= */}
        <div id="leadership">
          <SectionTitle>Leadership & Engineering Culture</SectionTitle>

          <div className="grid md:grid-cols-3 gap-8 mt-10">
            <InfoCard title="Team Building">
              Built and retained high-performing engineering teams.
              Structured mentorship programs accelerating promotions.
            </InfoCard>

            <InfoCard title="Operational Excellence">
              Championed “You Build It, You Run It” culture with
              observability, automation, and production ownership.
            </InfoCard>

            <InfoCard title="Innovation Culture">
              Established internal hackathons and tech talks
              fostering experimentation with GenAI and automation.
            </InfoCard>
          </div>
        </div>

        {/* ================= INITIATIVES ================= */}
        <div id="initiatives">
          <SectionTitle>Strategic Technical Initiatives</SectionTitle>

          <div className="grid md:grid-cols-2 gap-8 mt-10">
            <InfoCard title="Supervision AI Compliance Tool">
              Enterprise GenAI system analyzing transcripts to
              automatically flag regulatory risk signals.
            </InfoCard>

            <InfoCard title="Automated Jira Creator Bot">
              NLP-powered workflow bot reducing ticket handling
              time by 50% across engineering teams.
            </InfoCard>

            <InfoCard title="RCM Bulk Change Review">
              Automation framework eliminating manual release bottlenecks.
            </InfoCard>

            <InfoCard title="Serverless Autoscaling with KEDA">
              Custom scaler architecture optimizing infrastructure
              cost based on queue depth signals.
            </InfoCard>
          </div>
        </div>

        {/* ================= AWARDS ================= */}
        <div id="awards">
          <SectionTitle>Awards & Achievements</SectionTitle>

          <div className="glass-card p-8 mt-10">
            <ul className="space-y-3 text-sm text-neutral-400">
              <li>
                <span className="text-white font-semibold">
                  Put Clients First Award (2025)
                </span>{" "}
                – Morgan Stanley
              </li>
              <li>
                <span className="text-white font-semibold">
                  GRIT Award (2022)
                </span>{" "}
                – Innovation in Technology
              </li>
              <li>
                <span className="text-white font-semibold">
                  Spot Award (3x)
                </span>{" "}
                – Capgemini
              </li>
              <li>
                <span className="text-white font-semibold">
                  Highest Incident Resolver
                </span>{" "}
                – Capgemini
              </li>
            </ul>
          </div>
        </div>

        {/* ================= EDUCATION ================= */}
        <div id="education">
          <SectionTitle>Education</SectionTitle>

          <div className="glass-card p-8 mt-10">
            <p className="text-neutral-400 text-sm leading-relaxed">
              <span className="text-white font-semibold">
                Bachelor of Technology in Electronics & Communication
              </span>
              <br />
              NM Institute of Engineering and Technology (BPUT)
              <br />
              Bhubaneswar, India | 2012 – 2016
            </p>
          </div>
        </div>

        {/* ================= CERTIFICATIONS ================= */}
        <div id="certifications">
          <SectionTitle>Certifications</SectionTitle>

          <div className="flex flex-wrap gap-4 mt-10">
            {[
              "Apigee Hybrid Architecture (GCP)",
              "Google Cloud Foundations",
              "Docker & Kubernetes",
              "GitHub Actions & GitOps",
              "Prometheus Monitoring",
              "Agentic AI Fundamentals",
              "AI Agents for Enterprises",
              "Kubernetes Deep Dive"
            ].map((cert, index) => (
              <span
                key={index}
                className="px-4 py-2 text-xs rounded-full 
                           bg-neutral-900 border border-neutral-800 
                           text-neutral-400 
                           hover:border-blue-500/40 
                           transition-all duration-300"
              >
                {cert}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

/* ================= Reusable Components ================= */

function SectionTitle({ children }: any) {
  return (
    <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
      {children}
    </h2>
  );
}

function SkillCard({ title, children }: any) {
  return (
    <div className="glass-card p-8 hover:border-blue-500/40 transition-all duration-300">
      <h3 className="text-white font-semibold mb-4">{title}</h3>
      <p className="text-sm text-neutral-400 leading-relaxed">
        {children}
      </p>
    </div>
  );
}

function InfoCard({ title, children }: any) {
  return (
    <div className="glass-card p-8 hover:border-purple-500/40 transition-all duration-300">
      <h3 className="text-white font-semibold mb-3">{title}</h3>
      <p className="text-sm text-neutral-400 leading-relaxed">
        {children}
      </p>
    </div>
  );
}