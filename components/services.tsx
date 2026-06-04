'use client'

import { useInView } from '@/hooks/useInView'

const servicesList = [
  {
    id: 1,
    icon: '📸',
    title: 'Professional Photography',
    description: 'Candid and formal event photography with professionally edited galleries delivered within days.',
    price: '₹2,000',
  },
  {
    id: 2,
    icon: '🎬',
    title: 'Videography & Reels',
    description: 'Full event coverage with edited highlight reels, teasers, and social media cuts.',
    price: '₹2,400',
  },
  {
    id: 3,
    icon: '🎤',
    title: 'MC & Host Arrangement',
    description: 'Professional emcee to anchor your ceremony and engage your guests throughout the event.',
    price: '₹5,000',
  },
  {
    id: 4,
    icon: '✨',
    title: 'Venue Decoration & Setup',
    description: 'Theme-based décor, stage backdrops, floral arrangements, and complete entrance installations.',
    price: '₹6,000',
  },
  {
    id: 5,
    icon: '🎵',
    title: 'Sound, Lighting & AV',
    description: 'Professional PA systems, stage lighting, LED screens, projectors, and full technical crew.',
    price: '₹9,200',
  },
  {
    id: 6,
    icon: '🍽️',
    title: 'Catering Coordination',
    description: 'Menu planning, caterer liaison, serving staff coordination, and complete food setup.',
    price: '₹10,800',
  },
]

export default function Services() {
  const [isVisible, ref] = useInView()

  return (
    <section id="services" className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent via-accent/5 to-transparent">
      <div className="max-w-7xl mx-auto">
        <div
          ref={ref}
          className={`text-center mb-20 transition-all duration-700 ${
            isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-5xl sm:text-6xl font-light text-foreground mb-6">
            Our<span className="text-accent"> Services</span>
          </h2>
          <p className="text-lg text-foreground/60 font-light max-w-2xl mx-auto">
            Comprehensive event solutions crafted to perfection. Each service is designed to elevate your special occasion.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesList.map((service, index) => (
            <div
              key={service.id}
              className={`glass-effect p-8 rounded-2xl group hover:scale-105 transition-all duration-500 cursor-pointer ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: isVisible ? `${index * 100}ms` : '0ms' }}
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-light text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-foreground/60 font-light text-sm mb-6 leading-relaxed">
                {service.description}
              </p>
              <div className="flex items-center justify-between pt-4 border-t border-foreground/10">
                <span className="text-sm text-foreground/50 font-light uppercase tracking-wider">
                  Starting at
                </span>
                <span className="text-lg font-light text-accent">
                  {service.price}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
