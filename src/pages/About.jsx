import { motion } from 'framer-motion'
import { Rocket, Target, Users, Award, Shield, Zap, Globe, Sparkles } from 'lucide-react'

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
}

const stats = [
  { value: '12+', label: 'Digital Projects' },
  { value: '500k+', label: 'Active Users' },
  { value: '100%', label: 'Commitment' },
  { value: '24/7', label: 'Innovation' },
]

const values = [
  {
    icon: Target,
    title: 'Our Mission',
    description: 'To empower organizations and individuals through innovative digital solutions that drive progress and social impact.',
  },
  {
    icon: Rocket,
    title: 'Our Vision',
    description: 'To become a global leader in high-impact technology, setting new standards for excellence and digital craftsmanship.',
  },
  {
    icon: Shield,
    title: 'Security First',
    description: 'We build with a focus on data integrity and user privacy, ensuring every solution is as secure as it is powerful.',
  },
  {
    icon: Users,
    title: 'User Centric',
    description: 'Every line of code we write is dedicated to improving the user experience and solving real-world problems.',
  },
]

export default function About() {
  return (
    <div className="bg-[#0a0a0f] min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-40 pb-24 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(6,182,212,0.15),transparent_50%)]" />
        
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial="initial"
              animate="animate"
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              variants={fadeIn}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-8 backdrop-blur-md">
                <Sparkles className="w-4 h-4 text-cyan-400" />
                <span className="text-sm text-cyan-300 font-semibold tracking-wider uppercase">The ZenZero Story</span>
              </div>
              <h1 className="mb-8">
                Crafting the <span className="gradient-text">Digital Pulse</span> of Tomorrow
              </h1>
              <p className="text-xl md:text-2xl text-zinc-400 leading-relaxed mb-12">
                ZenZero is a technology-driven studio focused on building high-impact digital ecosystems. We combine artistic design with precision engineering to deliver products that resonate with users and drive business success.
              </p>
            </motion.div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="p-6 rounded-2xl bg-white/5 border border-white/10"
                >
                  <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-zinc-500 font-medium uppercase tracking-wider">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-white/[0.01]">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Core <span className="gradient-text">Values</span></h2>
            <p className="text-zinc-400">The principles that guide our every decision and innovation.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="panel p-8 border-white/5 hover:border-cyan-500/30 transition-colors group h-full"
              >
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <value.icon className="w-6 h-6 text-cyan-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{value.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed flex-grow">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 overflow-hidden">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-8">A Journey of <span className="gradient-text">Innovation</span></h2>
              <div className="space-y-6 text-zinc-400 leading-relaxed">
                <p>
                  Founded in 2023, ZenZero began with a simple idea: that technology should be an enabler of human potential, not a barrier. We saw the need for digital tools that were not only powerful but also intuitive and secure.
                </p>
                <p>
                  What started as a small team of passionate developers has grown into a versatile studio capable of delivering complex ERP systems, revolutionary automotive platforms, and social impact apps that reach thousands of users.
                </p>
                <p>
                  Today, we continue to push the boundaries of what's possible, constantly learning and evolving to meet the challenges of an ever-changing digital landscape.
                </p>
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
              <div className="relative rounded-3xl overflow-hidden border border-white/10 aspect-video bg-white/5 flex items-center justify-center">
                <div className="text-center">
                  <Globe className="w-16 h-16 text-cyan-400 mx-auto mb-4 animate-pulse" />
                  <div className="text-xl font-bold text-white">Global Reach</div>
                  <div className="text-zinc-500">Connecting people through technology</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container">
          <div className="max-w-4xl mx-auto panel p-12 text-center bg-white/[0.03] border border-white/10 relative overflow-hidden group">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 relative z-10 text-white">Ready to Build the <span className="gradient-text">Future</span>?</h2>
            <p className="text-xl text-zinc-400 mb-10 relative z-10 max-w-2xl mx-auto leading-relaxed">
              Join us on our mission to create digital excellence. Whether you're a potential partner or a curious user, we'd love to connect and innovate together.
            </p>
            <div className="flex flex-wrap justify-center gap-6 relative z-10">
              <a href="/contact" className="btn btn-primary px-10 py-4 text-lg">
                Get in Touch
              </a>
              <a href="/" className="btn btn-secondary px-10 py-4 text-lg">
                Our Projects
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
