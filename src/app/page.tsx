import Hero from '@/components/Hero'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
import Projects from '@/components/Projects'
import Awards from '@/components/Awards'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Awards />
      <Contact />
      
      {/* Footer */}
      <footer className="border-t border-slate-700 bg-slate-950 py-8">
        <div className="max-width-container px-4 sm:px-6 lg:px-8">
          <div className="text-center text-slate-400">
            <p>© 2025 Abhishek Kumar Singh. All rights reserved.</p>
            <p className="text-sm mt-2">Built with Next.js and Tailwind CSS</p>
          </div>
        </div>
      </footer>
    </>
  )
}