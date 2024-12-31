import React, { useState } from "react"
import { motion, useMotionTemplate, useMotionValue } from "framer-motion"

// Neon Glow Card
export const NeonGlowCard: React.FC<{
  children: React.ReactNode
  className?: string
  glowColor?: string
}> = ({ children, className = "", glowColor = "var(--secondary)" }) => {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect()
    mouseX.set(clientX - left)
    mouseY.set(clientY - top)
  }

  return (
    <div
      className={`group relative rounded-xl bg-neutral-dark/50 border border-neutral-light/10 ${className}`}
      onMouseMove={handleMouseMove}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              350px circle at ${mouseX}px ${mouseY}px,
              ${glowColor}20,
              transparent 80%
            )
          `,
        }}
      />
      <div className="relative">{children}</div>
    </div>
  )
}

// Morphing Card
export const MorphingCard: React.FC<{
  children: React.ReactNode
  className?: string
}> = ({ children, className = "" }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className={`relative overflow-hidden rounded-xl bg-gradient-to-br from-secondary/10 to-tertiary/10 backdrop-blur-lg ${className}`}
      animate={{
        borderRadius: isHovered ? "1rem" : "1.5rem",
        scale: isHovered ? 1.02 : 1,
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-secondary/20 to-tertiary/20"
        animate={{
          opacity: isHovered ? 1 : 0,
          scale: isHovered ? 1.1 : 1,
        }}
      />
      <div className="relative">{children}</div>
    </motion.div>
  )
}

// Floating Card
export const FloatingCard: React.FC<{
  children: React.ReactNode
  className?: string
}> = ({ children, className = "" }) => {
  const [rotateX] = useState(() => useMotionValue(0))
  const [rotateY] = useState(() => useMotionValue(0))

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    const mouseX = e.clientX - centerX
    const mouseY = e.clientY - centerY
    
    rotateX.set(-(mouseY / rect.height) * 20)
    rotateY.set((mouseX / rect.width) * 20)
  }

  const handleMouseLeave = () => {
    rotateX.set(0)
    rotateY.set(0)
  }

  return (
    <motion.div
      className={`relative perspective-1000 ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      transition={{ type: "spring", stiffness: 400, damping: 30 }}
    >
      <div className="relative bg-gradient-to-br from-secondary/5 to-tertiary/5 backdrop-blur-xl rounded-xl border border-neutral-light/10">
        {children}
      </div>
    </motion.div>
  )
}

// Magnetic Card
export const MagneticCard: React.FC<{
  children: React.ReactNode
  className?: string
  strength?: number
}> = ({ children, className = "", strength = 30 }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    const mouseX = e.clientX - centerX
    const mouseY = e.clientY - centerY
    
    setPosition({
      x: (mouseX / rect.width) * strength,
      y: (mouseY / rect.height) * strength,
    })
  }

  return (
    <motion.div
      className={`relative ${className}`}
      animate={{
        x: position.x,
        y: position.y,
      }}
      transition={{ type: "spring", stiffness: 150, damping: 15 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setPosition({ x: 0, y: 0 })}
    >
      <div className="relative bg-gradient-to-br from-secondary/5 to-tertiary/5 backdrop-blur-xl rounded-xl border border-neutral-light/10">
        {children}
      </div>
    </motion.div>
  )
}

// Parallax Card
export const ParallaxCard: React.FC<{
  children: React.ReactNode
  className?: string
  layers?: React.ReactNode[]
}> = ({ children, className = "", layers = [] }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width
    const y = (e.clientY - rect.top) / rect.height
    setMousePosition({ x, y })
  }

  return (
    <div
      className={`relative overflow-hidden rounded-xl ${className}`}
      onMouseMove={handleMouseMove}
      style={{ perspective: "1000px" }}
    >
      {layers.map((layer, index) => (
        <motion.div
          key={index}
          className="absolute inset-0"
          animate={{
            x: (mousePosition.x - 0.5) * (index + 1) * 20,
            y: (mousePosition.y - 0.5) * (index + 1) * 20,
          }}
          transition={{ type: "spring", stiffness: 400, damping: 30 }}
        >
          {layer}
        </motion.div>
      ))}
      <div className="relative bg-gradient-to-br from-secondary/5 to-tertiary/5 backdrop-blur-xl rounded-xl border border-neutral-light/10">
        {children}
      </div>
    </div>
  )
}

// Prismatic Card
export const PrismaticCard: React.FC<{
  children: React.ReactNode
  className?: string
}> = ({ children, className = "" }) => {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width
    const y = (e.clientY - rect.top) / rect.height
    mouseX.set(x)
    mouseY.set(y)
  }

  return (
    <motion.div
      className={`relative overflow-hidden rounded-xl ${className}`}
      onMouseMove={handleMouseMove}
    >
      <motion.div
        className="absolute inset-0"
        style={{
          background: useMotionTemplate`
            linear-gradient(
              ${mouseX.get() * 360}deg,
              var(--secondary) 0%,
              var(--tertiary) 50%,
              var(--primary) 100%
            )
          `,
          opacity: 0.1,
        }}
      />
      <div className="relative backdrop-blur-xl rounded-xl border border-neutral-light/10">
        {children}
      </div>
    </motion.div>
  )
}
