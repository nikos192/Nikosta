import React from 'react'

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32 bg-slate-950 reveal">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-sm uppercase tracking-[0.3em] text-marina-300/80">Services</p>
          <h2 className="mt-4 mb-4">Everything you need to launch fast</h2>
          <p className="text-lg text-slate-300 font-light">
            A premium end-to-end website service designed for local businesses that want to look established.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <div className="glass-card rounded-2xl p-8 hover:-translate-y-2 transition-transform duration-300">
            <h3 className="text-lg font-medium text-white mb-3">Website design</h3>
            <p className="text-sm text-slate-300 font-light leading-relaxed">
              Modern layouts and brand-aware visuals that make your business feel credible and premium.
            </p>
          </div>

          <div className="glass-card rounded-2xl p-8 hover:-translate-y-2 transition-transform duration-300">
            <h3 className="text-lg font-medium text-white mb-3">Website development</h3>
            <p className="text-sm text-slate-300 font-light leading-relaxed">
              Fast, mobile-first builds that load quickly and make it effortless to contact you.
            </p>
          </div>

          <div className="glass-card rounded-2xl p-8 hover:-translate-y-2 transition-transform duration-300">
            <h3 className="text-lg font-medium text-white mb-3">Website refresh</h3>
            <p className="text-sm text-slate-300 font-light leading-relaxed">
              Elevate an existing site with clearer messaging, cleaner structure, and a premium finish.
            </p>
          </div>
        </div>

        <div className="mt-10 text-center">
          <a href="#contact" className="btn-primary">Talk to us about your website</a>
        </div>
      </div>
    </section>
  )
}
