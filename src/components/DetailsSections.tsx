export default function DetailsSections() {
  return (
    <section className="py-20 section-divider">
      <div className="max-w-6xl mx-auto px-6">

        {/* ================= SKILLS ================= */}
        <div id="skills" className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-10">
            Key Skills
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
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
        </div>

        {/* ================= LEADERSHIP ================= */}
        <div id="leadership" className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-10">
            Leadership & Engineering Culture
          </h2>

          <div className="space-y-6">
            <InfoBlock title="Team Building">
              Proven ability to build and retain high-performing engineering teams.
              Implemented structured mentorship programs accelerating promotions
              from junior to senior engineering roles.
            </InfoBlock>

            <InfoBlock title="Operational Excellence">
              Championed the “You Build It, You Run It” philosophy, enabling
              product teams with observability, automation, and ownership of
              production services.
            </InfoBlock>

            <InfoBlock title="Innovation Culture">
              Established internal Hackathons and Tech Talks to foster knowledge
              sharing and experimentation with GenAI, automation, and serverless systems.
            </InfoBlock>
          </div>
        </div>

        {/* ================= INITIATIVES ================= */}
        <div id="initiatives" className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-10">
            Strategic Technical Initiatives
          </h2>

          <div className="space-y-6">
            <InfoBlock title="Supervision AI Compliance Tool | GenAI, LLM">
              Built an enterprise compliance tool using LLMs to analyze client
              transcripts and automatically flag regulatory risks.
            </InfoBlock>

            <InfoBlock title="Automated Jira Creator Bot | OpenAI Gateway">
              Developed a chatbot that parses natural language to auto-create
              Jira tickets, reducing ticket handling time by 50%.
            </InfoBlock>

            <InfoBlock title="RCM Bulk Change Review | Automation">
              Engineered a bulk-processing tool for Risk & Control Management
              change validation, removing release bottlenecks.
            </InfoBlock>

            <InfoBlock title="Serverless Autoscaling | KEDA, Kubernetes">
              Designed a KEDA-based custom scaler to auto-scale workloads based
              on queue depth, optimizing infrastructure cost and utilization.
            </InfoBlock>
          </div>
        </div>

        {/* ================= AWARDS ================= */}
        <div id="awards" className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-10">
            Awards & Achievements
          </h2>

          <div className="card-base p-8">
            <ul className="space-y-4 text-gray-700 dark:text-gray-400 list-disc list-inside">
              <li>
                <strong className="text-gray-900 dark:text-gray-100">
                  Put Clients First Award (2025)
                </strong> – Morgan Stanley
              </li>
              <li>
                <strong className="text-gray-900 dark:text-gray-100">
                  GRIT Award (2022)
                </strong> – Innovation in Technology
              </li>
              <li>
                <strong className="text-gray-900 dark:text-gray-100">
                  Spot Award (3x)
                </strong> – Capgemini
              </li>
              <li>
                <strong className="text-gray-900 dark:text-gray-100">
                  Highest Incident Resolver
                </strong> – Capgemini
              </li>
            </ul>
          </div>
        </div>

        {/* ================= EDUCATION ================= */}
        <div id="education" className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-10">
            Education
          </h2>

          <div className="card-base p-8">
            <p className="text-gray-700 dark:text-gray-400 leading-relaxed">
              <span className="text-gray-900 dark:text-gray-100 font-semibold">
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
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-10">
            Certifications
          </h2>

          <div className="flex flex-wrap gap-4">
            {[
              "Architecting & Installing Apigee Hybrid API Platform (Google Cloud)",
              "Google Cloud Foundations",
              "Fundamentals of Docker & Kubernetes",
              "GitHub Actions & GitOps",
              "Getting Started with Prometheus",
              "Agentic AI Fundamentals",
              "Preparing Organization for AI Agents",
              "Kubernetes Deep Dive (Pods, Services, YAML)"
            ].map((cert, index) => (
              <span
                key={index}
                className="px-5 py-2 rounded-full text-sm 
                           bg-neutral-100 dark:bg-neutral-800 
                           text-gray-800 dark:text-gray-300 
                           border border-neutral-200 dark:border-neutral-700 
                           hover:border-neutral-400 dark:hover:border-neutral-500 
                           transition"
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

function SkillCard({ title, children }: any) {
  return (
    <div className="card-base p-8">
      <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-4">
        {title}
      </h3>
      <p className="text-sm text-gray-700 dark:text-gray-400 leading-relaxed">
        {children}
      </p>
    </div>
  );
}

function InfoBlock({ title, children }: any) {
  return (
    <div className="card-base p-8">
      <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-3">
        {title}
      </h3>
      <p className="text-sm text-gray-700 dark:text-gray-400 leading-relaxed">
        {children}
      </p>
    </div>
  );
}