'use client'

import { useState } from 'react'
import { useInView } from '@/hooks/useInView'

export default function Contact() {
  const [isVisible, ref] = useInView()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
    setFormData({ name: '', email: '', phone: '', eventType: '', message: '' })
  }

  return (
    <section id="contact" className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-accent/5 to-transparent">
      <div className="max-w-4xl mx-auto">
        <div
          ref={ref}
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-5xl sm:text-6xl font-light text-foreground mb-6">
            Let&apos;s Create<span className="text-accent"> Together</span>
          </h2>
          <p className="text-lg text-foreground/60 font-light">
            Ready to bring your vision to life? Get in touch with us today.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className={`glass-effect rounded-2xl p-8 sm:p-12 transition-all duration-700 ${
            isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="grid sm:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-light text-foreground/70 mb-3 uppercase tracking-wider">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-background/50 border border-foreground/20 rounded-lg px-4 py-3 text-foreground font-light focus:outline-none focus:border-accent transition-colors duration-300 placeholder:text-foreground/40"
                placeholder="Rahul Mehta"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-light text-foreground/70 mb-3 uppercase tracking-wider">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-background/50 border border-foreground/20 rounded-lg px-4 py-3 text-foreground font-light focus:outline-none focus:border-accent transition-colors duration-300 placeholder:text-foreground/40"
                placeholder="rahul@example.com"
                required
              />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-light text-foreground/70 mb-3 uppercase tracking-wider">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full bg-background/50 border border-foreground/20 rounded-lg px-4 py-3 text-foreground font-light focus:outline-none focus:border-accent transition-colors duration-300 placeholder:text-foreground/40"
                placeholder="+91 9876543210"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-light text-foreground/70 mb-3 uppercase tracking-wider">
                Event Type
              </label>
              <select
                name="eventType"
                value={formData.eventType}
                onChange={handleChange}
                className="w-full bg-background/50 border border-foreground/20 rounded-lg px-4 py-3 text-foreground font-light focus:outline-none focus:border-accent transition-colors duration-300"
                required
              >
                <option value="">Select an event type</option>
                <option value="wedding">Wedding</option>
                <option value="corporate">Corporate Event</option>
                <option value="birthday">Birthday Celebration</option>
                <option value="engagement">Engagement</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>

          <div className="mb-8">
            <label className="block text-sm font-light text-foreground/70 mb-3 uppercase tracking-wider">
              Tell Us About Your Vision
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              className="w-full bg-background/50 border border-foreground/20 rounded-lg px-4 py-3 text-foreground font-light focus:outline-none focus:border-accent transition-colors duration-300 placeholder:text-foreground/40 resize-none"
              placeholder="Describe your dream event..."
              required
            />
          </div>

          <button
            type="submit"
            className="w-full px-8 py-4 glass-effect text-foreground font-light rounded-full hover:scale-105 transition-transform duration-300 uppercase tracking-wider text-sm"
          >
            Send Inquiry
          </button>
        </form>

        <div className="grid sm:grid-cols-3 gap-6 mt-12">
          {[
            { label: 'Email', value: 'contact@shreedev.art' },
            { label: 'Phone', value: '+91 XXXXX XXXXX' },
            { label: 'Location', value: 'City Name, India' },
          ].map((item) => (
            <div key={item.label} className="text-center">
              <p className="text-sm font-light text-foreground/60 uppercase tracking-wider mb-2">
                {item.label}
              </p>
              <p className="text-foreground font-light">
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
