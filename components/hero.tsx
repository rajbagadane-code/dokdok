'use client'

import { useEffect, useState } from 'react'

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">

      {/* ── Video Background ── */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        src="/Wedding_Planner_Promo_production_story_18438_16_9_1612270331588_SD4_V1.mp4"
      />

      {/* Dark scrim so text stays readable */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />

      {/* Subtle vignette edges */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_40%,_rgba(0,0,0,0.55)_100%)]" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>

          <span className={`inline-block text-xs font-light uppercase tracking-[0.35em] text-white/60 mb-6 transition-all duration-1000 delay-100 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}>
            Premium Event Management
          </span>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light text-white mb-8 leading-tight tracking-tight">
            Craft Your{' '}
            <span className="relative inline-block">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-accent/90 to-accent/60">
                Perfect Moment
              </span>
              <div className="absolute -bottom-2 left-0 right-0 h-px bg-gradient-to-r from-accent/0 via-accent to-accent/0" />
            </span>
          </h1>

          <p className={`text-lg sm:text-xl text-white/65 mb-12 leading-relaxed max-w-3xl mx-auto font-light transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            Premium event management and creative experiences designed with meticulous attention to detail. We transform your vision into unforgettable moments.
          </p>

          <div className={`flex flex-col sm:flex-row gap-6 justify-center items-center mb-20 transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            <button className="px-8 py-3.5 bg-white/10 backdrop-blur-md border border-white/25 text-foreground font-medium rounded-full hover:bg-white/20 hover:scale-105 transition-all duration-300 shadow-lg text-base">
              Start Your Journey
            </button>
            <button className="px-8 py-3.5 border border-accent/50 text-foreground font-medium rounded-full hover:bg-accent/15 hover:border-accent transition-all duration-300 text-base">
              Explore Services
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className={`grid grid-cols-3 gap-4 sm:gap-8 transition-all duration-1000 delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {[
            { label: 'Events Crafted', value: '500+' },
            { label: 'Happy Clients', value: '1000+' },
            { label: 'Years of Excellence', value: '10+' },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-white/8 backdrop-blur-md border border-white/15 p-5 sm:p-6 rounded-2xl"
            >
              <div className="text-3xl sm:text-4xl font-light text-accent mb-1.5">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-white/50 font-light uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className={`absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 transition-all duration-1000 delay-700 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}>
        <span className="text-[10px] uppercase tracking-[0.3em] text-white/30 font-light">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-white/30 to-transparent animate-pulse" />
      </div>
    </section>
  )
}
