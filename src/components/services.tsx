import React from "react"
import { motion } from "framer-motion"
import { Cloud, Code, Smartphone, Palette, Rocket, Zap } from "lucide-react"

const services = [
  {
    icon: <Code className="w-8 h-8" />,
    title: "Web Development",
    description: "Transform your vision into a stunning, high-performance website. From sleek landing pages to complex web applications, we craft digital experiences that captivate and convert.",
    cta: "Start Your Web Project",
    link: "#contact"
  },
  {
    icon: <Smartphone className="w-8 h-8" />,
    title: "Mobile Apps",
    description: "Put your business in your customers' pockets with native iOS and Android apps that deliver exceptional user experiences and drive engagement.",
    cta: "Build Your App",
    link: "#contact"
  },
  {
    icon: <Palette className="w-8 h-8" />,
    title: "UI/UX Design",
    description: "Create intuitive, beautiful interfaces that users love. Our design process combines aesthetics with functionality to deliver memorable digital experiences.",
    cta: "Design Your Interface",
    link: "#contact"
  },
  {
    icon: <Cloud className="w-8 h-8" />,
    title: "Cloud & Hosting Solutions",
    description: "Supercharge your digital presence with scalable, secure cloud infrastructure. We handle deployment, monitoring, and optimization so you can focus on growth.",
    cta: "Scale Your Platform",
    link: "#contact"
  },
  {
    icon: <Rocket className="w-8 h-8" />,
    title: "Digital Marketing",
    description: "Boost your online presence and reach your target audience with data-driven marketing strategies that deliver measurable results.",
    cta: "Boost Your Reach",
    link: "#contact"
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Digital Strategy",
    description: "Navigate the digital landscape with confidence. We'll help you develop a roadmap for success and stay ahead of the competition.",
    cta: "Plan Your Strategy",
    link: "#contact"
  }
]

export function Services() {
  return (
    <section id="services" className="relative py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Graph paper effect */}
        <div className="absolute inset-0 graph-paper-accent" style={{ opacity: 0.15 }} />
        <div className="absolute inset-0 graph-paper-small" style={{ opacity: 0.1 }} />
        
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/20 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
        
        {/* Glowing orbs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[100px] animate-pulse-slow mix-blend-overlay" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-tertiary/20 rounded-full blur-[100px] animate-pulse-slow delay-1000 mix-blend-overlay" />
      </div>

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mb-16"
        >
          <span className="text-secondary font-mono mb-4 block">Our Expertise</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Comprehensive Digital Solutions
          </h2>
          <p className="text-xl text-neutral-light/80 max-w-2xl">
            From concept to deployment, we deliver end-to-end digital solutions that help your business thrive.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-primary/20 backdrop-blur-lg rounded-xl p-8 h-full border-2 border-transparent hover:border-secondary/20 transition-all duration-300">
                {/* Icon */}
                <div className="text-secondary mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-neutral-light/80 mb-6">{service.description}</p>

                {/* CTA Button */}
                <a
                  href={service.link}
                  className="inline-flex items-center text-secondary hover:text-secondary/80 font-semibold transition-colors group"
                >
                  {service.cta}
                  <svg
                    className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-left mt-16"
        >
          <p className="text-xl text-neutral-light/80 mb-8">
            Ready to bring your digital vision to life? Let's create something extraordinary together.
          </p>
          <a
            href="#contact"
            className="inline-flex items-left px-8 py-3 bg-secondary text-white rounded-lg font-semibold hover:bg-secondary/90 transition-colors"
          >
            Start Your Project
            <svg
              className="w-4 h-4 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
