'use client'

import { useState, useEffect } from 'react'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Services from '@/components/services'
import Contact from '@/components/contact'

export default function ServicesPage() {
  const [isScrolled, setIsScrolled] = useState(false)
  useEffect(() => {
    const fn = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <main className="min-h-screen bg-background">
      <Header isScrolled={isScrolled} />
      {/* Page Hero */}
      <section className="pt-40 pb-20 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/5 to-transparent pointer-events-none" />
        <div className="relative max-w-3xl mx-auto">
          <span className="inline-block text-xs font-light uppercase tracking-[0.3em] text-accent/80 mb-4 px-4 py-1.5 glass-effect rounded-full">
            What We Do
          </span>
          <h1 className="text-5xl sm:text-6xl font-light text-foreground mt-4 mb-6">
            Our <span className="text-accent">Services</span>
          </h1>
          <p className="text-lg text-foreground/50 font-light max-w-2xl mx-auto">
            End-to-end event solutions crafted with precision. From intimate gatherings to grand celebrations.
          </p>
        </div>
      </section>
      <Services />
      <Contact />
      <Footer />
    </main>
  )
}
