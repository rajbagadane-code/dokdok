'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">

      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        src="/Wedding_Planner_Promo_production_story_18438_16_9_1612270331588_SD4_V1.mp4"
      />

      {/* Minimal bottom fade only — keep video visible */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background/80 to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 pt-32 pb-20">

        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <span className={`inline-block text-xs font-light uppercase tracking-[0.35em] text-white/55 mb-7 transition-all duration-1000 delay-100 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}>
            Premium Event Management
          </span>

          <h1 className="text-5xl sm:text-6xl lg:text-[5.5rem] font-light text-white mb-8 leading-[1.1] tracking-tight">
            Craft Your{' '}
            <span className="relative inline-block">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-accent/90 to-accent/60">
                Perfect Moment
              </span>
              <div className="absolute -bottom-2 left-0 right-0 h-px bg-gradient-to-r from-accent/0 via-accent to-accent/0" />
            </span>
          </h1>

          <p className={`text-lg sm:text-xl text-white/60 mb-14 leading-relaxed max-w-2xl mx-auto font-light transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            We transform your vision into unforgettable experiences — from intimate gatherings to grand celebrations, executed flawlessly.
          </p>

          <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            <Link
              href="/contact"
              className="px-9 py-4 bg-accent text-background font-medium rounded-full hover:bg-accent/90 hover:scale-105 transition-all duration-300 shadow-lg shadow-accent/20 text-sm tracking-wide"
            >
              Start Your Journey
            </Link>
            <Link
              href="/services"
              className="px-9 py-4 border border-white/30 text-white font-light rounded-full hover:bg-white/10 hover:border-white/50 transition-all duration-300 text-sm tracking-wide"
            >
              Explore Services
            </Link>
          </div>
        </div>

        {/* Quick nav pills */}
        <div className={`flex flex-wrap justify-center gap-3 mt-16 transition-all duration-1000 delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}>
          {[
            { label: 'Weddings', href: '/portfolio' },
            { label: 'Corporate', href: '/portfolio' },
            { label: 'Celebrations', href: '/portfolio' },
            { label: 'View Pricing', href: '/pricing' },
          ].map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              className="text-[11px] uppercase tracking-[0.2em] font-light px-4 py-2 rounded-full border border-white/15 text-white/60 hover:border-accent/50 hover:text-accent transition-all duration-300"
            >
              {label}
            </Link>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className={`absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-all duration-1000 delay-700 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}>
        <span className="text-[10px] uppercase tracking-[0.3em] text-white/30 font-light">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-white/30 to-transparent animate-pulse" />
      </div>
    </section>
  )
}
