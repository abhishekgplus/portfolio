export default function About() {
  return (
    <section id="about" className="section-padding bg-slate-900/50 border-t border-slate-700">
      <div className="max-width-container space-y-12">
        <div className="space-y-4">
          <h2 className="text-4xl sm:text-5xl font-bold">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-slate-300 leading-relaxed">
            <p className="text-lg">
              Engineering Director and Platform Architect with 8+ years of experience building mission-critical distributed systems on Apigee OPDK and Apigee Hybrid (Anthos/GKE).
            </p>

            <p className="text-lg">
              Specialized in SRE transformation, automation, observability, and hybrid cloud platform engineering. Passionate about creating scalable, reliable infrastructure that enables engineering teams to move fast safely.
            </p>

            <p className="text-lg">
              I believe in the power of automation and measurable operational excellence. My focus is on reducing toil, improving system reliability, and building platforms that scale.
            </p>

            <div className="pt-4">
              <p className="text-slate-400 text-sm">
                Currently based in <span className="text-blue-400 font-semibold">Morgan Stanley</span>, leading global Apigee Hybrid infrastructure transformations.
              </p>
            </div>
          </div>

          <div className="glass-effect p-8 space-y-6">
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="font-semibold">Experience</span>
                <span className="text-blue-400 font-bold">8+ Years</span>
              </div>
              <div className="w-full bg-slate-700 rounded-full h-2">
                <div className="bg-gradient-to-r from-blue-500 to-cyan-500 h-2 rounded-full" style={{ width: '85%' }} />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="font-semibold">Cloud Platforms</span>
                <span className="text-blue-400 font-bold">Expert</span>
              </div>
              <div className="w-full bg-slate-700 rounded-full h-2">
                <div className="bg-gradient-to-r from-blue-500 to-cyan-500 h-2 rounded-full w-full" />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="font-semibold">Kubernetes</span>
                <span className="text-blue-400 font-bold">Expert</span>
              </div>
              <div className="w-full bg-slate-700 rounded-full h-2">
                <div className="bg-gradient-to-r from-blue-500 to-cyan-500 h-2 rounded-full w-full" />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="font-semibold">DevOps & SRE</span>
                <span className="text-blue-400 font-bold">Expert</span>
              </div>
              <div className="w-full bg-slate-700 rounded-full h-2">
                <div className="bg-gradient-to-r from-blue-500 to-cyan-500 h-2 rounded-full w-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}