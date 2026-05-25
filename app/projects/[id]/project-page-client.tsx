"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import type { Project } from "@/lib/projects"

interface ProjectPageClientProps {
  project: Project
  nextProject: Project
}

export function ProjectPageClient({ project, nextProject }: ProjectPageClientProps) {
  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20">
            <Link 
              href="/" 
              className="font-serif text-xl tracking-wide hover:opacity-60 transition-opacity"
            >
              DOUTSONA Miriame
            </Link>
            <Link 
              href="/#projects"
              className="text-sm tracking-widest uppercase hover:opacity-60 transition-opacity"
            >
              Back to Projects
            </Link>
          </div>
        </div>
        <div className="h-px bg-border" />
      </motion.nav>

      {/* Hero */}
      <section className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8"
          >
            <span className="text-xs tracking-widest uppercase text-muted-foreground">
              {project.category} / {project.year}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-serif text-5xl sm:text-6xl lg:text-8xl mb-8"
          >
            {project.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-muted-foreground text-lg max-w-2xl mb-12"
          >
            {project.description}
          </motion.p>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-px bg-border mb-12 origin-left"
          />

          {/* Project details */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
          >
            <div>
              <span className="text-xs tracking-widest uppercase text-muted-foreground block mb-2">Client</span>
              <span className="font-serif text-lg">{project.client}</span>
            </div>
            <div>
              <span className="text-xs tracking-widest uppercase text-muted-foreground block mb-2">Category</span>
              <span className="font-serif text-lg">{project.category}</span>
            </div>
            <div>
              <span className="text-xs tracking-widest uppercase text-muted-foreground block mb-2">Year</span>
              <span className="font-serif text-lg">{project.year}</span>
            </div>
            <div>
              <span className="text-xs tracking-widest uppercase text-muted-foreground block mb-2">Services</span>
              <span className="font-serif text-lg">Strategy, PR, Content</span>
            </div>
          </motion.div>
        </div>

        {/* Hero image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.4 }}
          className="relative aspect-[21/9] grain"
        >
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover grayscale"
            priority
          />
        </motion.div>
      </section>

      {/* Context & Objectives */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="font-serif text-3xl lg:text-4xl italic mb-8"
              >
                Context
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="text-muted-foreground leading-relaxed"
              >
                {project.context}
              </motion.p>
            </div>

            <div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="font-serif text-3xl lg:text-4xl italic mb-8"
              >
                Objectives
              </motion.h2>
              <ul className="space-y-4">
                {project.objectives.map((objective, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.1 }}
                    className="flex gap-4 text-muted-foreground"
                  >
                    <span className="text-xs mt-1.5">0{i + 1}</span>
                    <span className="leading-relaxed">{objective}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Strategy */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto text-center">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-xs tracking-widest uppercase text-muted-foreground block mb-6"
            >
              Communication Strategy
            </motion.span>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-serif text-2xl lg:text-3xl leading-relaxed italic"
            >
              &ldquo;{project.strategy}&rdquo;
            </motion.p>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-serif text-3xl lg:text-4xl italic mb-12"
          >
            Visual Gallery
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-4">
            {project.gallery.map((image, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                className="relative aspect-[4/5] overflow-hidden grain group"
              >
                <Image
                  src={image}
                  alt={`${project.title} gallery ${i + 1}`}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-20 bg-foreground text-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-serif text-3xl lg:text-4xl italic mb-12"
          >
            Results & Impact
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {project.results.map((result, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="border-t border-background/20 pt-6"
              >
                <span className="text-xs tracking-widest text-background/40 block mb-3">0{i + 1}</span>
                <p className="text-background/80">{result}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      {project.testimonial && (
        <section className="py-32">
          <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-xs tracking-widest uppercase text-muted-foreground block mb-8"
            >
              Client Testimonial
            </motion.span>
            <motion.blockquote
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-serif text-2xl lg:text-4xl leading-relaxed italic mb-8"
            >
              &ldquo;{project.testimonial.quote}&rdquo;
            </motion.blockquote>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <p className="font-medium">{project.testimonial.author}</p>
              <p className="text-muted-foreground text-sm">{project.testimonial.role}</p>
            </motion.div>
          </div>
        </section>
      )}

      {/* Next Project */}
      <section className="py-20 border-t border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <Link href={`/projects/${nextProject.id}`} className="group block">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
              <div>
                <motion.span
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="text-xs tracking-widest uppercase text-muted-foreground block mb-4"
                >
                  Next Project
                </motion.span>
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                  className="font-serif text-4xl lg:text-6xl group-hover:italic transition-all duration-300"
                >
                  {nextProject.title}
                </motion.h3>
              </div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative w-full lg:w-80 aspect-video overflow-hidden grain"
              >
                <Image
                  src={nextProject.image}
                  alt={nextProject.title}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
              </motion.div>
            </div>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-xs tracking-widest text-muted-foreground">
            <span>&copy; {new Date().getFullYear()} DOUTSONA Miriame</span>
            <Link href="/" className="hover:text-foreground transition-colors">
              Back to Home
            </Link>
          </div>
        </div>
      </footer>
    </main>
  )
}
