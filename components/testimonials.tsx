'use client'

import Image from 'next/image'
import { useInView } from '@/hooks/useInView'
import { Quote } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    name: 'Rahul & Priya Mehta',
    role: 'Wedding Couple',
    location: 'Mumbai',
    content: 'Shreedev.art transformed our wedding into an absolute dream. Every detail was perfect, and we felt completely stress-free thanks to their expert coordination.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=200&q=80',
    eventImg: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=400&q=80',
  },
  {
    id: 2,
    name: 'Amit Sharma',
    role: 'Corporate Client · CEO',
    location: 'Bangalore',
    content: 'The professionalism and creativity displayed in our product launch was exceptional. The team delivered beyond expectations with perfect execution.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80',
    eventImg: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&q=80',
  },
  {
    id: 3,
    name: 'Neha Desai',
    role: 'Event Organizer',
    location: 'Pune',
    content: 'Working with this team was seamless. Their attention to detail and ability to manage complex events with grace is truly commendable.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80',
    eventImg: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=400&q=80',
  },
]

export default function Testimonials() {
  const [isVisible, ref] = useInView()

  return (
    <section className="py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Full-width background image with overlay */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=1800&q=60"
          alt="Event background"
          fill
          className="object-cover opacity-[0.06]"
          sizes="100vw"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        <div
          ref={ref}
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <span className="inline-block text-xs font-light uppercase tracking-[0.3em] text-accent/80 mb-4 px-4 py-1.5 glass-effect rounded-full">
            Client Stories
          </span>
          <h2 className="text-5xl sm:text-6xl font-light text-foreground mt-4 mb-6">
            Words from Our <span className="text-accent">Clients</span>
          </h2>
          <p className="text-lg text-foreground/50 font-light max-w-2xl mx-auto">
            Real stories from real people whose events we had the honour of creating.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-7">
          {testimonials.map((t, index) => (
            <div
              key={t.id}
              className={`glass-effect rounded-2xl overflow-hidden group hover:scale-[1.02] transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: isVisible ? `${index * 150}ms` : '0ms' }}
            >
              {/* Event thumbnail */}
              <div className="relative h-36 overflow-hidden">
                <Image
                  src={t.eventImg}
                  alt={`${t.name} event`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                {/* Quote icon */}
                <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-accent/80 flex items-center justify-center">
                  <Quote className="w-3.5 h-3.5 text-background" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Stars */}
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <span key={i} className="text-accent text-sm">★</span>
                  ))}
                </div>

                <p className="text-foreground/75 font-light text-sm leading-relaxed italic mb-6">
                  &quot;{t.content}&quot;
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 pt-4 border-t border-foreground/8">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden shrink-0">
                    <Image
                      src={t.avatar}
                      alt={t.name}
                      fill
                      className="object-cover"
                      sizes="40px"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-light text-foreground">{t.name}</p>
                    <p className="text-xs text-foreground/45 font-light">{t.role} · {t.location}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
