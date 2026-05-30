import { motion } from 'framer-motion'
import ScrollReveal from './ScrollReveal'

const speakerImages = (name, num) => ({
  src: `/speakers/optimized/${num}-800w.webp`,
  srcSet: `/speakers/optimized/${num}-400w.webp 400w, /speakers/optimized/${num}-800w.webp 800w`,
  sizes: '(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 22vw',
})

const speakers = [
  {
    name: 'Bonnie Lau',
    ...speakerImages('Bonnie Lau', 1),
    role: 'BIGZ G10 Student',
    tag: 'Political Science',
    talk: 'As an immigrant to Guangzhou, she shares her experience of Cantonese culture and how this journey has quietly reshaped her understanding of life.',
  },
  {
    name: 'Hermione Sun',
    ...speakerImages('Hermione Sun', 2),
    role: 'BIGZ G8 Student',
    tag: '',
    talk: 'How automation has diluted the cultural imprints in traditional Cantonese food and crafts — and the life stories behind these old skills.',
  },
  {
    name: 'Cecilia Lu',
    ...speakerImages('Cecilia Lu', 3),
    role: 'BIGZ G10 Student',
    tag: 'Politics, International Relations & Food',
    talk: 'Through dim sum culture — tea table, rotating round table, and dim sum cart — she interprets the unique inclusiveness of Cantonese culture.',
  },
  {
    name: 'Wilson Li',
    ...speakerImages('Wilson Li', 4),
    role: 'BIGZ G11 Student',
    tag: '',
    talk: 'How Language Carries Culture and Identity — reflecting on how growing up bilingual in Cantonese and English shapes personal identity.',
  },
  {
    name: 'Cynthia Sun',
    ...speakerImages('Cynthia Sun', 5),
    role: 'BIGZ G11 Student',
    tag: 'Cultural Studies',
    talk: 'The Song Dynasty Tea Ceremony — how tea culture still shines with unique value and profound social significance among young generations.',
  },
  {
    name: 'Jessica Liang',
    ...speakerImages('Jessica Liang', 6),
    role: 'BIGZ G11 Student',
    tag: 'Environmental Biology',
    talk: 'Addressing common prejudices toward Cantonese customs like ancestor worship, and explaining the true meaning behind these traditions.',
  },
  {
    name: 'Dr. Ilona Stricof',
    ...speakerImages('Dr. Ilona Stricof', 7),
    role: 'BIGZ AP Teacher',
    tag: 'PhD in Islamic History, Columbia University',
    talk: "Guangzhou's Role on the Silk Road of the Abbasid Caliphate — how the thousand-year trade legacy continues to shape the city today.",
  },
  {
    name: 'Larry Peiyuan Gao',
    ...speakerImages('Larry Peiyuan Gao', 8),
    role: '"New Guangzhou Resident"',
    tag: '',
    talk: 'From a Faraway Land to My Hometown — perspectives on Lingnan family inheritance and cultural integration from the view of an outsider.',
  },
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
                className="group cursor-pointer rounded-2xl border border-black/5 bg-white/90 backdrop-blur-sm p-5 transition-all duration-700 ease-out-expo hover:shadow-xl hover:shadow-black/5 hover:border-black/10"
              >
                <div className="w-full aspect-[3/4] bg-gradient-to-b from-brand-cream to-gray-100 rounded-xl mb-5 overflow-hidden relative">
                  <img
                    src={speaker.src}
                    srcSet={speaker.srcSet}
                    sizes={speaker.sizes}
                    alt={speaker.name}
                    width={800}
                    height={1067}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out-expo group-hover:scale-105"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-red/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-out-expo pointer-events-none" />
                </div>
                <h3 className="font-bold text-lg text-brand-black">
                  {speaker.name}
                </h3>
                <p className="text-sm text-brand-gray mt-1">
                  {speaker.role}
                  {speaker.tag && (
                    <span className="text-brand-gray/60"> · {speaker.tag}</span>
                  )}
                </p>
                <p className="text-xs text-brand-gray/60 mt-2 leading-relaxed">
                  {speaker.talk}
                </p>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
