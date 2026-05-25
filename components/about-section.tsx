"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"

export function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-32 relative" ref={ref}>
      {/* Section number */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8 }}
        className="absolute top-32 right-6 lg:right-12 text-xs tracking-widest text-muted-foreground"
      >
        02
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <span className="text-xs tracking-widest uppercase text-muted-foreground">@camille.laurent</span>
          <motion.div 
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="h-px bg-border mt-4 origin-left"
          />
        </motion.div>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-serif text-5xl sm:text-6xl lg:text-7xl italic mb-16"
        >
          Who I Am
        </motion.h2>

        {/* Content grid */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Text columns */}
          <div className="space-y-8">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-muted-foreground leading-relaxed"
            >
              With over a decade of experience in strategic communication, I have 
              dedicated my career to helping brands find their authentic voice and 
              connect meaningfully with their audiences. My approach combines 
              creative intuition with data-driven insights.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-muted-foreground leading-relaxed"
            >
              Based in Paris, I work with luxury brands, cultural institutions, 
              and forward-thinking companies who understand that exceptional 
              communication is not just about visibility—it&apos;s about creating 
              lasting impressions and building genuine relationships.
            </motion.p>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="h-px bg-foreground w-24 origin-left"
            />
          </div>

          {/* Second text column */}
          <div className="space-y-8">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-muted-foreground leading-relaxed"
            >
              Every project begins with deep listening and research. I believe that 
              the most powerful communication strategies emerge from understanding 
              not just what a brand wants to say, but what its audience needs to hear.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-muted-foreground leading-relaxed"
            >
              My work spans brand positioning, content strategy, public relations, 
              and creative direction. Whether launching a new product or repositioning 
              an established brand, I bring the same commitment to excellence and 
              attention to detail.
            </motion.p>
          </div>
        </div>

        {/* Images */}
     
      </div>
    </section>
  )
}
