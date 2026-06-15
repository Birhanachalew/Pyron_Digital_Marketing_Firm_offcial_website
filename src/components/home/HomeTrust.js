import React from 'react'

const testimonials = [
  {
    quote:
      'Payron Global gave us a cleaner brand, faster communication, and a website that feels premium and trustworthy.',
    name: 'Client Testimonial',
    role: 'Brand Strategy & Web Delivery',
  },
  {
    quote:
      'The team understood our visual direction quickly and delivered social media and ad creatives that felt on-brand.',
    name: 'Client Testimonial',
    role: 'Commercial Ads & Social Media',
  },
]

const locations = [
  {
    city: 'Ethiopia',
    details: 'Addis Ababa based support for regional clients and local brand work.',
  },
  {
    city: 'Dubai',
    details: 'Dubai presence for clients who need premium B2B positioning and faster coordination.',
  },
]

export default function HomeTrust() {
  return (
    <section id="insights" className="relative overflow-hidden bg-white py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(155,95,255,0.08),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(123,47,255,0.08),transparent_30%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-brandHeadline">Trust</p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
            Refund policy, testimonials, and locations in one premium trust section.
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600">
            Payron Global signals confidence, client care, and international presence through clear proof points.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          <article className="rounded-[2rem] bg-slate-950 p-6 text-white shadow-2xl">
            <p className="text-sm uppercase tracking-[0.3em] text-brandHeadline">Refund Policy</p>
            <h3 className="mt-4 text-2xl font-bold">Risk on us, confidence for you.</h3>
            <ul className="mt-6 space-y-3 text-sm leading-6 text-slate-300">
              <li>1. Guaranteed result or a full refund.</li>
              <li>2. We take the risk, you take the results.</li>
              <li>3. Premium quality with focused project delivery.</li>
            </ul>
          </article>

          <article className="rounded-[2rem] border border-brandHeadline/10 bg-white p-6 shadow-xl lg:col-span-2">
            <p className="text-sm uppercase tracking-[0.3em] text-brandHeadline">Testimonials</p>
            <div className="mt-5 grid gap-4 md:grid-cols-2">
              {testimonials.map((testimonial) => (
                <div key={testimonial.quote} className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-100">
                  <p className="text-sm leading-6 text-slate-700">“{testimonial.quote}”</p>
                  <div className="mt-4">
                    <p className="text-sm font-semibold text-slate-950">{testimonial.name}</p>
                    <p className="text-xs uppercase tracking-[0.25em] text-brandHeadline">{testimonial.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </article>
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {locations.map((location) => (
            <article key={location.city} className="rounded-[2rem] border border-brandHeadline/10 bg-slate-50 p-6 shadow-lg">
              <p className="text-sm uppercase tracking-[0.3em] text-brandHeadline">Location</p>
              <h3 className="mt-3 text-2xl font-bold text-slate-950">{location.city}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{location.details}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
