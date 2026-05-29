import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ScrollReveal from './ScrollReveal'

// Replace this URL with your Google Apps Script web app URL to enable collection.
// See instructions below the component or ask Claude how to set it up.
const SUBMIT_URL = ''

async function submitEmail(email) {
  const res = await fetch(SUBMIT_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, timestamp: new Date().toISOString() }),
  })
  if (!res.ok) throw new Error('Submission failed')
  return res.json()
}

export default function NewsletterSignup() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle') // idle | loading | success | error

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!email || status === 'loading') return

    setStatus('loading')
    try {
      if (SUBMIT_URL) {
        await submitEmail(email)
      } else {
        // Simulate a brief delay so the loading state is visible even without a backend
        await new Promise((r) => setTimeout(r, 800))
      }
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  return (
    <section className="py-24 md:py-32 bg-brand-red relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(255,255,255,0.1),_transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(0,0,0,0.12),_transparent_40%)]" />
      <motion.div
        animate={{ scale: [1, 1.08, 1], opacity: [0.06, 0.12, 0.06], x: ['-5%', '5%', '-5%'] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-white/8 blur-[140px]"
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <ScrollReveal>
            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-white/50 mb-3">
              Stay Updated
            </p>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight font-display italic cursor-default">
              Get notified about our event
            </h2>
            <p className="mt-4 text-base md:text-lg text-white/60 leading-relaxed">
              Registration is currently closed, but sign up for our newsletter to be
              the first to know when tickets become available.
            </p>
          </ScrollReveal>

          <AnimatePresence mode="wait">
            {status === 'success' ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, y: 30, scale: 0.94, filter: 'blur(4px)' }}
                animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
                exit={{ opacity: 0, scale: 0.94 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="mt-10 bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl px-8 py-6 text-white"
              >
                <p className="text-lg font-semibold">You&apos;re on the list!</p>
                <p className="text-sm mt-2 text-white/50">
                  We&apos;ll let you know as soon as registration opens.
                </p>
              </motion.div>
            ) : status === 'error' ? (
              <motion.div
                key="error"
                initial={{ opacity: 0, y: 30, scale: 0.94 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.94 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="mt-10 bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl px-8 py-6 text-white"
              >
                <p className="text-lg font-semibold">Something went wrong</p>
                <p className="text-sm mt-2 text-white/50">
                  Please try again or email us directly.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="mt-4 text-sm font-semibold text-white/70 hover:text-white underline underline-offset-4 transition-colors duration-300"
                >
                  Try again
                </button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0, y: 30, filter: 'blur(4px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, scale: 0.94 }}
                transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                onSubmit={handleSubmit}
                className="mt-10 flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
              >
                <input
                  type="email"
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  disabled={status === 'loading'}
                  className="flex-1 px-5 py-3.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/15 text-white placeholder:text-white/30 outline-none focus:border-white/30 focus:bg-white/15 transition-all duration-600 ease-out-expo text-sm disabled:opacity-50"
                />
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="px-7 py-3.5 rounded-full bg-white text-brand-red font-semibold text-sm hover:bg-white/95 hover:scale-[1.04] active:scale-[0.97] transition-all duration-600 ease-out-expo whitespace-nowrap shadow-xl shadow-black/20 ripple-hover disabled:opacity-70 disabled:cursor-wait"
                >
                  {status === 'loading' ? 'Sending...' : 'Notify me'}
                </button>
              </motion.form>
            )}
          </AnimatePresence>

          <p className="mt-6 text-xs text-white/30">
            Registration currently closed. We respect your privacy.
          </p>
        </div>
      </div>
    </section>
  )
}
