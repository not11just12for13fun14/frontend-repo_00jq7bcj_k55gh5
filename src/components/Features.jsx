import { motion } from 'framer-motion'
import { Shield, LockKeyhole, Radar, Server, PieChart, Globe } from 'lucide-react'

const items = [
  {
    icon: Shield,
    title: 'Attack Surface Monitoring',
    desc: 'Automatische Erkennung Ihrer externen Assets und kontinuierliches Risiko‑Scoring.'
  },
  {
    icon: Radar,
    title: 'Threat Intelligence',
    desc: 'Korrelation globaler Feeds mit Ihren Logs – priorisierte Alarme in Echtzeit.'
  },
  {
    icon: LockKeyhole,
    title: 'Identity & Access',
    desc: 'SSO, RBAC und fein granulare Policies – Zero‑Trust out of the box.'
  },
  {
    icon: Server,
    title: 'Agentless Scans',
    desc: 'Cloud‑native Scanner für AWS, Azure, GCP ohne Agenten‑Rollout.'
  },
  {
    icon: PieChart,
    title: 'Compliance',
    desc: 'Vorgefertigte Berichte für ISO 27001, SOC 2, NIS2 – audit‑ready.'
  },
  {
    icon: Globe,
    title: 'Global Scale',
    desc: 'In <100ms weltweit – Edge‑gestützt und horizontal skalierbar.'
  }
]

export default function Features() {
  return (
    <section id="features" className="relative bg-[#050B0A]">
      <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight">Sichtbar. Steuerbar. Sicher.</h2>
          <p className="mt-3 text-white/70">Ein klarer Überblick über Risiken – mit Automatisierung, die Zeit spart.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group rounded-2xl border border-white/10 bg-white/5 p-6 ring-1 ring-black/5 backdrop-blur-xl hover:bg-white/[0.08] transition"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-500/10 ring-1 ring-emerald-400/20 mb-4">
                <Icon className="h-5 w-5 text-emerald-400" />
              </div>
              <h3 className="text-white font-medium">{title}</h3>
              <p className="mt-2 text-sm text-white/70 leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
