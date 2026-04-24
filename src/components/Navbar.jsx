import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Zap } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/school-management', label: 'School ERP' },
  { path: '/wheel-deal', label: 'Wheel Deal' },
  { path: '/daily-worker', label: 'Daily Worker' },
  { path: '/about', label: 'About' },
  { path: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const isHomePage = location.pathname === '/'

  const filteredLinks = isHomePage
    ? navLinks.filter((link) => !['Privacy', 'Terms', 'Delete Account'].includes(link.label))
    : navLinks

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-[#0a0a0f] border-b border-white/5 shadow-lg shadow-black/50`}
    >
      <div className="container">
        <nav className="flex items-center justify-between h-24">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-4 group">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-cyan-500 to-violet-500 flex items-center justify-center group-hover:shadow-[0_0_30px_rgba(6,182,212,0.6)] transition-all duration-500 group-hover:rotate-12">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <span className="font-bold text-2xl tracking-tight text-white group-hover:text-cyan-400 transition-colors">ZenZero</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {filteredLinks.map((link, index) => (
              <motion.div
                key={link.path}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              >
                <Link
                  to={link.path}
                  className={`nav-link text-sm font-medium ${
                    location.pathname === link.path ? 'text-cyan-400' : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a
              href="#download"
              className="btn btn-primary text-sm py-2.5 px-6"
            >
              Get App
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center text-white"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#0a0a0f]/95 backdrop-blur-xl border-b border-white/5"
          >
            <div className="container py-6 flex flex-col gap-4">
              {filteredLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`text-lg font-medium py-2 ${
                    location.pathname === link.path ? 'text-cyan-400' : 'text-zinc-400'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <a href="#download" className="btn btn-primary mt-4 text-center">
                Get App
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
