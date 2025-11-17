import { useState } from 'react'
import { Menu, ShieldCheck, X } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'Produkt', href: '#features' },
    { label: 'Sicherheit', href: '#trust' },
    { label: 'Preise', href: '#pricing' },
    { label: 'Kontakt', href: '#contact' },
  ]

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-lg ring-1 ring-black/5">
          <div className="flex items-center justify-between px-4 py-3">
            <a href="#" className="flex items-center gap-2">
              <div className="grid h-9 w-9 place-items-center rounded-xl bg-emerald-500/10 ring-1 ring-emerald-400/30">
                <ShieldCheck className="h-5 w-5 text-emerald-400" />
              </div>
              <span className="text-lg font-semibold tracking-tight text-white">Verstehe</span>
            </a>

            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <a key={item.label} href={item.href} className="text-sm text-white/70 hover:text-white transition-colors">
                  {item.label}
                </a>
              ))}
              <a href="#pricing" className="inline-flex items-center rounded-lg bg-emerald-500/90 px-4 py-2 text-sm font-medium text-white shadow hover:bg-emerald-500 transition-colors">
                Jetzt starten
              </a>
            </nav>

            <button onClick={() => setOpen(true)} className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-white hover:bg-white/15">
              <Menu className="h-5 w-5" />
            </button>
          </div>

          {/* Mobile menu */}
          {open && (
            <div className="md:hidden border-t border-white/10">
              <div className="px-4 py-3 flex items-center justify-between">
                <span className="text-white/60 text-sm">Menü</span>
                <button onClick={() => setOpen(false)} className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 text-white hover:bg-white/15">
                  <X className="h-5 w-5" />
                </button>
              </div>
              <div className="px-4 pb-4 space-y-2">
                {navItems.map((item) => (
                  <a key={item.label} href={item.href} className="block rounded-lg px-3 py-2 text-white/80 hover:text-white hover:bg-white/10">
                    {item.label}
                  </a>
                ))}
                <a href="#pricing" className="block text-center rounded-lg bg-emerald-500/90 px-4 py-2 font-medium text-white hover:bg-emerald-500">Jetzt starten</a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
