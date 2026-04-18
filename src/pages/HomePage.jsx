import React from 'react'
import { motion } from 'framer-motion'
import { FiArrowRight, FiDownload } from 'react-icons/fi'
import ElectricBorder from './ElectricBorder/ElectricBorder.jsx'
import FallingText from './FallingText/FallingText.jsx'

function useTypewriter(words, speedMs = 55, pauseMs = 900) {
  const [state, setState] = React.useState({ w: 0, i: 0, deleting: false, text: '' })
  React.useEffect(() => {
    const word = words[state.w] ?? ''
    const done = state.i >= word.length
    const empty = state.i <= 0
    const nextDeleting = done ? true : empty ? false : state.deleting
    const nextW = done && !state.deleting ? state.w : empty && state.deleting ? (state.w + 1) % words.length : state.w

    const nextI = nextDeleting ? Math.max(0, state.i - 1) : Math.min(word.length, state.i + 1)
    const nextText = word.slice(0, nextI)

    const delay =
      done && !state.deleting ? pauseMs : empty && state.deleting ? 250 : speedMs * (state.deleting ? 0.75 : 1)

    const t = setTimeout(() => {
      setState({ w: nextW, i: nextI, deleting: nextDeleting, text: nextText })
    }, delay)
    return () => clearTimeout(t)
  }, [state, words, speedMs, pauseMs])

  return state.text
}

function scrollToId(id) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export default function HomePage() {
  const typed = useTypewriter(
    ['Building premium web apps', 'Java + UI polish', ' Backend-focused'],
    55,
    900,
  )

  return (
    <section id="home" className="relative overflow-hidden">
      {/* Animated blobs */}
      <div className="pointer-events-none absolute -left-20 top-24 h-72 w-72 animate-blob rounded-full bg-purple-600/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 top-36 h-80 w-80 animate-blob rounded-full bg-blue-500/20 blur-3xl [animation-delay:1.6s]" />
      <div className="pointer-events-none absolute left-1/3 top-[22rem] hidden h-72 w-72 animate-blob rounded-full bg-cyan-400/10 blur-3xl md:block [animation-delay:3.2s]" />

      <div className="mx-auto w-full max-w-6xl px-6 pb-16 pt-14 md:pb-24 md:pt-20">
        <div className="grid items-center gap-10 md:grid-cols-12">
          <div className="md:col-span-7">
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-200/90"
            >
              Priyanshu Vijay Gawate
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.05 }}
              className="mt-4 text-4xl font-bold leading-tight text-white sm:text-6xl"
            >
              <FallingText text="Priyanshu Gawate" className="bg-gradient-to-r from-blue-200 via-white to-purple-200 bg-clip-text text-transparent" />
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
              className="mt-3 text-xl font-semibold text-purple-200 sm:text-2xl"
            >
              Full Stack Developer | Data Science & ML Enthusiast
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.15 }}
              className="mt-5 max-w-2xl text-base text-slate-300 sm:text-lg"
            >
             I’m Priyanshu Gawate, a Full Stack Developer focused on building scalable applications with strong backend systems and data-driven intelligence.
              <br />

              <span className="ml-2 inline-flex items-center gap-2 text-slate-200">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-400/80" />
                <span className="font-medium">{typed}</span>
                <span className="inline-block h-5 w-[1px] bg-slate-400/50 align-middle" />
              </span>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
              className="mt-7 flex flex-wrap gap-3"
            >
              <button type="button" onClick={() => scrollToId('contact')} className="btn-primary">
                Contact Me <FiArrowRight />
              </button>
              <button type="button" onClick={() => scrollToId('projects')} className="btn-ghost">
                View Projects <FiArrowRight />
              </button>
              <a
                className="btn-ghost"
                href="https://drive.google.com/file/d/1KCuYs1frReAlWarZvTnEUEUNSbgbxVKn/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
              >
                Resume <FiDownload />
              </a>
            </motion.div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              <ElectricBorder className="p-5">
                <p className="text-sm font-semibold text-white">Backend Engineering</p>
                <p className="mt-1 text-sm text-slate-300">
                  Building robust backend applications using Java, Spring Boot, and MVC architecture with clean and maintainable code.
                </p>
              </ElectricBorder>
              <ElectricBorder className="p-5">
                <p className="text-sm font-semibold text-white">Intelligent Applications</p>
                <p className="mt-1 text-sm text-slate-300">
                  Applying data analysis and machine learning to extract insights and build intelligent, real-world application.
                </p>
              </ElectricBorder>
            </div>
          </div>

          <div className="md:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.98, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.75, ease: 'easeOut', delay: 0.15 }}
              className="relative"
            >
              <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-hero-grid bg-[length:18px_18px] opacity-60 [mask-image:radial-gradient(circle_at_50%_35%,black_55%,transparent_72%)]" />
              <div className="glass glow-ring rounded-[2rem] p-6 md:p-8">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold text-white">Quick Snapshot</p>
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300">
                    Available
                  </span>
                </div>

                <div className="mt-6 grid gap-4">
                  {[
                    { k: 'Frontend', v: 'HTML • CSS • JavaScript • React • Vite' },
                    { k: 'Backend', v: 'Java • Spring Boot • JSP • Servlets • JDBC' },
                    { k: 'Data & ML', v: 'Python • Pandas • NumPy • Matplotlib • Machine Learning' },
                    { k: 'Database', v: 'MySQL • PostgreSQL' },
                  ].map((row) => (
                    <div key={row.k} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                      <p className="text-xs uppercase tracking-[0.24em] text-slate-400">{row.k}</p>
                      <p className="mt-1 text-sm font-semibold text-white">{row.v}</p>
                    </div>
                  ))}
                </div>

                <p className="mt-6 text-xs text-slate-400">
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
