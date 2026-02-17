import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 selection:bg-primary-500/30">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Contact />
      </main>
      <footer className="py-8 text-center text-slate-500 text-sm border-t border-slate-900">
        © {new Date().getFullYear()} Anna Lakshmi A. Built with React & Tailwind CSS.
      </footer>
    </div>
  )
}

export default App
