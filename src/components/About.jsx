export default function About() {
  return (
    <section id="about" className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">About Medos</h2>
          <p className="mt-4 text-slate-600 dark:text-slate-300">
            We build mission-critical healthcare software so providers can focus on patient care. Medos is a modern, secure, and scalable platform designed for clinics and hospitals of any size.
          </p>
          <p className="mt-3 text-slate-600 dark:text-slate-300">
            Our suite includes an admin back-office, a doctor portal, and a patient mobile app—integrated end-to-end across operations, diagnostics, and revenue cycle.
          </p>
          <ul className="mt-6 space-y-2 text-slate-700 dark:text-slate-200 text-sm list-disc list-inside">
            <li>Compliant by design with regional regulations</li>
            <li>Modular: start small, add departments as you grow</li>
            <li>Global-ready: multi-language, multi-currency, multi-branch</li>
          </ul>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
            <p className="text-4xl font-extrabold text-emerald-600">99.9%</p>
            <p className="text-sm text-slate-500 mt-1">Uptime SLA</p>
          </div>
          <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
            <p className="text-4xl font-extrabold text-emerald-600">+50%</p>
            <p className="text-sm text-slate-500 mt-1">Faster billing cycle</p>
          </div>
          <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
            <p className="text-4xl font-extrabold text-emerald-600">700ms</p>
            <p className="text-sm text-slate-500 mt-1">Avg. response time</p>
          </div>
          <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
            <p className="text-4xl font-extrabold text-emerald-600">SOC 2</p>
            <p className="text-sm text-slate-500 mt-1">Security program</p>
          </div>
        </div>
      </div>
    </section>
  );
}
