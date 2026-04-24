import { motion } from 'framer-motion'
import { GraduationCap, Users, BookOpen, Calendar, CreditCard, Shield, CheckCircle, Download, Layout, Smartphone } from 'lucide-react'
import { Link } from 'react-router-dom'

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
}

const features = [
  {
    icon: Users,
    title: 'Student & Staff Management',
    description: 'Comprehensive profiles for students, teachers, and administrative staff with secure data handling.',
  },
  {
    icon: CreditCard,
    title: 'Fee Management',
    description: 'Automated fee collection, receipt generation, and pending payment tracking.',
  },
  {
    icon: BookOpen,
    title: 'Academic Planning',
    description: 'Manage curriculum, lesson plans, and examination schedules with ease.',
  },
  {
    icon: Calendar,
    title: 'Attendance Tracking',
    description: 'Real-time attendance for students and staff with automated notifications to parents.',
  },
]

export default function SchoolManagement() {
  return (
    <div className="page">
      {/* Hero Section */}
      <section className="page-header pt-32 overflow-hidden relative min-h-[70vh] flex items-center">
        <div className="absolute top-1/4 -right-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] animate-pulse" />
        <div className="container relative z-10">
          <motion.div
            initial="initial"
            animate="animate"
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            variants={fadeIn}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-8 backdrop-blur-md">
              <GraduationCap className="w-4 h-4 text-cyan-400" />
              <span className="text-sm font-semibold text-cyan-300 uppercase tracking-wider">Education Technology</span>
            </div>
            <h1 className="mb-6">
              Zenox<span className="gradient-text">ERP</span>
            </h1>
            <p className="text-xl md:text-2xl text-zinc-400 mb-10 leading-relaxed max-w-2xl">
              A comprehensive School Management System designed to streamline academic operations, 
              enhance communication, and digitize your entire educational ecosystem.
            </p>
            <div className="flex flex-wrap gap-6">
              <a href="#contact" className="btn btn-primary py-4 px-10">Request a Demo</a>
              <Link to="/privacy/school-management" className="btn btn-secondary py-4 px-10">Project Legal</Link>
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
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-6 h-6 text-cyan-400" />
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
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-8">Integrated Modules for <span className="gradient-text">Complete Control</span></h2>
              <div className="space-y-6">
                {[
                  { title: 'Parent-Teacher Communication', desc: 'Direct messaging and broadcast alerts for school updates.' },
                  { title: 'Exam & Result Portal', desc: 'Digital gradebooks and instant result publishing for students.' },
                  { title: 'Library Management', desc: 'Track book inventory, issues, and returns seamlessly.' },
                  { title: 'Transport Tracking', desc: 'Real-time GPS tracking for school buses for student safety.' },
                ].map((item, idx) => (
                  <div key={idx} className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-cyan-500/30 transition-all group flex gap-5">
                    <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <CheckCircle className="w-6 h-6 text-cyan-400" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
                      <p className="text-zinc-400 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute inset-0 bg-cyan-500/20 blur-[100px] rounded-full" />
              <div className="panel p-2 rounded-[2rem] overflow-hidden border-white/10 bg-white/5">
                <img 
                  src="/ZenZero-Developer/assets/digital_school.png" 
                  alt="ZenoxERP Digital School" 
                  className="rounded-[1.8rem] w-full object-cover aspect-video"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* App Links Section */}
      <section className="sectionBlock">
        <div className="container contentNarrow">
          <div className="panel p-12 text-center bg-white/[0.03] border-white/10">
            <h2 className="text-3xl font-bold mb-6">Mobile Access for Everyone</h2>
            <p className="text-zinc-400 mb-10 max-w-lg mx-auto">Available for Teachers, Parents, and Students on all major platforms. Bringing the classroom to your pocket.</p>
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
              <Link to="/privacy/school-management" className="text-sm font-medium text-zinc-500 hover:text-cyan-400 transition-colors">Privacy Policy</Link>
              <Link to="/terms/school-management" className="text-sm font-medium text-zinc-500 hover:text-cyan-400 transition-colors">Terms of Service</Link>
              <Link to="/delete-account/school-management" className="text-sm font-medium text-zinc-500 hover:text-cyan-400 transition-colors">Delete Account</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
