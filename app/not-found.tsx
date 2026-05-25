"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col">
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
              View Projects
            </Link>
          </div>
        </div>
        <div className="h-px bg-border" />
      </motion.nav>

      {/* Content */}
      <section className="flex-1 flex items-center">
        <div className="max-w-7xl w-full mx-auto px-6 lg:px-12 py-32">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div>
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-xs tracking-widest uppercase text-muted-foreground block mb-6"
              >
                Error 404
              </motion.span>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="font-serif text-7xl sm:text-8xl lg:text-9xl leading-none"
              >
                404
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="font-serif text-2xl lg:text-3xl italic mt-6"
              >
                Page Not Found
              </motion.p>

              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="h-px bg-border my-10 origin-left"
              />

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-muted-foreground max-w-md leading-relaxed"
              >
                The page you are looking for has moved, been renamed, or never
                existed. Let&apos;s get you back to familiar ground.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="flex flex-col sm:flex-row gap-4 mt-12"
              >
                <Link
                  href="/"
                  className="group inline-flex items-center justify-center gap-3 bg-foreground text-background px-8 py-4 text-xs tracking-widest uppercase hover:opacity-80 transition-opacity"
                >
                  Back to Home
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </Link>
                <Link
                  href="/#projects"
                  className="inline-flex items-center justify-center gap-3 border border-border px-8 py-4 text-xs tracking-widest uppercase hover:border-foreground transition-colors"
                >
                  Explore Work
                </Link>
              </motion.div>
            </div>

            {/* Oversized decorative numeral */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.4 }}
              className="hidden lg:flex justify-center"
            >
              <span className="font-serif italic text-[20rem] leading-none text-secondary select-none">
                404
              </span>
            </motion.div>
          </div>
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
