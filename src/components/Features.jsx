import { Boxes, FileSpreadsheet, TestTube, ShieldCheck, Users2, Pill, Microscope, ArchiveRestore, Wallet, Workflow } from "lucide-react";

const features = [
  { icon: Boxes, title: "Inventory & Pharmacy", desc: "Real-time stock, batch/expiry tracking, purchase orders, dispensing", tag: "Operations" },
  { icon: TestTube, title: "Labs & Radiology", desc: "LIS/RIS workflows, analyzer integration, barcodes, result templates", tag: "Diagnostics" },
  { icon: FileSpreadsheet, title: "EMR & Appointments", desc: "Scheduling, triage, SOAP notes, e-prescriptions, encounters", tag: "Clinical" },
  { icon: Users2, title: "Staff & Roles", desc: "Multi-branch org, fine-grained permissions, rosters, shifts", tag: "People" },
  { icon: ShieldCheck, title: "Insurance & Claims", desc: "Preauth, e-claims, payer rules, remittances, denials", tag: "Revenue" },
  { icon: Wallet, title: "Billing & Invoices", desc: "Pricelists, bundles, POS, refunds, credit notes, ledgers", tag: "Finance" },
  { icon: Pill, title: "Drug Formulary", desc: "ATC, interactions, alternatives, dose calculators", tag: "Clinical" },
  { icon: Microscope, title: "Quality & Audits", desc: "CAP/ISO workflows, checklists, incident reports, RCA", tag: "Compliance" },
  { icon: ArchiveRestore, title: "Data & Interop", desc: "FHIR/HL7, PACS, SSO, custom webhooks and ETL", tag: "Platform" },
  { icon: Workflow, title: "Automation", desc: "No-code rules, alerts, approvals, SLA tracking", tag: "Platform" },
];

export default function Features() {
  return (
    <section id="solutions" className="py-20 md:py-28 bg-slate-50 dark:bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">Everything your clinic or hospital needs</h2>
          <p className="mt-3 text-slate-600 dark:text-slate-300">A single platform powering daily operations from reception to revenue cycle.</p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div key={f.title} className="group p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-600">
                  <f.icon className="w-5 h-5" />
                </div>
                <span className="text-xs font-semibold text-emerald-700 dark:text-emerald-400">{f.tag}</span>
              </div>
              <h3 className="mt-4 text-lg font-bold text-slate-900 dark:text-white">{f.title}</h3>
              <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
