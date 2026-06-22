'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useInView } from '@/hooks/useInView'
import { Heart, Lightbulb, Shield, Star, ArrowRight } from 'lucide-react'

const values = [
  { icon: <Heart className="w-5 h-5" />, title: 'Passion', desc: 'Every event is personal to us. We pour our hearts into making your vision real.' },
  { icon: <Lightbulb className="w-5 h-5" />, title: 'Creativity', desc: 'We bring fresh ideas and original concepts that make your event truly one of a kind.' },
  { icon: <Shield className="w-5 h-5" />, title: 'Reliability', desc: 'Written agreements, transparent pricing, and a dedicated team — we never let you down.' },
  { icon: <Star className="w-5 h-5" />, title: 'Excellence', desc: 'From concept to execution, every detail is held to the highest standard.' },
]

const team = [
  { name: 'Shreedev', role: 'Founder & Creative Director', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80' },
  { name: 'Priya Sharma', role: 'Head of Events', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80' },
  { name: 'Arjun Mehta', role: 'AV & Technical Lead', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80' },
  { name: 'Kavya Nair', role: 'Décor & Design Lead', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80' },
]

const milestones = [
  { year: '2014', title: 'Founded', desc: 'Started with a single vision — to make every event unforgettable.' },
  { year: '2017', title: '100 Events', desc: 'Crossed our first major milestone, expanding to corporate clients.' },
  { year: '2020', title: 'Digital Launch', desc: 'Pioneered virtual & hybrid event experiences during a challenging time.' },
  { year: '2024', title: '500+ Events', desc: 'Now operating across 12 cities with a team of 30+ professionals.' },
]

export default function About() {
  const [heroVisible, heroRef] = useInView()
  const [valuesVisible, valuesRef] = useInView()
  const [teamVisible, teamRef] = useInView()
  const [timelineVisible, timelineRef] = useInView()

  return (
    <>
      {/* ── Hero ── */}
      <section className="pt-40 pb-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/5 to-transparent pointer-events-none" />
        <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

        <div
          ref={heroRef}
          className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center"
        >
          <div className={`transition-all duration-700 ${heroVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <span className="inline-block text-xs font-light uppercase tracking-[0.3em] text-accent/80 mb-4 px-4 py-1.5 glass-effect rounded-full">
              Our Story
            </span>
            <h1 className="text-5xl sm:text-6xl font-light text-foreground mt-4 mb-8 leading-tight">
              Born from a <span className="text-accent">Passion</span> for Perfect Moments
            </h1>
            <p className="text-lg text-foreground/55 font-light leading-relaxed mb-6">
              Founded in 2014, shreedev.art began as a photography studio and grew into a full-scale event management company — all driven by one goal: making your most important days truly extraordinary.
            </p>
            <p className="text-base text-foreground/45 font-light leading-relaxed mb-10">
              Today we work across 12 cities, managing 500+ events a year, from intimate 20-person celebrations to grand 5,000-person galas. Our team of 30+ passionate professionals brings creativity, precision, and warmth to every occasion.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-8 py-3.5 bg-foreground text-background rounded-full font-light text-sm hover:scale-105 transition-all duration-300 group"
            >
              Work With Us
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>

          <div className={`relative transition-all duration-700 delay-200 ${heroVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="relative rounded-3xl overflow-hidden aspect-[4/3]">
              <Image
                src="https://images.unsplash.com/photo-1519741497674-611481863552?w=900&q=80"
                alt="Team at work"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
            {/* Floating stat card */}
            <div className="absolute -bottom-6 -left-6 glass-effect-dark rounded-2xl p-5 shadow-xl">
              <div className="text-3xl font-light text-accent mb-1">500+</div>
              <div className="text-xs text-foreground/60 font-light uppercase tracking-widest">Events Crafted</div>
            </div>
            <div className="absolute -top-6 -right-6 glass-effect rounded-2xl p-5 shadow-xl">
              <div className="text-3xl font-light text-accent mb-1">98%</div>
              <div className="text-xs text-foreground/60 font-light uppercase tracking-widest">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Values ── */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent via-accent/5 to-transparent">
        <div className="max-w-7xl mx-auto">
          <div
            ref={valuesRef}
            className={`text-center mb-14 transition-all duration-700 ${valuesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            <h2 className="text-4xl sm:text-5xl font-light text-foreground mb-4">
              What We <span className="text-accent">Stand For</span>
            </h2>
            <p className="text-foreground/50 font-light max-w-xl mx-auto">The principles that guide every event we create.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <div
                key={v.title}
                className={`glass-effect rounded-2xl p-7 group hover:scale-[1.02] transition-all duration-500 ${
                  valuesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: valuesVisible ? `${i * 100}ms` : '0ms' }}
              >
                <div className="w-11 h-11 rounded-xl glass-effect-dark flex items-center justify-center text-accent mb-5 group-hover:scale-110 transition-transform duration-300">
                  {v.icon}
                </div>
                <h3 className="text-lg font-light text-foreground mb-2">{v.title}</h3>
                <p className="text-sm text-foreground/50 font-light leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Timeline ── */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div
            ref={timelineRef}
            className={`text-center mb-14 transition-all duration-700 ${timelineVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            <h2 className="text-4xl sm:text-5xl font-light text-foreground mb-4">
              Our <span className="text-accent">Journey</span>
            </h2>
          </div>
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-[39px] sm:left-1/2 top-0 bottom-0 w-px bg-foreground/10 -translate-x-1/2" />
            <div className="space-y-12">
              {milestones.map((m, i) => (
                <div
                  key={m.year}
                  className={`relative flex gap-8 sm:gap-0 transition-all duration-700 ${
                    timelineVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  } ${i % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'}`}
                  style={{ transitionDelay: timelineVisible ? `${i * 150}ms` : '0ms' }}
                >
                  {/* Dot */}
                  <div className="absolute left-[39px] sm:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-accent/80 border-2 border-background shadow-lg shadow-accent/20 top-1" />

                  {/* Content */}
                  <div className={`ml-16 sm:ml-0 sm:w-[45%] ${i % 2 === 0 ? 'sm:pr-12 sm:text-right' : 'sm:pl-12 sm:text-left'}`}>
                    <div className="glass-effect rounded-2xl p-6 hover:scale-[1.01] transition-transform duration-300">
                      <span className="text-xs font-light uppercase tracking-widest text-accent/70 mb-2 block">{m.year}</span>
                      <h3 className="text-xl font-light text-foreground mb-2">{m.title}</h3>
                      <p className="text-sm text-foreground/50 font-light leading-relaxed">{m.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Team ── */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent via-accent/5 to-transparent">
        <div className="max-w-7xl mx-auto">
          <div
            ref={teamRef}
            className={`text-center mb-14 transition-all duration-700 ${teamVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            <h2 className="text-4xl sm:text-5xl font-light text-foreground mb-4">
              Meet the <span className="text-accent">Team</span>
            </h2>
            <p className="text-foreground/50 font-light max-w-xl mx-auto">The people behind every perfect moment.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-7">
            {team.map((member, i) => (
              <div
                key={member.name}
                className={`glass-effect rounded-2xl overflow-hidden group hover:scale-[1.02] transition-all duration-500 ${
                  teamVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: teamVisible ? `${i * 100}ms` : '0ms' }}
              >
                <div className="relative h-56">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <div className="p-5">
                  <h3 className="text-base font-light text-foreground mb-0.5">{member.name}</h3>
                  <p className="text-xs text-foreground/50 font-light">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
