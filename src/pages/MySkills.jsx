import ScrollTriggered from '../motions/ScrollTriggered.jsx'
import frontendIcon from '../assets/frontend.png'
import backendIcon from '../assets/backend.png'
import databaseIcon from '../assets/database.png'
import toolsIcon from '../assets/tools.png'



const skills = [
  {
    title: 'Frontend',
    items: ['HTML' , 'CSS', 'JavaScript', 'React' , 'Vite'],
    accent: 'from-blue-500/25 to-cyan-400/10',
    icon: frontendIcon,
  },
  {
    title: 'Backend',
    items: ['Java', 'Spring Boot', ' JSP', 'Servlets', 'JDBC',  'MVC'],
    accent: 'from-purple-600/25 to-indigo-500/10',
    icon: backendIcon,
  },
  {
    title: 'Database',
    items: ['MySQL ', 'PostgreSQL'],
    accent: 'from-fuchsia-500/20 to-blue-500/10',
    icon: databaseIcon,
  },
  {
    title: 'Tools',
    items: ['Git','GitHub', 'Postman', 'VS Code', 'Deployment basics'],
    accent: 'from-fuchsia-500/20 to-blue-500/10',
    icon: toolsIcon,
  },
]

export default function MySkills() {
  return (
    <section id="skills" className="mx-auto w-full max-w-6xl px-6 py-16 md:py-20">
      <ScrollTriggered>
        <div className="flex flex-col gap-3">
          <h3 className="text-2xl font-bold text-white sm:text-3xl">Skills</h3>
          <p className="max-w-3xl text-slate-300">
           Technologies and tools I work with.
          </p>
        </div>
      </ScrollTriggered>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {skills.map((s, idx) => (
          <ScrollTriggered key={s.title} delay={idx * 0.06}>
            <div className="group glass glow-ring rounded-2xl p-6 transition duration-300 hover:-translate-y-1 hover:shadow-neon">
              <div
                className={`flex h-12 w-12 items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br ${s.accent} ring-1 ring-white/10`}
              >
                {s.icon ? (
                  <img
                    src={s.icon}
                    alt={`${s.title} icon`}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <span className="text-sm font-bold text-white/80">{s.title.charAt(0)}</span>
                )}
              </div>
              <h4 className="mt-4 text-lg font-semibold text-white">{s.title}</h4>
              <div className="mt-4 flex flex-wrap gap-2">
                {s.items.map((x) => (
                  <span
                    key={x}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200 transition group-hover:border-blue-300/25"
                  >
                    {x}
                  </span>
                ))}
              </div>
            </div>
          </ScrollTriggered>
        ))}
      </div>
    </section>
  )
}
