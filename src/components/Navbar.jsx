import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, Stethoscope, Rocket } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: "About", to: "/about" },
    { label: "Solutions", to: "/solutions" },
    { label: "Integrations", to: "/integrations" },
    { label: "Pricing", to: "/pricing" },
    { label: "FAQ", to: "/faq" },
    { label: "Contact", to: "/contact" },
  ];

  const linkBase =
    "text-sm font-medium text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-colors";

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 dark:bg-slate-900/70 dark:supports-[backdrop-filter]:bg-slate-900/40 border-b border-slate-200/60 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="p-2 rounded-lg bg-gradient-to-br from-emerald-500 to-blue-600 text-white shadow-lg shadow-emerald-500/20 group-hover:scale-105 transition-transform">
              <Stethoscope className="w-5 h-5" />
            </div>
            <div className="leading-tight">
              <p className="font-extrabold text-slate-900 dark:text-white tracking-tight">Medos</p>
              <p className="text-xs text-slate-500 dark:text-slate-400 -mt-1">Healthcare SaaS Suite</p>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((n) => (
              <NavLink
                key={n.label}
                to={n.to}
                className={({ isActive }) =>
                  `${linkBase} ${isActive ? "text-slate-900 dark:text-white" : ""}`
                }
              >
                {n.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <Link to="/contact" className="px-4 py-2 text-sm font-semibold text-slate-700 dark:text-slate-200">
              Sign in
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-emerald-500 to-blue-600 text-white text-sm font-semibold shadow-md shadow-emerald-500/30 hover:shadow-lg hover:shadow-emerald-500/30 transition-shadow"
            >
              <Rocket className="w-4 h-4" />
              Get a demo
            </Link>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 rounded-lg text-slate-700 dark:text-slate-200"
            aria-label="Toggle menu"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-slate-900/90">
          <div className="px-4 py-4 space-y-2">
            {navItems.map((n) => (
              <NavLink
                key={n.label}
                to={n.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-md ${linkBase} ${isActive ? "bg-slate-100/60 dark:bg-slate-800/60" : ""}`
                }
              >
                {n.label}
              </NavLink>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="block px-3 py-2 rounded-md bg-gradient-to-r from-emerald-500 to-blue-600 text-white text-center"
            >
              Get a demo
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
