import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Speakers', href: '#speakers' },
  { label: 'Events', href: '#events' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-1000 ${
        scrolled
          ? 'bg-white/70 backdrop-blur-xl'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 md:h-20 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-3 group">
          <span className="text-brand-red font-black text-xl md:text-2xl tracking-tight">
            TEDx<span className={`transition-all duration-1000 ${scrolled ? 'text-brand-black' : 'text-white'}`}>Youth</span>
          </span>
          <span className={`hidden sm:inline font-bold text-lg md:text-xl tracking-tight transition-all duration-1000 ${scrolled ? 'text-brand-black' : 'text-white/80'}`}>
            BIGZ
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`relative text-sm font-medium transition-all duration-700 ease-out-expo echo-hover ${
                scrolled
                  ? 'text-brand-black/60 hover:text-brand-red'
                  : 'text-white/60 hover:text-white'
              }`}
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 h-px bg-brand-red transition-all duration-700 ease-out-expo w-0 group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2 relative z-50"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 transition-all duration-500 ease-out-expo ${
              scrolled ? 'bg-brand-black' : 'bg-white'
            } ${open ? 'rotate-45 translate-y-2' : ''}`}
          />
          <span
            className={`block w-6 h-0.5 transition-all duration-500 ease-out-expo ${
              scrolled ? 'bg-brand-black' : 'bg-white'
            } ${open ? 'opacity-0 scale-x-0' : ''}`}
          />
          <span
            className={`block w-6 h-0.5 transition-all duration-500 ease-out-expo ${
              scrolled ? 'bg-brand-black' : 'bg-white'
            } ${open ? '-rotate-45 -translate-y-2' : ''}`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-1 bg-white/90 backdrop-blur-xl">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="text-base font-medium text-brand-black/70 hover:text-brand-red transition-colors duration-300 py-3"
                >
                  {link.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
