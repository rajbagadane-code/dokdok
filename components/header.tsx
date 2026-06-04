'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

interface HeaderProps {
  isScrolled: boolean
}

export default function Header({ isScrolled }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header
      className={`fixed w-full top-0 z-[9999] transition-all duration-500 ${
        isScrolled
          ? 'glass-effect-dark py-3 shadow-xl'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <Link href="/" className="group">
          <div className="flex items-center gap-2 transition-all duration-300 hover:scale-105">
            <Image
              src="/high-resolution-color-logo.png"
              alt="shreedev.art logo"
              width={120}
              height={40}
              className="h-9 w-auto object-contain rounded-xl"
              priority
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {['services', 'portfolio', 'testimonials', 'pricing'].map((item) => (
            <Link
              key={item}
              href={`#${item}`}
              className="text-sm font-light text-foreground/70 hover:text-foreground transition-colors duration-300 uppercase tracking-wider"
            >
              {item}
            </Link>
          ))}
        </nav>

        <button className="hidden md:block px-6 py-2.5 glass-effect text-foreground font-light rounded-full hover:scale-105 transition-transform duration-300 text-sm">
          Let&apos;s Create
        </button>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden w-6 h-6 flex flex-col justify-center gap-1.5"
        >
          <div
            className={`h-0.5 w-full bg-foreground transition-all duration-300 ${
              isOpen ? 'rotate-45 translate-y-2' : ''
            }`}
          />
          <div
            className={`h-0.5 w-full bg-foreground transition-all duration-300 ${
              isOpen ? 'opacity-0' : ''
            }`}
          />
          <div
            className={`h-0.5 w-full bg-foreground transition-all duration-300 ${
              isOpen ? '-rotate-45 -translate-y-2' : ''
            }`}
          />
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <nav className="md:hidden glass-effect-dark mt-4 py-4 animate-fade-in">
          <div className="max-w-7xl mx-auto px-4 space-y-4">
            {['services', 'portfolio', 'testimonials', 'pricing'].map((item) => (
              <Link
                key={item}
                href={`#${item}`}
                className="block text-sm font-light text-foreground/70 hover:text-foreground transition-colors duration-300 uppercase tracking-wider py-2"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </Link>
            ))}
            <button className="w-full px-6 py-2.5 glass-effect text-foreground font-light rounded-full text-sm mt-2">
              Let&apos;s Create
            </button>
          </div>
        </nav>
      )}
    </header>
  )
}
