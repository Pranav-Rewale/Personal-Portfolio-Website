import { motion } from 'framer-motion'
import { services } from '../data/portfolio'
import { FadeUp } from './AnimatedSection'

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white" aria-labelledby="services-heading">
      <div className="max-w-7xl mx-auto px-6">
        <FadeUp>
          <p className="section-label mb-4">What I Do</p>
          <h2 id="services-heading" className="text-4xl font-bold text-neutral-900 mb-12 max-w-lg leading-tight">
            Services I offer to help bring your ideas to life.
          </h2>
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={i}
              className="p-8 rounded-2xl border border-neutral-100 bg-white cursor-default"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{
                y: -8,
                borderColor: '#C4B5FD',
                backgroundColor: '#FAFAFF',
                boxShadow: '0 16px 40px -12px rgba(124,58,237,0.12)',
              }}
            >
              {/* Icon with bounce on hover */}
              <motion.div
                className="text-3xl mb-5"
                aria-hidden="true"
                whileHover={{ scale: 1.2, rotate: [-4, 4, -2, 0] }}
                transition={{ duration: 0.4 }}
              >
                {service.icon}
              </motion.div>

              <h3 className="text-lg font-bold text-neutral-900 mb-3 leading-snug">
                {service.title}
              </h3>
              <p className="text-sm text-neutral-500 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
