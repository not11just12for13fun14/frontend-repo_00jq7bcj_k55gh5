import { ShieldCheck } from 'lucide-react'

export default function Footer() {
  return (
    <footer id="contact" className="relative bg-[#050B0A]">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="grid h-9 w-9 place-items-center rounded-xl bg-emerald-500/10 ring-1 ring-emerald-400/30">
              <ShieldCheck className="h-5 w-5 text-emerald-400" />
            </div>
            <span className="text-white/80 font-medium">Verstehe</span>
          </div>
          <p className="text-white/50 text-sm">© {new Date().getFullYear()} Verstehe Security. Alle Rechte vorbehalten.</p>
          <div className="flex items-center gap-4 text-sm">
            <a className="text-white/60 hover:text-white" href="#">Datenschutz</a>
            <a className="text-white/60 hover:text-white" href="#">Impressum</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
