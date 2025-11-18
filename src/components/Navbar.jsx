import { useState } from "react";
import { Menu, X, Stethoscope, ShieldCheck, Rocket } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: "About", href: "#about" },
    { label: "Solutions", href: "#solutions" },
    { label: "Pricing", href: "#pricing" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 dark:bg-slate-900/70 dark:supports-[backdrop-filter]:bg-slate-900/40 border-b border-slate-200/60 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-2 group">
            <div className="p-2 rounded-lg bg-gradient-to-br from-emerald-500 to-blue-600 text-white shadow-lg shadow-emerald-500/20">
              <Stethoscope className="w-5 h-5" />
            </div>
            <div className="leading-tight">
              <p className="font-extrabold text-slate-900 dark:text-white tracking-tight">Medos</p>
              <p className="text-xs text-slate-500 dark:text-slate-400 -mt-1">Healthcare SaaS Suite</p>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((n) => (
              <a key={n.label} href={n.href} className="text-sm font-medium text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white">
                {n.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href="#contact" className="px-4 py-2 text-sm font-semibold text-slate-700 dark:text-slate-200">Sign in</a>
            <a href="#contact" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-emerald-500 to-blue-600 text-white text-sm font-semibold shadow-md shadow-emerald-500/30">
              <Rocket className="w-4 h-4" />
              Get a demo
            </a>
          </div>

          <button onClick={() => setOpen(!open)} className="md:hidden p-2 rounded-lg text-slate-700 dark:text-slate-200">
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-slate-900/90">
          <div className="px-4 py-4 space-y-2">
            {navItems.map((n) => (
              <a key={n.label} href={n.href} onClick={() => setOpen(false)} className="block px-3 py-2 rounded-md text-slate-700 dark:text-slate-200 hover:bg-slate-100/60 dark:hover:bg-slate-800/60">
                {n.label}
              </a>
            ))}
            <a href="#contact" className="block px-3 py-2 rounded-md bg-gradient-to-r from-emerald-500 to-blue-600 text-white text-center">Get a demo</a>
          </div>
        </div>
      )}
    </header>
  );
}
