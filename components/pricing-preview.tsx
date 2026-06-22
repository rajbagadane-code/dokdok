'use client'

import Link from 'next/link'
import { useInView } from '@/hooks/useInView'
import { CheckCircle2, ArrowRight } from 'lucide-react'

const plans = [
  {
    name: 'Essential',
    price: '₹25,000',
    tagline: 'For intimate gatherings',
    features: ['Photography Package', 'Digital Invitations', 'Guest Coordination', 'Basic PA Setup', 'Event Support Team'],
    popular: false,
  },
  {
    name: 'Premium',
    price: '₹59,000',
    tagline: 'Complete event excellence',
    features: ['Photo + Video Coverage', 'Full Venue Décor', 'Professional MC', 'Premium AV & Lighting', 'Catering Coordination', 'Live Streaming'],
    popular: true,
  },
  {
    name: 'Bespoke',
    price: 'Custom',
    tagline: 'Luxury tailored experience',
    features: ['Custom Design Concept', 'Multi-day Coverage', 'Dedicated Manager', 'Premium Vendor Network', 'White-Glove Team'],
    popular: false,
  },
]

export default function PricingPreview() {
  const [isVisible, ref] = useInView()

  return (
    <section className="py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-accent/5 to-transparent">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div
          ref={ref}
          className={`flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16 transition-all duration-700 ${
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
          <Link
            href="/pricing"
            className="group inline-flex items-center gap-2 text-sm font-light text-foreground/60 hover:text-accent transition-colors duration-300 shrink-0"
          >
            See detailed quotes
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-3 gap-6">
          {plans.map((plan, i) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              } ${plan.popular ? '-mt-3' : ''}`}
              style={{ transitionDelay: isVisible ? `${i * 120}ms` : '0ms' }}
            >
              {plan.popular && (
                <div className="absolute -inset-px rounded-2xl bg-gradient-to-b from-accent/40 via-accent/10 to-transparent pointer-events-none" />
              )}
              <div className={`relative rounded-2xl p-7 h-full transition-all duration-300 hover:scale-[1.02] ${
                plan.popular ? 'glass-effect-dark shadow-xl shadow-accent/10' : 'glass-effect'
              }`}>
                {plan.popular && (
                  <span className="absolute top-5 right-5 text-[10px] uppercase tracking-widest px-3 py-1 rounded-full bg-accent/20 text-accent">
                    Popular
                  </span>
                )}
                <h3 className="text-xl font-light text-foreground mb-1">{plan.name}</h3>
                <p className="text-xs text-foreground/45 font-light mb-5">{plan.tagline}</p>
                <div className="text-3xl font-light text-accent mb-6">{plan.price}</div>
                <ul className="space-y-2.5 mb-8">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-accent/60 shrink-0" />
                      <span className="text-xs text-foreground/60 font-light">{f}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/pricing"
                  className={`w-full py-3 rounded-full text-sm font-light tracking-wide transition-all duration-300 flex items-center justify-center gap-2 group ${
                    plan.popular
                      ? 'bg-foreground text-background hover:bg-foreground/90'
                      : 'glass-effect text-foreground hover:glass-effect-dark'
                  }`}
                >
                  {plan.price === 'Custom' ? 'Get a Quote' : 'Get Started'}
                  <ArrowRight className="w-3.5 h-3.5 opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
