'use client'

export default function Hero() {
  const handleScroll = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex items-center pt-20 section-padding">
      <div className="max-width-container w-full">
        <div className="space-y-8">
          {/* Animated gradient background */}
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl animate-pulse" />
          </div>

          {/* Main content */}
          <div className="space-y-6">
            <div className="inline-block">
              <span className="text-sm font-semibold text-blue-400 tracking-widest uppercase">Welcome to my portfolio</span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
              <span className="block">Abhishek Kumar</span>
              <span className="block">Singh</span>
            </h1>

            <p className="text-xl sm:text-2xl text-slate-400 max-w-2xl">
              Director – Wealth Management Technology | Platform Engineer | Apigee & Cloud Specialist
            </p>

            <p className="text-lg text-slate-400 max-w-3xl leading-relaxed">
              Building reliable cloud platforms and scalable API infrastructure. 8+ years of experience in distributed systems, Kubernetes orchestration, and SRE transformation.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 pt-8">
            <button
              onClick={() => handleScroll('contact')}
              className="btn-primary"
            >
              Get In Touch
            </button>

            <a
              href="https://linkedin.com/in/aksingh14"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              LinkedIn Profile
            </a>

            <a
              href="https://drive.google.com/file/d/YOUR_RESUME_LINK_HERE/view"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              View Resume
            </a>
          </div>

          {/* Scroll indicator */}
          <div className="pt-12">
            <button
              onClick={() => handleScroll('about')}
              className="flex flex-col items-center gap-2 text-slate-400 hover:text-blue-400 transition-colors animate-bounce"
            >
              <span className="text-sm font-medium">Scroll to explore</span>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}