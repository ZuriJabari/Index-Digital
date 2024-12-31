import React, { useEffect, useRef } from "react"
import { motion } from "framer-motion"

interface Point {
  x: number
  y: number
  vx: number
  vy: number
  radius: number
  color: string
}

export function HeroBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mouseRef = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas size with device pixel ratio
    const resize = () => {
      const dpr = window.devicePixelRatio || 1
      canvas.width = window.innerWidth * dpr
      canvas.height = window.innerHeight * dpr
      canvas.style.width = `${window.innerWidth}px`
      canvas.style.height = `${window.innerHeight}px`
      ctx.scale(dpr, dpr)
    }
    resize()
    window.addEventListener("resize", resize)

    // Track mouse movement
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = {
        x: e.clientX,
        y: e.clientY,
      }
    }
    window.addEventListener("mousemove", handleMouseMove)

    // Initialize points with different sizes and colors
    const points: Point[] = []
    const numPoints = 50
    const colors = ["rgba(74, 222, 128, 0.5)", "rgba(94, 234, 212, 0.5)"]
    
    for (let i = 0; i < numPoints; i++) {
      points.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: Math.random() * 2 + 1,
        color: colors[Math.floor(Math.random() * colors.length)],
      })
    }

    // Animation
    let animationFrameId: number
    const animate = () => {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight)

      // Update and draw points
      points.forEach((point) => {
        // Mouse interaction
        const dx = mouseRef.current.x - point.x
        const dy = mouseRef.current.y - point.y
        const distance = Math.sqrt(dx * dx + dy * dy)
        
        if (distance < 100) {
          const angle = Math.atan2(dy, dx)
          const force = (100 - distance) * 0.001
          point.vx += Math.cos(angle) * force
          point.vy += Math.sin(angle) * force
        }

        // Apply velocity with damping
        point.vx *= 0.99
        point.vy *= 0.99

        // Update position
        point.x += point.vx
        point.y += point.vy

        // Bounce off edges with padding
        const padding = 50
        if (point.x < padding || point.x > window.innerWidth - padding) {
          point.vx *= -1
          point.x = Math.max(padding, Math.min(point.x, window.innerWidth - padding))
        }
        if (point.y < padding || point.y > window.innerHeight - padding) {
          point.vy *= -1
          point.y = Math.max(padding, Math.min(point.y, window.innerHeight - padding))
        }

        // Draw point with glow effect
        ctx.beginPath()
        ctx.arc(point.x, point.y, point.radius, 0, Math.PI * 2)
        ctx.fillStyle = point.color
        ctx.fill()

        // Add glow
        ctx.beginPath()
        ctx.arc(point.x, point.y, point.radius * 2, 0, Math.PI * 2)
        const gradient = ctx.createRadialGradient(
          point.x, point.y, 0,
          point.x, point.y, point.radius * 2
        )
        gradient.addColorStop(0, point.color.replace("0.5", "0.25"))
        gradient.addColorStop(1, "transparent")
        ctx.fillStyle = gradient
        ctx.fill()
      })

      // Draw connections
      points.forEach((point1, i) => {
        points.slice(i + 1).forEach((point2) => {
          const distance = Math.hypot(point2.x - point1.x, point2.y - point1.y)
          if (distance < 150) {
            ctx.beginPath()
            ctx.moveTo(point1.x, point1.y)
            ctx.lineTo(point2.x, point2.y)
            
            const opacity = Math.floor((1 - distance / 150) * 25)
            ctx.strokeStyle = `rgba(74, 222, 128, ${opacity / 100})`
            ctx.lineWidth = Math.max(0.5, (1 - distance / 150) * 2)
            ctx.stroke()
          }
        })
      })

      animationFrameId = requestAnimationFrame(animate)
    }
    animate()

    return () => {
      window.removeEventListener("resize", resize)
      window.removeEventListener("mousemove", handleMouseMove)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <>
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ opacity: 0.5 }}
      />
      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/0 via-primary/50 to-primary" />
      <motion.div 
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-tertiary/20 rounded-full blur-3xl animate-pulse-glow delay-1000" />
      </motion.div>
    </>
  )
}
