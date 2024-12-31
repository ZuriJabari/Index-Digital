import React, { useState } from "react"
import { motion, useMotionTemplate, useMotionValue } from "framer-motion"
import {
  Code2,
  Rocket,
  Star,
  Award,
  Users,
  Trophy,
  ArrowRight,
} from "lucide-react"
import {
  NeonGlowCard,
  MorphingCard,
  FloatingCard,
  MagneticCard,
  ParallaxCard,
  PrismaticCard,
} from "./ui/premium-cards"

const milestones = [
  {
    year: "2020",
    title: "Our Beginning",
    description: "Founded with a vision to transform digital experiences.",
    icon: Rocket,
    stats: {
      projects: 10,
      clients: 5,
    },
    cardType: "neon",
    glowColor: "var(--secondary)",
  },
  {
    year: "2021",
    title: "Rapid Growth",
    description: "Expanded our team and services portfolio.",
    icon: Users,
    stats: {
      projects: 50,
      clients: 20,
    },
    cardType: "morphing",
  },
  {
    year: "2022",
    title: "Industry Recognition",
    description: "Received multiple awards for our innovative solutions.",
    icon: Trophy,
    stats: {
      projects: 100,
      clients: 45,
    },
    cardType: "floating",
  },
  {
    year: "2023",
    title: "Global Expansion",
    description: "Extended our reach to international markets.",
    icon: Star,
    stats: {
      projects: 200,
      clients: 80,
    },
    cardType: "magnetic",
  },
]

const achievements = [
  {
    title: "Best Digital Agency",
    year: "2023",
    icon: Award,
    cardType: "prismatic",
  },
  {
    title: "Innovation Award",
    year: "2022",
    icon: Star,
    cardType: "parallax",
  },
  {
    title: "Tech Excellence",
    year: "2023",
    icon: Code2,
    cardType: "neon",
    glowColor: "var(--tertiary)",
  },
]

const getCardComponent = (type: string) => {
  switch (type) {
    case "neon":
      return NeonGlowCard
    case "morphing":
      return MorphingCard
    case "floating":
      return FloatingCard
    case "magnetic":
      return MagneticCard
    case "parallax":
      return ParallaxCard
    case "prismatic":
      return PrismaticCard
    default:
      return NeonGlowCard
  }
}

export function History() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e
    const { left, top } = e.currentTarget.getBoundingClientRect()
    mouseX.set(clientX - left)
    mouseY.set(clientY - top)
  }

  return (
    <section 
      className="py-32 relative overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Subtle grids */}
        <div className="absolute inset-0 graph-paper-accent" style={{ opacity: 0.15 }} />
        <div className="absolute inset-0 graph-paper-small" style={{ opacity: 0.1 }} />
        
        {/* Very subtle gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/20 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
        
        {/* Glowing orbs */}
        <div className="absolute -top-48 -left-48 w-96 h-96 bg-secondary/20 rounded-full blur-[100px] animate-pulse-slow mix-blend-overlay" />
        <div className="absolute -bottom-48 -right-48 w-96 h-96 bg-tertiary/20 rounded-full blur-[100px] animate-pulse-slow delay-1000 mix-blend-overlay" />
        
        {/* Mouse-following gradient */}
        <motion.div
          className="absolute inset-0 opacity-50 mix-blend-overlay"
          style={{
            background: useMotionTemplate`
              radial-gradient(
                600px circle at ${mouseX}px ${mouseY}px,
                var(--secondary) 0%,
                transparent 80%
              )
            `,
          }}
        />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-6 relative"
      >
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-4"
          >
            <span className="text-sm font-mono text-secondary bg-secondary/5 px-4 py-2 rounded-full">
              Our Timeline
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl font-display font-bold mb-6 bg-gradient-to-r from-secondary to-tertiary bg-clip-text text-transparent"
          >
            Our Journey
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-neutral-light/80 max-w-2xl mx-auto text-lg"
          >
            From humble beginnings to industry leadership, explore our story of
            innovation and growth.
          </motion.p>
        </div>

        {/* Timeline with enhanced spacing and layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
          {milestones.map((milestone, index) => {
            const Card = getCardComponent(milestone.cardType)
            const Icon = milestone.icon
            const isHovered = hoveredIndex === index

            return (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true, margin: "-100px" }}
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
              >
                <Card
                  className="h-full p-8 group relative overflow-hidden backdrop-blur-lg bg-primary/20"
                  {...(milestone.cardType === "neon" ? { glowColor: milestone.glowColor } : {})}
                >
                  <div className="absolute inset-0 graph-paper-small" style={{ opacity: 0.1 }} />
                  <div className="relative z-10 h-full">
                    <div className="flex items-start gap-6">
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 10 }}
                        className="p-4 bg-gradient-to-br from-secondary/10 to-tertiary/5 rounded-xl backdrop-blur-lg 
                        border border-neutral-light/5 shadow-lg transition-all duration-300
                        group-hover:shadow-secondary/20 group-hover:border-secondary/20"
                      >
                        <Icon className="w-8 h-8 text-secondary" />
                      </motion.div>
                      <div className="flex-grow">
                        <div className="flex justify-between items-start mb-4">
                          <motion.h3 
                            className="text-2xl font-display font-bold"
                            animate={{ scale: isHovered ? 1.05 : 1 }}
                            transition={{ duration: 0.2 }}
                          >
                            {milestone.title}
                          </motion.h3>
                          <span className="text-sm font-mono text-secondary">
                            {milestone.year}
                          </span>
                        </div>
                        <p className="text-neutral-light/80 mb-6 text-lg">
                          {milestone.description}
                        </p>
                        <div className="grid grid-cols-2 gap-6">
                          <motion.div 
                            className="bg-gradient-to-br from-secondary/5 to-secondary/10 rounded-xl p-4
                            border border-neutral-light/5 transition-all duration-300
                            group-hover:border-secondary/20"
                            whileHover={{ scale: 1.02 }}
                          >
                            <p className="text-3xl font-bold text-secondary mb-1">
                              {milestone.stats.projects}+
                            </p>
                            <p className="text-sm text-neutral-light/80">Projects</p>
                          </motion.div>
                          <motion.div 
                            className="bg-gradient-to-br from-tertiary/5 to-tertiary/10 rounded-xl p-4
                            border border-neutral-light/5 transition-all duration-300
                            group-hover:border-tertiary/20"
                            whileHover={{ scale: 1.02 }}
                          >
                            <p className="text-3xl font-bold text-tertiary mb-1">
                              {milestone.stats.clients}+
                            </p>
                            <p className="text-sm text-neutral-light/80">Clients</p>
                          </motion.div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            )
          })}
        </div>

        {/* Achievements with enhanced layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => {
            const Card = getCardComponent(achievement.cardType)
            const Icon = achievement.icon

            return (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 + 0.4 }}
                viewport={{ once: true }}
              >
                <Card
                  className="p-8 group relative overflow-hidden backdrop-blur-lg bg-primary/20"
                  {...(achievement.cardType === "neon" ? { glowColor: achievement.glowColor } : {})}
                >
                  <div className="absolute inset-0 graph-paper-small" style={{ opacity: 0.1 }} />
                  <div className="relative z-10">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 10 }}
                      className="mb-6 p-4 bg-gradient-to-br from-secondary/10 to-tertiary/5 rounded-xl 
                      backdrop-blur-lg inline-block border border-neutral-light/5 shadow-lg
                      transition-all duration-300 group-hover:shadow-secondary/20 
                      group-hover:border-secondary/20"
                    >
                      <Icon className="w-8 h-8 text-secondary" />
                    </motion.div>
                    <h4 className="text-xl font-display font-bold mb-3 group-hover:text-secondary transition-colors">
                      {achievement.title}
                    </h4>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-mono text-secondary">
                        {achievement.year}
                      </span>
                      <motion.div
                        initial={{ x: -5, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                      >
                        <ArrowRight className="w-4 h-4 text-secondary" />
                      </motion.div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </motion.div>
    </section>
  )
}
