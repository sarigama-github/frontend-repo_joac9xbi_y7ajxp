import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import About from './components/About'
import Integrations from './components/Integrations'
import Pricing from './components/Pricing'
import FAQ from './components/FAQ'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Features />
        <Integrations />
        <Pricing />
        <FAQ />
        <CTA />
      </main>
      <footer className="py-10 border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">© {new Date().getFullYear()} Medos. All rights reserved.</p>
          <div className="flex items-center gap-6 text-sm text-slate-500">
            <a href="#about" className="hover:text-slate-800 dark:hover:text-slate-200">About</a>
            <a href="#solutions" className="hover:text-slate-800 dark:hover:text-slate-200">Solutions</a>
            <a href="#pricing" className="hover:text-slate-800 dark:hover:text-slate-200">Pricing</a>
            <a href="#contact" className="hover:text-slate-800 dark:hover:text-slate-200">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
