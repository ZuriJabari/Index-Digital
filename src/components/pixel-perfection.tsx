import React from "react"
import { motion } from "framer-motion"
import { Ruler, Crosshair, MousePointer2 } from "lucide-react"

export function PixelPerfection() {
  return (
    <section className="relative py-16 overflow-hidden bg-primary">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl flex items-center gap-8"
        >
          <div className="flex items-center gap-6">
            <Ruler className="w-12 h-12 text-secondary" />
            <Crosshair className="w-12 h-12 text-secondary" />
            <MousePointer2 className="w-12 h-12 text-secondary" />
          </div>
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              We're OCD about pixels.
              <br />
              <span className="text-secondary">Every. Single. One.</span>
            </h3>
            <p className="text-lg text-neutral-light/80 mb-6">
              If you're as passionate about pixel-perfect design as we are, you've found your digital partner.
            </p>
            <a 
              href="#contact"
              className="inline-flex items-center text-secondary hover:text-secondary/80 font-semibold transition-colors"
            >
              Start Your Pixel-Perfect Project →
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
