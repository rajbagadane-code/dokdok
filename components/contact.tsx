'use client'

import { useState } from 'react'
import Image from 'next/image'
import { useInView } from '@/hooks/useInView'
import { Mail, Phone, MapPin } from 'lucide-react'

export default function Contact() {
  const [isVisible, ref] = useInView()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    message: '',
  })
  const [sent, setSent] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSent(true)
    setFormData({ name: '', email: '', phone: '', eventType: '', message: '' })
    setTimeout(() => setSent(false), 4000)
  }

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-accent/5 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div
          ref={ref}
          className={`text-center mb-14 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <span className="inline-block text-xs font-light uppercase tracking-[0.3em] text-accent/80 mb-4 px-4 py-1.5 glass-effect rounded-full">
            Get In Touch
          </span>
          <h2 className="text-5xl sm:text-6xl font-light text-foreground mt-4 mb-4">
            Let&apos;s Create <span className="text-accent">Together</span>
          </h2>
          <p className="text-lg text-foreground/50 font-light">
            Ready to bring your vision to life? We&apos;d love to hear about your event.
          </p>
        </div>

        {/* Two-column layout */}
        <div className={`grid lg:grid-cols-5 gap-8 transition-all duration-700 delay-100 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>

          {/* Left: Image panel */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            <div className="relative rounded-2xl overflow-hidden h-64 lg:h-72">
              <Image
                src="https://images.unsplash.com/photo-1519741497674-611481863552?w=700&q=80"
                alt="Elegant event"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <p className="text-white/90 text-sm font-light">Weddings · Corporate · Celebrations</p>
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden h-44">
              <Image
                src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=700&q=80"
                alt="Corporate event"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>

            {/* Contact info */}
            <div className="glass-effect rounded-2xl p-6 space-y-4">
              {[
                { icon: <Mail className="w-4 h-4" />, label: 'Email', value: 'contact@shreedev.art' },
                { icon: <Phone className="w-4 h-4" />, label: 'Phone', value: '+91 74002 07911' },
                { icon: <MapPin className="w-4 h-4" />, label: 'Location', value: 'Maharashtra, India' },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg glass-effect-dark flex items-center justify-center text-accent shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-foreground/35 font-light">{item.label}</p>
                    <p className="text-sm text-foreground/80 font-light">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <form
            onSubmit={handleSubmit}
            className="lg:col-span-3 glass-effect rounded-2xl p-8 sm:p-10 flex flex-col gap-5"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-light text-foreground/55 mb-2 uppercase tracking-wider">Your Name</label>
                <input
                  type="text" name="name" value={formData.name} onChange={handleChange}
                  className="w-full bg-background/50 border border-foreground/15 rounded-xl px-4 py-3 text-foreground font-light text-sm focus:outline-none focus:border-accent transition-colors duration-300 placeholder:text-foreground/30"
                  placeholder="Rahul Mehta" required
                />
              </div>
              <div>
                <label className="block text-xs font-light text-foreground/55 mb-2 uppercase tracking-wider">Email</label>
                <input
                  type="email" name="email" value={formData.email} onChange={handleChange}
                  className="w-full bg-background/50 border border-foreground/15 rounded-xl px-4 py-3 text-foreground font-light text-sm focus:outline-none focus:border-accent transition-colors duration-300 placeholder:text-foreground/30"
                  placeholder="rahul@example.com" required
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-light text-foreground/55 mb-2 uppercase tracking-wider">Phone</label>
                <input
                  type="tel" name="phone" value={formData.phone} onChange={handleChange}
                  className="w-full bg-background/50 border border-foreground/15 rounded-xl px-4 py-3 text-foreground font-light text-sm focus:outline-none focus:border-accent transition-colors duration-300 placeholder:text-foreground/30"
                  placeholder="+91 9876543210" required
                />
              </div>
              <div>
                <label className="block text-xs font-light text-foreground/55 mb-2 uppercase tracking-wider">Event Type</label>
                <select
                  name="eventType" value={formData.eventType} onChange={handleChange}
                  className="w-full bg-background/50 border border-foreground/15 rounded-xl px-4 py-3 text-foreground font-light text-sm focus:outline-none focus:border-accent transition-colors duration-300"
                  required
                >
                  <option value="">Select event type</option>
                  <option value="wedding">Wedding</option>
                  <option value="corporate">Corporate Event</option>
                  <option value="birthday">Birthday Celebration</option>
                  <option value="engagement">Engagement</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-light text-foreground/55 mb-2 uppercase tracking-wider">Tell Us About Your Vision</label>
              <textarea
                name="message" value={formData.message} onChange={handleChange} rows={5}
                className="w-full bg-background/50 border border-foreground/15 rounded-xl px-4 py-3 text-foreground font-light text-sm focus:outline-none focus:border-accent transition-colors duration-300 placeholder:text-foreground/30 resize-none"
                placeholder="Describe your dream event..."
                required
              />
            </div>

            <button
              type="submit"
              className={`w-full py-4 rounded-full text-sm font-light tracking-widest uppercase transition-all duration-300 hover:scale-[1.02] ${
                sent
                  ? 'bg-accent/20 text-accent border border-accent/30'
                  : 'bg-foreground text-background hover:bg-foreground/90'
              }`}
            >
              {sent ? '✓ Inquiry Sent — We\'ll be in touch soon!' : 'Send Inquiry'}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
