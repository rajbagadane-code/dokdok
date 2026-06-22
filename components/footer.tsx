'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-foreground/10 bg-gradient-to-b from-transparent to-accent/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="inline-block mb-4 hover:opacity-80 transition-opacity">
              <Image
                src="/high-resolution-color-logo.png"
                alt="shreedev.art"
                width={110}
                height={36}
                className="h-8 w-auto object-contain rounded-lg"
              />
            </Link>
            <p className="text-sm text-foreground/55 font-light leading-relaxed">
              Creating extraordinary moments and memorable experiences for every occasion.
            </p>
          </div>

          {/* Pages */}
          <div>
            <h4 className="text-xs font-light uppercase tracking-wider text-foreground mb-5">Pages</h4>
            <ul className="space-y-3">
              {[
                { label: 'Home', href: '/' },
                { label: 'Services', href: '/services' },
                { label: 'Portfolio', href: '/portfolio' },
                { label: 'Pricing', href: '/pricing' },
                { label: 'About', href: '/about' },
                { label: 'Contact', href: '/contact' },
              ].map(({ label, href }) => (
                <li key={label}>
                  <Link href={href} className="text-sm text-foreground/55 font-light hover:text-accent transition-colors duration-300">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs font-light uppercase tracking-wider text-foreground mb-5">Services</h4>
            <ul className="space-y-3">
              {['Photography', 'Videography', 'Decoration', 'Catering', 'Sound & Lighting', 'MC & Host'].map((item) => (
                <li key={item}>
                  <Link href="/services" className="text-sm text-foreground/55 font-light hover:text-accent transition-colors duration-300">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-xs font-light uppercase tracking-wider text-foreground mb-5">Connect</h4>
            <ul className="space-y-3">
              {['Instagram', 'Facebook', 'YouTube', 'Pinterest', 'LinkedIn'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-sm text-foreground/55 font-light hover:text-accent transition-colors duration-300">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-8 pt-6 border-t border-foreground/10">
              <p className="text-xs text-foreground/40 font-light mb-1">Maharashtra, India</p>
              <p className="text-xs text-foreground/40 font-light mb-1">contact@shreedev.art</p>
              <p className="text-xs text-foreground/40 font-light">+91 74002 07911</p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-foreground/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-foreground/40 font-light">
            © {currentYear} shreedev.art · All rights reserved · Since 2014
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-xs text-foreground/40 font-light hover:text-accent transition-colors duration-300">Privacy Policy</Link>
            <Link href="#" className="text-xs text-foreground/40 font-light hover:text-accent transition-colors duration-300">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
