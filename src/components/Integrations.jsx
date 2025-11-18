import { Shield, ScanBarcode, CreditCard, Cloud, Server, Link2 } from "lucide-react";

const partners = [
  { icon: ScanBarcode, name: "Lab Analyzers", items: ["Roche", "Abbott", "Beckman", "Mindray"] },
  { icon: CreditCard, name: "Payments", items: ["Stripe", "Adyen", "PayTabs", "PayU"] },
  { icon: Link2, name: "Interop", items: ["HL7", "FHIR", "PACS", "DICOM"] },
  { icon: Cloud, name: "Cloud", items: ["AWS", "GCP", "Azure"] },
  { icon: Server, name: "On‑prem", items: ["VM", "Bare‑metal", "K8s"] },
];

export default function Integrations() {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">Secure integrations</h2>
          <p className="mt-3 text-slate-600 dark:text-slate-300">Connect labs, imaging, payments, and more with enterprise-grade security.</p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {partners.map((p) => (
            <div key={p.name} className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-blue-500/10 text-blue-600"><p.icon className="w-5 h-5"/></div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">{p.name}</h3>
              </div>
              <div className="mt-2 flex flex-wrap gap-2 text-sm text-slate-600 dark:text-slate-300">
                {p.items.map((i) => (
                  <span key={i} className="px-2 py-1 rounded-md bg-slate-100 dark:bg-slate-800">{i}</span>
                ))}
              </div>
            </div>
          ))}

          <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-gradient-to-br from-emerald-50 to-blue-50 dark:from-slate-800 dark:to-slate-900">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-600"><Shield className="w-5 h-5"/></div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">Security & Compliance</h3>
            </div>
            <ul className="mt-2 space-y-1 text-sm text-slate-700 dark:text-slate-200 list-disc list-inside">
              <li>Data encryption at rest and in transit</li>
              <li>Role-based access with SSO & 2FA</li>
              <li>Granular audit logs and retention</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
