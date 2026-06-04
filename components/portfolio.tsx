'use client'

import { useState } from 'react'
import { useInView } from '@/hooks/useInView'
import { ArrowUpRight, Play, Star, Users, Calendar, MapPin } from 'lucide-react'
import Image from 'next/image'

const categories = ['All', 'Wedding', 'Corporate', 'Celebration', 'Experience']

const portfolioItems = [
  {
    id: 1,
    title: 'Grand Wedding Celebration',
    subtitle: 'Sharma × Mehta',
    category: 'Wedding',
    description: 'A luxurious 3-day celebration with 500+ guests across two venues, featuring complete floral architecture, live orchestra, and cinematic coverage.',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80',
    stats: { guests: '520+', days: '3', venue: 'Mumbai' },
    rating: 5,
    featured: true,
    tags: ['Photography', 'Décor', 'MC', 'Catering'],
    aspect: 'tall',
  },
  {
    id: 2,
    title: 'TechCorp Annual Gala',
    subtitle: 'Fortune 500 Client',
    category: 'Corporate',
    description: 'Elegant corporate event with main stage, LED installations, professional MC, and VIP dining experience.',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80',
    stats: { guests: '300+', days: '1', venue: 'Bangalore' },
    rating: 5,
    featured: false,
    tags: ['AV Setup', 'MC', 'Stage'],
    aspect: 'wide',
  },
  {
    id: 3,
    title: 'Aria\'s 25th Birthday',
    subtitle: 'Private Celebration',
    category: 'Celebration',
    description: 'Intimate yet spectacular rooftop birthday with custom neon installations, photo booth, and surprise performer.',
    image: 'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?w=800&q=80',
    stats: { guests: '80', days: '1', venue: 'Delhi' },
    rating: 5,
    featured: false,
    tags: ['Décor', 'Photography', 'Entertainment'],
    aspect: 'square',
  },
  {
    id: 4,
    title: 'Patel Engagement Ceremony',
    subtitle: 'Sanjay × Priya',
    category: 'Wedding',
    description: 'Intimate engagement with hand-crafted floral mandap, drone photography, and custom invitation suite.',
    image: 'https://images.unsplash.com/photo-1469371670807-013ccf25f16a?w=800&q=80',
    stats: { guests: '150', days: '1', venue: 'Ahmedabad' },
    rating: 5,
    featured: false,
    tags: ['Photography', 'Floral', 'Invitations'],
    aspect: 'square',
  },
  {
    id: 5,
    title: 'Nexus Product Launch',
    subtitle: 'Tech Startup',
    category: 'Corporate',
    description: 'High-energy product launch with live demos, 4K projection mapping, and influencer coordination for 200 media attendees.',
    image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&q=80',
    stats: { guests: '200', days: '1', venue: 'Hyderabad' },
    rating: 4,
    featured: false,
    tags: ['AV', 'Projection', 'PR Coordination'],
    aspect: 'wide',
  },
  {
    id: 6,
    title: 'Bloom Music Festival',
    subtitle: 'Annual Cultural Event',
    category: 'Experience',
    description: 'A 2-day open-air festival with 6 stages, 30+ artists, crowd management for 5,000 attendees, and complete logistics.',
    image: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&q=80',
    stats: { guests: '5,000', days: '2', venue: 'Pune' },
    rating: 5,
    featured: false,
    tags: ['Logistics', 'Stage', 'Security', 'AV'],
    aspect: 'tall',
  },
  {
    id: 7,
    title: 'Royal Mehndi Night',
    subtitle: 'Khan Wedding Series',
    category: 'Wedding',
    description: 'Traditional mehndi ceremony transformed into a spectacle with live dhol, folk dancers, and Instagram-worthy décor.',
    image: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800&q=80',
    stats: { guests: '200', days: '1', venue: 'Jaipur' },
    rating: 5,
    featured: false,
    tags: ['Décor', 'Entertainment', 'Catering'],
    aspect: 'square',
  },
  {
    id: 8,
    title: 'Horizon Leadership Summit',
    subtitle: 'Industry Conference',
    category: 'Corporate',
    description: 'Two-day leadership summit with simultaneous translation, live streaming to 10K viewers, and gala dinner.',
    image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&q=80',
    stats: { guests: '400', days: '2', venue: 'Chennai' },
    rating: 5,
    featured: false,
    tags: ['Streaming', 'AV', 'Catering', 'MC'],
    aspect: 'wide',
  },
]

const stats = [
  { value: '500+', label: 'Events Crafted' },
  { value: '50K+', label: 'Happy Guests' },
  { value: '12', label: 'Cities Covered' },
  { value: '10+', label: 'Years of Excellence' },
  { value: '98%', label: 'Client Satisfaction' },
]

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`w-3 h-3 ${i < count ? 'fill-accent text-accent' : 'text-foreground/20'}`}
        />
      ))}
    </div>
  )
}

function PortfolioCard({ item, index, isVisible }: {
  item: typeof portfolioItems[0]
  index: number
  isVisible: boolean
}) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      className={`relative group rounded-2xl overflow-hidden cursor-pointer transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      } ${
        item.aspect === 'tall' ? 'row-span-2' :
        item.aspect === 'wide' ? 'col-span-2' : ''
      }`}
      style={{ transitionDelay: isVisible ? `${index * 80}ms` : '0ms' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image */}
      <div className={`relative w-full transition-all duration-700 ${
        item.aspect === 'tall' ? 'h-[520px]' :
        item.aspect === 'wide' ? 'h-[260px]' : 'h-[260px]'
      }`}>
        <Image
          src={item.image}
          alt={item.title}
          fill
          className={`object-cover transition-transform duration-700 ${
            hovered ? 'scale-110' : 'scale-100'
          }`}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />

        {/* Base gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        {/* Hover overlay */}
        <div className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/10 transition-opacity duration-500 ${
          hovered ? 'opacity-100' : 'opacity-0'
        }`} />

        {/* Category badge */}
        <div className="absolute top-4 left-4">
          <span className="text-[10px] uppercase tracking-[0.2em] font-light px-3 py-1 rounded-full glass-effect text-foreground/90">
            {item.category}
          </span>
        </div>

        {/* Featured badge */}
        {item.featured && (
          <div className="absolute top-4 right-4">
            <span className="text-[10px] uppercase tracking-widest font-light px-3 py-1 rounded-full bg-accent/80 text-background">
              Featured
            </span>
          </div>
        )}

        {/* Arrow icon on hover */}
        <div className={`absolute top-4 right-4 w-9 h-9 rounded-full glass-effect flex items-center justify-center transition-all duration-300 ${
          hovered && !item.featured ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'
        }`}>
          <ArrowUpRight className="w-4 h-4 text-foreground" />
        </div>

        {/* Bottom info */}
        <div className="absolute bottom-0 left-0 right-0 p-5">
          <div className="flex items-start justify-between gap-2">
            <div>
              <p className="text-[10px] text-white/50 font-light uppercase tracking-widest mb-1">
                {item.subtitle}
              </p>
              <h3 className="text-lg font-light text-white leading-tight">
                {item.title}
              </h3>
              <div className="mt-1.5">
                <StarRating count={item.rating} />
              </div>
            </div>
          </div>

          {/* Expandable detail on hover */}
          <div className={`overflow-hidden transition-all duration-500 ${
            hovered ? 'max-h-48 opacity-100 mt-3' : 'max-h-0 opacity-0 mt-0'
          }`}>
            <p className="text-xs text-white/70 font-light leading-relaxed mb-3">
              {item.description}
            </p>
            <div className="flex items-center gap-4 mb-3">
              <div className="flex items-center gap-1.5">
                <Users className="w-3 h-3 text-accent/80" />
                <span className="text-xs text-white/60 font-light">{item.stats.guests}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Calendar className="w-3 h-3 text-accent/80" />
                <span className="text-xs text-white/60 font-light">{item.stats.days} day{parseInt(item.stats.days) > 1 ? 's' : ''}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3 h-3 text-accent/80" />
                <span className="text-xs text-white/60 font-light">{item.stats.venue}</span>
              </div>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {item.tags.map((tag) => (
                <span key={tag} className="text-[10px] px-2 py-0.5 rounded-full bg-white/10 text-white/70 font-light">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [sectionVisible, sectionRef] = useInView()
  const [statsVisible, statsRef] = useInView()

  const filtered = activeCategory === 'All'
    ? portfolioItems
    : portfolioItems.filter((p) => p.category === activeCategory)

  return (
    <section id="portfolio" className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-20 left-0 w-[400px] h-[400px] bg-accent/3 rounded-full blur-[100px] pointer-events-none" />

      {/* Decorative SVG */}
      <div className="absolute top-20 right-10 opacity-10 pointer-events-none">
        <svg width="200" height="200" viewBox="0 0 200 200" fill="none">
          <circle cx="100" cy="100" r="90" stroke="currentColor" strokeWidth="0.5" className="text-accent animate-spin-slow" strokeDasharray="8 6" />
          <circle cx="100" cy="100" r="65" stroke="currentColor" strokeWidth="0.5" className="text-accent animate-spin-slow-reverse" strokeDasharray="4 8" />
          <circle cx="100" cy="100" r="40" stroke="currentColor" strokeWidth="0.5" className="text-accent animate-spin-slow" strokeDasharray="2 10" />
          <circle cx="100" cy="100" r="5" fill="currentColor" className="text-accent" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div
          ref={sectionRef}
          className={`text-center mb-16 transition-all duration-700 ${
            sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <span className="inline-block text-xs font-light uppercase tracking-[0.3em] text-accent/80 mb-4 px-4 py-1.5 glass-effect rounded-full">
            Our Work
          </span>
          <h2 className="text-5xl sm:text-6xl font-light text-foreground mt-4 mb-6">
            Crafted <span className="text-accent">Moments</span>
          </h2>
          <p className="text-lg text-foreground/50 font-light max-w-2xl mx-auto">
            Every event we create is a story — here are a few of our favourites.
          </p>
        </div>

        {/* Category Filter */}
        <div className={`flex flex-wrap justify-center gap-3 mb-12 transition-all duration-700 delay-100 ${
          sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-light tracking-wide transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-foreground text-background scale-105'
                  : 'glass-effect text-foreground/70 hover:text-foreground hover:scale-[1.03]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 auto-rows-auto">
          {filtered.map((item, index) => (
            <PortfolioCard
              key={item.id}
              item={item}
              index={index}
              isVisible={sectionVisible}
            />
          ))}
        </div>

        {/* Stats Ticker Bar */}
        <div
          ref={statsRef}
          className={`mt-20 transition-all duration-700 delay-300 ${
            statsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="glass-effect rounded-2xl py-8 overflow-hidden relative">
            {/* Gradient fade edges */}
            <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-background/60 to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-background/60 to-transparent z-10 pointer-events-none" />

            <div className="flex animate-ticker whitespace-nowrap w-max">
              {[...stats, ...stats].map((stat, i) => (
                <div key={i} className="flex items-center gap-10 px-10">
                  <div className="text-center">
                    <div className="text-3xl font-light text-accent">{stat.value}</div>
                    <div className="text-xs uppercase tracking-widest text-foreground/40 font-light mt-0.5">{stat.label}</div>
                  </div>
                  <span className="text-foreground/15 text-2xl font-thin">✦</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className={`text-center mt-16 transition-all duration-700 delay-500 ${
          statsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}>
          <button className="group px-8 py-3.5 glass-effect-dark text-foreground font-light rounded-full hover:scale-105 transition-all duration-300 text-sm inline-flex items-center gap-3">
            <Play className="w-4 h-4 text-accent group-hover:scale-110 transition-transform" />
            Watch Our Showreel
            <ArrowUpRight className="w-4 h-4 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
          </button>
        </div>
      </div>
    </section>
  )
}
