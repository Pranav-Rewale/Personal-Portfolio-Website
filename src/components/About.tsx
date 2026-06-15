import { motion } from 'framer-motion'
import { skills, experience } from '../data/portfolio'
import { FadeUp, FadeIn, StaggerList, StaggerItem } from './AnimatedSection'

const stats = [
  { value: '2+', label: 'Internships' },
  { value: '6+', label: 'Projects Built' },
  { value: '2', label: 'Specializations' },
]

export default function About() {
  return (
    <section id="about" className="py-24 bg-neutral-50 overflow-hidden" aria-labelledby="about-heading">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left — text content */}
          <div>
            <FadeUp>
              <p className="section-label mb-4">About</p>
              <h2 id="about-heading" className="text-4xl font-bold leading-tight text-neutral-900 mb-6">
                Bridging the gap between{' '}
                <span className="text-violet-600">Design</span> &amp; Engineering.
              </h2>
            </FadeUp>

            <FadeUp delay={0.1}>
              <p className="text-neutral-500 leading-relaxed mb-4">
                I'm a Computer Engineering graduate from Mumbai with a strong foundation in modern web
                technologies and a growing passion for backend development with Java and Spring Boot.
              </p>
              <p className="text-neutral-500 leading-relaxed mb-8">
                I love building scalable, user-centric applications — from interactive full-stack web
                apps to robust enterprise APIs. As an early-career developer, I bring fresh
                perspectives, strong fundamentals, and an eagerness to keep learning and shipping
                quality software.
              </p>
            </FadeUp>

            {/* Stats — each counter animates in with spring */}
            <FadeUp delay={0.2}>
              <div className="flex gap-10 mb-10 pb-10 border-b border-neutral-200">
                {stats.map((s, i) => (
                  <motion.div
                    key={s.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <motion.p
                      className="text-4xl font-black text-neutral-900"
                      initial={{ scale: 0.7 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ type: 'spring', stiffness: 300, damping: 20, delay: 0.35 + i * 0.1 }}
                    >
                      {s.value}
                    </motion.p>
                    <p className="text-xs font-semibold tracking-widest uppercase text-neutral-400 mt-1">
                      {s.label}
                    </p>
                  </motion.div>
                ))}
              </div>
            </FadeUp>

            {/* Education */}
            <FadeUp delay={0.3}>
              <div className="mb-8">
                <p className="section-label mb-4">Education</p>
                <div className="flex items-start gap-4">
                  <motion.div
                    className="w-2 h-2 rounded-full bg-violet-500 mt-2 shrink-0"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: 'spring', stiffness: 400, delay: 0.4 }}
                  />
                  <div>
                    <p className="font-bold text-neutral-900">B.E. in Computer Engineering</p>
                    <p className="text-sm text-neutral-500">
                      Vidyavardhini's College of Engineering and Technology, Mumbai
                    </p>
                    <p className="text-sm text-neutral-400 mt-0.5">2022 – 2026</p>
                  </div>
                </div>
              </div>
            </FadeUp>

            {/* Experience timeline */}
            <FadeUp delay={0.4}>
              <p className="section-label mb-4">Experience</p>
              <div className="space-y-5">
                {experience.map((exp, i) => (
                  <motion.div
                    key={i}
                    className="flex items-start gap-4"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.45 + i * 0.12, ease: 'easeOut' }}
                  >
                    <div className="flex flex-col items-center">
                      <motion.div
                        className="w-2 h-2 rounded-full bg-violet-500 mt-2 shrink-0"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ type: 'spring', stiffness: 400, delay: 0.5 + i * 0.12 }}
                      />
                      {i < experience.length - 1 && (
                        <div className="w-px flex-1 bg-neutral-200 mt-1.5 h-8" />
                      )}
                    </div>
                    <div>
                      <p className="font-bold text-neutral-900">{exp.role}</p>
                      <p className="text-sm text-neutral-500">{exp.company} · {exp.location}</p>
                      <p className="text-sm text-neutral-400 mt-0.5">{exp.period}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </FadeUp>
          </div>

          {/* Right — image collage + skills */}
          <div>
            {/* Image collage with staggered entrance */}
            <FadeIn delay={0.1}>
              <div className="grid grid-cols-2 gap-3 mb-10">
                <motion.img
                  src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&q=80"
                  alt="Coding workspace"
                  className="col-span-2 rounded-2xl object-cover h-52 w-full"
                  initial={{ opacity: 0, scale: 0.96 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease: 'easeOut' }}
                  whileHover={{ scale: 1.02 }}
                />
                <motion.img
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&q=80"
                  alt="Development"
                  className="rounded-2xl object-cover h-36 w-full"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
                  whileHover={{ scale: 1.03 }}
                />
                <motion.img
                  src="https://images.unsplash.com/photo-1555099962-4199c345e5dd?w=400&q=80"
                  alt="Code on screen"
                  className="rounded-2xl object-cover h-36 w-full"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.25, ease: 'easeOut' }}
                  whileHover={{ scale: 1.03 }}
                />
              </div>
            </FadeIn>

            {/* Full-Stack skills */}
            <FadeUp delay={0.2}>
              <p className="section-label mb-3">Full-Stack Skills</p>
              <StaggerList className="flex flex-wrap gap-2 mb-6">
                {skills.fullStack.map(skill => (
                  <StaggerItem key={skill}>
                    <motion.span
                      className="px-3.5 py-1.5 border border-neutral-200 text-neutral-700 text-sm rounded-full font-medium cursor-default"
                      whileHover={{
                        borderColor: '#8B5CF6',
                        color: '#6D28D9',
                        backgroundColor: '#F5F3FF',
                        scale: 1.05,
                      }}
                      transition={{ duration: 0.15 }}
                    >
                      {skill}
                    </motion.span>
                  </StaggerItem>
                ))}
              </StaggerList>
            </FadeUp>

            {/* Java skills */}
            <FadeUp delay={0.3}>
              <p className="section-label mb-3">Java Developer Skills</p>
              <StaggerList className="flex flex-wrap gap-2">
                {skills.java.map(skill => (
                  <StaggerItem key={skill}>
                    <motion.span
                      className="px-3.5 py-1.5 border border-neutral-200 text-neutral-700 text-sm rounded-full font-medium cursor-default"
                      whileHover={{
                        borderColor: '#8B5CF6',
                        color: '#6D28D9',
                        backgroundColor: '#F5F3FF',
                        scale: 1.05,
                      }}
                      transition={{ duration: 0.15 }}
                    >
                      {skill}
                    </motion.span>
                  </StaggerItem>
                ))}
              </StaggerList>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  )
}
