const faqs = [
  {
    q: "Is Medos suitable for small clinics?",
    a: "Yes. Start with core scheduling and EMR, then add modules like labs and insurance as you grow.",
  },
  {
    q: "Do you offer on‑prem deployments?",
    a: "We support cloud and on‑prem with the same product. Choose the model that fits your IT and compliance needs.",
  },
  {
    q: "How do you handle integrations?",
    a: "We provide connectors for LIS/RIS, PACS, SSO, and payment gateways. We also support custom webhooks and ETL.",
  },
  {
    q: "Can we migrate from our current system?",
    a: "Absolutely. Our team assists with data extraction, mapping, and phased rollouts to reduce downtime.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="py-20 md:py-28 bg-slate-50 dark:bg-slate-950/40">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white text-center">Frequently asked questions</h2>
        <div className="mt-8 divide-y divide-slate-200 dark:divide-slate-800 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
          {faqs.map((f) => (
            <details key={f.q} className="group p-6">
              <summary className="cursor-pointer list-none font-semibold text-slate-800 dark:text-slate-200">{f.q}</summary>
              <p className="mt-2 text-slate-600 dark:text-slate-300">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
