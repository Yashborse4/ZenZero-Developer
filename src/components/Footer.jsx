import { Link } from 'react-router-dom'
import { Car, Mail, Github, Twitter, Instagram } from 'lucide-react'
import { motion } from 'framer-motion'

const footerLinks = {
  legal: [
    { label: 'Privacy Policy', path: '/privacy' },
    { label: 'Terms of Service', path: '/terms' },
    { label: 'Delete Account', path: '/delete-account' },
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
            <Link to="/" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-violet-500 flex items-center justify-center">
                <Car className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-xl text-white">Cars0</span>
            </Link>
            <p className="text-zinc-400 text-sm leading-relaxed mb-6">
              Cars0 is a used car marketplace that connects buyers and sellers. List your car, discover deals, and connect faster.
            </p>
            <div className="flex items-center gap-4">
              {footerLinks.social.map((item) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-zinc-400 hover:text-cyan-400 hover:bg-white/10 transition-colors"
                >
                  <item.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Legal Links */}
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

          {/* Support Links */}
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
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white mb-6">Contact</h4>
            <div className="space-y-4">
              <a
                href="mailto:yashborse11111@gmail.com"
                className="flex items-center gap-3 text-zinc-400 hover:text-cyan-400 transition-colors text-sm"
              >
                <Mail className="w-4 h-4" />
                yashborse11111@gmail.com
              </a>
              <div className="p-4 bg-white/5 rounded-xl border border-white/5">
                <p className="text-zinc-400 text-sm mb-3">App by</p>
                <p className="text-white font-medium">ZenZero Developer</p>
              </div>
            </div>
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
