export default function Experience() {
  const experiences = [
    {
      title: 'Director – Wealth Management Technology',
      company: 'Morgan Stanley',
      period: '2025 – Present',
      highlights: [
        'Leading global Apigee Hybrid infrastructure deployment (600+ nodes)',
        'Supporting 10,000+ API proxies with 99.99% availability SLA',
        'Driving SRE transformation and operational automation initiatives',
        'Mentoring engineering teams on platform engineering best practices'
      ]
    },
    {
      title: 'Manager – Platform Engineering',
      company: 'Morgan Stanley',
      period: '2024 – 2025',
      highlights: [
        'Migrated 10,000+ APIs to hybrid cloud with zero downtime',
        'Built self-healing automation reducing operational toil by 70%',
        'Implemented KEDA-based serverless autoscaling infrastructure',
        'Designed and deployed certificate lifecycle management automation'
      ]
    },
    {
      title: 'Senior Platform Engineer',
      company: 'Capgemini',
      period: '2020 – 2024',
      highlights: [
        'Designed Apigee OPDK to Hybrid migration strategy for enterprise clients',
        'Built comprehensive monitoring and observability solutions',
        'Implemented GitOps pipelines for infrastructure management',
        'Developed Kubernetes cluster management and scaling solutions'
      ]
    },
    {
      title: 'Platform Engineer',
      company: 'Capgemini',
      period: '2018 – 2020',
      highlights: [
        'Deployed and managed Kubernetes clusters at scale',
        'Built CI/CD pipelines using Jenkins and GitLab',
        'Implemented infrastructure-as-code practices',
        'Developed monitoring dashboards and alerting systems'
      ]
    }
  ]

  return (
    <section id="experience" className="section-padding bg-slate-900/50 border-t border-slate-700">
      <div className="max-width-container space-y-12">
        <div className="space-y-4">
          <h2 className="text-4xl sm:text-5xl font-bold">Experience</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full" />
        </div>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div key={index} className="experience-card">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-xl font-bold text-blue-400">{exp.title}</h3>
                  <p className="text-lg font-semibold text-slate-300">{exp.company}</p>
                </div>
                <span className="inline-block px-4 py-1 bg-slate-700/50 rounded-full text-sm font-medium text-slate-300 whitespace-nowrap">
                  {exp.period}
                </span>
              </div>

              <ul className="space-y-2">
                {exp.highlights.map((highlight, i) => (
                  <li key={i} className="flex gap-3 text-slate-300">
                    <span className="text-blue-400 mt-1 flex-shrink-0">▹</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}