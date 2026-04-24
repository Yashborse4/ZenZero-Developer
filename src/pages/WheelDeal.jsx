import { motion } from 'framer-motion'
import { Car, Settings, MapPin, Gauge, Shield, Zap, Search, MessageSquare, Download, CheckCircle, Smartphone } from 'lucide-react'
import { Link } from 'react-router-dom'

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
}

const features = [
  {
    icon: Search,
    title: 'Advanced Search',
    description: 'Find your perfect car with deep filters including make, model, year, and service history.',
  },
  {
    icon: Settings,
    title: 'Garage Management',
    description: 'Keep track of your vehicles, service logs, and maintenance schedules in one place.',
  },
  {
    icon: MessageSquare,
    title: 'Direct Connect',
    description: 'Integrated chat for buyers and sellers to negotiate and finalize deals securely.',
  },
  {
    icon: Gauge,
    title: 'Performance Tracking',
    description: 'Monitor vehicle health and performance data for your fleet or personal cars.',
  },
]

export default function WheelDeal() {
  return (
    <div className="page">
      {/* Hero Section */}
      <section className="page-header pt-32 overflow-hidden relative min-h-[70vh] flex items-center">
        <div className="absolute top-1/4 -left-1/4 w-[500px] h-[500px] bg-violet-500/10 rounded-full blur-[120px] animate-pulse" />
        <div className="container relative z-10">
          <motion.div
            initial="initial"
            animate="animate"
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            variants={fadeIn}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 mb-8 backdrop-blur-md">
              <Car className="w-4 h-4 text-violet-400" />
              <span className="text-sm font-semibold text-violet-300 uppercase tracking-wider">Automotive Solutions</span>
            </div>
            <h1 className="mb-6">
              Wheel<span className="gradient-text">Deal</span>
            </h1>
            <p className="text-xl md:text-2xl text-zinc-400 mb-10 leading-relaxed max-w-2xl">
              The ultimate automotive marketplace and vehicle management ecosystem. 
              Buy, sell, and manage your cars with unmatched precision and security.
            </p>
            <div className="flex flex-wrap gap-6">
              <a href="#download" className="btn btn-primary py-4 px-10">Get the App</a>
              <Link to="/privacy/wheel-deal" className="btn btn-secondary py-4 px-10">Terms & Privacy</Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="sectionBlock">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card p-8 h-full"
              >
                <div className="w-12 h-12 rounded-xl bg-violet-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-6 h-6 text-violet-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Info */}
      <section className="sectionBlockAlt">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative order-2 lg:order-1"
            >
              <div className="absolute inset-0 bg-violet-500/20 blur-[100px] rounded-full" />
              <div className="panel p-2 rounded-[2rem] overflow-hidden border-white/10 bg-white/5">
                <img 
                  src="/ZenZero-Developer/assets/digital_wheel.png" 
                  alt="Wheel Deal Digital Showroom" 
                  className="rounded-[1.8rem] w-full object-cover aspect-video"
                />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <h2 className="text-4xl font-bold mb-8">Revolutionizing the <span className="gradient-text">Car Ownership</span> Experience</h2>
              <div className="space-y-6">
                {[
                  { title: 'Verified Listings', desc: 'Every car listed goes through a basic verification process to ensure authenticity.' },
                  { title: 'Service History Logs', desc: 'Keep a digital twin of your car with all service and repair records.' },
                  { title: 'Market Analytics', desc: 'Get real-time pricing trends to buy or sell at the right time.' },
                  { title: 'Secure Documents', desc: 'Store your RC, Insurance, and other documents safely in the app.' },
                ].map((item, idx) => (
                  <div key={idx} className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-violet-500/30 transition-all group flex gap-5">
                    <div className="w-12 h-12 rounded-xl bg-violet-500/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <CheckCircle className="w-6 h-6 text-violet-400" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
                      <p className="text-zinc-400 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* App Links Section */}
      <section className="sectionBlock">
        <div className="container contentNarrow">
          <div className="panel p-12 text-center bg-white/[0.03] border-white/10">
            <h2 className="text-3xl font-bold mb-6">Ready to Hit the Road?</h2>
            <p className="text-zinc-400 mb-10 max-w-lg mx-auto">Wheel Deal is available for download on all major mobile platforms. Your automotive journey starts here.</p>
            <div className="flex flex-wrap justify-center gap-6">
              <a href="#" className="btn btn-primary py-4 px-8 group">
                <Smartphone className="w-5 h-5 group-hover:scale-110 transition-transform" />
                Play Store
              </a>
              <a href="#" className="btn btn-secondary py-4 px-8 group">
                <Smartphone className="w-5 h-5 group-hover:scale-110 transition-transform" />
                App Store
              </a>
            </div>
            <div className="mt-12 pt-8 border-t border-white/10 flex flex-wrap justify-center gap-10">
              <Link to="/privacy/wheel-deal" className="text-sm font-medium text-zinc-500 hover:text-cyan-400 transition-colors">Privacy Policy</Link>
              <Link to="/terms/wheel-deal" className="text-sm font-medium text-zinc-500 hover:text-cyan-400 transition-colors">Terms of Service</Link>
              <Link to="/delete-account/wheel-deal" className="text-sm font-medium text-zinc-500 hover:text-cyan-400 transition-colors">Delete Account</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
