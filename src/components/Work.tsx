import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'
import { projects, type ProjectCategory } from '../data/portfolio'
import { FadeUp, StaggerList, StaggerItem } from './AnimatedSection'

const filters: ProjectCategory[] = ['All', 'Full-Stack', 'Java']

export default function Work() {
  const [active, setActive] = useState<ProjectCategory>('All')

  const visible = active === 'All' ? projects : projects.filter(p => p.category === active)

  return (
    <section id="work" className="py-24 bg-white" aria-labelledby="work-heading">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header row */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <FadeUp>
            <p className="section-label mb-2">Selected Work</p>
            <h2 id="work-heading" className="text-3xl font-bold text-neutral-900 max-w-xs leading-tight">
              A curated selection of projects demonstrating my expertise in development.
            </h2>
          </FadeUp>

          {/* Filter tabs */}
          <FadeUp delay={0.15}>
            <div className="flex items-center gap-2 flex-wrap" role="tablist" aria-label="Project filter">
              {filters.map(f => (
                <motion.button
                  key={f}
                  role="tab"
                  aria-selected={active === f}
                  onClick={() => setActive(f)}
                  className={`relative px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    active === f ? 'text-white' : 'text-neutral-600 hover:text-neutral-900'
                  }`}
                  whileTap={{ scale: 0.95 }}
                >
                  {active === f && (
                    <motion.span
                      layoutId="filter-pill"
                      className="absolute inset-0 bg-neutral-900 rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{f}</span>
                </motion.button>
              ))}
            </div>
          </FadeUp>
        </div>

        {/* Project grid with AnimatePresence for smooth enter/exit */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
          >
            <StaggerList className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {visible.map(project => (
                <StaggerItem key={project.id}>
                  <ProjectCard project={project} />
                </StaggerItem>
              ))}
            </StaggerList>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}

function ProjectCard({ project }: { project: (typeof projects)[0] }) {
  return (
    <motion.article
      className="group bg-white border border-neutral-100 rounded-2xl overflow-hidden"
      whileHover={{ y: -6, boxShadow: '0 20px 40px -12px rgba(0,0,0,0.12)' }}
      transition={{ type: 'spring', stiffness: 300, damping: 24 }}
    >
      {/* Image */}
      <div className="relative overflow-hidden aspect-[4/3] bg-neutral-100">
        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
          loading="lazy"
          whileHover={{ scale: 1.07 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        />
        {/* Hover overlay */}
        <motion.div
          className="absolute inset-0 bg-neutral-900/70 flex items-center justify-center gap-4"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.25 }}
        >
          <motion.a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white rounded-full text-neutral-900"
            whileHover={{ scale: 1.12, backgroundColor: '#7C3AED', color: '#fff' }}
            whileTap={{ scale: 0.95 }}
            aria-label={`View ${project.title} on GitHub`}
          >
            <Github size={18} />
          </motion.a>
          {project.live && (
            <motion.a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white rounded-full text-neutral-900"
              whileHover={{ scale: 1.12, backgroundColor: '#7C3AED', color: '#fff' }}
              whileTap={{ scale: 0.95 }}
              aria-label={`View ${project.title} live demo`}
            >
              <ExternalLink size={18} />
            </motion.a>
          )}
        </motion.div>
      </div>

      {/* Card body */}
      <div className="p-5">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="text-base font-bold text-neutral-900 leading-snug">{project.title}</h3>
          <span className="text-xs text-neutral-400 font-medium shrink-0 mt-0.5">{project.year}</span>
        </div>
        <p className="text-xs font-semibold text-violet-600 mb-3">{project.category}</p>
        <p className="text-sm text-neutral-500 leading-relaxed mb-4">{project.summary}</p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5">
          {project.tech.slice(0, 4).map(t => (
            <motion.span
              key={t}
              className="px-2.5 py-1 bg-neutral-100 text-neutral-600 text-xs rounded-full font-medium"
              whileHover={{ backgroundColor: '#EDE9FE', color: '#6D28D9' }}
              transition={{ duration: 0.15 }}
            >
              {t}
            </motion.span>
          ))}
          {project.tech.length > 4 && (
            <span className="px-2.5 py-1 bg-neutral-100 text-neutral-400 text-xs rounded-full font-medium">
              +{project.tech.length - 4}
            </span>
          )}
        </div>
      </div>
    </motion.article>
  )
}
