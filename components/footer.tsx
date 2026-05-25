"use client"

import { motion } from "framer-motion"
import Link from "next/link"

const footerLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
]

const socialLinks = [
  { name: "LinkedIn", href: "https://linkedin.com" },
  { name: "Instagram", href: "https://instagram.com" },
  { name: "Twitter", href: "https://twitter.com" },
]

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Top section */}
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          {/* Brand */}
          <div>
            <Link href="/" className="font-serif text-2xl tracking-wide">
              DOUTSONA Miriame
            </Link>
            <p className="text-background/60 text-sm mt-4 max-w-xs">
              Communication Strategist based in Paris, crafting compelling narratives 
              for luxury and cultural brands.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <span className="text-xs tracking-widest uppercase text-background/40 block mb-4">
              Navigation
            </span>
            <div className="flex flex-col gap-3">
              {footerLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-sm text-background/60 hover:text-background transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Social */}
          <div>
            <span className="text-xs tracking-widest uppercase text-background/40 block mb-4">
              Connect
            </span>
            <div className="flex flex-col gap-3">
              {socialLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-background/60 hover:text-background transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="mailto:hello@MiriameDOUTSONA .com"
                className="text-sm text-background/60 hover:text-background transition-colors"
              >
                hello@MiriameDOUTSONA .com
              </Link>
            </div>
          </div>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="h-px bg-background/20 mb-8 origin-left"
        />

        {/* Bottom section */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-xs tracking-widest text-background/40">
          <span>&copy; {new Date().getFullYear()} DOUTSONA Miriame. All rights reserved.</span>
          <span>Designed with passion in Paris</span>
        </div>
      </div>
    </footer>
  )
}
