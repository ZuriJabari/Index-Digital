import React from "react"
import { motion } from "framer-motion"

interface Project {
  title: string
  description: string
  tags: string[]
  link?: string
  status?: string
}

const PlaceholderImage: React.FC<{ title: string }> = ({ title }) => (
  <div className="w-full h-40 bg-[#2c313c] flex items-center justify-center">
    <div className="text-center p-4">
      <div className="w-10 h-10 mx-auto mb-3">
        <svg className="w-full h-full text-secondary/40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
          <path d="M21 3.6v16.8a.6.6 0 0 1-.6.6H3.6a.6.6 0 0 1-.6-.6V3.6a.6.6 0 0 1 .6-.6h16.8a.6.6 0 0 1 .6.6z"/>
          <path d="M3 16l5-5 5 5"/>
          <path d="M14 13l3-3 4 4"/>
          <path d="M8 10a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"/>
        </svg>
      </div>
      <p className="text-secondary/60 text-xs font-mono">{title}</p>
    </div>
  </div>
)

const projects: Project[] = [
  {
    title: "Index Digital 2025",
    description:
      "Our previous website showcasing our digital expertise and creative capabilities.",
    tags: ["Gatsby", "React", "TailwindCSS"],
    link: "https://2021.index.ug/"
  },
  {
    title: "Leo Africa Institute",
    description:
      "A dynamic platform for the Aspen Global Leadership Network, fostering leadership development.",
    tags: ["Next.js", "Node.js", "TailwindCSS"],
    link: "https://alg.leoafricainstitute.org/"
  },
  {
    title: "Kampala Post",
    description:
      "A leading digital news platform delivering real-time updates and in-depth coverage.",
    tags: ["WordPress", "PHP", "MySQL"],
    link: "https://kampalapost.com/"
  },
  {
    title: "Safiri - Coming Soon",
    description:
      "An innovative ride-sharing platform revolutionizing urban mobility in Uganda.",
    tags: ["React Native", "Node.js", "MongoDB"],
    status: "coming-soon"
  }
]

export const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 graph-paper-accent opacity-15" />
        <div className="absolute inset-0 graph-paper-small opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/20 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-left mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">Featured Projects</h2>
          <p className="text-neutral-light/80">Transforming ideas into impactful digital solutions</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
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
                <div className="relative overflow-hidden">
                  <div className="transform transition-transform duration-700 group-hover:scale-105">
                    <PlaceholderImage title={project.title} />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1e1e1e]/80 via-transparent to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-500" />
                  {project.link && (
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <motion.div
                        initial={{ scale: 0.8 }}
                        whileHover={{ scale: 1.1 }}
                        className="bg-secondary/20 backdrop-blur-sm p-2.5 rounded-full border border-secondary/30"
                      >
                        <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" />
                        </svg>
                      </motion.div>
                    </div>
                  )}
                </div>

                <div className="p-5 relative">
                  <h3 className="text-lg font-bold text-white group-hover:text-secondary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-neutral-light/70 text-sm mb-3 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {project.tags.map(tag => (
                      <span
                        key={tag}
                        className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#2c313c]/30 text-neutral-light/70 hover:bg-secondary/10 hover:text-secondary transition-all duration-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  {project.link ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm text-secondary/80 hover:text-secondary transition-colors group/link"
                    >
                      <span className="group-hover/link:translate-x-1 transition-transform duration-300">Visit Project</span>
                      <svg className="w-3.5 h-3.5 ml-1 group-hover/link:translate-x-1 transition-transform duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" />
                      </svg>
                    </a>
                  ) : (
                    <span className="inline-flex items-center text-sm text-secondary/60">
                      Coming Soon
                      <span className="ml-2 w-1.5 h-1.5 bg-secondary/60 rounded-full animate-pulse" />
                    </span>
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
