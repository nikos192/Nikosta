import React from 'react'

export default function Hero({ onScrollToSection }) {
  return (
    <section className="relative min-h-screen pt-32 pb-20 bg-slate-950 overflow-hidden">
      <div className="absolute inset-0 hero-animated bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" aria-hidden="true" />
      <div className="absolute -top-32 -left-20 h-80 w-80 rounded-full bg-marina-400/20 blur-3xl" aria-hidden="true" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-sky-400/10 blur-3xl" aria-hidden="true" />

      <div className="relative max-w-6xl mx-auto px-6 md:px-8 grid md:grid-cols-2 gap-12 items-center">
        <div className="text-left text-white reveal">
          <div className="inline-flex items-center gap-3 mb-6 glass-muted rounded-full px-4 py-2 text-xs uppercase tracking-[0.3em] text-marina-200/80">
            Premium Gold Coast Agency
          </div>
          <h1 className="mb-6 leading-tight">
            Get a premium website for your business in 48 hours
          </h1>

          <p className="text-lg text-slate-300 mb-8 max-w-xl leading-relaxed font-light">
            We design fast, modern websites that make your business look established and attract more customers.
          </p>

          <div className="flex flex-wrap gap-4 items-center mb-10">
            <a
              href="#contact"
              onClick={(event) => {
                event.preventDefault()
                onScrollToSection('contact')
              }}
              className="btn-primary"
            >
              Get Started
            </a>

            <a href="#examples" className="btn-secondary">
              View Examples
            </a>
          </div>

          <div className="flex gap-8 text-sm text-slate-300">
            <div>
              <p className="text-xl font-semibold text-white">48h</p>
              <p className="text-slate-400">Average launch</p>
            </div>
            <div>
              <p className="text-xl font-semibold text-white">5.0</p>
              <p className="text-slate-400">Client rating</p>
            </div>
            <div>
              <p className="text-xl font-semibold text-white">500+</p>
              <p className="text-slate-400">Websites shipped</p>
            </div>
          </div>
        </div>

        <div className="order-first md:order-last reveal">
          <div className="relative rounded-3xl glass-card p-4 md:p-6 float-slow">
            <div className="absolute -top-6 -right-6 h-20 w-20 rounded-full bg-marina-400/30 blur-2xl" aria-hidden="true" />
            <img
              src="/hero.png"
              alt="Nikosta Systems website mockup"
              className="w-full h-72 md:h-[420px] object-cover rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
