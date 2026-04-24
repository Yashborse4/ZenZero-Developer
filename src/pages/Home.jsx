import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Car, Shield, Zap, MapPin, Bell, Lock, ChevronRight, Download, GraduationCap, Briefcase } from 'lucide-react'

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
}

const features = [
  {
    icon: Zap,
    title: 'Innovative Solutions',
    description: 'Cutting-edge technology tailored to solve complex business and social challenges.',
  },
  {
    icon: Shield,
    title: 'Secure by Design',
    description: 'Industry-standard encryption and secure infrastructure to protect your digital assets.',
  },
  {
    icon: Bell,
    title: 'Real-time Intelligence',
    description: 'Stay ahead with instant notifications and data-driven insights across all platforms.',
  },
  {
    icon: Lock,
    title: 'Privacy Excellence',
    description: 'We prioritize user privacy and data sovereignty in every product we build.',
  },
  {
    icon: Briefcase,
    title: 'Enterprise Scalability',
    description: 'Our solutions grow with you, from small startups to large-scale enterprises.',
  },
  {
    icon: GraduationCap,
    title: 'Social Impact',
    description: 'Developing applications that empower communities and drive meaningful change.',
  },
]

const stats = [
  { value: '50K+', label: 'Active Users' },
  { value: '4.8', label: 'App Rating' },
  { value: '99.9%', label: 'Uptime' },
  { value: '24/7', label: 'Support' },
]

const projects = [
  {
    title: 'ZenoxERP',
    subtitle: 'School Management',
    description: 'Complete academic and administrative automation for schools.',
    icon: GraduationCap,
    path: '/school-management',
    color: 'cyan',
    image: '/ZenZero-Developer/assets/digital_school.png',
  },
  {
    title: 'WheelDeal',
    subtitle: 'Automotive Solutions',
    description: 'The premier marketplace for vehicle buying, selling, and tracking.',
    icon: Car,
    path: '/wheel-deal',
    color: 'violet',
    image: '/ZenZero-Developer/assets/digital_wheel.png',
  },
  {
    title: 'DailyWorker',
    subtitle: 'Social Impact App',
    description: 'Empowering India\'s workforce with digital job connections.',
    icon: Briefcase,
    path: '/daily-worker',
    color: 'orange',
    image: '/ZenZero-Developer/assets/worker.png',
  },
]

export default function Home() {
  return (
    <div className="bg-[#0a0a0f]">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        {/* Animated Background Mesh */}
        <div className="absolute inset-0">
          <div className="absolute top-0 -left-[10%] w-[50%] h-[50%] bg-cyan-500/10 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-0 -right-[10%] w-[50%] h-[50%] bg-violet-500/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial="initial"
              animate="animate"
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              variants={fadeIn}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                <span className="text-sm font-medium text-zinc-300">Innovating the Digital Frontier</span>
              </div>
            </motion.div>

            <motion.h1
              initial="initial"
              animate="animate"
              transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              variants={fadeIn}
              className="mb-8"
            >
              Building the <span className="gradient-text">Future</span>
              <br />
              with ZenZero
            </motion.h1>

            <motion.p
              initial="initial"
              animate="animate"
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              variants={fadeIn}
              className="text-xl md:text-2xl text-zinc-400 mb-12 max-w-2xl mx-auto leading-relaxed"
            >
              ZenZero is a premier technology studio dedicated to crafting high-impact digital solutions. From enterprise ERPs to automotive marketplaces, we drive the next wave of innovation.
            </motion.p>

            <motion.div
              initial="initial"
              animate="animate"
              transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              variants={fadeIn}
              className="flex flex-wrap justify-center gap-6"
            >
              <a href="#projects" className="btn btn-primary text-lg py-4 px-10">
                Explore Projects
              </a>
              <Link to="/about" className="btn btn-secondary text-lg py-4 px-10">
                About the Studio
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 relative z-20 -mt-10">
        <div className="container">
          <div className="panel p-8 bg-black/40 backdrop-blur-3xl border-white/10">
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
                  <div className="text-zinc-500 text-sm uppercase tracking-widest">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Showcase */}
      <section id="projects" className="py-32 relative">
        <div className="container">
          <div className="text-center mb-24">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              Our <span className="gradient-text">Portfolio</span>
            </motion.h2>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto">Discover our ecosystem of professional digital solutions.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Link 
                  to={project.path}
                  className="block group h-full"
                >
                  <div className={`panel p-0 h-full border-white/5 hover:border-${project.color}-500/30 transition-all duration-500 flex flex-col overflow-hidden`}>
                    <div className="aspect-[16/10] overflow-hidden relative group/img">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover/img:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent opacity-60" />
                      <div className={`absolute top-6 right-6 w-12 h-12 rounded-xl bg-${project.color}-500/20 backdrop-blur-md flex items-center justify-center border border-${project.color}-500/20`}>
                        <project.icon className={`w-6 h-6 text-${project.color}-400`} />
                      </div>
                    </div>
                    
                    <div className="p-8 flex flex-col flex-grow">
                      <div className="text-sm font-semibold text-zinc-500 mb-2 uppercase tracking-[0.2em]">{project.subtitle}</div>
                      <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
                      <p className="text-zinc-400 mb-8 text-sm leading-relaxed flex-grow">{project.description}</p>
                      <div className={`flex items-center gap-3 text-white font-semibold group-hover:text-${project.color}-400 transition-colors`}>
                        View Project <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
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
              We combine design thinking with robust engineering to deliver products that redefine industries.
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
                className="card group h-full"
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
            className="max-w-4xl mx-auto panel p-12 text-center bg-white/[0.03] border border-white/10 relative overflow-hidden group"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 relative z-10 text-white">
              Ready to get <span className="gradient-text">started</span>?
            </h2>
            <p className="text-xl text-zinc-400 mb-10 relative z-10 max-w-2xl mx-auto leading-relaxed">
              Partner with ZenZero today and elevate your digital presence to the next level. Let's build something extraordinary.
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
