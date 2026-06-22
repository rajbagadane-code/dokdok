'use client'

import Image from 'next/image'
import { useInView } from '@/hooks/useInView'

const stats = [
  { value: '500+', label: 'Events Crafted' },
  { value: '1,000+', label: 'Happy Clients' },
  { value: '10+', label: 'Years of Excellence' },
  { value: '12', label: 'Cities Covered' },
  { value: '98%', label: 'Client Satisfaction' },
]

export default function StatsStrip() {
  const [isVisible, ref] = useInView()

  return (
    <section ref={ref} className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=1800&q=60"
          alt="Event background"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-foreground/80 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-background/90" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-10">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`text-center transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: isVisible ? `${i * 100}ms` : '0ms' }}
            >
              <div className="text-4xl sm:text-5xl font-light text-accent mb-2 [text-shadow:0_0_40px_rgba(160,160,210,0.4)]">
                {stat.value}
              </div>
              <div className="text-xs text-foreground/60 font-light uppercase tracking-widest">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
