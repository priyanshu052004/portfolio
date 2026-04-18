import { motion } from 'framer-motion'

export default function Loader() {
  return (
    <div className="grid min-h-screen place-items-center bg-slate-950">
      <div className="relative">
        <motion.div
          className="h-24 w-24 rounded-full border border-white/10 bg-white/5 backdrop-blur-md"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1.6, ease: 'linear' }}
          style={{
            boxShadow:
              '0 0 0 1px rgba(255,255,255,0.06), 0 0 44px rgba(124,58,237,0.22), 0 0 80px rgba(37,99,235,0.14)',
          }}
        />
        <motion.div
          className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            background:
              'conic-gradient(from 90deg, rgba(59,130,246,0), rgba(59,130,246,0.95), rgba(168,85,247,0.95), rgba(59,130,246,0))',
            maskImage: 'radial-gradient(transparent 56%, black 57%)',
            WebkitMaskImage: 'radial-gradient(transparent 56%, black 57%)',
          }}
          animate={{ rotate: -360 }}
          transition={{ repeat: Infinity, duration: 1.2, ease: 'linear' }}
        />
        <p className="mt-6 text-center text-sm tracking-[0.22em] text-slate-300">
          LOADING
        </p>
      </div>
    </div>
  )
}

