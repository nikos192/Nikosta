import React from "react";

export default function Why() {
  const reasons = [
    {
      title: "We are Local",
      description: "Based on the Gold Coast. We understand local business needs and the local market."
    },
    {
      title: "Premium Presentation",
      description: "High-end visual design that makes your business look established and trustworthy."
    },
    {
      title: "Simple, Modern Design",
      description: "Clean, focused websites that look professional and work beautifully on every device."
    },
    {
      title: "Clear Communication",
      description: "We explain what we are doing and why. No jargon. No buzzwords."
    },
    {
      title: "Easy to Update",
      description: "Your website works for you, not the other way around. Built for quick updates."
    },
    {
      title: "Focused on Results",
      description: "We design with your goals in mind so your website drives real enquiries."
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-slate-950 reveal">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.3em] text-marina-300/80">Why us</p>
          <h2 className="mt-4 mb-4">Why VELORY</h2>
          <p className="text-lg text-slate-300 font-light max-w-2xl mx-auto">
            Premium execution with a fast, focused process.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="glass-card rounded-2xl p-8 hover:-translate-y-2 transition-transform duration-300"
            >
              <h3 className="text-lg font-medium mb-3 text-white">{reason.title}</h3>
              <p className="text-slate-300 leading-relaxed font-light text-sm">
                {reason.description}
              </p>
            </div>
          ))}
        </div>

        <div className="relative overflow-hidden rounded-3xl glass-card p-12 md:p-16 text-center">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-light mb-6 leading-tight text-white">
              Ready to get started?
            </h3>
            <p className="text-slate-300 text-lg font-light mb-8 leading-relaxed">
              Let us design a premium website that makes your business the obvious choice.
            </p>
            <a href="#contact" className="btn-primary">
              Send a Message
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
