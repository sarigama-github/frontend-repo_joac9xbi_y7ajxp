import Navbar from '../components/Navbar'

export default function SiteLayout({ children }) {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100">
      <Navbar />
      <main>{children}</main>
      <footer className="py-10 border-t border-slate-200 dark:border-slate-800 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">© {new Date().getFullYear()} Medos. All rights reserved.</p>
          <div className="flex items-center gap-6 text-sm text-slate-500">
            <a href="/about" className="hover:text-slate-800 dark:hover:text-slate-200">About</a>
            <a href="/solutions" className="hover:text-slate-800 dark:hover:text-slate-200">Solutions</a>
            <a href="/pricing" className="hover:text-slate-800 dark:hover:text-slate-200">Pricing</a>
            <a href="/contact" className="hover:text-slate-800 dark:hover:text-slate-200">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
