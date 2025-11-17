import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#050B0A] via-[#08130F] to-[#0A1412]" />

      <div className="relative mx-auto max-w-7xl px-4 pt-36 pb-24 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <span className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-300 ring-1 ring-inset ring-emerald-400/20">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Next‑Gen Cybersecurity
              </span>
              <h1 className="mt-5 text-4xl sm:text-6xl font-semibold tracking-tight text-white">
                Verstehe Security SaaS
              </h1>
              <p className="mt-4 text-base sm:text-lg leading-relaxed text-white/70 max-w-xl">
                Schutz, der mitdenkt: vereint Schwachstellen‑Scanning, Bedrohungs‑Erkennung und Compliance in einer nahtlosen Plattform. Visuell, schnell, sicher.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <a href="#pricing" className="inline-flex justify-center items-center rounded-xl bg-emerald-500 px-5 py-3 text-white font-medium shadow-lg shadow-emerald-500/25 hover:bg-emerald-400 transition">
                  Kostenlos testen
                </a>
                <a href="#features" className="inline-flex justify-center items-center rounded-xl bg-white/10 px-5 py-3 text-white font-medium ring-1 ring-white/15 hover:bg-white/15 transition">
                  Mehr erfahren
                </a>
              </div>

              <div className="mt-10 flex items-center gap-6 text-white/60">
                <div className="text-sm">
                  <div className="font-semibold text-white/80">99.99% Uptime</div>
                  <div>ISO 27001 | SOC 2</div>
                </div>
                <div className="h-10 w-px bg-white/10" />
                <div className="text-sm">
                  <div className="font-semibold text-white/80"><span className="text-emerald-300">1M+</span> gescannte Assets</div>
                  <div>Echtzeit‑Erkennung</div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="relative h-[420px] sm:h-[500px] lg:h-[640px]">
            <div className="absolute inset-0 rounded-3xl overflow-hidden ring-1 ring-white/10 shadow-2xl shadow-emerald-500/10">
              <Spline scene="https://prod.spline.design/DtQLjBkD1UpownGS/scene.splinecode" style={{ width: '100%', height: '100%' }} />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0A1412] via-transparent to-transparent" />
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="pointer-events-none absolute -inset-x-10 -bottom-10 h-40 blur-3xl"
            >
              <div className="h-full w-full bg-[radial-gradient(60%_80%_at_50%_100%,rgba(16,185,129,0.45)_0%,rgba(16,185,129,0)_70%)]" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
