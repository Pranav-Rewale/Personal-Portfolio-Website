import { motion, useReducedMotion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'

const heroCopy = {
  hidden: { opacity: 0, y: 20 },
  show: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: 'easeOut' },
  }),
}

export default function Hero() {
  const shouldReduceMotion = useReducedMotion()
  const headingWord = {
    hidden: { opacity: 0, y: 28 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: shouldReduceMotion ? 0 : 0.65, ease: [0.22, 1, 0.36, 1] },
    },
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-16"
      aria-label="Hero"
    >
      {/* Animated background grid */}
      <motion.div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.04 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
        style={{
          backgroundImage:
            'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Subtle violet glow blob */}
      <motion.div
        className="pointer-events-none absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-violet-200 blur-3xl"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.25, scale: 1 }}
        transition={{ duration: 2, ease: 'easeOut', delay: 0.5 }}
      />

      <div className="relative max-w-7xl mx-auto px-6 w-full">
        {/* Main heading */}
        <div>
          <motion.h1
            className="max-w-5xl text-[clamp(2.25rem,7vw,6.5rem)] font-black leading-[1.05] tracking-tight text-neutral-900"
            aria-label="Graduate Software Developer"
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: shouldReduceMotion ? 0 : 0.18, delayChildren: shouldReduceMotion ? 0 : 0.15 } },
            }}
            initial={shouldReduceMotion ? false : 'hidden'}
            animate="show"
          >
            {['Graduate', 'Software', 'Developer'].map((word, index) => (
              <span key={word}>
                <motion.span
                  aria-hidden="true"
                  className="inline-block"
                  variants={headingWord}
                  whileHover={shouldReduceMotion ? undefined : { y: -3, color: '#7C3AED' }}
                >
                  {word}
                </motion.span>
                {index < 2 && ' '}
              </span>
            ))}
          </motion.h1>
        </div>

        {/* Sub-copy */}
        <motion.div
          className="mt-8 max-w-xl"
          variants={heroCopy}
          custom={0.55}
          initial="hidden"
          animate="show"
        >
          <p className="text-lg text-neutral-500 leading-relaxed">
            Crafting scalable web applications and robust backend systems that blend{' '}
            <strong className="text-neutral-900 font-semibold">clean architecture</strong> with{' '}
            <strong className="text-neutral-900 font-semibold">performant engineering</strong>.
          </p>
          <p className="mt-1 text-sm text-neutral-400">📍 Mumbai, India</p>
        </motion.div>

        {/* CTAs */}
        <motion.div
          className="mt-10 flex flex-wrap items-center gap-4"
          variants={heroCopy}
          custom={0.7}
          initial="hidden"
          animate="show"
        >
          <motion.a
            href="#work"
            className="bg-neutral-900 text-white text-sm font-semibold px-7 py-3.5 rounded-full"
            whileHover={{ scale: 1.04, backgroundColor: '#7C3AED' }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 400, damping: 20 }}
          >
            View Projects
          </motion.a>
          <motion.a
            href="#contact"
            className="bg-white text-neutral-900 text-sm font-semibold px-7 py-3.5 rounded-full border border-neutral-200"
            whileHover={{ scale: 1.04, borderColor: '#111' }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 400, damping: 20 }}
          >
            Contact Me
          </motion.a>
          <motion.a
            href="/resume.pdf"
            download="Pranav_Rewale_Resume.pdf"
            className="text-sm font-medium text-neutral-500 underline underline-offset-4"
            whileHover={{ color: '#111' }}
          >
            Download Resume
          </motion.a>
        </motion.div>

        {/* Social links */}
        <motion.div
          className="mt-12 flex items-center gap-6"
          variants={heroCopy}
          custom={0.85}
          initial="hidden"
          animate="show"
        >
          <motion.a
            href="https://github.com/Pranav-Rewale"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-semibold tracking-widest uppercase text-neutral-400"
            whileHover={{ color: '#111', letterSpacing: '0.12em' }}
            transition={{ duration: 0.2 }}
          >
            GitHub
          </motion.a>
          <span className="w-8 h-px bg-neutral-200" aria-hidden="true" />
          <motion.a
            href="https://www.linkedin.com/in/pranav-rewale-7590b925b"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-semibold tracking-widest uppercase text-neutral-400"
            whileHover={{ color: '#111', letterSpacing: '0.12em' }}
            transition={{ duration: 0.2 }}
          >
            LinkedIn
          </motion.a>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.a
        href="#work"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-neutral-400"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        whileHover={{ color: '#111' }}
        aria-label="Scroll to work"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
        >
          <ArrowDown size={18} />
        </motion.div>
      </motion.a>
    </section>
  )
}
