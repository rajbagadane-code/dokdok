'use client'

import { useState, useEffect } from 'react'
import Header from '@/components/header'
import Footer from '@/components/footer'
import About from '@/components/about'

export default function AboutPage() {
  const [isScrolled, setIsScrolled] = useState(false)
  useEffect(() => {
    const fn = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <main className="min-h-screen bg-background">
      <Header isScrolled={isScrolled} />
      <About />
      <Footer />
    </main>
  )
}
