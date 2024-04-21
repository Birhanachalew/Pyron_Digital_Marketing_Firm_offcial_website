/* This example requires Tailwind CSS v2.0+ */
import { AnnotationIcon, GlobeAltIcon, LightningBoltIcon, ScaleIcon } from '@heroicons/react/outline'

const features = [
  {
    name: 'website',
    description:
      'We develop websites that combine creativity, cutting-edge technology and ease of use. Whether you want to inform, communicate, sell or recruit, Eminence, your digital solutions agency in Tunis, designs your tailor-made site.',
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
    name: 'Mobile Application',
    description:
      'We are developing native mobile applications on the most popular platforms (Android and iOS) according to the latest UX trends, as well as multi-platform hybrid applications using React Native or Flutter as well as mobile games using Unity.',
    icon: LightningBoltIcon,
  },
  {
    name: 'Digital Marketing',
    description:
      'Eminence, a digital solutions agency in Tunis, exploits digital tactics that generate traffic, maximize your chances of being noticed by your target audience, and positioning you in a virtuous cycle of increasing your turnover.',
    icon: AnnotationIcon,
  },
  {
    name: 'Social networks',
    description:
      'Now a must, social networks offer you the opportunity to communicate more effectively with your target and acquire new customers. Eminence, your digital agency in Tunis, uses pioneering techniques to benefit from these communication channels to the best of their ability.',
    icon: AnnotationIcon,
  },
]

export default function OurServices() {
  return (
    <div className="py-12 bg-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-green-600 font-semibold tracking-wide uppercase">Our Services</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          Our Services
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
          Our expertise includes a set of complementary solutions to enable your company to position
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-green-600">{feature.name}</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
