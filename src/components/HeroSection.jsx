import { motion } from 'framer-motion'

const letterStagger = {
  hidden: { opacity: 0, y: 80, filter: 'blur(8px)' },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      delay: i * 0.18,
      duration: 1.1,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
}

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Deep atmospheric gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-black via-brand-black/95 to-brand-red/30" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(235,0,40,0.25),_transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(255,255,255,0.08),_transparent_40%)]" />

      {/* Floating orbs */}
      <motion.div
        animate={{ y: [0, -30, 0], opacity: [0.15, 0.3, 0.15], scale: [1, 1.1, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/3 left-1/6 w-80 h-80 rounded-full bg-brand-red/20 blur-[100px]"
      />
      <motion.div
        animate={{ y: [0, 25, 0], opacity: [0.1, 0.2, 0.1], scale: [1, 1.05, 1] }}
        transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
        className="absolute bottom-1/3 right-1/6 w-64 h-64 rounded-full bg-white/5 blur-[80px]"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-32 md:py-40 w-full text-left">
        {/* Top label — shared axis */}
        <motion.p
          custom={0}
          initial="hidden"
          animate="visible"
          variants={letterStagger}
          className="text-xs md:text-sm font-semibold uppercase tracking-[0.25em] text-white/50 mb-8"
        >
          Sound of Phoenix &mdash; BIGZ TEDx Youth
        </motion.p>

        {/* Main title — intentional left overhang for editorial drama */}
        <motion.h1
          custom={1}
          initial="hidden"
          animate="visible"
          variants={letterStagger}
          className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tight leading-[0.9] text-white bleed-left font-display italic"
        >
          TEDx
          <br />
          <span className="text-white/80 not-italic">Youth BIGZ</span>
        </motion.h1>

        {/* Theme — back on the shared axis */}
        <motion.h2
          custom={2}
          initial="hidden"
          animate="visible"
          variants={letterStagger}
          className="mt-10 md:mt-14 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-display italic font-medium text-white/70 leading-snug max-w-2xl echo-hover cursor-default"
        >
          &ldquo;Echoes of Canton&rdquo;
          <br />
          <span className="text-white/50 not-italic text-lg md:text-xl lg:text-2xl">
            Rising above the Pearl River
          </span>
        </motion.h2>

        {/* Meta — shared axis */}
        <motion.div
          custom={3}
          initial="hidden"
          animate="visible"
          variants={letterStagger}
          className="mt-12 md:mt-16 flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-8 text-base md:text-lg text-white/50 font-medium"
        >
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-brand-red animate-pulse" />
            <span>Guangzhou, China</span>
          </div>
          <span className="hidden sm:inline text-white/15 text-2xl font-thin">|</span>
          <span className="text-white/70 font-semibold">June 6, 2026</span>
          <span className="hidden sm:inline text-white/15 text-2xl font-thin">|</span>
          <span>14:00 – 17:30</span>
        </motion.div>

        {/* Scroll hint — shared axis */}
        <motion.div
          custom={4}
          initial="hidden"
          animate="visible"
          variants={letterStagger}
          className="mt-16 md:mt-20"
        >
          <div className="flex items-center gap-3 text-white/25 text-xs uppercase tracking-[0.3em] font-semibold">
            <div className="h-px w-12 bg-gradient-to-r from-white/30 to-transparent" />
            Scroll to explore
          </div>
        </motion.div>
      </div>
    </section>
  )
}
