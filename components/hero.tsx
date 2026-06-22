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
          <span className={`inline-block text-xs font-light uppercase tracking-[0.35em] text-white mb-7 [text-shadow:0_2px_12px_rgba(0,0,0,0.8)] transition-all duration-1000 delay-100 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}>
            Premium Event Management
          </span>

          <h1 className="text-5xl sm:text-6xl lg:text-[5.5rem] font-light text-white mb-8 leading-[1.1] tracking-tight [text-shadow:0_4px_24px_rgba(0,0,0,0.7)]">
            Craft Your{' '}
            <span className="relative inline-block">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-accent/90 to-accent/60">
                Perfect Moment
              </span>
              <div className="absolute -bottom-2 left-0 right-0 h-px bg-gradient-to-r from-accent/0 via-accent to-accent/0" />
            </span>
          </h1>

          <p className={`text-lg sm:text-xl text-white/90 mb-14 leading-relaxed max-w-2xl mx-auto font-light [text-shadow:0_2px_16px_rgba(0,0,0,0.8)] transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            We transform your vision into unforgettable experiences — from intimate gatherings to grand celebrations, executed flawlessly.
          </p>
        </div>

        {/* Quick nav pills — liquid glass */}
        <div className={`flex flex-wrap justify-center gap-3 mt-14 transition-all duration-1000 delay-500 ${
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
              className={`
                relative overflow-hidden group
                text-[11px] uppercase tracking-[0.2em] font-light
                px-5 py-2.5 rounded-full
                text-black/85 hover:text-black
                bg-white/10 hover:bg-white/18
                backdrop-blur-2xl
                border border-white/20 hover:border-white/40
                shadow-[inset_0_1.5px_1px_rgba(255,255,255,0.3),0_4px_20px_rgba(0,0,0,0.2)]
                hover:shadow-[inset_0_1.5px_1px_rgba(255,255,255,0.4),0_6px_28px_rgba(0,0,0,0.25)]
                transition-all duration-300 hover:scale-105
              `}
            >
              {/* top gloss sheen */}
              <span className="absolute inset-x-0 top-0 h-[45%] bg-gradient-to-b from-white/25 to-transparent rounded-t-full pointer-events-none" />
              {/* bottom rim light */}
              <span className="absolute inset-x-2 bottom-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />
              {/* accent radial glow on hover */}
              <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-400 bg-[radial-gradient(ellipse_at_50%_120%,_rgba(160,160,210,0.25)_0%,_transparent_65%)] pointer-events-none" />
              <span className="relative">{label}</span>
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
