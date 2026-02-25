export default function Skills() {
  const skillCategories = [
    {
      title: 'Cloud & Platform',
      skills: ['GCP (Anthos, GKE)', 'Apigee Hybrid', 'Azure Integration', 'AWS']
    },
    {
      title: 'Containers & Orchestration',
      skills: ['Kubernetes', 'Docker', 'Helm', 'KEDA', 'Istio']
    },
    {
      title: 'DevOps & Infrastructure',
      skills: ['Terraform', 'Ansible', 'GitOps', 'CI/CD', 'Python', 'Shell Scripting']
    },
    {
      title: 'Observability & Monitoring',
      skills: ['Prometheus', 'Grafana', 'Loki', 'SLI/SLO', 'ELK Stack']
    },
    {
      title: 'Security',
      skills: ['OAuth2', 'OIDC', 'JWT', 'mTLS', 'Vault', 'Zero Trust Architecture']
    },
    {
      title: 'Platform Engineering',
      skills: ['API Gateway', 'Service Mesh', 'GitOps', 'Self-Healing Systems', 'Automation']
    }
  ]

  return (
    <section id="skills" className="section-padding">
      <div className="max-width-container space-y-12">
        <div className="space-y-4">
          <h2 className="text-4xl sm:text-5xl font-bold">Technical Skills</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <div key={category.title} className="skill-card">
              <h3 className="text-lg font-semibold text-blue-400 mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 rounded-full text-sm bg-slate-700/50 text-slate-200 border border-slate-600 hover:border-blue-500 hover:text-blue-400 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}