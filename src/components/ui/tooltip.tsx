import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface TooltipProps {
  content: React.ReactNode
  children: React.ReactNode
  position?: "top" | "bottom" | "left" | "right"
  delay?: number
}

export function Tooltip({
  content,
  children,
  position = "top",
  delay = 0.2,
}: TooltipProps) {
  const [isVisible, setIsVisible] = useState(false)

  const positionStyles = {
    top: {
      bottom: "calc(100% + 10px)",
      left: "50%",
      transform: "translateX(-50%)",
    },
    bottom: {
      top: "calc(100% + 10px)",
      left: "50%",
      transform: "translateX(-50%)",
    },
    left: {
      right: "calc(100% + 10px)",
      top: "50%",
      transform: "translateY(-50%)",
    },
    right: {
      left: "calc(100% + 10px)",
      top: "50%",
      transform: "translateY(-50%)",
    },
  }

  const arrowStyles = {
    top: {
      bottom: "-5px",
      left: "50%",
      marginLeft: "-5px",
    },
    bottom: {
      top: "-5px",
      left: "50%",
      marginLeft: "-5px",
    },
    left: {
      right: "-5px",
      top: "50%",
      marginTop: "-5px",
    },
    right: {
      left: "-5px",
      top: "50%",
      marginTop: "-5px",
    },
  }

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: position === "top" ? 10 : position === "bottom" ? -10 : 0 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: position === "top" ? 10 : position === "bottom" ? -10 : 0 }}
            transition={{
              duration: 0.2,
              delay: delay,
              ease: "easeOut",
            }}
            style={positionStyles[position]}
            className="absolute z-50 px-3 py-2 text-sm whitespace-nowrap"
          >
            {/* Backdrop blur and gradient background */}
            <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-secondary/10 to-tertiary/10 backdrop-blur-md" />
            
            {/* Border gradient */}
            <div className="absolute inset-0 rounded-lg p-[1px] bg-gradient-to-r from-secondary/30 to-tertiary/30" />
            
            {/* Content */}
            <div className="relative text-neutral-light">
              {content}
            </div>

            {/* Arrow */}
            <div
              className="absolute w-2.5 h-2.5 bg-gradient-to-r from-secondary/10 to-tertiary/10 backdrop-blur-md transform rotate-45"
              style={arrowStyles[position]}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
