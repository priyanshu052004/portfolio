import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import AboutPage from './pages/AboutPage.jsx'
import ContactPage from './pages/ContactPage.jsx'
import Footer from './pages/Footer.jsx'
import Publications from './pages/Publications.jsx'
import HomePage from './pages/HomePage.jsx'
import Loader from './pages/Loader.jsx'
import MySkills from './pages/MySkills.jsx'
import Navbar from './pages/Navbar.jsx'
import ProjectsPage from './pages/ProjectsPage.jsx'

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 900)
    return () => clearTimeout(t)
  }, [])

  return (
    <div className="relative overflow-hidden">
      <AnimatePresence mode="wait">
        {loading ? (
          <motion.div key="loader" initial={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.35 }}>
            <Loader />
          </motion.div>
        ) : (
          <motion.div
            key="app"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
          >
            {/* Global subtle glow blobs */}
            <div className="pointer-events-none absolute -left-32 top-40 h-72 w-72 rounded-full bg-purple-600/15 blur-3xl" />
            <div className="pointer-events-none absolute -right-32 top-64 h-80 w-80 rounded-full bg-blue-500/15 blur-3xl" />

            <Navbar />
            <main>
              <HomePage />
              <AboutPage />
              <MySkills />
              <ProjectsPage />
              <Publications />
              <ContactPage />
            </main>
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default App
