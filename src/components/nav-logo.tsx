import React, { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Link } from "gatsby"

export function NavLogo() {
  const [showI, setShowI] = useState(true)

  // Blinking effect
  useEffect(() => {
    const interval = setInterval(() => {
      setShowI(prev => !prev)
    }, 530) // Slower blink speed

    return () => clearInterval(interval)
  }, [])

  return (
    <Link to="/" className="flex items-center space-x-2">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="relative w-8 h-8"
      >
        {/* Logo Icon */}
        <div className="absolute inset-0 bg-secondary/20 rounded-lg blur-sm" />
        <div className="relative w-full h-full bg-primary border-2 border-secondary rounded-lg flex items-center justify-center">
          <span className={`text-secondary font-mono font-bold text-lg transition-opacity duration-50 ${showI ? 'opacity-100' : 'opacity-0'}`}>I</span>
        </div>
      </motion.div>

      {/* Text */}
      <motion.div
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.1 }}
        className="flex items-baseline space-x-1"
      >
        <span className="text-xl font-mono font-bold text-secondary">Index</span>
        <span className="text-lg font-mono text-tertiary">Digital</span>
      </motion.div>
    </Link>
  )
}
