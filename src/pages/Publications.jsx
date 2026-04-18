import ScrollTriggered from '../motions/ScrollTriggered.jsx'

const publications = [
  {
    title: 'YOLO-Based Framework for Efficient Lung Cancer Detection from CT Imaging',
    journal: '2025 Fourth International Conference on Smart Technologies and Systems for Next Generation Computing (ICSTSN)',
    year: '2026',
    authors: 'Priyanshu Gawate,  Gaurav Machade,   Sujal Khadgi',
    summary:
      'Developed a deep learning-based system using YOLO to detect and localize lung cancer from CT scan images, improving diagnostic speed and accuracy.',
    link: 'https://ieeexplore.ieee.org/document/11398042',
  },
]

export default function Publications() {
  return (
    <section id="publications" className="mx-auto w-full max-w-6xl px-6 py-16 md:py-20">
      <ScrollTriggered>
        <div className="flex flex-col gap-3">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-400"></p>
          <h3 className="text-2xl font-bold text-white sm:text-3xl">Research work</h3>
          <p className="max-w-3xl text-slate-300">
           Selected research and academic publications
          </p>
        </div>
      </ScrollTriggered>

      <div className="mt-10 grid gap-5">
        {publications.map((paper) => (
          <article key={paper.title} className="glass glow-ring rounded-2xl p-6">
            <p className="text-xs uppercase tracking-[0.24em] text-slate-400">{paper.year}</p>
            <h4 className="mt-2 text-xl font-semibold text-white">{paper.title}</h4>
            <p className="mt-1 text-sm text-slate-300">{paper.authors}</p>
            <p className="mt-1 text-sm text-blue-300">{paper.journal}</p>
            <p className="mt-3 text-sm text-slate-300">{paper.summary}</p>
            <a
              href={paper.link}
              className="mt-4 inline-flex text-sm font-semibold text-blue-300 transition hover:text-blue-200"
            >
              View publication
            </a>
          </article>
        ))}
      </div>
    </section>
  )
}

