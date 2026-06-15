import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { navLinks } from '../data/portfolio'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 group" aria-label="Pranav Rewale home">
          <span className="w-9 h-9 rounded-full bg-neutral-900 text-white text-xs font-black flex items-center justify-center tracking-tight group-hover:bg-violet-600 transition-colors">
            PR
          </span>
          <div className="leading-tight">
            <p className="text-sm font-bold text-neutral-900">PRANAV</p>
            <p className="text-[10px] font-medium text-neutral-400 tracking-widest uppercase">Rewale</p>
          </div>
        </a>

        {/* Availability pill — desktop only */}
        <div className="hidden lg:flex items-center gap-2 text-xs font-medium text-neutral-600">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          Available for new opportunities
        </div>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-1 bg-neutral-100 rounded-full px-2 py-1.5">
          {navLinks.map(link => (
            <a
              key={link.label}
              href={link.href}
              className="px-4 py-1.5 text-sm font-medium text-neutral-600 rounded-full hover:bg-white hover:text-neutral-900 hover:shadow-sm transition-all"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <a
          href="#contact"
          className="hidden md:flex items-center gap-2 bg-neutral-900 text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-violet-600 transition-colors"
        >
          Let's Talk
        </a>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 rounded-full hover:bg-neutral-100 transition-colors"
          onClick={() => setMenuOpen(v => !v)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="md:hidden bg-white border-t border-neutral-100 px-6 py-4 flex flex-col gap-3"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                className="text-base font-medium text-neutral-700 hover:text-neutral-900 py-1"
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.06, duration: 0.25 }}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </motion.a>
            ))}
            <motion.a
              href="#contact"
              className="mt-2 bg-neutral-900 text-white text-sm font-semibold px-5 py-3 rounded-full text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: navLinks.length * 0.06 }}
              onClick={() => setMenuOpen(false)}
            >
              Let's Talk
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
