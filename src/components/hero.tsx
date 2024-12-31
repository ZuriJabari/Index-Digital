import React, { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { HeroBackground } from "./hero-background"
import { Ruler, Crosshair, MousePointer2, Terminal, Code, Braces } from "lucide-react"
import { CustomCursor } from "./custom-cursor"

const expertise = [
  "Enterprise Web Applications",
  "Cross-Platform Mobile Solutions",
  "Cloud Infrastructure & DevOps",
  "AI/ML Model Development",
  "Large Language Model Integration",
  "Deep Learning Systems",
  "Scalable Microservices",
  "Real-time Data Processing"
]

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.2
    }
  }
}

const floatAnimation = {
  initial: { rotate: 12, y: 0 },
  animate: {
    rotate: [12, 8, 12],
    y: [-5, 5, -5],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
}

const typewriter = {
  initial: { width: "0%" },
  animate: { 
    width: "100%",
    transition: {
      duration: 1.2,
      ease: "easeInOut"
    }
  }
}

const swingAnimation = {
  initial: {
    rotate: 12,
  },
  animate: {
    rotate: [12, 14, 10, 13, 11, 14, 12],
    transition: {
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
      ease: "easeInOut",
    },
  },
};

const stringAnimation = {
  initial: {
    scaleY: 1,
  },
  animate: {
    scaleY: [1, 0.98, 1.02, 0.99, 1.01, 1],
    transition: {
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
      ease: "easeInOut",
    },
  },
};

export function Hero() {
  const [currentExpertise, setCurrentExpertise] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [expertiseIndex, setExpertiseIndex] = useState(0)
  const [delta, setDelta] = useState(100)

  useEffect(() => {
    let ticker = setInterval(() => {
      tick()
    }, delta)

    return () => clearInterval(ticker)
  }, [currentExpertise, isDeleting, expertiseIndex])

  const tick = () => {
    let fullText = expertise[expertiseIndex]
    let updatedText = isDeleting 
      ? fullText.substring(0, currentExpertise.length - 1)
      : fullText.substring(0, currentExpertise.length + 1)

    setCurrentExpertise(updatedText)

    // Fast deletion, slower typing
    if (isDeleting) {
      setDelta(50)
    } else {
      setDelta(100)
    }

    // When word is complete, wait then delete
    if (!isDeleting && updatedText === fullText) {
      setDelta(1500) // Pause at the end of word
      setIsDeleting(true)
    } 
    // When deletion is complete, move to next word
    else if (isDeleting && updatedText === '') {
      setIsDeleting(false)
      setDelta(200) // Slight pause before next word
      setExpertiseIndex((prev) => (prev + 1) % expertise.length)
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <CustomCursor />
      <HeroBackground />
      
      {/* Hanging Sticker Badge */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 1,
          delay: 1,
          type: "spring",
          stiffness: 100
        }}
        className="absolute md:top-0 md:right-8 top-0 right-4 z-20 md:transform-none transform scale-75 origin-top-right"
      >
        {/* String */}
        <motion.div
          variants={stringAnimation}
          initial="initial"
          animate="animate"
          className="w-px h-[40px] md:h-[120px] bg-gradient-to-b from-secondary/40 to-secondary/20 mx-auto"
          style={{
            transformOrigin: "top",
          }}
        />
        
        {/* Note */}
        <motion.div 
          variants={swingAnimation}
          initial="initial"
          animate="animate"
          whileHover={{ 
            scale: 1.05,
            rotate: [null, 15, 9, 12],
            transition: { duration: 0.3 }
          }}
          className="group bg-primary border-2 border-secondary rounded-xl md:p-4 p-2.5 shadow-2xl backdrop-blur-sm cursor-pointer"
          style={{
            background: "linear-gradient(135deg, rgba(74, 222, 128, 0.1) 0%, rgba(74, 222, 128, 0.05) 100%)",
            boxShadow: "0 8px 32px -8px rgba(74, 222, 128, 0.3)",
            backdropFilter: "blur(8px)",
            transformOrigin: "top center"
          }}
        >
          <div className="flex items-center gap-1.5 md:gap-2 mb-1.5 md:mb-2 relative">
            <Ruler className="w-3 h-3 md:w-4 md:h-4 text-secondary transition-transform group-hover:scale-110" />
            <Crosshair className="w-3 h-3 md:w-4 md:h-4 text-secondary transition-transform group-hover:rotate-12" />
            <MousePointer2 className="w-3 h-3 md:w-4 md:h-4 text-secondary transition-transform group-hover:translate-x-1" />
            {/* Pin */}
            <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-secondary/20 group-hover:bg-secondary/30 transition-colors" />
          </div>
          <p className="text-xs md:text-sm font-mono text-neutral-light/90 transition-opacity group-hover:text-neutral-light">
            We're OCD about pixels.
            <br />
            <span className="text-secondary font-medium group-hover:text-secondary/80 transition-colors">Every. Single. One.</span>
            <br />
            <a href="#contact" className="text-secondary/80 hover:text-secondary mt-1.5 md:mt-2 inline-block transition-all text-[11px] md:text-sm group-hover:translate-x-1">
              Let's Talk Business - if you can relate →
            </a>
          </p>
        </motion.div>
      </motion.div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          variants={stagger}
          initial="initial"
          animate="animate"
          className="max-w-4xl mx-auto mt-16 md:mt-0"
        >
          {/* Terminal Window */}
          <motion.div 
            variants={fadeIn}
            className="group bg-[#1e1e1e] backdrop-blur-lg border border-[#323232] rounded-lg overflow-hidden shadow-2xl hover:shadow-secondary/20 transition-all duration-300 max-w-3xl mx-auto text-[13px] md:text-sm hover:border-secondary/20"
          >
            {/* Terminal Header */}
            <div className="bg-[#323232] px-4 py-2 flex items-center justify-between border-b border-[#424242] group-hover:bg-[#383838] transition-colors duration-300">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[#ff5f56] group-hover:scale-110 transition-transform" />
                <div className="w-3 h-3 rounded-full bg-[#ffbd2e] group-hover:scale-110 transition-transform" />
                <div className="w-3 h-3 rounded-full bg-[#27c93f] group-hover:scale-110 transition-transform" />
              </div>
              <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center gap-2">
                <span className="text-[#808080] text-sm font-mono group-hover:text-[#a0a0a0] transition-colors">index-digital -- /usr/bin/node</span>
              </div>
            </div>
            
            {/* Terminal Content */}
            <div className="font-mono p-4 text-sm leading-5 font-[Menlo] bg-[#1e1e1e] group-hover:bg-[#252525] transition-colors duration-300">
              <div className="space-y-0">
                <div className="flex items-start group/line hover:bg-[#2c313c]/50 p-1 rounded transition-colors">
                  <span className="text-[#27c93f] mr-2 group-hover/line:text-[#27c93f]/80">➜</span>
                  <span className="text-[#808080] mr-2 group-hover/line:text-[#909090]">~</span>
                  <span className="text-[#61afef] group-hover/line:text-[#61afef]/80">node</span>
                </div>
                
                <div className="text-[#abb2bf] ml-4 mb-2 group-hover:text-[#abb2bf]/90">Welcome to Node.js v18.12.1.</div>
                
                <div className="flex group/line hover:bg-[#2c313c]/50 p-1 rounded transition-colors">
                  <span className="text-[#61afef] mr-1 group-hover/line:text-[#61afef]/80">&gt;</span>
                  <span className="text-[#c678dd] group-hover/line:text-[#c678dd]/90">const</span>
                  <span className="text-[#abb2bf] mx-1 group-hover/line:text-[#abb2bf]/90">company</span>
                  <span className="text-[#56b6c2] group-hover/line:text-[#56b6c2]/90">=</span>
                  <span className="text-[#98c379] ml-1 group-hover/line:text-[#98c379]/90">"Index Digital"</span>
                </div>

                <div className="flex group/line hover:bg-[#2c313c]/50 p-1 rounded transition-colors">
                  <span className="text-[#61afef] mr-1 group-hover/line:text-[#61afef]/80">&gt;</span>
                  <span className="text-[#c678dd] group-hover/line:text-[#c678dd]/90">const</span>
                  <span className="text-[#abb2bf] mx-1 group-hover/line:text-[#abb2bf]/90">mission</span>
                  <span className="text-[#56b6c2] group-hover/line:text-[#56b6c2]/90">=</span>
                  <span className="text-[#98c379] ml-1 group-hover/line:text-[#98c379]/90">"Building Uganda's Digital Excellence One Pixel at a Time"</span>
                </div>

                <div className="flex group/line hover:bg-[#2c313c]/50 p-1 rounded transition-colors">
                  <span className="text-[#61afef] mr-1 group-hover/line:text-[#61afef]/80">&gt;</span>
                  <span className="text-[#c678dd] group-hover/line:text-[#c678dd]/90">const</span>
                  <span className="text-[#abb2bf] mx-1 group-hover/line:text-[#abb2bf]/90">phone</span>
                  <span className="text-[#56b6c2] group-hover/line:text-[#56b6c2]/90">=</span>
                  <a href="tel:+256782374230" className="text-[#98c379] ml-1 hover:text-[#98c379]/80 transition-colors cursor-pointer group-hover/line:translate-x-0.5 transform transition-transform">"+256 782374230"</a>
                </div>

                <div className="flex group/line hover:bg-[#2c313c]/50 p-1 rounded transition-colors">
                  <span className="text-[#61afef] mr-1 group-hover/line:text-[#61afef]/80">&gt;</span>
                  <span className="text-[#c678dd] group-hover/line:text-[#c678dd]/90">const</span>
                  <span className="text-[#abb2bf] mx-1 group-hover/line:text-[#abb2bf]/90">location</span>
                  <span className="text-[#56b6c2] group-hover/line:text-[#56b6c2]/90">=</span>
                  <span className="text-[#98c379] ml-1 group-hover/line:text-[#98c379]/90">"Ntinda, Kampala"</span>
                </div>

                <div className="flex group/line hover:bg-[#2c313c]/50 p-1 rounded transition-colors">
                  <span className="text-[#61afef] mr-1 group-hover/line:text-[#61afef]/80">&gt;</span>
                  <span className="text-[#c678dd] group-hover/line:text-[#c678dd]/90">const</span>
                  <span className="text-[#abb2bf] mx-1 group-hover/line:text-[#abb2bf]/90">email</span>
                  <span className="text-[#56b6c2] group-hover/line:text-[#56b6c2]/90">=</span>
                  <span className="text-[#98c379] ml-1 group-hover/line:text-[#98c379]/90">"info@index.ug"</span>
                </div>

                <div className="flex mt-2 group/line hover:bg-[#2c313c]/50 p-1 rounded transition-colors">
                  <span className="text-[#61afef] mr-1 group-hover/line:text-[#61afef]/80">&gt;</span>
                  <span className="text-[#c678dd] group-hover/line:text-[#c678dd]/90">const</span>
                  <span className="text-[#abb2bf] mx-1 group-hover/line:text-[#abb2bf]/90">expertise</span>
                  <span className="text-[#56b6c2] group-hover/line:text-[#56b6c2]/90">=</span>
                  <span className="text-[#61afef] ml-1 group-hover/line:text-[#61afef]/80">[</span>
                  <div className="inline-flex">
                    <span className="text-[#98c379] group-hover/line:text-[#98c379]/90">"{currentExpertise}"</span>
                  </div>
                  <span className="text-[#61afef] group-hover/line:text-[#61afef]/80">]</span>
                  <span className="text-[#abb2bf] animate-pulse ml-1">|</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Description with Tech Aesthetic */}
          <motion.div
            variants={fadeIn}
            className="relative mt-8 md:mt-12 font-mono"
          >
            <div className="flex items-start group/line hover:bg-[#2c313c]/10 p-3 rounded-lg transition-all">
              <span className="text-[#27c93f] mr-2 opacity-80">$</span>
              <span className="text-neutral-light/90 group-hover/line:text-neutral-light transition-colors">
                <span className="text-secondary/90">sudo</span> npm run create-digital-excellence
                <span className="text-neutral-light/60 ml-2 text-sm">
                  // Transforming ideas into pixel-perfect digital experiences
                </span>
              </span>
            </div>

            {/* Engaging Message */}
            <div className="mt-6 pl-3">
              <div className="flex items-start group/line hover:bg-[#2c313c]/10 p-3 rounded-lg transition-all">
                <span className="text-[#61afef] mr-2">&gt;</span>
                <div className="flex flex-col space-y-2">
                  <span className="text-neutral-light/90">
                    See that blinking cursor? It's ready to transform your ideas into digital reality. 
                    <span className="text-secondary"> From stunning websites to powerful mobile apps and enterprise solutions</span> – 
                    we're here to elevate your digital presence.
                  </span>
                  <span className="text-[#abb2bf]/60 text-sm font-mono">
                    // Your vision + Our expertise = Digital Excellence
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeIn}
            className="flex flex-col sm:flex-row gap-4 mt-8 font-mono"
          >
            <a
              href="#contact"
              className="group relative px-6 py-3 md:px-8 md:py-4 bg-[#2c313c] text-white rounded-lg text-base font-medium overflow-hidden text-center border border-secondary/20 hover:border-secondary/40 transition-all"
            >
              <div className="absolute inset-0 bg-secondary/10 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              <span className="relative inline-flex items-center group-hover:translate-x-1 transition-transform">
                <span className="text-secondary mr-2">$</span>
                npm start project
                <span className="ml-2 opacity-60">--init</span>
              </span>
            </a>
            <a
              href="#portfolio"
              className="group px-6 py-3 md:px-8 md:py-4 bg-transparent text-white rounded-lg text-base font-medium transition-all relative overflow-hidden text-center border border-[#2c313c] hover:bg-[#2c313c]/30"
            >
              <span className="relative inline-flex items-center group-hover:translate-x-1 transition-transform">
                <span className="text-[#61afef] mr-2">git</span>
                clone portfolio
                <span className="ml-2 opacity-60">--depth 1</span>
              </span>
            </a>
          </motion.div>
        </motion.div>
      </div>

      <style jsx global>{`
        body {
          cursor: none;
        }
        a, button, [role="button"] {
          cursor: none;
        }
      `}</style>
    </section>
  )
}
