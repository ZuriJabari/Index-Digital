import React from "react"
import { motion } from "framer-motion"
import { Mail, MapPin, Phone, Send, Linkedin, Github, Twitter } from "lucide-react"
import { Button } from "./ui/button"

const contactInfo = [
  {
    icon: MapPin,
    label: "Location",
    value: "Kampala, Uganda",
  },
  {
    icon: Mail,
    label: "Email",
    value: "hello@index.ug",
    href: "mailto:hello@index.ug",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+256 393 255 855",
    href: "tel:+256393255855",
  },
]

const socialLinks = [
  {
    icon: Github,
    href: "https://github.com/indexdigital",
    label: "GitHub",
  },
  {
    icon: Linkedin,
    href: "https://linkedin.com/company/indexdigital",
    label: "LinkedIn",
  },
  {
    icon: Twitter,
    href: "https://twitter.com/indexdigital",
    label: "Twitter",
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
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

export function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
  }

  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Graph paper effect */}
        <div className="absolute inset-0 graph-paper-accent" style={{ opacity: 0.15 }} />
        <div className="absolute inset-0 graph-paper-small" style={{ opacity: 0.1 }} />
        
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/20 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
        
        {/* Glowing orbs */}
        <div className="absolute -top-48 left-1/3 w-96 h-96 bg-secondary/20 rounded-full blur-[100px] animate-pulse-slow mix-blend-overlay" />
        <div className="absolute -bottom-48 right-1/3 w-96 h-96 bg-tertiary/20 rounded-full blur-[100px] animate-pulse-slow delay-1000 mix-blend-overlay" />
      </div>

      <div className="container mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="mb-16">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-secondary font-mono mb-4 block"
            >
              Get in Touch
            </motion.span>
            <h2 className="text-4xl font-bold text-slate mb-4 text-left">Contact Us</h2>
            <p className="text-neutral-light max-w-2xl">
              Have a project in mind? Let's discuss how we can help bring your ideas
              to life.
            </p>
          </div>

          <div className="relative p-8 rounded-2xl backdrop-blur-lg bg-primary/20">
            {/* Form grid background */}
            <div className="absolute inset-0 graph-paper-small rounded-2xl" style={{ opacity: 0.1 }} />
            
            <form onSubmit={handleSubmit} className="relative space-y-6">
              <motion.div variants={itemVariants}>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-slate mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-2 bg-primary border border-neutral/20 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary/50 text-slate placeholder:text-neutral/50"
                  placeholder="John Doe"
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-slate mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-2 bg-primary border border-neutral/20 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary/50 text-slate placeholder:text-neutral/50"
                  placeholder="john@example.com"
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-slate mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="w-full px-4 py-2 bg-primary border border-neutral/20 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary/50 text-slate placeholder:text-neutral/50 resize-none"
                  placeholder="Tell us about your project..."
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <Button type="submit" size="lg" className="w-full group">
                  Send Message
                  <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>
            </form>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mt-12">
            {/* Contact Information */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="lg:pl-12"
            >
              <div className="space-y-8">
                {contactInfo.map((item) => (
                  <motion.div
                    key={item.label}
                    variants={itemVariants}
                    className="flex items-start space-x-4"
                  >
                    <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <h3 className="text-slate font-medium mb-1">{item.label}</h3>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-neutral-light hover:text-secondary transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-neutral-light">{item.value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}

                {/* Social Links */}
                <motion.div variants={itemVariants}>
                  <h3 className="text-slate font-medium mb-4">Follow Us</h3>
                  <div className="flex space-x-4">
                    {socialLinks.map((social) => (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center hover:bg-secondary/20 transition-colors group"
                        aria-label={social.label}
                      >
                        <social.icon className="w-5 h-5 text-secondary group-hover:scale-110 transition-transform" />
                      </a>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
