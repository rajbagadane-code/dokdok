'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useInView } from '@/hooks/useInView'
import { Camera, Film, Mic2, Sparkles, Music4, UtensilsCrossed, ArrowRight } from 'lucide-react'

const services = [
  {
    icon: <Camera className="w-5 h-5" />,
    title: 'Photography',
    desc: 'Candid & formal photography with edited galleries delivered within days.',
    price: '₹2,000',
    image: 'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=500&q=80',
  },
  {
    icon: <Film className="w-5 h-5" />,
    title: 'Videography & Reels',
    desc: 'Full coverage with highlight reels, teasers, and social media cuts.',
    price: '₹2,400',
    image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=500&q=80',
  },
  {
    icon: <Mic2 className="w-5 h-5" />,
    title: 'MC & Host',
    desc: 'Professional emcee to anchor your ceremony and engage your guests.',
    price: '₹5,000',
    image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=500&q=80',
  },
  {
    icon: <Sparkles className="w-5 h-5" />,
    title: 'Venue Décor',
    desc: 'Theme-based décor, stage backdrops, floral and entrance installations.',
    price: '₹6,000',
    image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=500&q=80',
  },
  {
    icon: <Music4 className="w-5 h-5" />,
    title: 'Sound & Lighting',
    desc: 'Professional PA, stage lighting, LED screens and full technical crew.',
    price: '₹9,200',
    image: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=500&q=80',
  },
  {
    icon: <UtensilsCrossed className="w-5 h-5" />,
    title: 'Catering',
    desc: 'Menu planning, caterer liaison, serving staff and complete food setup.',
    price: '₹10,800',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=500&q=80',
  },
]

export default function ServicesPreview() {
  const [isVisible, ref] = useInView()
  const [hovered, setHovered] = useState<number | null>(null)

  return (
    <section className="py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        <div
          ref={ref}
          className={`flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div>
            <span className="inline-block text-xs font-light uppercase tracking-[0.3em] text-accent/80 mb-3 px-4 py-1.5 glass-effect rounded-full">
              What We Offer
            </span>
            <h2 className="text-4xl sm:text-5xl font-light text-foreground mt-3">
              Our <span className="text-accent">Services</span>
            </h2>
          </div>
          <Link href="/services" className="group inline-flex items-center gap-2 text-sm font-light text-foreground/55 hover:text-accent transition-colors duration-300 shrink-0">
            View all services
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <div
              key={s.title}
              className={`group relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: isVisible ? `${i * 80}ms` : '0ms' }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* Image */}
              <div className="relative h-52">
                <Image
                  src={s.image}
                  alt={s.title}
                  fill
                  className={`object-cover transition-transform duration-700 ${hovered === i ? 'scale-110' : 'scale-100'}`}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                {/* Icon */}
                <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white">
                  {s.icon}
                </div>
              </div>

              {/* Content overlay at bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <h3 className="text-base font-light text-white mb-1">{s.title}</h3>
                <div className={`overflow-hidden transition-all duration-500 ${hovered === i ? 'max-h-20 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <p className="text-xs text-white/70 font-light leading-relaxed mb-2">{s.desc}</p>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-light text-accent">{s.price}</span>
                  <span className="text-[10px] text-white/40 font-light uppercase tracking-wider">Starting at</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
