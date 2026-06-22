'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useInView } from '@/hooks/useInView'
import { Camera, Film, Mic2, Sparkles, Music4, UtensilsCrossed, ArrowUpRight } from 'lucide-react'

const servicesList = [
  {
    id: 1,
    icon: <Camera className="w-5 h-5" />,
    title: 'Professional Photography',
    description: 'Candid and formal event photography with professionally edited galleries delivered within days.',
    price: '₹2,000',
    image: 'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=600&q=80',
    tag: 'Most Booked',
  },
  {
    id: 2,
    icon: <Film className="w-5 h-5" />,
    title: 'Videography & Reels',
    description: 'Full event coverage with edited highlight reels, teasers, and social media cuts.',
    price: '₹2,400',
    image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=600&q=80',
    tag: null,
  },
  {
    id: 3,
    icon: <Mic2 className="w-5 h-5" />,
    title: 'MC & Host Arrangement',
    description: 'Professional emcee to anchor your ceremony and engage your guests throughout the event.',
    price: '₹5,000',
    image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=600&q=80',
    tag: null,
  },
  {
    id: 4,
    icon: <Sparkles className="w-5 h-5" />,
    title: 'Venue Decoration & Setup',
    description: 'Theme-based décor, stage backdrops, floral arrangements, and complete entrance installations.',
    price: '₹6,000',
    image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=600&q=80',
    tag: 'Premium',
  },
  {
    id: 5,
    icon: <Music4 className="w-5 h-5" />,
    title: 'Sound, Lighting & AV',
    description: 'Professional PA systems, stage lighting, LED screens, projectors, and full technical crew.',
    price: '₹9,200',
    image: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=600&q=80',
    tag: null,
  },
  {
    id: 6,
    icon: <UtensilsCrossed className="w-5 h-5" />,
    title: 'Catering Coordination',
    description: 'Menu planning, caterer liaison, serving staff coordination, and complete food setup.',
    price: '₹10,800',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80',
    tag: null,
  },
]

export default function Services() {
  const [isVisible, ref] = useInView()

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div
          ref={ref}
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-5xl sm:text-6xl font-light text-foreground mb-6">
            Our <span className="text-accent">Services</span>
          </h2>
          <p className="text-lg text-foreground/55 font-light max-w-2xl mx-auto">
            Comprehensive event solutions crafted to perfection. Each service is designed to elevate your special occasion.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
          {servicesList.map((service, index) => (
            <div
              key={service.id}
              className={`group rounded-2xl overflow-hidden glass-effect hover:scale-[1.02] transition-all duration-500 cursor-pointer ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: isVisible ? `${index * 100}ms` : '0ms' }}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                {/* Tag */}
                {service.tag && (
                  <span className="absolute top-3 left-3 text-[10px] uppercase tracking-widest font-light px-3 py-1 rounded-full bg-accent/80 text-background">
                    {service.tag}
                  </span>
                )}
                {/* Icon on image */}
                <div className="absolute bottom-3 right-3 w-9 h-9 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white">
                  {service.icon}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-light text-foreground mb-2 group-hover:text-accent transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-foreground/55 font-light text-sm mb-5 leading-relaxed">
                  {service.description}
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-foreground/8">
                  <div>
                    <span className="text-[10px] text-foreground/35 font-light uppercase tracking-widest block mb-0.5">Starting at</span>
                    <span className="text-lg font-light text-accent">{service.price}</span>
                  </div>
                  <Link
                    href="/contact"
                    className="w-8 h-8 rounded-full glass-effect-dark flex items-center justify-center text-accent opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110"
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
