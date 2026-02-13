import React from 'react'

export default function Examples() {
  const examples = [
    {
      name: "Sel's Auto",
      description: "Mechanic and repair shop example — clean service pages, contact and gallery.",
      image: 'https://selsauto.vercel.app/media/photo-of-exterior.png',
      link: 'https://selsauto.vercel.app/'
    },
    {
      name: 'Detailia GC',
      description: 'Premium mobile detailing example — strong portfolio, packages and booking CTA.',
      image: 'https://detalia-gc-111.vercel.app/images/car-1.png',
      link: 'https://detalia-gc-111.vercel.app/'
    }
  ]

  return (
    <section className="py-20 md:py-32 bg-navy-50">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <div className="text-center mb-20">
          <h2 className="mb-4">Example websites</h2>
          <p className="text-lg text-navy-700 font-light">
            Here's what we create. Modern, clean, and built for results.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {examples.map((example, index) => (
            <div key={index} className="bg-white rounded-xl border border-navy-100 shadow-sm overflow-hidden flex flex-col h-full">
              <div className="h-44 bg-navy-50 overflow-hidden">
                <img src={example.image} alt={example.name} className="w-full h-full object-cover" />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div>
                  <h3 className="text-lg font-medium text-navy-900 mb-2">{example.name}</h3>
                  <p className="text-sm text-navy-700 mb-4 font-light">{example.description}</p>
                </div>
                <div className="mt-auto flex items-center justify-between">
                  <div className="text-sm text-navy-900 font-semibold">From $150</div>
                  <div className="flex gap-2">
                    <a href={example.link} target="_blank" rel="noopener noreferrer" className="px-3 py-2 bg-marina-500 text-white rounded-full text-sm hover:bg-marina-400 transition-colors">View demo</a>
                    <button className="px-3 py-2 border border-navy-200 text-navy-800 rounded-full text-sm hover:border-marina-300 hover:text-navy-900 transition-colors">Request Quote</button>
                  </div>
                </div>
              </div>
            </div>
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
