import emailjs from '@emailjs/browser'
import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import { FaGithub, FaInstagram, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6'
import ScrollTriggered from '../motions/ScrollTriggered.jsx'
import ElectricBorder from './ElectricBorder/ElectricBorder.jsx'

const INITIAL_FORM = {
  name: '',
  email: '',
  subject: '',
  message: '',
}

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY
const OWNER_EMAIL = 'gawatepriyanshu2004@gmail.com'

export default function ContactPage() {
  const [formData, setFormData] = useState(INITIAL_FORM)
  const [status, setStatus] = useState('idle')
  const [popup, setPopup] = useState({ open: false, type: 'success', message: '' })

  const handleChange = ({ target: { name, value } }) => {
    setFormData((current) => ({
      ...current,
      [name]: value,
    }))
  }

  const closePopup = () => {
    setPopup((current) => ({ ...current, open: false }))
  }

  const showPopup = (type, message) => {
    setPopup({ open: true, type, message })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const missingKeys = [
      !EMAILJS_SERVICE_ID || EMAILJS_SERVICE_ID === 'your_service_id_here'
        ? 'service ID'
        : null,
      !EMAILJS_TEMPLATE_ID || EMAILJS_TEMPLATE_ID === 'your_template_id_here'
        ? 'template ID'
        : null,
      !EMAILJS_PUBLIC_KEY || EMAILJS_PUBLIC_KEY === 'your_public_key_here'
        ? 'public key'
        : null,
    ].filter(Boolean)

    if (missingKeys.length > 0) {
      setStatus('error')
      showPopup(
        'error',
        `EmailJS is not fully configured yet. Add your ${missingKeys.join(
          ' and '
        )} in the .env file to send messages.`
      )
      return
    }

    setStatus('sending')

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          owner_email: OWNER_EMAIL,
          reply_to: formData.email,
        },
        {
          publicKey: EMAILJS_PUBLIC_KEY,
        }
      )

      setStatus('sent')
      setFormData(INITIAL_FORM)
      showPopup('success', `Successfully sent the message to ${OWNER_EMAIL}.`)
    } catch {
      setStatus('error')
      showPopup('error', 'The message could not be sent right now. Please try again in a moment.')
    }
  }

  return (
    <>
      <section id="contact" className="mx-auto w-full max-w-6xl px-6 py-16 md:py-20">
        <ScrollTriggered>
          <div className="flex flex-col gap-3">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-400"></p>
            <h3 className="text-2xl font-bold text-white sm:text-3xl">Contact</h3>
            <p className="max-w-3xl text-slate-300">
              Open to internships and entry-level roles in Full Stack Development.
            </p>
          </div>
        </ScrollTriggered>

        <div className="mt-10 grid gap-6 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <ElectricBorder>
              <form className="grid gap-4" onSubmit={handleSubmit}>
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="grid gap-2 text-sm text-slate-200">
                    Name
                    <input
                      required
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="glass rounded-xl px-4 py-3 text-sm text-white outline-none ring-1 ring-white/10 focus:ring-2 focus:ring-purple-400/50"
                      placeholder="Your name"
                    />
                  </label>
                  <label className="grid gap-2 text-sm text-slate-200">
                    Gmail
                    <input
                      required
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="glass rounded-xl px-4 py-3 text-sm text-white outline-none ring-1 ring-white/10 focus:ring-2 focus:ring-blue-400/50"
                      placeholder="your_Mail@gmail.com"
                    />
                  </label>
                </div>
                <label className="grid gap-2 text-sm text-slate-200">
                  Subject
                  <textarea
                    required
                    rows={2}
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="glass rounded-xl px-4 py-3 text-sm text-white outline-none ring-1 ring-white/10 focus:ring-2 focus:ring-indigo-400/50"
                    placeholder="Subject of your message"
                  />
                </label>

                <label className="grid gap-2 text-sm text-slate-200">
                  Message
                  <textarea
                    required
                    rows={6}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="glass rounded-xl px-4 py-3 text-sm text-white outline-none ring-1 ring-white/10 focus:ring-2 focus:ring-indigo-400/50"
                    placeholder="Write your message here..."
                  />
                </label>

                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="btn-primary disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {status === 'sending' ? 'Sending...' : 'Send Message'}
                  </button>
                  <a className="btn-ghost" href={`mailto:${OWNER_EMAIL}`}>
                    {OWNER_EMAIL}
                  </a>
                  <a className="btn-ghost" href="tel:+918080350665">
                    +91 8080350665
                  </a>

                  <motion.span
                    initial={false}
                    animate={{
                      opacity: status === 'sent' ? 1 : 0,
                      y: status === 'sent' ? 0 : 6,
                    }}
                    className="text-sm font-semibold text-green-300"
                  >
                    Message sent to the Priyanshu Gawate.
                  </motion.span>
                </div>
              </form>
            </ElectricBorder>
          </div>

          <div className="lg:col-span-5">
            <ScrollTriggered>
              <div className="glass glow-ring rounded-2xl p-6">
                <p className="text-sm font-semibold text-white">Social</p>
                <p className="mt-2 text-sm text-slate-300">
                  Connect with me on social media or send an email. I&apos;m open to full-time roles,
                  freelance work, and meaningful collaborations.
                </p>

                <div className="mt-5 flex items-center gap-3">
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
                    href="https://github.com/priyanshu052004/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="GitHub"
                  >
                    <FaGithub />
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

                <div className="mt-7 rounded-2xl border border-white/10 bg-white/5 p-5">
                  <p className="text-xs uppercase tracking-[0.24em] text-slate-400">Location</p>
                  <p className="mt-1 text-sm font-semibold text-white">India</p>
                  <p className="mt-3 text-xs text-slate-400">Nagpur, Maharashtra, India</p>
                </div>
              </div>
            </ScrollTriggered>
          </div>
        </div>
      </section>

      <AnimatePresence>
        {popup.open ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 px-6 backdrop-blur-sm"
          >
            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12, scale: 0.98 }}
              className="glass glow-ring w-full max-w-md rounded-3xl border border-white/10 p-6 text-center"
            >
              <p
                className={`text-lg font-semibold ${
                  popup.type === 'success' ? 'text-green-300' : 'text-rose-300'
                }`}
              >
                {popup.type === 'success' ? 'Message Sent' : 'Send Failed'}
              </p>
              <p className="mt-3 text-sm leading-6 text-slate-200">{popup.message}</p>
              <button type="button" onClick={closePopup} className="btn-primary mt-6">
                Close
              </button>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  )
}
