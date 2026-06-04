'use client'

import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-foreground/10 bg-gradient-to-b from-transparent to-accent/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-6 rounded-full bg-gradient-to-br from-accent to-accent/60 flex items-center justify-center">
                <span className="text-xs font-bold text-background">S</span>
              </div>
              <span className="font-light text-foreground">
                shreedev<span className="font-semibold">.art</span>
              </span>
            </div>
            <p className="text-sm text-foreground/60 font-light leading-relaxed">
              Creating extraordinary moments and memorable experiences for every occasion.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-light uppercase tracking-wider text-foreground mb-6">
              Services
            </h4>
            <ul className="space-y-3">
              {['Photography', 'Videography', 'Decoration', 'Catering', 'Entertainment'].map((item) => (
                <li key={item}>
                  <Link href="#services" className="text-sm text-foreground/60 font-light hover:text-accent transition-colors duration-300">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-light uppercase tracking-wider text-foreground mb-6">
              Company
            </h4>
            <ul className="space-y-3">
              {['About Us', 'Our Work', 'Testimonials', 'Blog', 'Careers'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-sm text-foreground/60 font-light hover:text-accent transition-colors duration-300">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-sm font-light uppercase tracking-wider text-foreground mb-6">
              Connect
            </h4>
            <ul className="space-y-3">
              {['Instagram', 'Facebook', 'Twitter', 'Pinterest', 'LinkedIn'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-sm text-foreground/60 font-light hover:text-accent transition-colors duration-300">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-foreground/10 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-foreground/60 font-light">
            © {currentYear} shreedev.art. All rights reserved. since 2024
          </p>
          <div className="flex gap-8 mt-6 sm:mt-0">
            <Link href="#" className="text-sm text-foreground/60 font-light hover:text-accent transition-colors duration-300">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm text-foreground/60 font-light hover:text-accent transition-colors duration-300">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
