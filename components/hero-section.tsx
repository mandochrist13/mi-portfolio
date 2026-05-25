"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="min-h-screen relative flex items-center justify-center overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-6 lg:left-12 text-xs tracking-widest uppercase text-muted-foreground">
          @Miriame.DOUTSONA 
        </div>
        <div className="absolute top-20 right-6 lg:right-12 text-xs tracking-widest uppercase text-muted-foreground">
          Communication Strategist
        </div>
        <motion.div 
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.5, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="absolute top-24 left-6 right-6 lg:left-12 lg:right-12 h-px bg-border origin-left"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-32 pb-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column - Text */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="order-2 lg:order-1"
          >
            <div className="space-y-8">
              <div className="space-y-2">
                <motion.h1 
                  className="font-serif text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-medium tracking-tight leading-none"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  Miriame
                </motion.h1>
                <motion.h1 
                  className="font-serif text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-medium tracking-tight leading-none italic"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                >
                  DOUTSONA 
                </motion.h1>
              </div>

              <motion.div 
                className="h-px bg-foreground w-24"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 1 }}
              />

              <motion.p 
                className="text-muted-foreground text-lg max-w-md leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.2 }}
              >
                Crafting compelling narratives and strategic communication solutions 
                that elevate brands and connect with audiences on a deeper level.
              </motion.p>

              <motion.div 
                className="flex flex-wrap gap-4 pt-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.4 }}
              >
                <Link 
                  href="#projects"
                  className="group inline-flex items-center gap-3 bg-foreground text-background px-8 py-4 text-sm tracking-widest uppercase hover:bg-foreground/90 transition-colors"
                >
                  View Projects
                  <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
                </Link>
                <Link 
                  href="#contact"
                  className="inline-flex items-center gap-3 border border-foreground px-8 py-4 text-sm tracking-widest uppercase hover:bg-foreground hover:text-background transition-colors"
                >
                  Contact
                </Link>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="order-1 lg:order-2 relative"
          >
            <div className="relative aspect-[3/4] max-w-md mx-auto lg:ml-auto grain">
              <Image
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&q=80"
                alt="DOUTSONA Miriame - Communication Strategist"
                fill
                className="object-cover grayscale"
                priority
              />
              {/* Decorative frame */}
              <div className="absolute -inset-4 border border-border -z-10" />
              <div className="absolute -bottom-8 -right-8 w-32 h-32 border border-border -z-10" />
            </div>
          </motion.div>
        </div>

        {/* Bottom decorative elements */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.6 }}
          className="absolute bottom-12 left-6 lg:left-12 flex items-center gap-4"
        >
          <span className="text-xs tracking-widest uppercase text-muted-foreground">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-px h-8 bg-foreground"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.6 }}
          className="absolute bottom-12 right-6 lg:right-12 text-xs tracking-widest text-muted-foreground"
        >
          01
        </motion.div>
      </div>
    </section>
  )
}
