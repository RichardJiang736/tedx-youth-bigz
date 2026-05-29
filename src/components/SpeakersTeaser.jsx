import { motion } from 'framer-motion'
import ScrollReveal from './ScrollReveal'

const speakers = [
  { name: 'Jessica Liang', grade: 'Grade 11', talk: 'Talk title TBA' },
  { name: 'Cynthia Sun', grade: 'Grade 11', talk: 'Talk title TBA' },
  { name: 'Wilson Li', grade: 'Grade 11', talk: 'Talk title TBA' },
  { name: 'Ilona Alex Gerbakher', grade: 'Grade TBA', talk: 'Talk title TBA' },
  { name: 'Hermione Sun', grade: 'Grade TBA', talk: 'Talk title TBA' },
  { name: 'Liu Lezhi', grade: 'Grade TBA', talk: 'Talk title TBA' },
  { name: 'Cecilia Lu', grade: 'Grade TBA', talk: 'Talk title TBA' },
]

export default function SpeakersTeaser() {
  return (
    <section id="speakers" className="py-24 md:py-32 bg-[#FAFAF8] relative">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-14">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-brand-red mb-3">
                Featured Speakers
              </p>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-brand-black tracking-tight font-display italic cursor-default">
                Meet our voices
              </h2>
            </div>
            <a
              href="#speakers"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-brand-black/50 hover:text-brand-red transition-all duration-500 ease-out-expo"
            >
              View all Speakers
              <span className="inline-block transition-transform duration-500 ease-out-expo group-hover:translate-x-1">&rarr;</span>
            </a>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {speakers.map((speaker, i) => (
            <ScrollReveal key={i} delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -4, scale: 1.02 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="group cursor-pointer rounded-2xl border border-black/5 bg-white/90 backdrop-blur-sm p-5 transition-all duration-700 ease-out-expo hover:shadow-xl hover:shadow-black/5 hover:border-black/10 ripple-hover"
              >
                <div className="w-full aspect-[3/4] bg-gradient-to-b from-brand-cream to-gray-100 rounded-xl mb-5 overflow-hidden relative">
                  <div className="w-full h-full flex items-center justify-center text-brand-gray/15 text-7xl font-display italic">
                    ?
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-red/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-out-expo" />
                </div>
                <h3 className="font-bold text-lg text-brand-black">
                  {speaker.name}
                </h3>
                <p className="text-sm text-brand-gray mt-1">{speaker.grade}</p>
                <p className="text-xs text-brand-gray/50 mt-2 italic">{speaker.talk}</p>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
