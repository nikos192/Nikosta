import React from 'react'

export default function Hero({ onScrollToSection }) {
  return (
    <section className="min-h-[85vh] pt-28 pb-16 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-700 flex items-center">
      <div className="max-w-6xl mx-auto px-6 md:px-8 grid md:grid-cols-2 gap-12 items-center">
        <div className="text-left text-marina-100">
          <div className="inline-flex flex-col items-center mb-6">
            <div className="bg-navy-900 rounded-full p-2 shadow-xl flex items-center justify-center">
              <img src="/logo.png" alt="Nikosta Systems" className="h-16 w-16 object-contain rounded-full" />
            </div>
            <span className="mt-2 text-xs tracking-widest text-marina-200 font-semibold uppercase">Nikosta Systems</span>
          </div>
          <div className="inline-block mb-4 px-3 py-1 rounded-full bg-marina-100/20 text-marina-100 text-sm font-medium">Gold Coast service websites</div>
          <h1 className="mb-4 text-marina-50 leading-tight">
            Websites for local businesses — built free, pay only if you want it.
          </h1>

          <p className="text-lg text-marina-100/80 mb-6 max-w-xl leading-relaxed font-light">
            We design and build a professional website for your business at no cost. You review it — keep it only if you like it. No pressure, no contracts.
          </p>

          <div className="flex flex-wrap gap-4 items-center mb-6">
            <a href="tel:+61497469408" className="inline-flex items-center gap-3 px-5 py-3 bg-marina-500 text-white font-medium rounded-full shadow-md hover:bg-marina-400 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5h2l2 7 4-4 5 5 3-3v6a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"/></svg>
              Call 0497 469 408
            </a>

            <button onClick={() => onScrollToSection('how-it-works')} className="px-5 py-3 border border-marina-200 text-marina-100/80 rounded-full hover:bg-marina-100/20 hover:text-marina-50 transition">
              See packages
            </button>
          </div>

          <div className="flex gap-6 mt-4">
            <div className="text-center">
              <div className="text-2xl font-semibold text-marina-50">500+</div>
              <div className="text-sm text-marina-100/70">Happy clients</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-semibold text-marina-50">5★</div>
              <div className="text-sm text-marina-100/70">Rated Service</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-semibold text-marina-50">10+</div>
              <div className="text-sm text-marina-100/70">Years experience</div>
            </div>
          </div>
        </div>

        <div className="order-first md:order-last">
          <div className="rounded-2xl border border-marina-200/30 bg-navy-800/60 shadow-premium p-10 md:p-12 flex items-center justify-center">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-3xl bg-marina-100/10 border border-marina-200/40 flex items-center justify-center">
              <svg
                viewBox="0 0 120 120"
                className="w-20 h-20 md:w-24 md:h-24 text-marina-100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect x="18" y="22" width="84" height="64" rx="10" stroke="currentColor" strokeWidth="6" />
                <path d="M34 72L52 52L66 64L88 40" stroke="currentColor" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="40" cy="44" r="6" fill="currentColor" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
