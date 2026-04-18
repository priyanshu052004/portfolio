import { motion } from 'framer-motion'
import ScrollTriggered from '../motions/ScrollTriggered.jsx'
import ElectricBorder from './ElectricBorder/ElectricBorder.jsx'

const education = [
  {
    level: 'Graduation',
    institute: 'G H Raisoni College of Engineering, Nagpur',
    duration: '2022 - 2026',
    details: 'Degree: B.Tech  | Field: Data Science | CGPA: 8.61/10 (till 7th sem)',
  },
  {
    level: '12th Standard',
    institute: 'Insight Junior College',
    duration: '2020 - 2022',
    details: 'Board: State Board | Stream: Computer Science | Percentage: 89.30%',
  },
  {
    institute: 'Sanskar Dnyanpeeth School, Samudrapur ',
    level: '10th Standard',
    duration: '2019 - 2020',
    details: 'State Board |  Percentage: 87.60%',
  },
]

export default function AboutPage() {
  return (
    <section id="about" className="mx-auto w-full max-w-6xl px-6 py-16 md:py-20">
      <ScrollTriggered>
        <div className="flex flex-col gap-3">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-400"></p>
          <h3 className="text-2xl font-bold text-white sm:text-3xl">About Me</h3>
          <p className="max-w-3xl text-slate-300">
           Full Stack Developer and Data Science student skilled in Java, web technologies, and Machine Learning, focused on building scalable and data-driven applications.
          </p>
        </div>
      </ScrollTriggered>

      <div className="mt-10 grid gap-6 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <ScrollTriggered>
            <ElectricBorder>
              <p className="text-sm font-semibold text-white">What I bring</p>
              <ul className="mt-4 grid gap-3 text-sm text-slate-300">
                {[
                  'Java backend (Spring Boot, MVC)',
                  'Full-stack development',
                  'React UI development',
                  'Machine Learning fundamentals',
                ].map((x) => (
                  <li key={x} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-blue-400 to-purple-400" />
                    <span>{x}</span>
                  </li>
                ))}
              </ul>
            </ElectricBorder>
          </ScrollTriggered>

        </div>

        <div className="lg:col-span-7">
          <ScrollTriggered>
            <div className="mb-4 flex items-center justify-between">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-300">Education</p>
            </div>
          </ScrollTriggered>
          <div className="grid gap-4">
            {education.map((item, idx) => (
              <motion.div
                key={item.level}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.6, ease: 'easeOut', delay: idx * 0.05 }}
                className="glass glow-ring rounded-2xl p-5"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.26em] text-slate-400">{item.duration}</p>
                    <p className="mt-1 text-lg font-semibold text-white">{item.institute}</p>
                    <p className="mt-1 text-sm font-medium text-blue-200">{item.level}</p>
                    <p className="mt-2 text-sm text-slate-300">{item.details}</p>
                  </div>
                  <span className="mt-1 h-10 w-10 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-600/20 ring-1 ring-white/10" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

