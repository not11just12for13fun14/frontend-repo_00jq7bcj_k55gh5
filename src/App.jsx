import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Trust from './components/Trust'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-[#050B0A]">
      <div className="pointer-events-none fixed inset-0 opacity-[0.15]" aria-hidden>
        <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_20%_0%,rgba(16,185,129,0.25)_0%,rgba(16,185,129,0)_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(50%_60%_at_80%_10%,rgba(16,185,129,0.18)_0%,rgba(16,185,129,0)_60%)]" />
      </div>

      <Navbar />
      <main>
        <Hero />
        <Features />
        <Trust />
      </main>
      <Footer />
    </div>
  )
}

export default App
