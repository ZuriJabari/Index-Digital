import React, { useState, useRef } from "react"
import { motion, AnimatePresence, useSpring, useTransform } from "framer-motion"
import { soundEffects } from "../../utils/sound-effects"

// FlipCard with 3D effect
export const FlipCard: React.FC<{
  front: React.ReactNode
  back: React.ReactNode
  className?: string
}> = ({ front, back, className = "" }) => {
  const [isFlipped, setIsFlipped] = useState(false)

  const handleFlip = () => {
    soundEffects.play('flip')
    setIsFlipped(!isFlipped)
  }

  return (
    <div
      className={`perspective-1000 ${className}`}
      onClick={handleFlip}
    >
      <motion.div
        className="relative w-full h-full preserve-3d"
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 300, damping: 30 }}
      >
        <div className="absolute w-full h-full backface-hidden">
          {front}
        </div>
        <div className="absolute w-full h-full backface-hidden rotate-y-180">
          {back}
        </div>
      </motion.div>
    </div>
  )
}

// ExpandingCard that grows on click
export const ExpandingCard: React.FC<{
  children: React.ReactNode
  expandedContent: React.ReactNode
  className?: string
}> = ({ children, expandedContent, className = "" }) => {
  const [isExpanded, setIsExpanded] = useState(false)

  const handleExpand = () => {
    soundEffects.play('soft-click')
    setIsExpanded(!isExpanded)
  }

  return (
    <motion.div
      className={`relative overflow-hidden rounded-xl ${className}`}
      layout
      onClick={handleExpand}
    >
      <motion.div layout className="relative z-10">
        {children}
      </motion.div>
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="relative z-0"
          >
            {expandedContent}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

// ScrollRevealCard with advanced animations
export const ScrollRevealCard: React.FC<{
  children: React.ReactNode
  className?: string
  delay?: number
}> = ({ children, className = "", delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          soundEffects.play('success')
        }
      },
      {
        threshold: 0.1,
        rootMargin: "-50px",
      }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 50 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, type: "spring" }}
    >
      {children}
    </motion.div>
  )
}

// InteractiveIconCard with hover effects
export const InteractiveIconCard: React.FC<{
  icon: React.ReactNode
  label: string
  className?: string
}> = ({ icon, label, className = "" }) => {
  const [isHovered, setIsHovered] = useState(false)
  const rotation = useSpring(0, { stiffness: 300, damping: 30 })
  const scale = useSpring(1, { stiffness: 300, damping: 30 })

  const handleHoverStart = () => {
    soundEffects.play('hover')
    setIsHovered(true)
    rotation.set(360)
    scale.set(1.1)
  }

  const handleHoverEnd = () => {
    setIsHovered(false)
    rotation.set(0)
    scale.set(1)
  }

  return (
    <motion.div
      className={`relative group ${className}`}
      onHoverStart={handleHoverStart}
      onHoverEnd={handleHoverEnd}
    >
      <motion.div
        className="relative z-10"
        style={{ rotate: rotation, scale }}
      >
        {icon}
      </motion.div>
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-secondary/20 to-tertiary/20 rounded-lg blur-lg"
        animate={{
          scale: isHovered ? 1.2 : 1,
          opacity: isHovered ? 1 : 0,
        }}
      />
      <motion.span
        className="absolute bottom-0 left-0 right-0 text-center text-sm font-medium"
        animate={{
          y: isHovered ? 25 : 0,
          opacity: isHovered ? 1 : 0,
        }}
      >
        {label}
      </motion.span>
    </motion.div>
  )
}

// PulseCard with ripple effect
export const PulseCard: React.FC<{
  children: React.ReactNode
  className?: string
}> = ({ children, className = "" }) => {
  const [ripples, setRipples] = useState<{ x: number; y: number; id: number }[]>([])

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    
    soundEffects.play('soft-click')
    setRipples([...ripples, { x, y, id: Date.now() }])
  }

  return (
    <motion.div
      className={`relative overflow-hidden ${className}`}
      onClick={handleClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
      {ripples.map(({ x, y, id }) => (
        <motion.div
          key={id}
          initial={{ scale: 0, opacity: 0.5 }}
          animate={{ scale: 2, opacity: 0 }}
          transition={{ duration: 0.8 }}
          onAnimationComplete={() => {
            setRipples(ripples.filter(r => r.id !== id))
          }}
          className="absolute bg-white/30 rounded-full pointer-events-none"
          style={{
            width: 100,
            height: 100,
            x: x - 50,
            y: y - 50,
          }}
        />
      ))}
    </motion.div>
  )
}

// ShimmerCard with gradient animation
export const ShimmerCard: React.FC<{
  children: React.ReactNode
  className?: string
}> = ({ children, className = "" }) => {
  return (
    <motion.div
      className={`relative overflow-hidden ${className}`}
      whileHover="hover"
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
        initial={{ x: "-100%" }}
        variants={{
          hover: {
            x: "100%",
            transition: {
              repeat: Infinity,
              duration: 1.5,
              ease: "linear",
            },
          },
        }}
      />
      {children}
    </motion.div>
  )
}
