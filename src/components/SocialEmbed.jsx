import { motion } from 'framer-motion'
import ScrollReveal from './ScrollReveal'

const platforms = [
  { name: 'Instagram', handle: '@tedxyouthbigz', href: 'https://instagram.com', gradient: 'from-pink-500 to-orange-400' },
  { name: '小红书', handle: '@tedxyouthbigz', href: '#', gradient: 'from-red-500 to-red-600', label: 'RED' },
  { name: '公众号', handle: 'TEDx Youth BIGZ', href: '#', gradient: 'from-emerald-500 to-green-600', label: 'WeChat' },
]

export default function SocialEmbed() {
  return (
    <section className="py-24 md:py-32 bg-brand-cream relative overflow-hidden">
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-brand-red/3 blur-[120px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <ScrollReveal>
          <p className="text-sm font-semibold uppercase tracking-[0.15em] text-brand-red mb-3">
            Follow Us
          </p>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-brand-black tracking-tight font-display italic cursor-default">
            Stay connected
          </h2>
        </ScrollReveal>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {platforms.map((p, i) => (
            <ScrollReveal key={p.name} delay={i * 0.12}>
              <motion.a
                href={p.href}
                target={p.name === 'Instagram' ? '_blank' : undefined}
                rel={p.name === 'Instagram' ? 'noopener noreferrer' : undefined}
                whileHover={{ y: -4, scale: 1.02 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="group relative overflow-hidden rounded-2xl bg-white/80 backdrop-blur-sm border border-black/5 p-8 transition-all duration-700 ease-out-expo hover:shadow-xl hover:shadow-black/5 hover:border-black/10 ripple-hover block"
              >
                <div
                  className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${p.gradient} origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out-expo`}
                />
                <h3 className="text-xl font-bold text-brand-black mt-2">{p.name}</h3>
                {p.label && (
                  <p className="text-xs font-semibold uppercase tracking-wider text-brand-gray mt-1">
                    {p.label}
                  </p>
                )}
                <p className="text-sm text-brand-gray mt-4 font-mono">{p.handle}</p>
                <span className="inline-flex items-center gap-1.5 mt-6 text-sm font-semibold text-brand-black/40 group-hover:text-brand-red transition-all duration-500 ease-out-expo">
                  Follow
                  <span className="inline-block transition-transform duration-500 ease-out-expo group-hover:translate-x-1">&rarr;</span>
                </span>
              </motion.a>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
