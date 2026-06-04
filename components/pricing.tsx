'use client'

import { useState } from 'react'
import { useInView } from '@/hooks/useInView'
import {
  Camera, Film, Mic2, Sparkles, Music4, UtensilsCrossed,
  CheckCircle2, Phone, Users, Calendar, Star, ArrowRight,
  Zap, Shield, HeartHandshake, Award
} from 'lucide-react'

// ─── Data ─────────────────────────────────────────────────────────────────────

const categoryIcons: Record<string, React.ReactNode> = {
  Photography: <Camera className="w-3.5 h-3.5" />,
  Videography: <Film className="w-3.5 h-3.5" />,
  Digital: <Zap className="w-3.5 h-3.5" />,
  Coordination: <Users className="w-3.5 h-3.5" />,
  Audio: <Music4 className="w-3.5 h-3.5" />,
  AV: <Music4 className="w-3.5 h-3.5" />,
  Staffing: <Users className="w-3.5 h-3.5" />,
  Decoration: <Sparkles className="w-3.5 h-3.5" />,
  MC: <Mic2 className="w-3.5 h-3.5" />,
  Catering: <UtensilsCrossed className="w-3.5 h-3.5" />,
  Creative: <Star className="w-3.5 h-3.5" />,
  Coverage: <Camera className="w-3.5 h-3.5" />,
  Vendor: <HeartHandshake className="w-3.5 h-3.5" />,
  Management: <Shield className="w-3.5 h-3.5" />,
  Post: <Film className="w-3.5 h-3.5" />,
}

const packages = [
  {
    id: 'ESS-001',
    name: 'Essential',
    tagline: 'Perfect for intimate gatherings',
    price: 25000,
    popular: false,
    color: 'from-foreground/4 to-foreground/8',
    badge: null,
    illustration: 'camera',
    lineItems: [
      { category: 'Photography', item: 'Event Photography Package', qty: 1, unit: 'day', rate: 8000 },
      { category: 'Digital', item: 'Custom Digital Invitations', qty: 50, unit: 'pcs', rate: 60 },
      { category: 'Coordination', item: 'Guest Coordination Service', qty: 1, unit: 'event', rate: 5000 },
      { category: 'Audio', item: 'Basic PA Sound System', qty: 1, unit: 'day', rate: 4000 },
      { category: 'Staffing', item: 'Event Support Team (3 members)', qty: 3, unit: 'staff', rate: 1000 },
    ],
    addons: ['Online RSVP Management', 'Day-of Timeline', 'Print-ready Invitation Files'],
    note: 'Ideal for events up to 100 guests.',
    trust: 'Most booked for birthdays & small weddings',
  },
  {
    id: 'PRM-002',
    name: 'Premium',
    tagline: 'Complete event excellence',
    price: 59000,
    popular: true,
    color: 'from-accent/10 to-accent/20',
    badge: 'Most Popular',
    illustration: 'star',
    lineItems: [
      { category: 'Photography', item: 'Professional Photo + Video Coverage', qty: 2, unit: 'day', rate: 10000 },
      { category: 'Decoration', item: 'Full Venue Floral & Décor Setup', qty: 1, unit: 'event', rate: 15000 },
      { category: 'MC', item: 'Professional Master of Ceremonies', qty: 1, unit: 'event', rate: 8000 },
      { category: 'AV', item: 'Premium Sound & Lighting Rig', qty: 1, unit: 'day', rate: 9000 },
      { category: 'Catering', item: 'Catering Coordination & Tasting', qty: 1, unit: 'session', rate: 7000 },
      { category: 'Digital', item: 'Invitations + RSVP + Event App', qty: 1, unit: 'package', rate: 5000 },
      { category: 'Staffing', item: 'Full Event Support Team (6 staff)', qty: 6, unit: 'staff', rate: 1000 },
    ],
    addons: ['Live Streaming (up to 500 viewers)', 'Highlight Reel (60s)', 'Post-Event Thank-You Cards', 'Drone Photography'],
    note: 'Ideal for events up to 300 guests. Includes all Essential features.',
    trust: 'Chosen for weddings & corporate galas',
  },
  {
    id: 'BSP-003',
    name: 'Bespoke',
    tagline: 'Fully custom luxury experience',
    price: null,
    popular: false,
    color: 'from-foreground/4 to-foreground/8',
    badge: 'Custom Quote',
    illustration: 'diamond',
    lineItems: [
      { category: 'Creative', item: 'Custom Design Concept & Moodboard', qty: 1, unit: 'project', rate: null },
      { category: 'Coverage', item: 'Extended Multi-day Photo + Film', qty: null, unit: 'days', rate: null },
      { category: 'Vendor', item: 'Premium Vendor Network Access', qty: 1, unit: 'event', rate: null },
      { category: 'Management', item: 'Dedicated Account Manager', qty: 1, unit: 'full time', rate: null },
      { category: 'Post', item: 'Edited Film + Album + Prints', qty: 1, unit: 'package', rate: null },
      { category: 'Staffing', item: 'White-Glove On-site Team', qty: null, unit: 'staff', rate: null },
    ],
    addons: ['International Venue Scouting', 'Celebrity Artist Booking', 'Live Band / Orchestra', 'Luxury Transport'],
    note: 'Fully tailored to your vision. Schedule a discovery call to get your custom quote.',
    trust: 'For destination weddings & luxury events',
  },
]

const processSteps = [
  { icon: <Phone className="w-5 h-5" />, title: 'Discovery Call', desc: 'Free 30-min consultation to understand your vision' },
  { icon: <Calendar className="w-5 h-5" />, title: 'Custom Quote', desc: 'Detailed itemised quote delivered within 24 hours' },
  { icon: <CheckCircle2 className="w-5 h-5" />, title: 'Agreement', desc: 'Signed contract & 30% booking deposit' },
  { icon: <Award className="w-5 h-5" />, title: 'Your Event', desc: 'Flawless execution with dedicated on-site team' },
]

// ─── Helpers ───────────────────────────────────────────────────────────────────

function fmt(n: number) {
  return '₹' + n.toLocaleString('en-IN')
}

// ─── SVG Illustrations ────────────────────────────────────────────────────────

function CameraIllustration() {
  return (
    <svg viewBox="0 0 80 80" fill="none" className="w-full h-full">
      <circle cx="40" cy="40" r="38" stroke="currentColor" strokeWidth="0.6" strokeDasharray="3 5" className="text-accent/30 animate-spin-slow" />
      <rect x="14" y="28" width="52" height="36" rx="8" stroke="currentColor" strokeWidth="1.2" className="text-accent/50" />
      <circle cx="40" cy="46" r="12" stroke="currentColor" strokeWidth="1.2" className="text-accent/60" />
      <circle cx="40" cy="46" r="7" stroke="currentColor" strokeWidth="1" className="text-accent/40" />
      <circle cx="40" cy="46" r="3" fill="currentColor" className="text-accent/50" />
      <rect x="28" y="20" width="14" height="10" rx="3" stroke="currentColor" strokeWidth="1" className="text-accent/40" />
      <circle cx="59" cy="34" r="3" fill="currentColor" className="text-accent/30" />
    </svg>
  )
}

function StarIllustration() {
  return (
    <svg viewBox="0 0 80 80" fill="none" className="w-full h-full">
      <circle cx="40" cy="40" r="38" stroke="currentColor" strokeWidth="0.6" strokeDasharray="3 5" className="text-accent/30 animate-spin-slow" />
      <circle cx="40" cy="40" r="28" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 6" className="text-accent/20 animate-spin-slow-reverse" />
      <polygon
        points="40,10 46,30 68,30 51,43 57,63 40,51 23,63 29,43 12,30 34,30"
        stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round"
        className="text-accent/70"
      />
      <circle cx="40" cy="40" r="4" fill="currentColor" className="text-accent/60" />
    </svg>
  )
}

function DiamondIllustration() {
  return (
    <svg viewBox="0 0 80 80" fill="none" className="w-full h-full">
      <circle cx="40" cy="40" r="38" stroke="currentColor" strokeWidth="0.6" strokeDasharray="3 5" className="text-accent/30 animate-spin-slow" />
      <polygon
        points="40,12 62,34 40,68 18,34"
        stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round"
        className="text-accent/60"
      />
      <polygon
        points="40,12 62,34 40,34 18,34"
        stroke="currentColor" strokeWidth="0.8" strokeLinejoin="round"
        className="text-accent/30"
      />
      <line x1="18" y1="34" x2="40" y2="34" stroke="currentColor" strokeWidth="0.6" className="text-accent/30" />
      <line x1="40" y1="34" x2="62" y2="34" stroke="currentColor" strokeWidth="0.6" className="text-accent/30" />
      <line x1="40" y1="12" x2="40" y2="34" stroke="currentColor" strokeWidth="0.6" className="text-accent/30" />
      <circle cx="40" cy="12" r="2.5" fill="currentColor" className="text-accent/70" />
      <circle cx="18" cy="34" r="2.5" fill="currentColor" className="text-accent/40" />
      <circle cx="62" cy="34" r="2.5" fill="currentColor" className="text-accent/40" />
      <circle cx="40" cy="68" r="2.5" fill="currentColor" className="text-accent/40" />
    </svg>
  )
}

const illustrations: Record<string, React.ReactNode> = {
  camera: <CameraIllustration />,
  star: <StarIllustration />,
  diamond: <DiamondIllustration />,
}

// ─── Process Step ─────────────────────────────────────────────────────────────

function ProcessStep({ step, index, isVisible }: {
  step: typeof processSteps[0]
  index: number
  isVisible: boolean
}) {
  return (
    <div
      className={`flex flex-col items-center text-center transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: isVisible ? `${index * 120}ms` : '0ms' }}
    >
      <div className="relative mb-4">
        <div className="w-14 h-14 rounded-2xl glass-effect flex items-center justify-center text-accent animate-pulse-ring">
          {step.icon}
        </div>
        <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-accent/20 text-accent text-[10px] font-light flex items-center justify-center">
          {index + 1}
        </span>
      </div>
      <h4 className="text-sm font-light text-foreground mb-1">{step.title}</h4>
      <p className="text-xs text-foreground/45 font-light leading-relaxed max-w-[120px]">{step.desc}</p>
    </div>
  )
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function Pricing() {
  const [sectionVisible, sectionRef] = useInView()
  const [processVisible, processRef] = useInView()
  const [activeCard, setActiveCard] = useState<string | null>(null)

  return (
    <section id="pricing" className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">

      {/* ── Background decorations ── */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-accent/4 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

      {/* Decorative SVG top-left */}
      <div className="absolute top-16 left-6 opacity-[0.07] pointer-events-none select-none">
        <svg width="260" height="260" viewBox="0 0 260 260" fill="none">
          <circle cx="130" cy="130" r="120" stroke="currentColor" strokeWidth="0.5" className="text-accent" strokeDasharray="6 8" />
          <circle cx="130" cy="130" r="90" stroke="currentColor" strokeWidth="0.5" className="text-accent" strokeDasharray="3 9" />
          <circle cx="130" cy="130" r="60" stroke="currentColor" strokeWidth="0.5" className="text-accent" strokeDasharray="2 10" />
          <line x1="10" y1="130" x2="250" y2="130" stroke="currentColor" strokeWidth="0.4" className="text-accent" />
          <line x1="130" y1="10" x2="130" y2="250" stroke="currentColor" strokeWidth="0.4" className="text-accent" />
        </svg>
      </div>

      {/* Decorative SVG bottom-right */}
      <div className="absolute bottom-24 right-8 opacity-[0.06] pointer-events-none select-none">
        <svg width="180" height="180" viewBox="0 0 180 180" fill="none">
          {[0, 30, 60, 90, 120, 150].map((angle) => (
            <line
              key={angle}
              x1="90" y1="90"
              x2={90 + 80 * Math.cos((angle * Math.PI) / 180)}
              y2={90 + 80 * Math.sin((angle * Math.PI) / 180)}
              stroke="currentColor" strokeWidth="0.5" className="text-accent"
            />
          ))}
          <circle cx="90" cy="90" r="80" stroke="currentColor" strokeWidth="0.4" className="text-accent" strokeDasharray="4 6" />
          <circle cx="90" cy="90" r="5" fill="currentColor" className="text-accent" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto">

        {/* ── Section Header ── */}
        <div
          ref={sectionRef}
          className={`text-center mb-20 transition-all duration-700 ${
            sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <span className="inline-block text-xs font-light uppercase tracking-[0.3em] text-accent/80 mb-4 px-4 py-1.5 glass-effect rounded-full">
            Transparent Pricing
          </span>
          <h2 className="text-5xl sm:text-6xl font-light text-foreground mt-4 mb-6">
            Choose Your <span className="text-accent">Package</span>
          </h2>
          <p className="text-lg text-foreground/50 font-light max-w-2xl mx-auto">
            Every package is a detailed quote — no hidden fees, no surprises. Full itemised breakdown included.
          </p>
        </div>

        {/* ── Pricing Cards ── */}
        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {packages.map((pkg, index) => (
            <div
              key={pkg.id}
              className={`relative transition-all duration-700 ${
                sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
              } ${pkg.popular ? 'lg:-mt-6' : ''}`}
              style={{ transitionDelay: sectionVisible ? `${index * 150}ms` : '0ms' }}
            >
              {/* Popular glow ring */}
              {pkg.popular && (
                <>
                  <div className="absolute -inset-px rounded-3xl bg-gradient-to-b from-accent/50 via-accent/15 to-transparent pointer-events-none" />
                  <div className="absolute -inset-3 rounded-[28px] bg-accent/5 blur-xl pointer-events-none" />
                </>
              )}

              <div
                className={`relative rounded-3xl overflow-hidden transition-all duration-500 ${
                  pkg.popular
                    ? 'glass-effect-dark shadow-2xl shadow-accent/10'
                    : 'glass-effect hover:shadow-lg hover:shadow-accent/5'
                } ${activeCard === pkg.id ? 'scale-[1.01]' : 'hover:scale-[1.015]'}`}
                onMouseEnter={() => setActiveCard(pkg.id)}
                onMouseLeave={() => setActiveCard(null)}
              >

                {/* ── Card Header with Illustration ── */}
                <div className={`bg-gradient-to-br ${pkg.color} px-6 pt-6 pb-5 border-b border-foreground/10 relative overflow-hidden`}>
                  {/* SVG illustration */}
                  <div className="absolute -right-4 -top-4 w-28 h-28 opacity-40">
                    {illustrations[pkg.illustration]}
                  </div>

                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <p className="text-[10px] font-light uppercase tracking-[0.25em] text-foreground/40 mb-1">
                          Quote #{pkg.id}
                        </p>
                        <h3 className="text-2xl font-light text-foreground">{pkg.name}</h3>
                        <p className="text-sm text-foreground/50 font-light mt-0.5">{pkg.tagline}</p>
                      </div>
                      {pkg.badge && (
                        <span
                          className={`text-[10px] font-light uppercase tracking-widest px-3 py-1 rounded-full ${
                            pkg.popular
                              ? 'bg-accent/25 text-accent'
                              : 'bg-foreground/10 text-foreground/60'
                          }`}
                        >
                          {pkg.badge}
                        </span>
                      )}
                    </div>

                    {/* Price */}
                    <div className="mt-4 mb-2">
                      {pkg.price ? (
                        <div className="flex items-end gap-2">
                          <span className="text-4xl font-light text-accent">{fmt(pkg.price)}</span>
                          <span className="text-sm text-foreground/40 font-light mb-1">/ full package</span>
                        </div>
                      ) : (
                        <span className="text-3xl font-light text-accent">Custom Quote</span>
                      )}
                    </div>

                    {/* Trust line */}
                    <p className="text-[11px] text-foreground/40 font-light italic">{pkg.trust}</p>
                  </div>
                </div>

                {/* ── Service Breakdown ── */}
                <div className="px-6 py-5">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-[10px] uppercase tracking-[0.25em] text-foreground/35 font-light">
                      Service Breakdown
                    </span>
                    <div className="flex-1 h-px bg-foreground/10" />
                  </div>

                  {/* Column headers */}
                  <div className="grid grid-cols-[1fr_auto] gap-x-4 mb-2 px-1">
                    <span className="text-[10px] uppercase tracking-widest text-foreground/25 font-light">Item</span>
                    <span className="text-[10px] uppercase tracking-widest text-foreground/25 font-light text-right">Amt</span>
                  </div>

                  {/* Line items */}
                  <div className="divide-y divide-foreground/5">
                    {pkg.lineItems.map((item, i) => (
                      <div key={i} className="grid grid-cols-[1fr_auto] gap-x-3 py-2.5 px-1 group/item hover:bg-accent/3 rounded-lg transition-colors">
                        <div>
                          <div className="flex items-center gap-1.5 mb-0.5">
                            <span className="text-accent/60">{categoryIcons[item.category]}</span>
                            <span className="text-[9px] uppercase tracking-widest text-accent/55 font-light">
                              {item.category}
                            </span>
                          </div>
                          <p className="text-xs text-foreground/70 font-light leading-snug">{item.item}</p>
                          {item.qty !== null && (
                            <p className="text-[10px] text-foreground/28 font-light mt-0.5">
                              {item.qty} {item.unit}
                              {item.rate !== null && <> × {fmt(item.rate)}</>}
                            </p>
                          )}
                        </div>
                        <div className="text-right self-center">
                          {item.rate !== null && item.qty !== null ? (
                            <span className="text-xs font-light text-foreground/75">
                              {fmt(item.qty * item.rate)}
                            </span>
                          ) : (
                            <span className="text-xs font-light text-foreground/30 italic">TBD</span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Total */}
                  {pkg.price && (
                    <div className="mt-3 pt-3 border-t border-foreground/15 flex justify-between items-center px-1">
                      <span className="text-xs uppercase tracking-widest text-foreground/50 font-light">Total</span>
                      <span className="text-lg font-light text-accent">{fmt(pkg.price)}</span>
                    </div>
                  )}
                </div>

                {/* ── Add-ons ── */}
                <div className="px-6 pb-5">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-[10px] uppercase tracking-[0.25em] text-foreground/35 font-light">
                      Included Add-ons
                    </span>
                    <div className="flex-1 h-px bg-foreground/10" />
                  </div>
                  <div className="grid grid-cols-1 gap-1.5">
                    {pkg.addons.map((addon, i) => (
                      <div key={i} className="flex items-center gap-2.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-accent/50 shrink-0" />
                        <span className="text-xs text-foreground/55 font-light">{addon}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Fine print */}
                <div className="px-6 pb-4">
                  <p className="text-[10px] text-foreground/30 font-light italic leading-relaxed">{pkg.note}</p>
                </div>

                {/* CTA */}
                <div className="px-6 pb-6">
                  <button
                    className={`w-full py-3 rounded-full text-sm font-light tracking-wide transition-all duration-300 hover:scale-[1.03] flex items-center justify-center gap-2 group/btn ${
                      pkg.popular
                        ? 'bg-foreground text-background hover:bg-foreground/90'
                        : pkg.price === null
                        ? 'border border-accent/40 text-accent hover:bg-accent/10'
                        : 'glass-effect text-foreground hover:glass-effect-dark'
                    }`}
                  >
                    {pkg.price === null ? 'Schedule Discovery Call' : 'Get Started'}
                    <ArrowRight className="w-3.5 h-3.5 opacity-60 group-hover/btn:opacity-100 group-hover/btn:translate-x-0.5 transition-all" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ── Process Flow ── */}
        <div
          ref={processRef}
          className={`mt-28 transition-all duration-700 ${
            processVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-light text-foreground mb-3">
              How It <span className="text-accent">Works</span>
            </h3>
            <p className="text-sm text-foreground/45 font-light">From first contact to flawless execution in 4 steps</p>
          </div>

          {/* Steps + connecting line */}
          <div className="relative glass-effect rounded-3xl px-8 py-12">
            {/* Connecting line (desktop) */}
            <div className="hidden md:block absolute top-[72px] left-[calc(12.5%)] right-[calc(12.5%)] h-px">
              <svg className="w-full h-4" viewBox="0 0 800 4" preserveAspectRatio="none">
                <line x1="0" y1="2" x2="800" y2="2"
                  stroke="currentColor" strokeWidth="1"
                  strokeDasharray="6 6"
                  className="text-accent/30 draw-line"
                />
              </svg>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-10 relative z-10">
              {processSteps.map((step, i) => (
                <ProcessStep key={i} step={step} index={i} isVisible={processVisible} />
              ))}
            </div>
          </div>
        </div>

        {/* ── Feature Pills Row ── */}
        <div className={`mt-16 flex flex-wrap justify-center gap-3 transition-all duration-700 delay-300 ${
          processVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}>
          {[
            { icon: <Shield className="w-3.5 h-3.5" />, text: 'Written Agreement Included' },
            { icon: <CheckCircle2 className="w-3.5 h-3.5" />, text: 'Pre-event Consultation Free' },
            { icon: <Star className="w-3.5 h-3.5" />, text: '98% Client Satisfaction' },
            { icon: <HeartHandshake className="w-3.5 h-3.5" />, text: 'Dedicated Support Team' },
          ].map((pill, i) => (
            <div
              key={i}
              className="flex items-center gap-2 px-4 py-2 glass-effect rounded-full"
            >
              <span className="text-accent">{pill.icon}</span>
              <span className="text-xs text-foreground/60 font-light">{pill.text}</span>
            </div>
          ))}
        </div>

        {/* ── Footer note ── */}
        <div className={`text-center mt-10 transition-all duration-700 delay-500 ${
          processVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}>
          <p className="text-sm text-foreground/35 font-light">
            All packages include a pre-event consultation and written agreement.{' '}
            <span className="text-accent/60">GST applicable as per government norms.</span>
          </p>
        </div>
      </div>
    </section>
  )
}
