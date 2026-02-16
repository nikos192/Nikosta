import React from 'react'

export default function Examples() {
  const examples = [
    {
      name: "Morgan's Mobile Mechanic",
      description: "Bold landing, clear services, and frictionless contact flow.",
      image: '/hero.png',
      link: 'https://morgans-teal.vercel.app/'
    },
    {
      name: 'North GC Landscape',
      description: 'Project highlights, services, and trust signals that convert.',
      image: '/hero-sample.jpg',
      link: 'https://north-gc-landscape-sups-2vij.vercel.app/'
    },
    {
      name: "Sel's Auto",
      description: "Clean service pages, gallery, and premium positioning.",
      image: '/hero.png',
      link: 'https://selsauto.vercel.app/'
    }
  ]

  return (
    <section id="examples" className="py-24 md:py-32 bg-slate-950 reveal">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.3em] text-marina-300/80">Portfolio</p>
          <h2 className="mt-4 mb-4">Recent Work</h2>
          <p className="text-lg text-slate-300 font-light">
            A curated selection of high-converting local business websites.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {examples.map((example, index) => (
            <a
              key={index}
              href={example.link}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card rounded-2xl overflow-hidden flex flex-col h-full transition-transform duration-300 hover:-translate-y-2"
            >
              <img src={example.image} alt={`${example.name} website preview`} className="h-44 w-full object-cover" />
              <div className="p-6 flex-1 flex flex-col">
                <div>
                  <h3 className="text-lg font-medium text-white mb-2">{example.name}</h3>
                  <p className="text-sm text-slate-300 mb-6 font-light">{example.description}</p>
                </div>
                <div className="mt-auto flex items-center justify-end">
                  <span className="px-4 py-2 bg-white/10 text-white rounded-full text-sm border border-white/10">
                    View Website
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
