'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useInView } from '@/hooks/useInView'
import { CheckCircle2, ArrowRight } from 'lucide-react'

const plans = [
  {
    name: 'Essential',
    price: '₹25,000',
    tagline: 'For intimate gatherings',
    image: 'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?w=600&q=80',
    features: ['Photography Package', 'Digital Invitations', 'Guest Coordination', 'Basic PA Setup', 'Event Support Team'],
    popular: false,
    cta: 'Get Started',
  },
  {
    name: 'Premium',
    price: '₹59,000',
    tagline: 'Complete event excellence',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=80',
    features: ['Photo + Video Coverage', 'Full Venue Décor', 'Professional MC', 'Premium AV & Lighting', 'Catering Coordination', 'Live Streaming'],
    popular: true,
    cta: 'Get Started',
  },
  {
    name: 'Bespoke',
    price: 'Custom',
    tagline: 'Luxury tailored experience',
    image: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=600&q=80',
    features: ['Custom Design Concept', 'Multi-day Coverage', 'Dedicated Manager', 'Premium Vendor Network', 'White-Glove Team'],
    popular: false,
    cta: 'Get a Quote',
  },
]

export default function PricingPreview() {
  const [isVisible, ref] = useInView()

  return (
    <section className="py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        <div
          ref={ref}
          className={`flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div>
            <span className="inline-block text-xs font-light uppercase tracking-[0.3em] text-accent/80 mb-3 px-4 py-1.5 glass-effect rounded-full">
              Transparent Pricing
            </span>
            <h2 className="text-4xl sm:text-5xl font-light text-foreground mt-3">
              Choose Your <span className="text-accent">Package</span>
            </h2>
          </div>
          <Link href="/pricing" className="group inline-flex items-center gap-2 text-sm font-light text-foreground/55 hover:text-accent transition-colors duration-300 shrink-0">
            See detailed itemised quotes
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>

        <div className="grid sm:grid-cols-3 gap-6">
          {plans.map((plan, i) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl overflow-hidden transition-all duration-700 group ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              } ${plan.popular ? '-mt-4' : ''}`}
              style={{ transitionDelay: isVisible ? `${i * 120}ms` : '0ms' }}
            >
              {plan.popular && (
                <div className="absolute -inset-px rounded-2xl bg-gradient-to-b from-accent/50 via-accent/10 to-transparent pointer-events-none z-10" />
              )}

              <div className={`relative rounded-2xl overflow-hidden hover:scale-[1.02] transition-all duration-300 ${
                plan.popular ? 'glass-effect-dark shadow-2xl shadow-accent/10' : 'glass-effect'
              }`}>
                {/* Image header */}
                <div className="relative h-40 overflow-hidden">
                  <Image
                    src={plan.image}
                    alt={plan.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/60" />
                  <div className="absolute bottom-4 left-5">
                    <h3 className="text-xl font-light text-white">{plan.name}</h3>
                    <p className="text-xs text-white/60 font-light">{plan.tagline}</p>
                  </div>
                  {plan.popular && (
                    <span className="absolute top-4 right-4 text-[10px] uppercase tracking-widest px-3 py-1 rounded-full bg-accent/80 text-background font-light">
                      Popular
                    </span>
                  )}
                </div>

                <div className="p-6">
                  <div className="text-3xl font-light text-accent mb-5">{plan.price}</div>
                  <ul className="space-y-2.5 mb-7">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-center gap-2.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-accent/60 shrink-0" />
                        <span className="text-xs text-foreground/60 font-light">{f}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/pricing"
                    className={`w-full py-3 rounded-full text-sm font-light tracking-wide transition-all duration-300 flex items-center justify-center gap-2 group/btn ${
                      plan.popular
                        ? 'bg-foreground text-background hover:bg-foreground/90'
                        : 'glass-effect text-foreground hover:glass-effect-dark'
                    }`}
                  >
                    {plan.cta}
                    <ArrowRight className="w-3.5 h-3.5 opacity-50 group-hover/btn:opacity-100 group-hover/btn:translate-x-0.5 transition-all" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
