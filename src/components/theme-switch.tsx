import React from "react"
import { motion } from "framer-motion"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "../context/theme-context"
import { Tooltip } from "./ui/tooltip"

export function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme()

  return (
    <Tooltip
      content={
        <div className="flex items-center space-x-2">
          <span className="font-mono">
            {theme === "dark" ? "Light Mode" : "Dark Mode"}
          </span>
          <kbd className="px-2 py-0.5 text-xs font-mono bg-secondary/10 rounded-md border border-secondary/20">
            ⌘ D
          </kbd>
        </div>
      }
      position="bottom"
      delay={0.5}
    >
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={toggleTheme}
        className="relative p-2 rounded-lg bg-secondary/5 hover:bg-secondary/10 transition-colors group"
        aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      >
        <div className="relative w-6 h-6">
          {/* Sun Icon */}
          <motion.div
            initial={false}
            animate={{
              scale: theme === "dark" ? 0 : 1,
              opacity: theme === "dark" ? 0 : 1,
              rotate: theme === "dark" ? 90 : 0,
            }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="absolute inset-0 flex items-center justify-center text-secondary"
          >
            <Sun className="w-5 h-5 transform group-hover:rotate-45 transition-transform duration-300" />
          </motion.div>

          {/* Moon Icon */}
          <motion.div
            initial={false}
            animate={{
              scale: theme === "dark" ? 1 : 0,
              opacity: theme === "dark" ? 1 : 0,
              rotate: theme === "dark" ? 0 : -90,
            }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="absolute inset-0 flex items-center justify-center text-secondary"
          >
            <Moon className="w-5 h-5 transform group-hover:-rotate-12 transition-transform duration-300" />
          </motion.div>
        </div>

        {/* Glow Effect */}
        <motion.div
          className="absolute inset-0 rounded-lg"
          animate={{
            boxShadow: theme === "dark"
              ? "0 0 12px rgba(var(--secondary-rgb), 0.3)"
              : "0 0 12px rgba(var(--tertiary-rgb), 0.3)",
          }}
          transition={{ duration: 0.2 }}
        />
      </motion.button>
    </Tooltip>
  )
}
