import React, { useRef } from 'react'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline'

function HomeServices() {
    const scrollerRef = useRef(null)

    const scrollCards = (direction) => {
      scrollerRef.current?.scrollBy({
        left: direction === 'left' ? -360 : 360,
        behavior: 'smooth',
      })
    }

    const services = [
      {
        title: 'Social Media Marketing',
        description:
          'Creating and managing social media profiles and campaigns on platforms like Facebook, Instagram, Twitter, LinkedIn, and others. This includes content creation, community management, ad campaigns, and analytics.',
        icon: 'fas fa-medal',
      },
      {
        title: 'Search Engine Optimization (SEO)',
        description:
          'Optimizing websites to improve their visibility and organic search rankings on search engines like Google. This includes keyword research, on-page optimization, technical SEO, link building, and content strategy.',
        icon: 'fas fa-poll',
      },
      {
        title: 'Website Design and Development',
        description:
          'Creating visually appealing and user-friendly websites optimized for performance, responsiveness, and conversion. This includes website design, development, and maintenance.',
        icon: 'fas fa-lightbulb',
      },
      {
        title: 'Content Marketing',
        description:
          'Developing and implementing content strategies to attract, engage, and retain customers. This may involve creating blog posts, articles, videos, infographics, and other types of content to educate and entertain the target audience.',
        icon: 'fas fa-lightbulb',
      },
      {
        title: 'Digital Marketing',
        description:
          'Promotion of products, services, or brands using digital channels and technologies. It encompasses various online marketing strategies and tactics to reach a target audience, engage with them, and drive desired actions such as purchases, sign-ups, or brand awareness.',
        icon: 'fas fa-lightbulb',
      },
      {
        title: 'Online Advertising',
        description:
          'Running display ads, banner ads, or remarketing campaigns on various websites or ad networks to increase brand visibility, drive traffic, and generate leads or conversions.',
        icon: 'fas fa-lightbulb',
      },
    ]

    return (
        <div>
            
            <div className="bg-white py-12">
             <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-brandHeadline">Our Services</p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
          A premium service system for modern brands.
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600 lg:mx-auto">
          Creative, marketing, and digital execution designed for companies that need a cleaner and more international presence.
          </p>
        </div>
        </div>
        </div>
        <section id="services" className="relative block bg-slate-950 pb-20">
          <div className="container mx-auto px-5 lg:pt-10 lg:pb-30">
            <div className="mb-8 flex items-center justify-between gap-4">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-brandHeadline">Services</p>
                <h3 className="mt-2 text-2xl font-bold text-white sm:text-3xl">What we do for brands that want global presence and clean execution.</h3>
              </div>
              <div className="hidden items-center gap-3 md:flex">
                <button
                  type="button"
                  onClick={() => scrollCards('left')}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white transition-transform duration-300 hover:-translate-y-0.5 hover:bg-brandButton"
                  aria-label="Scroll services left"
                >
                  <ChevronLeftIcon className="h-5 w-5" />
                </button>
                <button
                  type="button"
                  onClick={() => scrollCards('right')}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white transition-transform duration-300 hover:-translate-y-0.5 hover:bg-brandButton"
                  aria-label="Scroll services right"
                >
                  <ChevronRightIcon className="h-5 w-5" />
                </button>
              </div>
            </div>
           <p className="mb-6 max-w-xl text-sm leading-6 text-slate-300">
             Scroll through the cards to explore each service. The layout is designed like a premium agency reel, not a flat checklist.
              </p>

            <div
              ref={scrollerRef}
              className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scroll-smooth"
            >
              {services.map((service) => (
                <article
                  key={service.title}
                  className="group min-w-[300px] max-w-sm flex-none snap-start rounded-[1.75rem] border border-white/10 bg-white p-6 text-left shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_24px_60px_rgba(123,47,255,0.2)]"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-brandButton text-white shadow-md transition-transform duration-300 group-hover:scale-110">
                    <i className={`${service.icon} text-xl`}></i>
                  </div>
                  <h6 className="mt-6 text-xl font-semibold text-brandHeadline transition-colors duration-300 group-hover:text-brandAccent">
                    {service.title}
                  </h6>
                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {service.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>
        </div>
    )
}

export default HomeServices
