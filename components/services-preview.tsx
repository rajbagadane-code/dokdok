'use client'

import Link from 'next/link'
import { useInView } from '@/hooks/useInView'
import { Camera, Film, Mic2, Sparkles, Music4, UtensilsCrossed, ArrowRight } from 'lucide-react'

const services = [
  { icon: <Camera className="w-6 h-6" />, title: 'Photography', desc: 'Candid & formal event photography with edited galleries delivered within days.', price: '₹2,000' },
  { icon: <Film className="w-6 h-6" />, title: 'Videography & Reels', desc: 'Full coverage with highlight reels, teasers, and social media cuts.', price: '₹2,400' },
  { icon: <Mic2 className="w-6 h-6" />, title: 'MC & Host', desc: 'Professional emcee to anchor your ceremony and engage your guests.', price: '₹5,000' },
  { icon: <Sparkles className="w-6 h-6" />, title: 'Venue Décor', desc: 'Theme-based décor, stage backdrops, floral and entrance installations.', price: '₹6,000' },
  { icon: <Music4 className="w-6 h-6" />, title: 'Sound & Lighting', desc: 'Professional PA, stage lighting, LED screens and full technical crew.', price: '₹9,200' },
  { icon: <UtensilsCrossed className="w-6 h-6" />, title: 'Catering', desc: 'Menu planning, caterer liaison, serving staff and complete food setup.', price: '₹10,800' },
]

export default function ServicesPreview() {
  const [isVisible, ref] = useInView()

  return (
    <section className="py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-accent/5 via-transparent to-transparent">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div
          ref={ref}
          className={`flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16 transition-all duration-700 ${
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
          <Link
            href="/services"
            className="group inline-flex items-center gap-2 text-sm font-light text-foreground/60 hover:text-accent transition-colors duration-300 shrink-0"
          >
            View all services
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div
              key={s.title}
              className={`glass-effect p-7 rounded-2xl group hover:scale-[1.02] transition-all duration-500 cursor-pointer ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: isVisible ? `${i * 80}ms` : '0ms' }}
            >
              <div className="w-12 h-12 rounded-xl glass-effect-dark flex items-center justify-center text-accent mb-5 group-hover:scale-110 transition-transform duration-300">
                {s.icon}
              </div>
              <h3 className="text-lg font-light text-foreground mb-2">{s.title}</h3>
              <p className="text-sm text-foreground/55 font-light leading-relaxed mb-5">{s.desc}</p>
              <div className="flex items-center justify-between pt-4 border-t border-foreground/8">
                <span className="text-[10px] text-foreground/40 font-light uppercase tracking-widest">Starting at</span>
                <span className="text-base font-light text-accent">{s.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
