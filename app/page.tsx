'use client'

import { useState, useEffect } from 'react'
import Header from '@/components/header'
import Hero from '@/components/hero'
import StatsStrip from '@/components/stats-strip'
import ServicesPreview from '@/components/services-preview'
import PortfolioPreview from '@/components/portfolio-preview'
import Testimonials from '@/components/testimonials'
import PricingPreview from '@/components/pricing-preview'
import Contact from '@/components/contact'
import Footer from '@/components/footer'

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <main className="min-h-screen bg-background">
      <Header isScrolled={isScrolled} />
      <Hero />
      <StatsStrip />
      <ServicesPreview />
      <PortfolioPreview />
      <Testimonials />
      <PricingPreview />
      <Contact />
      <Footer />
    </main>
  )
}
