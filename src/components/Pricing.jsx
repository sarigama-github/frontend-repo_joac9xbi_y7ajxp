import { Check } from "lucide-react";

const tiers = [
  {
    name: "Starter",
    price: "$0",
    period: "/month",
    highlight: "For small clinics starting digital",
    features: [
      "1 branch, up to 5 staff",
      "Appointments & EMR",
      "Basic inventory",
      "Email support"
    ],
    cta: "Get started",
  },
  {
    name: "Growth",
    price: "$299",
    period: "/month",
    highlight: "For growing multi-department clinics",
    features: [
      "Up to 5 branches",
      "Labs & Radiology",
      "Insurance & Invoices",
      "Priority support"
    ],
    cta: "Start free trial",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    highlight: "For hospitals and networks",
    features: [
      "Unlimited branches",
      "SSO, SSO, Audit logs",
      "HL7/FHIR, PACS, ETL",
      "Dedicated success manager"
    ],
    cta: "Contact sales",
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 md:py-28 bg-slate-50 dark:bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">Transparent pricing</h2>
          <p className="mt-3 text-slate-600 dark:text-slate-300">Start free, scale as you grow. No setup fees. Cancel anytime.</p>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {tiers.map((t) => (
            <div key={t.name} className={`relative p-6 rounded-2xl border ${t.popular ? 'border-emerald-500 ring-2 ring-emerald-200 dark:ring-emerald-800' : 'border-slate-200 dark:border-slate-800'} bg-white dark:bg-slate-900 shadow-sm`}>
              {t.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500 text-white shadow">Most popular</span>
              )}
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">{t.name}</h3>
              <p className="text-sm text-slate-500 mt-1">{t.highlight}</p>
              <div className="mt-4 flex items-end gap-1">
                <span className="text-4xl font-extrabold text-slate-900 dark:text-white">{t.price}</span>
                <span className="text-slate-500 mb-1">{t.period}</span>
              </div>
              <ul className="mt-4 space-y-2 text-sm">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-slate-700 dark:text-slate-200">
                    <Check className="w-4 h-4 text-emerald-500 mt-0.5" /> {f}
                  </li>
                ))}
              </ul>
              <a href="#contact" className={`mt-6 inline-flex w-full items-center justify-center gap-2 px-4 py-2 rounded-lg font-semibold ${t.popular ? 'bg-gradient-to-r from-emerald-500 to-blue-600 text-white' : 'border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-200'}`}>{t.cta}</a>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center text-sm text-slate-500">All plans include data encryption, backups, and access to patient mobile app.</div>
      </div>
    </section>
  );
}
