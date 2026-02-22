import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Background from './components/Background'
import CustomCursor from './components/CustomCursor'
import { ThemeProvider, useTheme } from './context/ThemeContext'

function AppContent() {
  const { theme } = useTheme()

  return (
    <div
      className={`min-h-screen selection:bg-indigo-500/30 selection:text-white relative transition-colors duration-500 ${theme === 'dark'
        ? 'bg-[#030712] text-slate-200'
        : 'bg-[#f0f4f8] text-slate-800'
        }`}
    >
      <CustomCursor />
      <Background />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <footer
        className={`py-10 text-center border-t transition-colors duration-500 ${theme === 'dark' ? 'border-white/5' : 'border-slate-200'
          }`}
      >
        <p className={`text-sm ${theme === 'dark' ? 'text-slate-600' : 'text-slate-500'}`}>
          © {new Date().getFullYear()}{' '}
          <span className={`font-semibold ${theme === 'dark' ? 'text-slate-400' : 'text-slate-700'}`}>
            Anna Lakshmi A
          </span>
          . Crafted with ❤️ using React &amp; TailwindCSS.
        </p>
      </footer>
    </div>
  )
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  )
}

export default App
