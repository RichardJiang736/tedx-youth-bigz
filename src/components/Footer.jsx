import ScrollReveal from './ScrollReveal'

export default function Footer() {
  return (
    <footer id="contact" className="bg-brand-black text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-brand-red/5 blur-[120px] translate-x-1/3 -translate-y-1/3" />

      <div className="max-w-7xl mx-auto px-6 py-16 md:py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <ScrollReveal>
            <div>
              <span className="text-brand-red font-black text-xl tracking-tight">
                TEDx<span className="text-white">BIGZ</span>
              </span>
              <span className="text-white font-bold text-xl tracking-tight ml-2 font-display italic">
                Youth
              </span>
              <p className="mt-4 text-sm text-gray-400 leading-relaxed max-w-xs">
                Independently organized TEDx event at BIGZ. Ideas worth spreading,
                voices worth hearing.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-300 mb-5">
                Quick Links
              </h4>
              <div className="flex flex-col gap-2">
                {['Home', 'About', 'Speakers', 'Events', 'FAQ'].map((link) => (
                  <a
                    key={link}
                    href={`#${link.toLowerCase()}`}
                    className="group text-sm text-gray-400 hover:text-white transition-all duration-500 ease-out-expo inline-flex items-center gap-2 w-fit"
                  >
                    <span className="h-px w-0 group-hover:w-3 bg-brand-red transition-all duration-500 ease-out-expo" />
                    {link}
                  </a>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-300 mb-5">
                Connect
              </h4>
              <div className="flex flex-col gap-3">
                <a
                  href="mailto:tedxyouthbigz@example.com"
                  className="text-sm text-gray-400 hover:text-white transition-all duration-500 ease-out-expo"
                >
                  tedxbigzyouth@example.com
                </a>
                <div className="flex gap-5 mt-2">
                  {[
                    { name: 'Instagram', href: 'https://www.instagram.com/tedx_bigzyouth?utm_source=qr' },
                    { name: '小红书', href: 'https://bit.ly/49uwo7y' },
                    { name: '公众号', href: '#' },
                  ].map((platform) => (
                    <a
                      key={platform.name}
                      href={platform.href}
                      target={platform.name === 'Instagram' ? '_blank' : undefined}
                      rel={platform.name === 'Instagram' ? 'noopener noreferrer' : undefined}
                      className="text-sm text-gray-500 hover:text-white transition-all duration-500 ease-out-expo hover:-translate-y-0.5"
                    >
                      {platform.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500">
            This independent TEDx event is operated under license from TED.
          </p>
          <p className="text-xs text-gray-600">
            &copy; {new Date().getFullYear()} TEDx BIGZ Youth. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
