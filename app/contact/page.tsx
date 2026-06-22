'use client'

import { useState, useEffect } from 'react'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Contact from '@/components/contact'

export default function ContactPage() {
  const [isScrolled, setIsScrolled] = useState(false)
  useEffect(() => {
    const fn = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <main className="min-h-screen bg-background">
      <Header isScrolled={isScrolled} />
      <section className="pt-40 pb-8 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/5 to-transparent pointer-events-none" />
        <div className="relative max-w-3xl mx-auto">
          <span className="inline-block text-xs font-light uppercase tracking-[0.3em] text-accent/80 mb-4 px-4 py-1.5 glass-effect rounded-full">
            Get In Touch
          </span>
          <h1 className="text-5xl sm:text-6xl font-light text-foreground mt-4 mb-6">
            Let's Create <span className="text-accent">Together</span>
          </h1>
          <p className="text-lg text-foreground/50 font-light max-w-2xl mx-auto">
            Ready to bring your vision to life? We'd love to hear about your event.
          </p>
        </div>
      </section>
      <Contact />
      <Footer />
    </main>
  )
}
