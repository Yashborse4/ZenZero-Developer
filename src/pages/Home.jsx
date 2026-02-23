import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Car, Shield, Zap, MapPin, Bell, Lock, ChevronRight, Download } from 'lucide-react'

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
}

const features = [
  {
    icon: MapPin,
    title: 'Nearby Deals',
    description: 'Find used cars near you and connect with buyers and sellers in your area.',
  },
  {
    icon: Shield,
    title: 'Trusted Profiles',
    description: 'Create your profile and list cars with clear details to build trust and transparency.',
  },
  {
    icon: Bell,
    title: 'Instant Alerts',
    description: 'Get notified when someone is interested in your car or when a listing matches your search.',
  },
  {
    icon: Lock,
    title: 'Privacy First',
    description: 'Your privacy matters. We do not sell or rent your personal information.',
  },
  {
    icon: Zap,
    title: 'Fast Listings',
    description: 'Post a car in minutes with photos, pricing, and key information.',
  },
  {
    icon: Car,
    title: 'Buyer–Seller Connect',
    description: 'A simple platform designed to connect buyers and sellers for used cars.',
  },
]

const stats = [
  { value: '50K+', label: 'Active Users' },
  { value: '4.8', label: 'App Rating' },
  { value: '99.9%', label: 'Uptime' },
  { value: '24/7', label: 'Support' },
]

export default function Home() {
  return (
    <div className="bg-[#0a0a0f]">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(6,182,212,0.15),transparent)]" />
        <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-violet-500/20 rounded-full blur-[120px]" />

        <div className="container relative z-10">
          <div className="max-w-3xl">
            <motion.div
              initial="initial"
              animate="animate"
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              variants={fadeIn}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                <span className="text-sm text-zinc-300">Now available on Android & iOS</span>
              </div>
            </motion.div>

            <motion.h1
              initial="initial"
              animate="animate"
              transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              variants={fadeIn}
              className="text-5xl md:text-7xl font-extrabold leading-tight mb-6"
            >
              Buy & Sell
              <span className="gradient-text"> Used Cars</span>
              <br />
              with Cars0
            </motion.h1>

            <motion.p
              initial="initial"
              animate="animate"
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              variants={fadeIn}
              className="text-xl text-zinc-400 mb-10 max-w-xl"
            >
              Cars0 is an old car selling platform that connects buyers and sellers. List your car, discover great deals, and close faster with a clean, secure experience.
            </motion.p>

            <motion.div
              initial="initial"
              animate="animate"
              transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              variants={fadeIn}
              className="flex flex-wrap gap-4"
            >
              <a href="#download" className="btn btn-primary text-lg py-4 px-8">
                <Download className="w-5 h-5" />
                Download Now
              </a>
              <Link to="/privacy" className="btn btn-secondary text-lg py-4 px-8">
                Privacy Policy
                <ChevronRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Floating Elements */}
        <motion.div
          animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute right-[10%] top-1/3 w-64 h-64 bg-gradient-to-br from-cyan-500/30 to-violet-500/30 rounded-3xl backdrop-blur-xl border border-white/10 hidden lg:block"
        />
        <motion.div
          animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute right-[5%] bottom-1/4 w-48 h-48 bg-gradient-to-br from-violet-500/30 to-cyan-500/30 rounded-3xl backdrop-blur-xl border border-white/10 hidden lg:block"
        />
      </section>

      {/* Stats Section */}
      <section className="py-20 border-y border-white/5">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">{stat.value}</div>
                <div className="text-zinc-500">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-32">
        <div className="container">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Everything you <span className="gradient-text">need</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-xl text-zinc-400 max-w-2xl mx-auto"
            >
              Powerful features designed to make your car management effortless and enjoyable.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="card group"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-violet-500/20 flex items-center justify-center mb-6 group-hover:shadow-[0_0_20px_rgba(6,182,212,0.3)] transition-shadow">
                  <feature.icon className="w-7 h-7 text-cyan-400" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
                <p className="text-zinc-400 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="download" className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-900/20 to-violet-900/20" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_50%_50%,rgba(6,182,212,0.1),transparent)]" />

        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center p-12 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to get <span className="gradient-text">started</span>?
            </h2>
            <p className="text-xl text-zinc-400 mb-10">
              Download Cars0 today and experience the future of car management.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="#" className="btn btn-primary text-lg py-4 px-8">
                <Download className="w-5 h-5" />
                Download for Android
              </a>
              <a href="#" className="btn btn-secondary text-lg py-4 px-8">
                <Download className="w-5 h-5" />
                Download for iOS
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
