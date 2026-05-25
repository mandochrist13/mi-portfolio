"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"

const partners = [
  { name: "Chanel", logo: "/logos/chanel.svg" },
  { name: "Dior", logo: "/logos/dior.svg" },
  { name: "Louis Vuitton", logo: "/logos/louis-vuitton.svg" },
  { name: "Hermès", logo: "/logos/hermes.svg" },
  { name: "Cartier", logo: "/logos/cartier.svg" },
  { name: "Vogue", logo: "/logos/vogue.svg" },
  { name: "Harper's Bazaar", logo: "/logos/harpers-bazaar.svg" },
  { name: "Elle France", logo: "/logos/elle.svg" },
]

export function PartnersSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-32 bg-foreground text-background relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-20">
          <div>
            <motion.span
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.8 }}
              className="text-xs tracking-widest uppercase text-background/60 block mb-4"
            >
              Trusted By
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-serif text-5xl sm:text-6xl lg:text-7xl"
            >
              Partners &
              <span className="italic block">Clients</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-background/60 max-w-md"
          >
            Privileged to work with some of the world&apos;s most prestigious 
            brands and cultural institutions.
          </motion.p>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="h-px bg-background/20 mb-16 origin-left"
        />

        {/* Partners grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-background/10">
          {partners.map((partner, i) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.4 + i * 0.05 }}
              className="bg-foreground p-12 lg:p-16 flex flex-col items-center justify-center gap-5 group"
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                width={160}
                height={48}
                className="h-10 lg:h-12 w-auto object-contain opacity-50 group-hover:opacity-100 transition-opacity duration-500"
              />
              <span className="block text-xs tracking-widest uppercase text-background/30 group-hover:text-background/60 transition-colors">
                {partner.name}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-background/40 text-xs tracking-widest uppercase text-center mt-16"
        >
          And many more across fashion, beauty, art, and hospitality
        </motion.p>
      </div>
    </section>
  )
}
