import { motion } from 'framer-motion'

/**
 * ScrollTriggered
 * A small wrapper that animates children when they enter the viewport.
 * Beginner-friendly: pass any JSX as children and it will fade/slide in.
 */
export default function ScrollTriggered({
  children,
  className = '',
  delay = 0,
  y = 18,
  once = true,
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount: 0.25 }}
      transition={{ duration: 0.65, ease: 'easeOut', delay }}
    >
      {children}
    </motion.div>
  )
}

