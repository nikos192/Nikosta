import React from 'react'

export default function HowItWorks() {
  const steps = [
    {
      title: 'We learn about your business',
      description: 'A fast discovery call to understand your services, brand voice, and ideal customers.',
    },
    {
      title: 'We design your website',
      description: 'Premium, conversion-focused design with a modern layout and clear messaging.',
    },
    {
      title: 'Your website goes live in 48 hours',
      description: 'We launch quickly, test everything, and make sure it looks perfect on mobile.',
    },
  ]

  return (
    <section id="how-it-works" className="py-24 md:py-32 bg-slate-950 reveal">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.3em] text-marina-300/80">Process</p>
          <h2 className="mt-4 mb-4">How It Works</h2>
          <p className="text-lg text-slate-300 font-light">Three precise steps, zero noise.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={step.title} className="glass-card rounded-2xl p-8 hover:-translate-y-2 transition-transform duration-300">
              <div className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white font-semibold mb-6">
                {index + 1}
              </div>
              <h3 className="mb-4">{step.title}</h3>
              <p className="text-slate-300 font-light leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
