"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const skills = [
  {
    name: "Brand Communication",
    tagline: "Identity & positioning",
    image:
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80",
    description:
      "Defining a brand's voice, values and visual language so every touchpoint feels intentional and unmistakably its own.",
    capabilities: [
      "Brand positioning & architecture",
      "Verbal & visual identity",
      "Messaging frameworks",
      "Creative direction",
    ],
  },
  {
    name: "Public Relations",
    tagline: "Reputation & influence",
    image:
      "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&q=80",
    description:
      "Building trusted relationships with media and shaping the narrative that surrounds a brand before, during and after a launch.",
    capabilities: [
      "Media relations & press strategy",
      "Reputation management",
      "Crisis communication",
      "Press events & launches",
    ],
  },
  {
    name: "Content Strategy",
    tagline: "Editorial & storytelling",
    image:
      "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&q=80",
    description:
      "Turning insight into editorial direction — planning, structuring and crafting stories that earn attention and last.",
    capabilities: [
      "Editorial planning & calendars",
      "Brand storytelling",
      "Tone of voice & copywriting",
      "Campaign concepting",
    ],
  },
  {
    name: "Social Media",
    tagline: "Presence & community",
    image:
      "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&q=80",
    description:
      "Designing a coherent digital presence and nurturing communities that move from passive audience to active advocates.",
    capabilities: [
      "Channel & content strategy",
      "Community engagement",
      "Influencer partnerships",
      "Performance & insights",
    ],
  },
];

export function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-32 bg-secondary relative" ref={ref}>
      {/* Section number */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8 }}
        className="absolute top-32 right-6 lg:right-12 text-xs tracking-widest text-muted-foreground"
      >
        02.5
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-20">
          <div>
            <motion.span
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.8 }}
              className="text-sm tracking-widest uppercase text-muted-foreground block mb-4"
            >
              DOUTSONA Miriame
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-serif text-5xl sm:text-6xl lg:text-7xl"
            >
              Personal
              <span className="italic block">Skills</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-muted-foreground max-w-md"
          >
            Four disciplines that work together to give brands a clear,
            consistent and compelling voice.
          </motion.p>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="h-px bg-border mb-16 origin-left"
        />

        {/* Skill cards */}
        <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
          {skills.map((skill, i) => (
            <motion.article
              key={skill.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.7, delay: 0.5 + i * 0.12 }}
              className="group flex flex-col bg-background border border-border hover:border-foreground/30 transition-colors duration-500"
            >
              {/* Text content */}
              <div className="p-8 lg:p-10 flex-1">
                <h3 className="font-serif text-2xl lg:text-3xl group-hover:italic transition-all duration-300">
                  {skill.name}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mt-3">
                  {skill.description}
                </p>
              </div>

              {/* Descriptive image */}
              <div className="relative aspect-4/3 overflow-hidden grain mt-auto">
                <Image
                  src={skill.image}
                  alt={skill.name}
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-500" />
                <span className="absolute top-4 left-4 text-xs tracking-widest text-foreground bg-background/90 px-3 py-1">
                  0{i + 1}
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
