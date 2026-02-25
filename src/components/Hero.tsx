export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 md:px-20">

      <p className="text-gray-400 uppercase tracking-widest">
        Director – Wealth Management Technology
      </p>

      <h1 className="text-5xl md:text-7xl font-bold mt-6 leading-tight">
        Architecting mission-critical
        <span className="block bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
          distributed platforms at scale.
        </span>
      </h1>

      <p className="mt-8 max-w-3xl text-gray-400 text-lg">
        Engineering leader with 8+ years of experience driving reliability,
        scalability, and automation across hybrid cloud infrastructure
        supporting 10,000+ APIs and 600+ nodes globally.
      </p>

      <div className="mt-10 flex gap-4">
        <a
          href="#experience"
          className="px-6 py-3 bg-white text-black rounded-lg"
        >
          View Experience
        </a>

        <a
          href="/Abhishek_Singh_CV.pdf"
          className="px-6 py-3 border border-white/20 rounded-lg hover:bg-white/10 transition"
        >
          Download CV
        </a>
      </div>
    </section>
  );
}