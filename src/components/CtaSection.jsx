import React from 'react'

export default function CtaSection() {
  return (
    <section className="py-20 md:py-28 bg-slate-950 reveal">
      <div className="max-w-5xl mx-auto px-6 md:px-8">
        <div className="glass-card rounded-3xl p-10 md:p-14 text-center">
          <h2 className="mb-4">Get your website started today</h2>
          <p className="text-lg text-slate-300 font-light max-w-2xl mx-auto">
            A premium, conversion-ready website that positions your business as the obvious choice.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a href="#contact" className="btn-primary">Get Started</a>
            <a href="#examples" className="btn-secondary">View Examples</a>
          </div>
        </div>
      </div>
    </section>
  )
}
