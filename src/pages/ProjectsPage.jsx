import { motion } from 'framer-motion'
import { useMemo, useRef, useState } from 'react'
import { FaGithub } from 'react-icons/fa'
import { FiExternalLink } from 'react-icons/fi'
import ScrollTriggered from '../motions/ScrollTriggered.jsx'

import p1 from '../assets/nexustrade.png'
import p2 from '../assets/MovieDiscover.png'
import p3 from '../assets/personalFinanceManager.jpeg'

const baseProjects = [
  {
    title: 'NexusTrade',
    description:
      'Built a crypto spot trading simulator with a responsive UI inspired by real-world trading platforms.',
    stack: ['React', 'SpringBoot', 'HTML','CSS', 'javaScript'],
    image: p1,
    live: 'https://example.com',
    github: 'https://github.com/',
  },
  {
    title: 'Movie Discover System',
    description:
      'Movie Discover System is a web application that allows users to search movies and view real-time details such as title, rating, overview, and posters using the TMDB API.',
    stack: ['Java', 'JSP', 'Servlets', 'PostgreSQL', 'Tomcat'],
    image: p2,
    live: 'https://example.com',
    github: 'https://github.com/priyanshu052004/Movie_Discover_System',
  },
  {
    title: 'Personal Finance Manager',
    description:
      'Manages personal finances by tracking income and expenses with categorized entries.'+
      ' Provides balance updates, transaction history, and simple insights for better spending control.',
    stack: ['Java', 'Swing', 'OOP', 'JDBC','MySQL'],
    image: p3,
    live: 'https://example.com',
    github: 'https://github.com/priyanshu052004/PersonalFinanceManager-JavaSwing',
  },
]

function TiltCard({ children, className = '' }) {
  const ref = useRef(null)
  const [style, setStyle] = useState({})

  return (
    <div
      ref={ref}
      className={`[perspective:1000px] ${className}`}
      onMouseMove={(e) => {
        const el = ref.current
        if (!el) return
        const r = el.getBoundingClientRect()
        const px = (e.clientX - r.left) / r.width
        const py = (e.clientY - r.top) / r.height
        const rx = (0.5 - py) * 10
        const ry = (px - 0.5) * 10
        setStyle({
          transform: `rotateX(${rx}deg) rotateY(${ry}deg) translateZ(0px)`,
        })
      }}
      onMouseLeave={() => setStyle({ transform: 'rotateX(0deg) rotateY(0deg)' })}
    >
      <div style={style} className="transition duration-200 will-change-transform">
        {children}
      </div>
    </div>
  )
}

export default function ProjectsPage() {
  const projects = useMemo(() => baseProjects, [])

  return (
    <section id="projects" className="mx-auto w-full max-w-6xl px-6 py-16 md:py-20">
      <ScrollTriggered>
        <div className="flex flex-col gap-3">
          {/* <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-400"></p> */}
          <h3 className="text-2xl font-bold text-white sm:text-3xl">Projects</h3>
          <p className="max-w-3xl text-slate-300">
           Projects that showcase my skills and work.
          </p>
        </div>
      </ScrollTriggered>

      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, idx) => (
          <ScrollTriggered key={p.title} delay={idx * 0.06}>
            <TiltCard>
              <motion.article
                whileHover={{ y: -6 }}
                transition={{ duration: 0.22, ease: 'easeOut' }}
                className="group glass glow-ring overflow-hidden rounded-2xl"
              >
                <div className="relative">
                  <img
                    src={p.image}
                    alt={`${p.title} preview`}
                    className="h-44 w-full object-cover transition duration-500 group-hover:scale-[1.04]"
                    loading="lazy"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/10 to-transparent opacity-90" />
                </div>

                <div className="p-5">
                  <h4 className="text-lg font-semibold text-white">{p.title}</h4>
                  <p className="mt-2 text-sm text-slate-300">{p.description}</p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.stack.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="mt-5 flex items-center gap-3">
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-primary px-4 py-2 text-xs"
                      aria-label={`Open live demo for ${p.title}`}
                    >
                      Live <FiExternalLink />
                    </a>
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-ghost px-4 py-2 text-xs"
                      aria-label={`Open GitHub repo for ${p.title}`}
                    >
                      Code <FaGithub />
                    </a>
                  </div>
                </div>
              </motion.article>
            </TiltCard>
          </ScrollTriggered>
        ))}
      </div>
    </section>
  )
}

