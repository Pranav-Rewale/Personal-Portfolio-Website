import { navLinks, contact } from '../data/portfolio'

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-white py-12" role="contentinfo">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-10 pb-10 border-b border-neutral-700">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-2">
              <span className="w-9 h-9 rounded-full bg-white text-neutral-900 text-xs font-black flex items-center justify-center">
                PR
              </span>
              <span className="text-lg font-bold">Pranav Rewale</span>
            </div>
            <p className="text-sm text-neutral-400 max-w-xs">
              Full-Stack Developer &amp; Java Developer based in Mumbai, India.
            </p>
          </div>

          {/* Nav */}
          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap gap-6">
              {navLinks.map(link => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-neutral-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social */}
          <div className="flex gap-4">
            <a
              href={contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 border border-neutral-700 rounded-full text-sm text-neutral-400 hover:text-white hover:border-neutral-400 transition-colors"
            >
              GitHub
            </a>
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 border border-neutral-700 rounded-full text-sm text-neutral-400 hover:text-white hover:border-neutral-400 transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-neutral-500">
          <p>© {new Date().getFullYear()} Pranav Rewale. All rights reserved.</p>
          <p>Built with React + Tailwind CSS</p>
        </div>
      </div>
    </footer>
  )
}
