'use client'

import { useInView } from '@/hooks/useInView'

const testimonials = [
  {
    id: 1,
    name: 'Rahul & Priya Mehta',
    role: 'Wedding Couple',
    content: 'Shreedev.art transformed our wedding into an absolute dream. Every detail was perfect, and we felt completely stress-free thanks to their expert coordination.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Amit Sharma',
    role: 'Corporate Client',
    content: 'The professionalism and creativity displayed in our product launch was exceptional. The team delivered beyond expectations with perfect execution.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Neha Desai',
    role: 'Event Organizer',
    content: 'Working with this team was seamless. Their attention to detail and ability to manage complex events with grace is truly commendable.',
    rating: 5,
  },
]

export default function Testimonials() {
  const [isVisible, ref] = useInView()

  return (
    <section id="testimonials" className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-accent/5 to-transparent">
      <div className="max-w-7xl mx-auto">
        <div
          ref={ref}
          className={`text-center mb-20 transition-all duration-700 ${
            isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-5xl sm:text-6xl font-light text-foreground mb-6">
            Client<span className="text-accent"> Stories</span>
          </h2>
          <p className="text-lg text-foreground/60 font-light max-w-2xl mx-auto">
            Testimonials from clients whose events we&apos;ve had the honor of creating.
          </p>
        </div>

        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`glass-effect rounded-2xl p-8 transition-all duration-500 hover:scale-105 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: isVisible ? `${index * 150}ms` : '0ms' }}
            >
              <div className="flex gap-1 mb-6">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <span key={i} className="text-lg text-accent">
                    ★
                  </span>
                ))}
              </div>
              
              <p className="text-foreground/80 font-light mb-8 leading-relaxed italic">
                &quot;{testimonial.content}&quot;
              </p>
              
              <div className="pt-6 border-t border-foreground/10">
                <h4 className="text-foreground font-light mb-1">
                  {testimonial.name}
                </h4>
                <p className="text-sm text-foreground/60 font-light">
                  {testimonial.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
