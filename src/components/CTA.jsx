export default function CTA() {
  return (
    <section id="contact" className="py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-r from-emerald-500 to-blue-600 p-[1px] shadow-xl">
          <div className="rounded-3xl bg-white dark:bg-slate-900 p-8 md:p-12 grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">See Medos in action</h3>
              <p className="mt-2 text-slate-600 dark:text-slate-300">Tell us about your organization and we’ll tailor a live demo for your workflows.</p>
              <ul className="mt-4 text-sm text-slate-700 dark:text-slate-200 list-disc list-inside">
                <li>White‑label options available</li>
                <li>On‑prem or cloud deployment</li>
                <li>Training and migration services</li>
              </ul>
            </div>
            <form className="grid grid-cols-1 gap-3">
              <input required placeholder="Full name" className="px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100" />
              <input required type="email" placeholder="Work email" className="px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100" />
              <input placeholder="Company / Hospital" className="px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100" />
              <textarea placeholder="What would you like to see?" rows="3" className="px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100" />
              <button type="submit" className="mt-2 inline-flex items-center justify-center px-4 py-3 rounded-lg bg-gradient-to-r from-emerald-500 to-blue-600 text-white font-semibold">Request demo</button>
              <p className="text-xs text-slate-500">By submitting, you agree to our terms and privacy policy.</p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
