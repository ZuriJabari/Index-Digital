import React from "react"
import { motion } from "framer-motion"
import { Quote } from "lucide-react"

const testimonials = [
  {
    name: "Awel Uwihanganye",
    role: "Founder / CEO, LéO Africa Institute",
    content:
      "Index Digital's innovative approach to digital solutions has significantly enhanced our institute's online presence. Their understanding of the African context and ability to deliver world-class digital experiences sets them apart.",
    image: "/images/testimonials/awel.jpg",
  },
  {
    name: "Rushongoka wa-Mpiira",
    role: "CEO - Team Lead, Canopy Regenerative",
    content:
      "Working with Index Digital has been transformative for our sustainability initiatives. Their technical expertise and commitment to excellence helped us create digital solutions that truly impact environmental conservation.",
    image: "/images/testimonials/rushongoka.jpg",
  },
  {
    name: "Harrison Katusiime",
    role: "CEO, Baranko Villa",
    content:
      "Index Digital's understanding of the hospitality sector and their ability to create seamless digital experiences has been invaluable. They've helped us modernize our guest experience and streamline our operations.",
    image: "/images/testimonials/harrison.jpg",
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
}

export function Testimonials() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Graph paper effect */}
        <div className="absolute inset-0 graph-paper-accent" style={{ opacity: 0.15 }} />
        <div className="absolute inset-0 graph-paper-small" style={{ opacity: 0.1 }} />
        
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/20 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
        
        {/* Glowing orbs */}
        <div className="absolute -top-48 right-1/3 w-96 h-96 bg-secondary/20 rounded-full blur-[100px] animate-pulse-slow mix-blend-overlay" />
        <div className="absolute -bottom-48 left-1/3 w-96 h-96 bg-tertiary/20 rounded-full blur-[100px] animate-pulse-slow delay-1000 mix-blend-overlay" />
      </div>

      <div className="container mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mb-16"
        >
          <h2 className="text-4xl font-bold text-slate mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-neutral-light max-w-2xl">
            See what leaders across different sectors in East Africa say about their experience working with Index Digital.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="group relative p-8 rounded-xl backdrop-blur-lg bg-primary/20">
                {/* Card grid background */}
                <div className="absolute inset-0 graph-paper-small rounded-xl" style={{ opacity: 0.1 }} />
                {/* Quote Icon */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-secondary/10 rounded-full flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                  <Quote className="w-4 h-4 text-secondary" />
                </div>

                {/* Content */}
                <div className="mb-6">
                  <p className="text-neutral italic">"{testimonial.content}"</p>
                </div>

                {/* Author */}
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-secondary/20">
                    {testimonial.image && (
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    )}
                  </div>
                  <div className="ml-4">
                    <h4 className="text-slate font-semibold">
                      {testimonial.name}
                    </h4>
                    <p className="text-neutral text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
