'use client'

import { useInView } from '@/hooks/useInView'

const stats = [
  { value: '500+', label: 'Events Crafted' },
  { value: '1,000+', label: 'Happy Clients' },
  { value: '10+', label: 'Years of Excellence' },
  { value: '12', label: 'Cities Covered' },
  { value: '98%', label: 'Client Satisfaction' },
]

export default function StatsStrip() {
  const [isVisible, ref] = useInView()

  return (
    <section ref={ref} className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-accent/5">
      <div className="max-w-7xl mx-auto">
        <div className="glass-effect rounded-2xl px-6 py-10">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 divide-x-0 sm:divide-x divide-foreground/10">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className={`text-center transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
                style={{ transitionDelay: isVisible ? `${i * 100}ms` : '0ms' }}
              >
                <div className="text-4xl sm:text-5xl font-light text-accent mb-2">
                  {stat.value}
                </div>
                <div className="text-xs text-foreground/50 font-light uppercase tracking-widest">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
