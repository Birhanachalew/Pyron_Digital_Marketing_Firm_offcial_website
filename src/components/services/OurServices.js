/* This example requires Tailwind CSS v2.0+ */
import { useRef } from 'react'
import { AnnotationIcon, GlobeAltIcon, LightningBoltIcon, ScaleIcon } from '@heroicons/react/outline'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline'

const features = [
  {
    name: 'Pay-Per-Click Advertising',
    description:
      'PC involves creating and managing online advertising campaigns where advertisers pay a fee each time their ad is clicked. Digital marketing firms help businesses set up and optimize PPC campaigns on platforms such as Google Ads, Bing Ads, and social media advertising platforms',
    icon: GlobeAltIcon,
  },
  {
    name: 'Search engine optimization(SEO)',
    description:
      'Our SEO/SEA team sets up a referencing roadmap that harmonizes with the requirements of your visibility project. A study of words is carefully fixed to make the referencing mission profitable.',
    icon: ScaleIcon,
  },
  {
    name: 'Web Application',
    description:
      'We develop custom web applications, Progressive web apps, interactive applications or API integration and third-party tools, we offer you the technology best suited to your goals and budget.',
    icon: AnnotationIcon,
  },
  {
    name: 'Social Media Marketing',
    description:
      'PAyron assist businesses in leveraging social media platforms like Facebook, Instagram, Twitter, and LinkedIn to promote their products or services. They develop social media strategies, create engaging content, manage social media accounts, and run targeted advertising campaigns.',
    icon: LightningBoltIcon,
  },
  {
    name: 'Digital Marketing',
    description:
      'Eminence, a digital solutions agency in Tunis, exploits digital tactics that generate traffic, maximize your chances of being noticed by your target audience, and positioning you in a virtuous cycle of increasing your turnover.',
    icon: AnnotationIcon,
  },
  {
    name: 'Content Marketing:',
    description:
      'Content marketing focuses on creating and distributing valuable, relevant, and informative content to attract and engage a target audience. Digital marketing firms help develop content strategies, produce blog posts, articles, videos, infographics, and other forms of content to enhance brand visibility and drive customer engagement.',
    icon: AnnotationIcon,
  },
]

export default function OurServices() {
  const scrollerRef = useRef(null)

  const scrollCards = (direction) => {
    scrollerRef.current?.scrollBy({
      left: direction === 'left' ? -360 : 360,
      behavior: 'smooth',
    })
  }

  return (
    <div className="relative overflow-hidden py-12 bg-slate-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(155,95,255,0.18),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(123,47,255,0.14),transparent_30%)]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative lg:text-center">
          <h2 className="text-base text-brandHeadline font-semibold tracking-wide uppercase">Our Services</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
          Our Services
          </p>
          <p className="mt-4 max-w-2xl text-xl text-slate-300 lg:mx-auto">
          Our expertise includes a set of complementary solutions to enable your company to position
          </p>
        </div>

        <div className="relative mt-10">
          <div className="mb-6 flex items-center justify-end gap-3">
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
          <div
            ref={scrollerRef}
            className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scroll-smooth"
          >
            {features.map((feature) => (
              <article
                key={feature.name}
                className="group min-w-[300px] max-w-sm flex-none snap-start rounded-[1.75rem] border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur transition-all duration-300 hover:-translate-y-2 hover:border-brandHeadline/30 hover:shadow-[0_24px_60px_rgba(155,95,255,0.18)]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-md bg-brandButton text-white shadow-md transition-transform duration-300 group-hover:scale-110">
                  <feature.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <p className="mt-5 text-lg leading-6 font-medium text-brandHeadline transition-colors duration-300 group-hover:text-brandAccent">{feature.name}</p>
                <p className="mt-3 text-base leading-6 text-slate-300">{feature.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
