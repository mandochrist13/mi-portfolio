"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { projects } from "@/lib/projects"

// Four distinct 3-image compositions, cycled per project so the
// layout stays varied while every card keeps the same footprint.
const layouts: string[][] = [
  // 0 — large left, two stacked right
  [
    "col-start-1 col-span-2 row-start-1 row-span-2",
    "col-start-3 col-span-1 row-start-1 row-span-1",
    "col-start-3 col-span-1 row-start-2 row-span-1",
  ],
  // 1 — two stacked left, large right
  [
    "col-start-1 col-span-1 row-start-1 row-span-1",
    "col-start-1 col-span-1 row-start-2 row-span-1",
    "col-start-2 col-span-2 row-start-1 row-span-2",
  ],
  // 2 — three equal columns
  [
    "col-start-1 col-span-1 row-start-1 row-span-2",
    "col-start-2 col-span-1 row-start-1 row-span-2",
    "col-start-3 col-span-1 row-start-1 row-span-2",
  ],
  // 3 — tall left accent, two wide right
  [
    "col-start-1 col-span-1 row-start-1 row-span-2",
    "col-start-2 col-span-2 row-start-1 row-span-1",
    "col-start-2 col-span-2 row-start-2 row-span-1",
  ],
]

export function ProjectsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="projects" className="py-32 relative" ref={ref}>
      {/* Section number */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8 }}
        className="absolute top-32 right-6 lg:right-12 text-xs tracking-widest text-muted-foreground"
      >
        03
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-20">
          <div>
            <motion.span
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.8 }}
              className="text-xs tracking-widest uppercase text-muted-foreground block mb-4"
            >
              Selected Work
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-serif text-5xl sm:text-6xl lg:text-7xl"
            >
              Featured
              <span className="italic block">Projects</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-muted-foreground max-w-md"
          >
            A curated selection of strategic communication projects across luxury,
            culture, and lifestyle sectors.
          </motion.p>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="h-px bg-border mb-16 origin-left"
        />

        {/* Projects — one row per project, 3-image composite */}
        <div className="space-y-20 lg:space-y-28">
          {projects.map((project, i) => {
            const layout = layouts[i % layouts.length]
            const images = project.gallery.slice(0, 3)

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                transition={{ duration: 0.8, delay: 0.4 + (i % 3) * 0.1 }}
              >
                {/* Meta */}
                  <div className="my-6 flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-serif text-2xl lg:text-3xl group-hover:italic transition-all duration-300">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground mt-2 text-sm max-w-xl">
                        {project.description}
                      </p>
                    </div>
                    <span className="text-xs tracking-widest text-muted-foreground mt-2 shrink-0">
                      {project.year}
                    </span>
                  </div>
                <Link href={`/projects/${project.id}`} className="group block">
                  {/* 3-image composition — fixed footprint, varied layout */}
                  <div className="relative h-70 sm:h-90 lg:h-110">
                    <div className="grid grid-cols-3 grid-rows-2 gap-3 h-full">
                      {images.map((src, idx) => (
                        <div
                          key={idx}
                          className={`relative overflow-hidden grain ${layout[idx]}`}
                        >
                          <Image
                            src={src}
                            alt={`${project.title} — visual ${idx + 1}`}
                            fill
                            sizes="(max-width: 768px) 100vw, 60vw"
                            className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                          />
                        </div>
                      ))}
                    </div>

                    {/* Hover wash */}
                    <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-500 pointer-events-none" />

                    {/* Category badge */}
                    <div className="absolute top-4 left-4">
                      <span className="text-xs tracking-widest uppercase bg-background/90 px-3 py-1">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  

                  <motion.div
                    className="h-px bg-border mt-6 origin-left"
                    whileHover={{ scaleX: 1 }}
                    initial={{ scaleX: 0.3 }}
                  />
                </Link>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
