'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

const navLinks = [
  { label: 'Services', href: '/services' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'About', href: '/about' },
]

interface HeaderProps {
  isScrolled: boolean
}

export default function Header({ isScrolled }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header
      className={`fixed w-full top-0 z-[9999] transition-all duration-500 ${
        isScrolled
          ? 'glass-effect-dark py-3 shadow-xl'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="group">
          <div className="flex items-center transition-all duration-300 hover:scale-105">
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

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map(({ label, href }) => {
            const active = pathname === href
            return (
              <Link
                key={href}
                href={href}
                className={`text-sm font-light uppercase tracking-wider transition-colors duration-300 relative group ${
                  active ? 'text-foreground' : 'text-foreground/60 hover:text-foreground'
                }`}
              >
                {label}
                <span className={`absolute -bottom-1 left-0 h-px bg-accent transition-all duration-300 ${
                  active ? 'w-full' : 'w-0 group-hover:w-full'
                }`} />
              </Link>
            )
          })}
        </nav>

        <Link
          href="/contact"
          className="hidden md:block px-6 py-2.5 glass-effect text-foreground font-light rounded-full hover:scale-105 transition-transform duration-300 text-sm"
        >
          Let&apos;s Create
        </Link>

        {/* Mobile burger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden w-6 h-6 flex flex-col justify-center gap-1.5"
          aria-label="Toggle menu"
        >
          <div className={`h-0.5 w-full bg-foreground transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <div className={`h-0.5 w-full bg-foreground transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`} />
          <div className={`h-0.5 w-full bg-foreground transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <nav className="md:hidden glass-effect-dark mt-4 py-4 animate-fade-in">
          <div className="max-w-7xl mx-auto px-4 space-y-2">
            {navLinks.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setIsOpen(false)}
                className={`block text-sm font-light uppercase tracking-wider py-2.5 border-b border-foreground/5 transition-colors duration-300 ${
                  pathname === href ? 'text-accent' : 'text-foreground/70 hover:text-foreground'
                }`}
              >
                {label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center px-6 py-2.5 glass-effect text-foreground font-light rounded-full text-sm mt-3"
            >
              Let&apos;s Create
            </Link>
          </div>
        </nav>
      )}
    </header>
  )
}
