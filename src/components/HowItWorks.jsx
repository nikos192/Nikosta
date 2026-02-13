import React from 'react'

export default function HowItWorks() {
  const steps = [
    {
      number: 1,
      title: 'We design and build your website',
      description: 'We create a professional, modern website tailored to your business. Clean design, mobile-ready, easy to navigate. No fluff.',
    },
    {
      number: 2,
      title: 'You review it',
      description: 'Take your time. Look it over. Show it to people. No pressure. This is your website and you need to love it.',
    },
    {
      number: 3,
      title: 'Keep it only if you like it',
      description: 'If you want it, we\'ll talk about owning it. If not, no stress and no complaints. You\'re free to go.',
    },
  ]

  return (
    <section id="how-it-works" className="py-20 md:py-32 bg-navy-50">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <div className="text-center mb-20">
          <h2 className="mb-4">How it works</h2>
          <p className="text-lg text-navy-700 font-light">Three simple steps.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {steps.map((step) => (
            <div key={step.number} className="flex flex-col">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-navy-900 text-marina-100 flex items-center justify-center text-lg font-light border-2 border-marina-300">
                  {step.number}
                </div>
              </div>
              <h3 className="mb-4 text-navy-900">{step.title}</h3>
              <p className="text-navy-700 leading-relaxed font-light">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 p-8 bg-marina-50 rounded-xl border border-marina-200">
          <p className="text-center text-navy-800 font-light text-base leading-relaxed">
            We are confident in our work. If you like it, you will want to buy it. If you do not, 
            we part as friends. This approach means we focus on quality, not sales tactics.
          </p>
        </div>
      </div>
    </section>
  )
}
