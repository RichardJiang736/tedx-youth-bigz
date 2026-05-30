import { motion } from 'framer-motion'
import ScrollReveal from './ScrollReveal'

const founders = [
  'Connie Xu', 'Frank Yang', 'Jenny Liang', 'Jerry Chuang', 'Rachel Lai',
  'Linda Jiang', 'Lily Jiang', 'Garrison Chen', 'Phoebe Yang', 'Ricky Peng',
]

const departments = [
  {
    name: 'Leadership',
    roles: [
      { title: 'Overall Head (25–26)', names: 'Connie & Jenny' },
      { title: 'Senior Advisors', names: 'Connie, Frank, Garrison, Phoebe, Ricky' },
    ],
  },
  {
    name: 'Event Management',
    roles: [
      { title: 'Event Manager (2)', desc: 'Responsible for overall event planning, coordination, and execution.', names: 'Jenny, Connie' },
      { title: 'Logistics Coordinator (3)', desc: 'Handles venue booking, transportation, proposals, and equipment arrangements.', names: 'Misha Li, Arthur Dong, Cynthia Sun' },
    ],
  },
  {
    name: 'Coordinator & Management',
    roles: [
      { title: 'Content Manager (4)', desc: 'Oversees the event content strategy and ensures speakers align with the event theme.', names: 'Morning Lu, Frank Yang, Alice Ye' },
      { title: 'Speaker Coordinator (3)', desc: 'Manages the speaker selection process, communicates with speakers, and schedules their sessions.', names: 'Jessica Liang, Amanda Li, Kina Zhang' },
      { title: 'Speech Evaluation Coordinator (2)', desc: 'Organizes evaluation procedures (rubrics), finds judges, and helps speakers with public speaking.', names: 'Hermione Sun, Elsa Zhang' },
    ],
  },
  {
    name: 'Marketing',
    roles: [
      { title: 'Social Media Manager (2)', desc: 'Manages social media platforms, creates engaging content, and interacts with participants.', names: 'Katie Lam, Caroline Chu' },
      { title: 'Graphic Designer (3)', desc: 'Creates visual assets, such as event banners, logos, and promotional materials.', names: 'Sophia Mai, Phoebe Yang, Emily He' },
    ],
  },
]

export default function AboutSection() {
  return (
    <section id="about" className="py-24 md:py-32 bg-mist-1 relative">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* ── What is TEDx Youth ── */}
        <ScrollReveal>
          <p className="text-sm font-semibold uppercase tracking-[0.15em] text-brand-red mb-3">
            About Us
          </p>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-6 font-display italic">
            What is TEDx Youth?
          </h2>
          <div className="max-w-3xl">
            <p className="text-base md:text-lg text-white/60 leading-relaxed">
              TEDx Youth is an independently organized TED event created by students,
              for students. It brings the spirit of TED&apos;s mission — &ldquo;Ideas
              worth spreading&rdquo; — to local communities worldwide, giving young
              people a platform to share their ideas, stories, and passions on a global
              stage.
            </p>
            <a
              href="https://www.ted.com/about/programs-initiatives/tedx-program"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-5 text-sm font-semibold text-brand-red hover:text-red-400 transition-all duration-500 ease-out-expo group"
            >
              Learn more about TEDx
              <span className="inline-block transition-transform duration-500 ease-out-expo group-hover:translate-x-1">&rarr;</span>
            </a>
          </div>
        </ScrollReveal>

        {/* ── Our Mission ── */}
        <ScrollReveal className="mt-24 md:mt-32">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-14 font-display italic">
            Our Mission
          </h2>

          <div className="mb-16">
            <h3 className="text-lg font-semibold text-white/90 mb-2">Founders</h3>
            <p className="text-sm text-white/50 mb-6">
              The students who brought TEDx Youth to BIGZ.
            </p>
            <div className="flex flex-wrap gap-3">
              {founders.map((name) => (
                <motion.span
                  key={name}
                  whileHover={{ scale: 1.06, y: -3 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="inline-flex items-center px-5 py-2.5 rounded-full glass-card text-sm font-medium text-white/80 hover:bg-brand-red/20 hover:text-white hover:border-brand-red/30 transition-all duration-600 ease-out-expo cursor-default"
                >
                  {name}
                </motion.span>
              ))}
            </div>
          </div>

          <div className="mb-12 max-w-3xl">
            <h3 className="text-lg font-semibold text-white/90 mb-3">
              Why are we bringing TEDx Youth to BIGZ?
            </h3>
            <p className="text-base text-white/60 leading-relaxed">
              BIGZ is home to curious, passionate, and thoughtful students. We believe
              our community has ideas worth sharing — perspectives shaped by our unique
              cultural context in Guangzhou, at the intersection of tradition and
              innovation. TEDx Youth provides the platform to amplify those voices.
            </p>
          </div>

          <div className="max-w-3xl">
            <h3 className="text-lg font-semibold text-white/90 mb-3">
              What do we want to encourage in our students?
            </h3>
            <p className="text-base text-white/60 leading-relaxed">
              We want to foster intellectual curiosity, public speaking confidence, and
              the courage to share ideas publicly. Our goal is to build a culture where
              students feel empowered to explore big questions, challenge assumptions,
              and inspire meaningful conversations that extend beyond the stage.
            </p>
          </div>
        </ScrollReveal>

        {/* ── Sound of Phoenix + Theme ── */}
        <ScrollReveal className="mt-24 md:mt-32">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-14 font-display italic">
            Sound of Phoenix
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="ripple-hover rounded-2xl glass-card p-8 md:p-10 transition-all duration-700 ease-out-expo glass-card-hover"
            >
              <span className="inline-block px-3 py-1 rounded-full bg-brand-red/20 text-xs font-semibold uppercase tracking-wider text-brand-red mb-4">
                Our Organization
              </span>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 font-display italic">
                Sound of Phoenix
              </h3>
              <p className="text-sm text-white/50 leading-relaxed">
                Sound of Phoenix is the name of the TEDx BIGZ Youth organization.
                The phoenix symbolizes resilience, transformation, and rebirth —
                qualities that define our student-led team as we rise to create a
                platform for ideas worth spreading within our school community.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="ripple-hover rounded-2xl glass-card border-brand-red/20 p-8 md:p-10 transition-all duration-700 ease-out-expo glass-card-hover"
            >
              <span className="inline-block px-3 py-1 rounded-full bg-brand-red text-xs font-semibold uppercase tracking-wider text-white mb-4">
                2026 Theme
              </span>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 font-display italic">
                Echoes of Canton
              </h3>
              <p className="text-sm text-white/50 leading-relaxed">
                &ldquo;Rising above the Pearl River&rdquo; — an exploration of
                Guangzhou&apos;s cultural heritage, identity, and the echoes of
                tradition that resonate through modern voices. A celebration of
                local roots meeting global perspectives. This year&apos;s event
                examines how social media, culture, and family shape who we are.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="ripple-hover rounded-2xl glass-card border-brand-red/20 p-8 md:p-10 transition-all duration-700 ease-out-expo glass-card-hover md:col-span-2 lg:col-span-1"
            >
              <span className="inline-block px-3 py-1 rounded-full bg-brand-red text-xs font-semibold uppercase tracking-wider text-white mb-4">
                2025 Theme
              </span>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 font-display italic">
                Stand-Up Comedy
              </h3>
              <p className="text-sm text-white/50 leading-relaxed mb-4">
                A talkshow with the theme &ldquo;Reality Check&rdquo; — 8 teachers
                and 1 student took the stage, each delivering 5 to 15 minutes of
                humor and unique perspectives. The event welcomed G8–12 students
                and staff to share their creativity through stand-up comedy.
              </p>
              <a
                href="https://mp.weixin.qq.com/s/21VIGE2VVcPJYkirjs5V8Q"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold text-brand-red hover:text-red-400 transition-all duration-500 ease-out-expo group"
              >
                Read more on WeChat
                <span className="inline-block transition-transform duration-500 ease-out-expo group-hover:translate-x-1">&rarr;</span>
              </a>
            </motion.div>
          </div>
        </ScrollReveal>

        {/* ── Meet Our Team ── */}
        <ScrollReveal className="mt-24 md:mt-32">
          <p className="text-sm font-semibold uppercase tracking-[0.15em] text-brand-red mb-3">
            Meet Our Team
          </p>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-6 font-display italic">
            The people behind the event
          </h2>
          <p className="text-base text-white/50 max-w-2xl leading-relaxed">
            Our team is entirely student-run. Each member brings unique skills and
            dedication — from event logistics to speaker coaching, from graphic design
            to social media strategy.
          </p>
        </ScrollReveal>

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {departments.map((dept, di) => (
            <ScrollReveal key={dept.name} delay={di * 0.1}>
              <motion.div
                whileHover={{ y: -3 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="rounded-2xl glass-card p-8 md:p-10 h-full transition-all duration-700 ease-out-expo glass-card-hover ripple-hover"
              >
                <h3 className="text-xl font-bold text-white mb-8 pb-4 border-b border-white/6 font-display italic">
                  {dept.name}
                </h3>
                <div className="flex flex-col gap-7">
                  {dept.roles.map((role) => (
                    <div key={role.title}>
                      <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-1">
                        <h4 className="text-sm font-semibold text-white/80">
                          {role.title}
                        </h4>
                        <span className="text-xs font-medium text-brand-red/70">
                          {role.names}
                        </span>
                      </div>
                      {role.desc && (
                        <p className="text-xs text-white/40 leading-relaxed mt-1">
                          {role.desc}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
