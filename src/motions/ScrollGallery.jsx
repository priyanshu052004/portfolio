import { motion, useScroll, useTransform } from 'framer-motion'
import { useMemo, useRef } from 'react'

/**
 * ScrollGallery
 * A scroll-based parallax + reveal grid. Feed it images (src, alt).
 */
export default function ScrollGallery({ images = [] }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })

  const y1 = useTransform(scrollYProgress, [0, 1], [24, -24])
  const y2 = useTransform(scrollYProgress, [0, 1], [40, -40])
  const y3 = useTransform(scrollYProgress, [0, 1], [56, -56])

  const columns = useMemo(() => {
    const c1 = []
    const c2 = []
    const c3 = []
    images.forEach((img, idx) => {
      if (idx % 3 === 0) c1.push(img)
      if (idx % 3 === 1) c2.push(img)
      if (idx % 3 === 2) c3.push(img)
    })
    return [c1, c2, c3]
  }, [images])

  const MotionCol = ({ items, style }) => (
    <motion.div style={style} className="grid gap-5">
      {items.map((img) => (
        <motion.figure
          key={img.alt}
          className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <img
            src={img.src}
            alt={img.alt}
            className="h-52 w-full object-cover transition duration-500 group-hover:scale-[1.06]"
            loading="lazy"
          />
          <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/55 via-transparent to-transparent" />
            <div className="absolute inset-0 ring-1 ring-white/15" />
          </div>
        </motion.figure>
      ))}
    </motion.div>
  )

  return (
    <div ref={ref} className="grid gap-5 md:grid-cols-3">
      <MotionCol items={columns[0]} style={{ y: y1 }} />
      <MotionCol items={columns[1]} style={{ y: y2 }} />
      <MotionCol items={columns[2]} style={{ y: y3 }} />
    </div>
  )
}

