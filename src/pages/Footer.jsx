import { FaGithub, FaInstagram, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6'

export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-4 px-6 py-10 sm:flex-row">
        <p className="text-sm text-slate-400">
          © {new Date().getFullYear()} Priyanshu Gawate. All rights reserved.
        </p>

        <div className="flex items-center gap-3">
          <a
            className="glass rounded-xl p-3 text-slate-200 transition hover:text-white hover:shadow-neon"
            href="https://github.com/priyanshu052004/"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            className="glass rounded-xl p-3 text-slate-200 transition hover:text-white hover:shadow-neon"
            href="https://www.linkedin.com/in/priyanshu-gawate-4232b0264/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn />
          </a>
          <a
            className="glass rounded-xl p-3 text-slate-200 transition hover:text-white hover:shadow-neon"
            href="https://www.instagram.com/priyanshugawate05/"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
          <a
            className="glass rounded-xl p-3 text-slate-200 transition hover:text-white hover:shadow-neon"
            href="https://x.com/Priyanshugawate/"
            target="_blank"
            rel="noreferrer"
            aria-label="Twitter"
          >
            <FaXTwitter />
          </a>
        </div>
      </div>
    </footer>
  )
}

