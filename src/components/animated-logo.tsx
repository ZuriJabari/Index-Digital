import React, { useState, useEffect } from "react"
import { motion } from "framer-motion"

export function AnimatedLogo() {
  const [text, setText] = useState("")
  const [showCursor, setShowCursor] = useState(true)
  const finalText = "Index Digital"
  const typingSpeed = 100 // milliseconds per character
  const [isTypingComplete, setIsTypingComplete] = useState(false)

  useEffect(() => {
    let currentIndex = 0
    const intervalId = setInterval(() => {
      if (currentIndex <= finalText.length) {
        setText(finalText.slice(0, currentIndex))
        currentIndex++
      } else {
        clearInterval(intervalId)
        setIsTypingComplete(true)
      }
    }, typingSpeed)

    return () => clearInterval(intervalId)
  }, [])

  // Blinking cursor effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 530) // Cursor blink speed

    return () => clearInterval(cursorInterval)
  }, [])

  return (
    <div className="relative flex items-center justify-center py-12">
      {/* Background glow effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-secondary/5 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-tertiary/5 rounded-full blur-3xl" />
      </div>

      {/* Text container */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative font-mono text-6xl font-bold tracking-tight"
      >
        {/* First word with electric blue color */}
        <span className="text-secondary">
          {text.split(" ")[0]}
        </span>

        {/* Space and second word */}
        {text.includes(" ") && (
          <>
            <span className="text-slate"> </span>
            <span className="text-slate">{text.split(" ")[1]}</span>
          </>
        )}

        {/* Blinking cursor */}
        {showCursor && (
          <span className="inline-block w-[4px] h-[48px] ml-1 -mb-1 bg-secondary transition-opacity duration-100" />
        )}
      </motion.div>
    </div>
  )
}
