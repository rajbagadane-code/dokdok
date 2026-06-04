'use client'

import { useState, useEffect } from 'react'
import Header from '@/components/header'
import Hero from '@/components/hero'
import Services from '@/components/services'
import Portfolio from '@/components/portfolio'
import Testimonials from '@/components/testimonials'
import Pricing from '@/components/pricing'
import Contact from '@/components/contact'
import Footer from '@/components/footer'

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <main className="min-h-screen bg-gradient-to-b from-background via-background to-background/95">
      <Header isScrolled={isScrolled} />
      <Hero />
      <Services />
      <Portfolio />
      <Testimonials />
      <Pricing />
      <Contact />
      <Footer />
    </main>
  )
}
