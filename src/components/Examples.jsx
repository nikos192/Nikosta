import React from 'react'

export default function Examples() {
  const examples = [
    {
      name: "Morgan's Mobile Mechanic",
      description: "Boutique business example - bold landing, clear services, quick contact flow.",
      gradient: 'from-teal-500 via-cyan-500 to-blue-500',
      link: 'https://morgans-teal.vercel.app/'
    },
    {
      name: 'North GC Landscape',
      description: 'Landscape company example - project highlights, services, and trust signals.',
      gradient: 'from-emerald-500 via-green-500 to-lime-500',
      link: 'https://north-gc-landscape-sups-2vij.vercel.app/'
    },
    {
      name: "Sel's Auto",
      description: "Mechanic and repair shop example — clean service pages, contact and gallery.",
      gradient: 'from-amber-500 via-orange-500 to-rose-500',
      link: 'https://selsauto.vercel.app/'
    },
    {
      name: 'Detailia GC',
      description: 'Premium mobile detailing example — strong portfolio, packages and booking CTA.',
      gradient: 'from-slate-600 via-slate-700 to-slate-900',
      link: 'https://detalia-gc-111.vercel.app/'
    }
  ]

  return (
    <section id="examples" className="py-20 md:py-32 bg-navy-50">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <div className="text-center mb-20">
          <h2 className="mb-4">Example websites</h2>
          <p className="text-lg text-navy-700 font-light">
            Here's what we create. Modern, clean, and built for results.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {examples.map((example, index) => (
            <a
              key={index}
              href={example.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-xl border border-navy-100 shadow-sm overflow-hidden flex flex-col h-full transition-transform duration-200 hover:-translate-y-1"
            >
              <div className={`h-44 bg-gradient-to-br ${example.gradient} text-white flex items-end p-4`}>
                <div className="text-sm font-semibold tracking-wide uppercase">{example.name}</div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div>
                  <h3 className="text-lg font-medium text-navy-900 mb-2">{example.name}</h3>
                  <p className="text-sm text-navy-700 mb-4 font-light">{example.description}</p>
                </div>
                <div className="mt-auto flex items-center justify-end">
                  <span className="px-3 py-2 bg-marina-500 text-white rounded-full text-sm">View demo</span>
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="bg-marina-50 rounded-lg border border-marina-200 p-10 text-center">
          <h3 className="text-xl font-light mb-4 text-navy-900">Every website is custom</h3>
          <p className="text-navy-700 font-light max-w-2xl mx-auto">
            These are examples of the style and quality you can expect. We will work with you to create
            something that fits your business, your goals, and your personality. No templates. No cookie-cutter designs.
          </p>
        </div>
      </div>
    </section>
  )
}
