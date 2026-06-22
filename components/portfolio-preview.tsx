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
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80',
    span: 'lg:col-span-2 lg:row-span-2',
    height: 'h-[400px] lg:h-full',
  },
  {
    id: 2,
    title: 'TechCorp Annual Gala',
    subtitle: 'Fortune 500 · Bangalore',
    category: 'Corporate',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80',
    span: '',
    height: 'h-[220px]',
  },
  {
    id: 3,
    title: 'Bloom Music Festival',
    subtitle: 'Annual Cultural · Pune',
    category: 'Experience',
    image: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&q=80',
    span: '',
    height: 'h-[220px]',
  },
]

export default function PortfolioPreview() {
  const [isVisible, ref] = useInView()
  const [hovered, setHovered] = useState<number | null>(null)

  return (
    <section className="py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div
          ref={ref}
          className={`flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14 transition-all duration-700 ${
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
          <Link
            href="/portfolio"
            className="group inline-flex items-center gap-2 text-sm font-light text-foreground/60 hover:text-accent transition-colors duration-300 shrink-0"
          >
            View full portfolio
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>

        {/* Asymmetric grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:grid-rows-[220px_220px]">
          {featured.map((item, i) => (
            <div
              key={item.id}
              className={`relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-700 ${item.span} ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: isVisible ? `${i * 120}ms` : '0ms' }}
              onMouseEnter={() => setHovered(item.id)}
              onMouseLeave={() => setHovered(null)}
            >
              <div className={`relative w-full ${item.height}`}>
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className={`object-cover transition-transform duration-700 ${hovered === item.id ? 'scale-110' : 'scale-100'}`}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className={`absolute inset-0 bg-black/30 transition-opacity duration-500 ${hovered === item.id ? 'opacity-100' : 'opacity-0'}`} />

                {/* Badge */}
                <div className="absolute top-4 left-4">
                  <span className="text-[10px] uppercase tracking-[0.2em] font-light px-3 py-1 rounded-full glass-effect text-white/90">
                    {item.category}
                  </span>
                </div>

                {/* Arrow */}
                <div className={`absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center transition-all duration-300 ${
                  hovered === item.id ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'
                }`}>
                  <ArrowUpRight className="w-4 h-4 text-white" />
                </div>

                {/* Info */}
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <p className="text-[10px] text-white/50 font-light uppercase tracking-widest mb-1">{item.subtitle}</p>
                  <h3 className="text-base font-light text-white">{item.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className={`text-center mt-12 transition-all duration-700 delay-300 ${
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
