import { Link } from 'react-router-dom'
import { Zap, Mail, Github, Twitter, Instagram } from 'lucide-react'
import { motion } from 'framer-motion'

const footerLinks = {
  legal: [
    { label: 'Privacy Policy', path: '/privacy' },
    { label: 'Terms of Service', path: '/terms' },
    { label: 'Delete Account', path: '/delete-account' },
  ],
  projects: [
    { label: 'School ERP', path: '/school-management' },
    { label: 'Wheel Deal', path: '/wheel-deal' },
    { label: 'Daily Worker', path: '/daily-worker' },
  ],
  support: [
    { label: 'Contact Us', path: '/contact' },
    { label: 'Help Center', path: '/contact' },
    { label: 'Support', path: '/contact' },
  ],
  social: [
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Github, href: '#', label: 'Github' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0f] border-t border-white/5">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-4 mb-8 group">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-cyan-500 to-violet-500 flex items-center justify-center group-hover:rotate-12 transition-transform duration-500">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <span className="font-bold text-2xl text-white">ZenZero</span>
            </Link>
            <p className="text-zinc-400 text-lg leading-relaxed mb-8">
              Crafting the next generation of digital excellence through innovation and engineering.
            </p>
            <div className="flex items-center gap-4">
              {footerLinks.social.map((item) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-zinc-400 hover:text-cyan-400 hover:bg-cyan-500/10 border border-white/5 hover:border-cyan-500/30 transition-all duration-300"
                >
                  <item.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Projects */}
          <div>
            <h4 className="font-semibold text-white mb-6">Projects</h4>
            <ul className="space-y-4">
              {footerLinks.projects.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="text-zinc-400 hover:text-cyan-400 transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold text-white mb-6">Support</h4>
            <ul className="space-y-4">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="text-zinc-400 hover:text-cyan-400 transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href="mailto:yashborse432005@gmail.com"
                  className="flex items-center gap-3 text-zinc-400 hover:text-cyan-400 transition-colors text-sm"
                >
                  <Mail className="w-4 h-4" />
                  Email Support
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-white mb-6">Legal</h4>
            <ul className="space-y-4">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="text-zinc-400 hover:text-cyan-400 transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-zinc-500 text-sm">
            © 2026 ZenZero Developer. All rights reserved.
          </p>
          <p className="text-zinc-600 text-sm">
            Built with React
          </p>
        </div>
      </div>
    </footer>
  )
}
