'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useInView } from '@/hooks/useInView'
import { ArrowRight, ArrowUpRight } from 'lucide-react'

const featured = [
  {
    id: 1,
    title: 'Grand Wedding Celebration',
    subtitle: 'Sharma × Mehta · Mumbai',
    category: 'Wedding',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=900&q=80',
    large: true,
  },
  {
    id: 2,
    title: 'TechCorp Annual Gala',
    subtitle: 'Fortune 500 · Bangalore',
    category: 'Corporate',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80',
    large: false,
  },
  {
    id: 3,
    title: 'Bloom Music Festival',
    subtitle: 'Cultural Event · Pune',
    category: 'Experience',
    image: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=600&q=80',
    large: false,
  },
  {
    id: 4,
    title: 'Royal Mehndi Night',
    subtitle: 'Khan Wedding · Jaipur',
    category: 'Wedding',
    image: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=600&q=80',
    large: false,
  },
  {
    id: 5,
    title: 'Nexus Product Launch',
    subtitle: 'Tech Startup · Hyderabad',
    category: 'Corporate',
    image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=600&q=80',
    large: false,
  },
]

export default function PortfolioPreview() {
  const [isVisible, ref] = useInView()
  const [hovered, setHovered] = useState<number | null>(null)

  return (
    <section className="py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent via-accent/4 to-transparent">
      <div className="max-w-7xl mx-auto">

        <div
          ref={ref}
          className={`flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div>
            <span className="inline-block text-xs font-light uppercase tracking-[0.3em] text-accent/80 mb-3 px-4 py-1.5 glass-effect rounded-full">
              Featured Work
            </span>
            <h2 className="text-4xl sm:text-5xl font-light text-foreground mt-3">
              Crafted <span className="text-accent">Moments</span>
            </h2>
          </div>
          <Link href="/portfolio" className="group inline-flex items-center gap-2 text-sm font-light text-foreground/55 hover:text-accent transition-colors duration-300 shrink-0">
            View full portfolio
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>

        {/* Bento-style grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 grid-rows-[240px_240px] gap-4">
          {/* Large card — spans 2 cols & 2 rows */}
          {featured.slice(0, 1).map((item) => (
            <div
              key={item.id}
              className={`col-span-2 row-span-2 relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-700 ${
                isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
              }`}
              onMouseEnter={() => setHovered(item.id)}
              onMouseLeave={() => setHovered(null)}
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className={`object-cover transition-transform duration-700 ${hovered === item.id ? 'scale-110' : 'scale-100'}`}
                sizes="50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute top-4 left-4">
                <span className="text-[10px] uppercase tracking-[0.2em] font-light px-3 py-1 rounded-full bg-accent/80 text-background">
                  {item.category}
                </span>
              </div>
              <div className={`absolute top-4 right-4 w-9 h-9 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center transition-all duration-300 ${hovered === item.id ? 'opacity-100' : 'opacity-0'}`}>
                <ArrowUpRight className="w-4 h-4 text-white" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-[11px] text-white/50 font-light uppercase tracking-widest mb-1">{item.subtitle}</p>
                <h3 className="text-xl font-light text-white">{item.title}</h3>
              </div>
            </div>
          ))}

          {/* Small cards */}
          {featured.slice(1).map((item, i) => (
            <div
              key={item.id}
              className={`relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: isVisible ? `${(i + 1) * 100}ms` : '0ms' }}
              onMouseEnter={() => setHovered(item.id)}
              onMouseLeave={() => setHovered(null)}
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className={`object-cover transition-transform duration-700 ${hovered === item.id ? 'scale-110' : 'scale-100'}`}
                sizes="25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
              <div className="absolute top-3 left-3">
                <span className="text-[9px] uppercase tracking-[0.15em] font-light px-2.5 py-0.5 rounded-full glass-effect text-white/80">
                  {item.category}
                </span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="text-sm font-light text-white leading-tight">{item.title}</h3>
                <p className="text-[10px] text-white/45 font-light mt-0.5">{item.subtitle}</p>
              </div>
            </div>
          ))}
        </div>

        <div className={`text-center mt-10 transition-all duration-700 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}>
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-3 px-8 py-3.5 glass-effect text-foreground font-light rounded-full hover:scale-105 transition-all duration-300 text-sm"
          >
            Explore All Events
            <ArrowRight className="w-4 h-4 text-accent" />
          </Link>
        </div>
      </div>
    </section>
  )
}
