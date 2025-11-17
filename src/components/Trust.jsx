import { CheckCircle2, ShieldCheck, Fingerprint, BadgeCheck } from 'lucide-react'

export default function Trust() {
  const items = [
    { icon: ShieldCheck, text: 'ISO 27001 & SOC 2 zertifiziert' },
    { icon: Fingerprint, text: 'End‑to‑End Verschlüsselung' },
    { icon: BadgeCheck, text: 'DSGVO‑konform in der EU' },
    { icon: CheckCircle2, text: '99.99% Uptime SLA' },
  ]

  return (
    <section id="trust" className="relative bg-[#050B0A]">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.03] p-8 sm:p-12 ring-1 ring-black/5">
          <div className="grid gap-10 lg:grid-cols-2 items-center">
            <div>
              <h3 className="text-2xl sm:text-3xl font-semibold text-white">Vertrauen als Standard</h3>
              <p className="mt-3 text-white/70">Transparente Prozesse, kontinuierliche Pen‑Tests und unabhängige Audits – Sicherheit, der Sie vertrauen können.</p>
              <div className="mt-6 grid sm:grid-cols-2 gap-3">
                {items.map(({ icon: Icon, text }) => (
                  <div key={text} className="flex items-center gap-3 rounded-xl bg-white/5 p-3 ring-1 ring-white/10">
                    <Icon className="h-5 w-5 text-emerald-400" />
                    <span className="text-sm text-white/80">{text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-emerald-500/20 to-emerald-400/5 ring-1 ring-emerald-400/20" />
              <div className="pointer-events-none absolute inset-0 blur-3xl bg-[radial-gradient(50%_60%_at_70%_30%,rgba(16,185,129,0.35)_0%,rgba(16,185,129,0)_70%)]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
