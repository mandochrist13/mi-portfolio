"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import Link from "next/link"

const socialLinks = [
  { name: "LinkedIn", href: "https://linkedin.com" },
  { name: "Instagram", href: "https://instagram.com" },
  { name: "Twitter", href: "https://twitter.com" },
]

export function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [formState, setFormState] = useState({ name: "", email: "", message: "" })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formState)
  }

  return (
    <section id="contact" className="py-32 relative" ref={ref}>
      {/* Section number */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8 }}
        className="absolute top-32 right-6 lg:right-12 text-xs tracking-widest text-muted-foreground"
      >
        04
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          <div>
            <motion.span
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.8 }}
              className="text-xs tracking-widest uppercase text-muted-foreground block mb-4"
            >
              Get in Touch
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-serif text-5xl sm:text-6xl lg:text-7xl mb-8"
            >
              Let&apos;s Work
              <span className="italic block">Together</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-muted-foreground max-w-md mb-12"
            >
              Interested in collaborating on your next communication project? 
              I&apos;d love to hear about your vision and explore how we can bring it to life.
            </motion.p>

            {/* Contact details */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="space-y-6"
            >
              <div>
                <span className="text-xs tracking-widest uppercase text-muted-foreground block mb-2">Email</span>
                <Link 
                  href="mailto:hello@MiriameDOUTSONA .com"
                  className="font-serif text-xl hover:italic transition-all duration-300"
                >
                  hello@MiriameDOUTSONA .com
                </Link>
              </div>
              <div>
                <span className="text-xs tracking-widest uppercase text-muted-foreground block mb-2">Based in</span>
                <span className="font-serif text-xl">Paris, France</span>
              </div>
              <div>
                <span className="text-xs tracking-widest uppercase text-muted-foreground block mb-2">Social</span>
                <div className="flex gap-6">
                  {socialLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm tracking-widest hover:opacity-60 transition-opacity"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="space-y-8">
              <div>
                <label className="text-xs tracking-widest uppercase text-muted-foreground block mb-3">
                  Your Name
                </label>
                <input
                  type="text"
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  className="w-full bg-transparent border-b border-border pb-3 focus:border-foreground focus:outline-none transition-colors placeholder:text-muted-foreground/50"
                  placeholder="John Doe"
                  required
                />
              </div>
              <div>
                <label className="text-xs tracking-widest uppercase text-muted-foreground block mb-3">
                  Email Address
                </label>
                <input
                  type="email"
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  className="w-full bg-transparent border-b border-border pb-3 focus:border-foreground focus:outline-none transition-colors placeholder:text-muted-foreground/50"
                  placeholder="john@example.com"
                  required
                />
              </div>
              <div>
                <label className="text-xs tracking-widest uppercase text-muted-foreground block mb-3">
                  Your Message
                </label>
                <textarea
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  rows={5}
                  className="w-full bg-transparent border-b border-border pb-3 focus:border-foreground focus:outline-none transition-colors resize-none placeholder:text-muted-foreground/50"
                  placeholder="Tell me about your project..."
                  required
                />
              </div>
              <button
                type="submit"
                className="group inline-flex items-center gap-3 bg-foreground text-background px-8 py-4 text-sm tracking-widest uppercase hover:bg-foreground/90 transition-colors"
              >
                Send Message
                <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
