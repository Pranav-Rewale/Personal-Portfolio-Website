import { useEffect, useRef, useState, type FormEvent } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Mail, Phone, MapPin } from 'lucide-react'
import { contact } from '../data/portfolio'
import { FadeUp } from './AnimatedSection'

const interests = ['Full-Stack Dev', 'Java Backend', 'Web Design', 'REST APIs', 'Consulting']

export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [selectedInterests, setSelectedInterests] = useState<string[]>([])
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [isSending, setIsSending] = useState(false)
  const [error, setError] = useState('')
  const inFlight = useRef(false)
  const successHeading = useRef<HTMLHeadingElement>(null)
  const errorSummary = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    if (submitted) successHeading.current?.focus()
  }, [submitted])

  const toggleInterest = (item: string) => {
    setSelectedInterests(prev =>
      prev.includes(item) ? prev.filter(i => i !== item) : [...prev, item]
    )
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (inFlight.current) return
    setError('')

    const form = new FormData(e.currentTarget)
    if (String(form.get('_honey') ?? '').trim()) return

    if (name.trim().length < 2 || message.trim().length < 10) {
      setError('Please enter your name and a message of at least 10 characters.')
      requestAnimationFrame(() => errorSummary.current?.focus())
      return
    }

    inFlight.current = true
    setIsSending(true)
    const controller = new AbortController()
    const timeout = window.setTimeout(() => controller.abort(), 20000)

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${contact.email}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        signal: controller.signal,
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          interests: selectedInterests.join(', ') || 'Not specified',
          message: message.trim(),
          _subject: 'New portfolio enquiry — Pranav Rewale',
          _template: 'table',
          _url: `${window.location.origin}${window.location.pathname}#contact`,
          _honey: '',
        }),
      })
      const result: { success?: boolean | string; message?: string } = await response.json()

      if (!response.ok || (result.success !== true && result.success !== 'true')) {
        throw new Error('Submission was not accepted')
      }

      setSubmitted(true)
    } catch {
      setError('Your message could not be confirmed. Please try again or use the email link below to contact me directly.')
      requestAnimationFrame(() => errorSummary.current?.focus())
    } finally {
      window.clearTimeout(timeout)
      inFlight.current = false
      setIsSending(false)
    }
  }

  return (
    <section id="contact" className="py-24 bg-neutral-50 overflow-hidden" aria-labelledby="contact-heading">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left */}
          <div>
            <FadeUp>
              <p className="section-label mb-4">Get In Touch</p>
              <h2 id="contact-heading" className="text-5xl font-black text-neutral-900 leading-tight mb-4">
                Let's start a{' '}
                <motion.span
                  className="text-violet-600 inline-block"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                >
                  conversation.
                </motion.span>
              </h2>
            </FadeUp>

            <FadeUp delay={0.1}>
              <p className="text-neutral-500 leading-relaxed mb-10">
                Interested in working together? Fill out the form or send me an email. I'm always
                open to discussing new projects, roles, and opportunities.
              </p>
            </FadeUp>

            {/* Contact details */}
            <div className="space-y-5">
              {[
                { icon: <Mail size={18} />, label: 'Email me', value: contact.email, href: `mailto:${contact.email}` },
                { icon: <Phone size={18} />, label: 'Call me', value: contact.phone, href: `tel:${contact.phone.replace(/\s/g, '')}` },
                { icon: <MapPin size={18} />, label: 'Location', value: contact.location },
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.1, ease: 'easeOut' }}
                >
                  <ContactItem {...item} />
                </motion.div>
              ))}
            </div>

            {/* Social links */}
            <motion.div
              className="mt-10 flex gap-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.55 }}
            >
              {[
                { label: 'GitHub', href: contact.github },
                { label: 'LinkedIn', href: contact.linkedin },
              ].map(s => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 border border-neutral-200 rounded-full text-sm font-semibold text-neutral-700"
                  whileHover={{
                    borderColor: '#7C3AED',
                    color: '#7C3AED',
                    scale: 1.04,
                  }}
                  whileTap={{ scale: 0.96 }}
                  transition={{ duration: 0.15 }}
                >
                  {s.label}
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Right — form */}
          <FadeUp delay={0.15}>
            <div className="bg-white rounded-3xl border border-neutral-100 p-8 shadow-sm">
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="flex flex-col items-center justify-center text-center py-16"
                  >
                    <motion.div
                      className="text-5xl mb-4"
                      initial={{ rotate: -20, scale: 0 }}
                      animate={{ rotate: 0, scale: 1 }}
                      transition={{ type: 'spring', stiffness: 300, damping: 16, delay: 0.1 }}
                    >
                      🎉
                    </motion.div>
                    <h3 ref={successHeading} tabIndex={-1} className="text-2xl font-bold text-neutral-900 mb-2 focus:outline-none">Message submitted!</h3>
                    <p role="status" className="text-neutral-500">Thanks for reaching out. Your enquiry has been accepted for email delivery.</p>
                    <button
                      onClick={() => { setSubmitted(false); setError(''); setName(''); setEmail(''); setMessage(''); setSelectedInterests([]) }}
                      className="mt-6 text-sm font-medium text-violet-600 hover:underline"
                    >
                      Send another
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    action={`https://formsubmit.co/${contact.email}`}
                    method="POST"
                    aria-busy={isSending}
                    className="space-y-5"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="hidden" aria-hidden="true">
                      <label htmlFor="contact-website">Leave this field empty</label>
                      <input id="contact-website" type="text" name="_honey" tabIndex={-1} autoComplete="off" />
                    </div>
                    {error && (
                      <p ref={errorSummary} tabIndex={-1} role="alert" className="rounded-xl bg-red-50 p-4 text-sm text-red-800 focus:outline-none">
                        {error}{' '}
                        <a className="font-semibold underline" href={`mailto:${contact.email}`}>Email {contact.email}</a>
                      </p>
                    )}
                    <div>
                      <label htmlFor="contact-name" className="block text-xs font-semibold text-neutral-500 mb-1.5">
                        What's your name?
                      </label>
                      <input
                        id="contact-name"
                        name="name"
                        type="text"
                        autoComplete="name"
                        minLength={2}
                        maxLength={100}
                        disabled={isSending}
                        required
                        value={name}
                        onChange={e => setName(e.target.value)}
                        placeholder="John Doe"
                        className="w-full border-b border-neutral-200 py-2.5 text-sm text-neutral-900 placeholder-neutral-300 focus:outline-none focus:border-violet-500 bg-transparent transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="contact-email" className="block text-xs font-semibold text-neutral-500 mb-1.5">
                        What's your email?
                      </label>
                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        maxLength={254}
                        disabled={isSending}
                        required
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        placeholder="john@company.com"
                        className="w-full border-b border-neutral-200 py-2.5 text-sm text-neutral-900 placeholder-neutral-300 focus:outline-none focus:border-violet-500 bg-transparent transition-colors"
                      />
                    </div>

                    <div>
                      <p className="text-xs font-semibold text-neutral-500 mb-2.5">I'm interested in...</p>
                      <div className="flex flex-wrap gap-2">
                        {interests.map(item => (
                          <motion.button
                            key={item}
                            type="button"
                            disabled={isSending}
                            onClick={() => toggleInterest(item)}
                            className={`relative px-4 py-2 rounded-full text-sm font-medium border transition-colors ${
                              selectedInterests.includes(item)
                                ? 'border-violet-600 text-white'
                                : 'border-neutral-200 text-neutral-600'
                            }`}
                            whileTap={{ scale: 0.93 }}
                            aria-pressed={selectedInterests.includes(item)}
                          >
                            {selectedInterests.includes(item) && (
                              <motion.span
                                layoutId={`interest-${item}`}
                                className="absolute inset-0 bg-violet-600 rounded-full"
                                transition={{ type: 'spring', stiffness: 400, damping: 28 }}
                              />
                            )}
                            <span className="relative z-10">{item}</span>
                          </motion.button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label htmlFor="contact-message" className="block text-xs font-semibold text-neutral-500 mb-1.5">
                        Project / Message details
                      </label>
                      <textarea
                        id="contact-message"
                        name="message"
                        required
                        minLength={10}
                        maxLength={5000}
                        disabled={isSending}
                        rows={4}
                        value={message}
                        onChange={e => setMessage(e.target.value)}
                        placeholder="Tell me about your project, goals, or just say hi..."
                        className="w-full border border-neutral-200 rounded-xl p-3 text-sm text-neutral-900 placeholder-neutral-300 focus:outline-none focus:border-violet-500 bg-transparent transition-colors resize-none"
                      />
                    </div>

                    <motion.button
                      type="submit"
                      disabled={isSending}
                      className="w-full bg-neutral-900 text-white text-sm font-bold py-4 rounded-full disabled:opacity-60 disabled:cursor-wait"
                      whileHover={{ backgroundColor: '#7C3AED', scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ duration: 0.15 }}
                    >
                      {isSending ? 'Sending…' : 'Send Message →'}
                    </motion.button>
                    <p className="text-xs text-neutral-500 leading-relaxed">
                      Your details are sent through FormSubmit to my email so I can reply to your enquiry.
                    </p>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  )
}

function ContactItem({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode
  label: string
  value: string
  href?: string
}) {
  const Inner = (
    <motion.div
      className="flex items-center gap-4"
      whileHover={{ x: 4 }}
      transition={{ duration: 0.2 }}
    >
      <motion.div
        className="w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-600 shrink-0"
        whileHover={{ backgroundColor: '#EDE9FE', color: '#7C3AED', scale: 1.08 }}
        transition={{ duration: 0.2 }}
      >
        {icon}
      </motion.div>
      <div>
        <p className="text-xs font-semibold text-neutral-400 uppercase tracking-widest">{label}</p>
        <p className="text-sm font-medium text-neutral-900">{value}</p>
      </div>
    </motion.div>
  )

  return href ? (
    <a href={href} className="block">
      {Inner}
    </a>
  ) : (
    <div>{Inner}</div>
  )
}
