import React from 'react'

export default function WhoItFor() {
  const businesses = [
    {
      icon: '🔧',
      title: 'Mechanics & Auto Repair',
      description: 'Show your expertise and services to car owners in the area.',
    },
    {
      icon: '🚗',
      title: 'Mobile Detailers',
      description: 'Display your portfolio and make it easy for customers to book.',
    },
    {
      icon: '🏗️',
      title: 'Trades & Contractors',
      description: 'Plumbers, electricians, builders — anyone with a local service.',
    },
    {
      icon: '💇',
      title: 'Hair & Beauty',
      description: 'Salons, studios, and personal services looking for a digital home.',
    },
    {
      icon: '🏠',
      title: 'Real Estate & Property',
      description: 'Real estate agents, property managers, and home services.',
    },
    {
      icon: '🎯',
      title: 'Any Local Service',
      description: 'If you serve customers in the Gold Coast, we can help.',
    },
  ]

  return (
    <section id="who-its-for" className="py-24 md:py-32 bg-slate-950 reveal">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.3em] text-marina-300/80">Audience</p>
          <h2 className="mt-4 mb-4">Who it's for</h2>
          <p className="text-lg text-slate-300 font-light">
            Any local service business on the Gold Coast.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {businesses.map((business, index) => (
            <div
              key={index}
              className="glass-card rounded-2xl p-8 hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="text-4xl mb-4">{business.icon}</div>
              <h3 className="text-lg font-medium mb-3 text-white">{business.title}</h3>
              <p className="text-slate-300 text-sm leading-relaxed font-light">
                {business.description}
              </p>
            </div>
          ))}
        </div>

        <div className="glass-card rounded-2xl p-10">
          <h3 className="text-xl font-light mb-4 text-white">Why local businesses trust us</h3>
          <ul className="space-y-3 text-slate-200 font-light">
            <li className="flex gap-3">
              <span className="text-marina-200 font-medium">✓</span>
              <span>We are based on the Gold Coast, we know local businesses</span>
            </li>
            <li className="flex gap-3">
              <span className="text-marina-200 font-medium">✓</span>
              <span>Fast turnaround with a premium, polished finish</span>
            </li>
            <li className="flex gap-3">
              <span className="text-marina-200 font-medium">✓</span>
              <span>We build websites that are simple to understand and update</span>
            </li>
            <li className="flex gap-3">
              <span className="text-marina-200 font-medium">✓</span>
              <span>We talk straight — no agency jargon or buzzwords</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
