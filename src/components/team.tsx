import React from "react"
import { motion } from "framer-motion"

interface TeamMember {
  name: string
  role: string
  description: string
  links?: {
    github?: string
    linkedin?: string
    twitter?: string
  }
}

const team: TeamMember[] = [
  {
    name: "Olara L Lamara",
    role: "CEO / Lead Developer",
    description: "Full-stack developer with expertise in scalable web applications and system architecture. Leading the technical vision and development strategy at Index Digital.",
    links: {
      github: "https://github.com/olara",
      linkedin: "https://linkedin.com/in/olara"
    }
  },
  {
    name: "Maliamungu Benard",
    role: "Finance & Accounts",
    description: "Financial strategist overseeing company operations, budgeting, and growth planning. Ensuring sustainable business development and fiscal responsibility.",
    links: {
      linkedin: "https://linkedin.com/in/maliamungu"
    }
  },
  {
    name: "Ankunda Oliver Nakato",
    role: "Frontend Developer",
    description: "Creative developer specializing in modern UI/UX implementation. Crafting beautiful and responsive user interfaces with React and modern web technologies.",
    links: {
      github: "https://github.com/ankunda",
      linkedin: "https://linkedin.com/in/ankunda"
    }
  }
]

export const Team: React.FC = () => {
  return (
    <section id="team" className="relative py-24 overflow-hidden">
      {/* Graph Paper Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 graph-paper-accent" style={{ opacity: 0.15 }} />
        <div className="absolute inset-0 graph-paper-small" style={{ opacity: 0.1 }} />
      </div>

      {/* Content Container */}
      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-left mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">Our Team</h2>
          <p className="text-neutral-light/80">Meet the minds behind Index Digital</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              {/* Graph Paper Card */}
              <div className="absolute inset-0 graph-paper-small opacity-10" />
              <div className="absolute inset-0 graph-paper-accent opacity-15" />
              
              {/* Card Content */}
              <div className="relative bg-[#1e1e1e]/40 backdrop-blur-sm rounded-lg overflow-hidden border border-[#323232]/30 hover:border-secondary/20 transition-all duration-500">
                <div className="p-5">
                  {/* Avatar and Name Section */}
                  <div className="mb-4 relative">
                    <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-2 border border-secondary/20">
                      <svg className="w-6 h-6 text-secondary/70" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                        <circle cx="12" cy="7" r="4" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-bold text-white group-hover:text-secondary transition-colors duration-300">
                      {member.name}
                    </h3>
                    <p className="text-secondary/70 text-sm font-mono mb-2">{member.role}</p>
                  </div>
                  
                  {/* Description */}
                  <p className="text-neutral-light/70 text-sm mb-4 relative">
                    {member.description}
                  </p>

                  {/* Social Links */}
                  {member.links && (
                    <div className="flex gap-2 relative">
                      {member.links.github && (
                        <a
                          href={member.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg bg-[#2c313c]/30 text-neutral-light/60 hover:bg-secondary/10 hover:text-secondary transition-all duration-300"
                        >
                          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                          </svg>
                        </a>
                      )}
                      {member.links.linkedin && (
                        <a
                          href={member.links.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg bg-[#2c313c]/30 text-neutral-light/60 hover:bg-secondary/10 hover:text-secondary transition-all duration-300"
                        >
                          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                          </svg>
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
