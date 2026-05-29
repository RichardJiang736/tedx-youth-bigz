import { motion } from 'framer-motion'
import ScrollReveal from './ScrollReveal'

const timeline = [
  { time: '11:30 – 11:45', title: 'Speakers & Performers Check-in', desc: 'All speakers and performers arrive and get settled.' },
  { time: '11:45 – 13:45', title: 'Final Run-through', desc: 'Full rehearsal on stage — sound, lighting, and transitions.' },
  { time: '13:45 – 14:00', title: 'Final Check', desc: 'Last-minute adjustments and venue readiness.' },
  { time: '14:00 – 14:30', title: 'Interactive Booths & Audience Check-in', desc: 'Doors open. Explore interactive booths while checking in.' },
  { time: '14:30 – 15:50', title: 'Speech Part 1', desc: 'First session: 4–5 speakers plus a live performance.' },
  { time: '15:50 – 16:00', title: 'Break', desc: 'Light refreshments available outside the venue.' },
  { time: '16:00 – 17:00', title: 'Speech Part 2', desc: 'Second session: 3–4 speakers plus a live performance.' },
  { time: '17:00 – 17:30', title: 'Dismissal & Group Photo', desc: 'Closing remarks, group picture, and farewell.' },
]

const perspectives = [
  { label: 'Social Media', desc: 'How digital platforms shape identity, connection, and self-expression among youth today.' },
  { label: 'Culture', desc: 'The intersection of Cantonese heritage and globalized youth culture in modern Guangzhou.' },
  { label: 'Family', desc: 'Navigating generational expectations, filial piety, and personal ambition.' },
]

export default function EventsSection() {
  return (
    <section id="events" className="py-24 md:py-32 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-px bg-gradient-to-r from-transparent via-brand-red/20 to-transparent" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-brand-red/2 blur-[120px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* ── Event Overview ── */}
        <ScrollReveal>
          <p className="text-sm font-semibold uppercase tracking-[0.15em] text-brand-red mb-3">
            Upcoming Events
          </p>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-brand-black tracking-tight mb-6 font-display italic">
            TEDx BIGZ Youth 2026
          </h2>

          <motion.div
            whileHover={{ y: -2 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="ripple-hover rounded-2xl border border-black/5 bg-white/80 backdrop-blur-sm p-8 md:p-10 max-w-3xl transition-all duration-700 ease-out-expo hover:shadow-xl hover:shadow-black/5"
          >
            <div className="flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-12">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-brand-gray mb-1">Date</p>
                <p className="text-lg font-bold text-brand-black">June 6, 2026</p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-brand-gray mb-1">Time</p>
                <p className="text-lg font-bold text-brand-black">14:00 – 17:30</p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-brand-gray mb-1">Location</p>
                <p className="text-lg font-bold text-brand-black">BIGZ, Guangzhou</p>
              </div>
            </div>
          </motion.div>
        </ScrollReveal>

        {/* ── Theme ── */}
        <ScrollReveal className="mt-24">
          <h3 className="text-2xl md:text-3xl font-bold text-brand-black mb-4 font-display italic echo-hover cursor-default">
            &ldquo;Echoes of Canton — Rising above the Pearl River&rdquo;
          </h3>
          <p className="text-base text-brand-gray max-w-3xl leading-relaxed">
            This year&apos;s theme explores the voices that shape our identity —
            from the digital spaces we inhabit, to the cultural roots we carry,
            to the family ties that ground us.
          </p>

          <div className="flex flex-wrap gap-3 mt-8">
            {perspectives.map((p) => (
              <motion.div
                key={p.label}
                whileHover={{ scale: 1.04, y: -3 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="ripple-hover rounded-xl border border-black/5 bg-white/80 backdrop-blur-sm px-6 py-4 max-w-xs transition-all duration-500 ease-out-expo hover:shadow-md hover:border-black/10 cursor-default"
              >
                <span className="text-sm font-semibold text-brand-red">{p.label}</span>
                <p className="text-xs text-brand-gray/70 mt-1.5 leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </ScrollReveal>

        {/* ── Timeline ── */}
        <ScrollReveal className="mt-24 md:mt-32">
          <p className="text-sm font-semibold uppercase tracking-[0.15em] text-brand-red mb-3">
            Event Timeline
          </p>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-brand-black tracking-tight mb-14 font-display italic">
            Schedule
          </h2>
        </ScrollReveal>

        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px md:-translate-x-px"
            style={{
              background: 'linear-gradient(180deg, transparent 0%, rgba(235,0,40,0.3) 20%, rgba(235,0,40,0.15) 50%, rgba(235,0,40,0.3) 80%, transparent 100%)',
              backgroundSize: '100% 200%',
              animation: 'river-flow 8s ease-in-out infinite',
            }}
          />

          <div className="flex flex-col">
            {timeline.map((entry, i) => {
              const isLeft = i % 2 === 0
              return (
                <ScrollReveal key={i} delay={i * 0.08}>
                  <div className="relative pb-10 md:pb-14 last:pb-0">
                    <motion.div
                      whileHover={{ scale: 1.8 }}
                      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                      className={`absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-brand-red border-2 border-white -translate-x-1/2 z-10 transition-shadow duration-700 ${
                        i === 0 ? 'top-0' : '-top-0.5'
                      }`}
                      style={{
                        animation: 'ripple-out 3s cubic-bezier(0.16,1,0.3,1) infinite',
                      }}
                    />

                    <div
                      className={`ml-10 md:ml-0 md:w-[calc(50%-2rem)] ${
                        isLeft
                          ? 'md:mr-auto md:pr-6 md:text-right'
                          : 'md:ml-auto md:pl-6'
                      }`}
                    >
                      <motion.div
                        whileHover={{ y: -3, scale: 1.02 }}
                        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                        className="ripple-hover rounded-xl border border-black/5 bg-white/80 backdrop-blur-sm px-6 py-5 transition-all duration-500 ease-out-expo hover:shadow-lg hover:border-black/10"
                      >
                        <span className="inline-block text-xs font-bold uppercase tracking-wider text-brand-red mb-1">
                          {entry.time}
                        </span>
                        <h4 className="text-sm font-semibold text-brand-black cursor-default">
                          {entry.title}
                        </h4>
                        <p className="text-xs text-brand-gray/70 mt-1 leading-relaxed">
                          {entry.desc}
                        </p>
                      </motion.div>
                    </div>
                  </div>
                </ScrollReveal>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
