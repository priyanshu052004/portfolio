import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useMemo, useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'

const links = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'publications', label: 'Publications' },
]

function scrollToId(id) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const items = useMemo(() => links, [])

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setOpen(false)
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/65 backdrop-blur-xl">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-4 md:px-6">
        <button
          type="button"
          onClick={() => scrollToId('home')}
          className="group inline-flex items-center gap-2 font-semibold tracking-wide text-white"
          aria-label="Go to home section"
        >
          <span className="relative">
            <span className="absolute -inset-2 rounded-xl bg-gradient-to-r from-blue-500/0 via-purple-500/20 to-blue-500/0 opacity-0 blur-lg transition group-hover:opacity-100" />
            <span className="relative">Priyanshu</span>
          </span>
          <span className="hidden text-slate-400 sm:inline">Gawate</span>
        </button>

        <div className="hidden items-center gap-6 md:flex">
          {items.map((l) => (
            <button
              key={l.id}
              type="button"
              onClick={() => scrollToId(l.id)}
              className="text-sm text-slate-300 transition hover:text-white"
            >
              {l.label}
            </button>
          ))}
          <button type="button" onClick={() => scrollToId('contact')} className="btn-primary">
            Contact Me
          </button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 p-2 text-slate-200 transition hover:bg-white/10 md:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <FiX size={20} /> : <FiMenu size={20} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
            className="md:hidden"
          >
            <div className="mx-auto w-full max-w-6xl px-5 pb-4 md:px-6">
              <div className="glass rounded-2xl p-3">
                <div className="flex flex-col">
                  {items.map((l) => (
                    <button
                      key={l.id}
                      type="button"
                      onClick={() => {
                        scrollToId(l.id)
                        setOpen(false)
                      }}
                      className="rounded-xl px-3 py-3 text-left text-sm text-slate-200 transition hover:bg-white/10"
                    >
                      {l.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

