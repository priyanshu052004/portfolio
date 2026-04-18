import { motion } from 'framer-motion'

/**
 * FallingText
 * Splits text into letters and drops them in with a stagger.
 */
export default function FallingText({ text, className = '' }) {
  const letters = String(text ?? '').split('')

  return (
    <motion.span
      className={className}
      initial="hidden"
      animate="show"
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: 0.018 } },
      }}
      aria-label={text}
      role="text"
    >
      {letters.map((ch, i) => (
        <motion.span
          key={`${ch}-${i}`}
          className="inline-block"
          variants={{
            hidden: { opacity: 0, y: -14, rotate: -2, filter: 'blur(6px)' },
            show: { opacity: 1, y: 0, rotate: 0, filter: 'blur(0px)' },
          }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
        >
          {ch === ' ' ? '\u00A0' : ch}
        </motion.span>
      ))}
    </motion.span>
  )
}

