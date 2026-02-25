export default function Awards() {
  const awards = [
    {
      title: 'Put Clients First Award',
      issuer: 'Morgan Stanley',
      year: '2025',
      description: 'Recognition for exceptional service and client-focused engineering excellence'
    },
    {
      title: 'GRIT Innovation Award',
      issuer: 'Capgemini',
      year: '2022',
      description: 'Recognition for innovative contributions to platform engineering and automation'
    },
    {
      title: 'Google Cloud Apigee Hybrid Certification',
      issuer: 'Google Cloud',
      year: '2023',
      description: 'Certified expert in Apigee Hybrid and cloud native API management'
    },
    {
      title: 'Docker Certified Associate',
      issuer: 'Docker',
      year: '2022',
      description: 'Professional certification for containerization and Docker expertise'
    },
    {
      title: 'Certified Kubernetes Administrator (CKA)',
      issuer: 'Cloud Native Computing Foundation',
      year: '2021',
      description: 'Professional-level Kubernetes cluster administration and management'
    }
  ]

  return (
    <section id="awards" className="section-padding bg-slate-900/50 border-t border-slate-700">
      <div className="max-width-container space-y-12">
        <div className="space-y-4">
          <h2 className="text-4xl sm:text-5xl font-bold">Awards & Certifications</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {awards.map((award, index) => (
            <div key={index} className="experience-card">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-blue-500/20 border border-blue-500/30">
                    <svg className="h-6 w-6 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                </div>

                <div className="flex-1">
                  <h3 className="text-lg font-bold text-slate-50">{award.title}</h3>
                  <p className="text-sm font-semibold text-blue-400">{award.issuer}</p>
                  <p className="text-slate-400 text-sm mt-1">{award.year}</p>
                  <p className="text-slate-300 text-sm mt-2">{award.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}