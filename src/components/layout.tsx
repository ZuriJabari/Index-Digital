import React from "react"
import { Navigation } from "./navigation"
import { Footer } from "./footer"
import { ThemeProvider } from "../context/theme-context"

interface LayoutProps {
  children: React.ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <ThemeProvider>
      <div className="flex flex-col min-h-screen bg-primary transition-colors duration-200">
        <Navigation />
        {/* Subtle grid background */}
        <div className="fixed inset-0 graph-paper-accent pointer-events-none" style={{ opacity: 0.15 }} />
        <div className="fixed inset-0 graph-paper-small pointer-events-none" style={{ opacity: 0.1 }} />
        
        {/* Very subtle gradient overlays */}
        <div className="fixed inset-0 pointer-events-none bg-gradient-to-b from-primary/20 to-transparent" />
        <div className="fixed inset-0 pointer-events-none bg-gradient-to-t from-primary/20 to-transparent" />
        
        <main className="relative flex-grow pt-16">
          {children}
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}
