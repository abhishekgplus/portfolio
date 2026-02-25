export default function Projects() {
  const projects = [
    {
      title: 'GenAI Compliance Tool',
      description: 'LLM-based automated compliance checking system for API policies and security standards',
      tags: ['LLM', 'Compliance', 'Python', 'Langchain', 'GCP'],
      impact: 'Reduced compliance review time by 80%'
    },
    {
      title: 'Automated Jira Creator Bot',
      description: 'Intelligent bot for automatic incident ticket creation from alert systems',
      tags: ['Python', 'Jira API', 'Automation', 'GitOps'],
      impact: 'Eliminated manual ticket creation, 99% automation coverage'
    },
    {
      title: 'Certificate Lifecycle Management Automation',
      description: 'End-to-end automation for SSL/TLS certificate provisioning, rotation, and expiry monitoring',
      tags: ['Terraform', 'Vault', 'Kubernetes', 'Shell'],
      impact: 'Eliminated certificate-related outages'
    },
    {
      title: 'Rolling Restart Self-Healing System',
      description: 'Self-healing infrastructure that automatically performs controlled pod restarts to fix transient issues',
      tags: ['Kubernetes', 'Go', 'Operators', 'SRE'],
      impact: 'Reduced MTTR by 65%'
    },
    {
      title: 'KEDA-based Serverless Autoscaling',
      description: 'Event-driven autoscaling infrastructure for workloads with variable demand patterns',
      tags: ['KEDA', 'Kubernetes', 'Event-Driven', 'Monitoring'],
      impact: 'Achieved 40% cost reduction while improving latency'
    },
    {
      title: 'Multi-Cloud Platform Observability',
      description: 'Unified monitoring and observability stack across GCP, Azure, and on-premises environments',
      tags: ['Prometheus', 'Grafana', 'Loki', 'Multi-Cloud'],
      impact: 'Single pane of glass for 600+ nodes'
    }
  ]

  return (
    <section id="projects" className="section-padding">
      <div className="max-width-container space-y-12">
        <div className="space-y-4">
          <h2 className="text-4xl sm:text-5xl font-bold">Projects & Innovations</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="skill-card group">
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-blue-400 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-300">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 rounded text-xs bg-blue-500/20 text-blue-300 border border-blue-500/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="pt-2 border-t border-slate-700">
                  <p className="text-sm text-cyan-400 font-semibold">
                    Impact: <span className="text-slate-300">{project.impact}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}