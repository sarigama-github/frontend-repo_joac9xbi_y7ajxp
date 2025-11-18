import { CheckCircle2, Building2, Smartphone, ShieldCheck, Activity } from "lucide-react";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div aria-hidden className="absolute -top-40 left-1/2 -translate-x-1/2 w-[1200px] h-[1200px] bg-gradient-to-br from-emerald-400/20 via-blue-500/10 to-indigo-500/0 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 md:pt-36 pb-16 md:pb-24">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 text-xs font-semibold mb-4">
              <ShieldCheck className="w-4 h-4" /> Trusted by clinics and hospitals
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.1]">
              One platform for your entire healthcare operation
            </h1>
            <p className="mt-5 text-lg text-slate-600 dark:text-slate-300">
              Medos unifies admin back-office, doctor portal, and a patient app into one secure SaaS. Manage appointments, EMR, labs, inventory, insurance, and billing—without juggling tools.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#pricing" className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-blue-600 text-white font-semibold shadow-lg shadow-emerald-500/30">
                Start free trial
              </a>
              <a href="#contact" className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-200 font-semibold">
                Book a demo
              </a>
            </div>
            <div className="mt-6 grid grid-cols-3 gap-4 text-sm text-slate-600 dark:text-slate-300">
              <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500"/> HIPAA-ready</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500"/> Multi-branch</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500"/> Cloud & On-prem</div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl border border-slate-200 dark:border-slate-800 bg-gradient-to-br from-slate-50 to-white dark:from-slate-800 dark:to-slate-900 shadow-2xl overflow-hidden">
              <div className="p-6 grid grid-cols-2 gap-4 text-xs text-slate-600 dark:text-slate-300">
                <div className="p-4 rounded-xl bg-white/70 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700">
                  <Building2 className="w-5 h-5 text-emerald-500 mb-2"/>
                  Admin: branches, roles, permissions, analytics
                </div>
                <div className="p-4 rounded-xl bg-white/70 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700">
                  <Activity className="w-5 h-5 text-blue-600 mb-2"/>
                  Doctor: EMR, e-prescriptions, labs, radiology
                </div>
                <div className="p-4 rounded-xl bg-white/70 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700">
                  <Smartphone className="w-5 h-5 text-indigo-600 mb-2"/>
                  Patient app: appointments, results, invoices, chat
                </div>
                <div className="p-4 rounded-xl bg-white/70 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700">
                  <ShieldCheck className="w-5 h-5 text-emerald-600 mb-2"/>
                  Fully audited, SSO & 2FA, granular audit logs
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
