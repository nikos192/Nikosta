import React from 'react'

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Sophie Tran',
      business: 'Brightway Plumbing',
      quote: 'Nikosta Systems made our business look established overnight. The site is clean, fast, and customers love it.'
    },
    {
      name: 'Liam Hughes',
      business: 'Coastal Auto Care',
      quote: 'We went live in two days and saw more enquiries immediately. Premium feel without the agency headache.'
    },
    {
      name: 'Isla Morgan',
      business: 'Gold Coast Landscapes',
      quote: 'Professional, smooth process. The website feels like a real brand now, not just a placeholder.'
    }
  ]

  return (
    <section id="testimonials" className="py-24 md:py-32 bg-slate-950 reveal">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <div className="text-center mb-14">
          <p className="text-sm uppercase tracking-[0.3em] text-marina-300/80">Social Proof</p>
          <h2 className="mt-4">Trusted by local businesses</h2>
          <p className="text-lg text-slate-300 font-light mt-4">
            Premium websites that earn trust and drive real enquiries.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div key={testimonial.name} className="glass-card rounded-2xl p-8 hover:-translate-y-2 transition-transform duration-300">
              <p className="text-slate-200/90 font-light leading-relaxed">"{testimonial.quote}"</p>
              <div className="mt-6">
                <p className="text-white font-semibold">{testimonial.name}</p>
                <p className="text-sm text-marina-200/80">{testimonial.business}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
