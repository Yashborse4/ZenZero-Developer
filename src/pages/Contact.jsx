import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, MapPin, Clock, Send, MessageSquare, User, CheckCircle, HelpCircle, FileQuestion, Shield, ChevronRight } from 'lucide-react'

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
}

const contactMethods = [
  {
    icon: Mail,
    title: 'Business Inquiries',
    description: 'For partnerships and projects',
    value: 'yashborse432005@gmail.com',
    action: 'Send Email',
    href: 'mailto:yashborse432005@gmail.com'
  },
  {
    icon: Clock,
    title: 'Office Hours',
    description: 'Mon - Fri, 9AM - 6PM',
    value: 'Standard Response: 24h',
    action: null,
    href: null
  },
  {
    icon: MapPin,
    title: 'ZenZero Studio',
    description: 'Headquarters',
    value: 'India',
    action: null,
    href: null
  },
]

const faqs = [
  {
    question: 'How do I reset my password?',
    answer: 'You can reset your password from the login screen by clicking "Forgot Password" and following the instructions sent to your email.'
  },
  {
    question: 'How can I update my profile information?',
    answer: 'Go to Profile > Edit Profile to update your name, phone number, and profile photo.'
  },
  {
    question: 'Is my data secure?',
    answer: 'Yes, we use industry-standard encryption and secure VPS infrastructure to protect your data. See our Privacy Policy for more details.'
  },
  {
    question: 'How do I delete my account?',
    answer: 'You can request account deletion through the Delete Account page. The process typically takes 5-7 business days.'
  },
]

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="bg-[#0a0a0f] min-h-screen">
      {/* Header */}
      <section className="page-header pt-40 pb-20 overflow-hidden relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(139,92,246,0.1),transparent_50%)]" />
        <div className="container relative z-10 text-center">
          <motion.div
            initial="initial"
            animate="animate"
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            variants={fadeIn}
            className="max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 mb-8 backdrop-blur-md">
              <HelpCircle className="w-4 h-4 text-violet-400" />
              <span className="text-sm text-violet-300 font-semibold uppercase tracking-wider">Connect With Us</span>
            </div>
            <h1 className="mb-8">Get in <span className="gradient-text">Touch</span></h1>
            <p className="text-xl md:text-2xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
              Have questions about our projects or want to collaborate? We're here to help you drive innovation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-24">
        <div className="container max-w-4xl">
          <div className="grid md:grid-cols-3 gap-6">
            {contactMethods.map((method, index) => (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card text-center h-full"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-violet-500/10 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500">
                  <method.icon className="w-7 h-7 text-cyan-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{method.title}</h3>
                <p className="text-zinc-500 text-sm mb-4 leading-relaxed">{method.description}</p>
                <p className="text-white font-semibold mb-4 tracking-tight break-all">{method.value}</p>
                {method.action && (
                  <a
                    href={method.href}
                    className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 text-sm font-bold transition-all group/link"
                  >
                    {method.action} 
                    <ChevronRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & FAQs */}
      <section className="py-24 bg-white/[0.02]">
        <div className="container max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              {submitted ? (
                <div className="p-10 rounded-3xl bg-gradient-to-br from-green-900/30 to-cyan-900/30 border border-green-500/20 text-center h-full flex flex-col justify-center">
                  <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-8 h-8 text-green-400" />
                  </div>
                  <h2 className="text-2xl font-bold mb-4">Message Sent!</h2>
                  <p className="text-zinc-400">
                    Thank you for reaching out. We'll get back to you within 24-48 hours.
                  </p>
                </div>
              ) : (
                <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-violet-500/20 flex items-center justify-center">
                      <MessageSquare className="w-6 h-6 text-cyan-400" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold">Send Message</h2>
                      <p className="text-zinc-400 text-sm">We typically reply within 24 hours</p>
                    </div>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-zinc-400 mb-2">
                          <User className="w-4 h-4 inline mr-2" />
                          Name
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-zinc-500 focus:outline-none focus:border-cyan-500/50 transition-colors"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-zinc-400 mb-2">
                          <Mail className="w-4 h-4 inline mr-2" />
                          Email
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-zinc-500 focus:outline-none focus:border-cyan-500/50 transition-colors"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-zinc-400 mb-2">
                        <FileQuestion className="w-4 h-4 inline mr-2" />
                        Subject
                      </label>
                      <select
                        required
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-cyan-500/50 transition-colors"
                      >
                        <option value="" className="bg-[#1a1a25]">Select a subject</option>
                        <option value="general" className="bg-[#1a1a25]">General Inquiry</option>
                        <option value="technical" className="bg-[#1a1a25]">Technical Support</option>
                        <option value="account" className="bg-[#1a1a25]">Account Issues</option>
                        <option value="privacy" className="bg-[#1a1a25]">Privacy Concerns</option>
                        <option value="feedback" className="bg-[#1a1a25]">Feedback</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-zinc-400 mb-2">
                        <MessageSquare className="w-4 h-4 inline mr-2" />
                        Message
                      </label>
                      <textarea
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        rows={5}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-zinc-500 focus:outline-none focus:border-cyan-500/50 transition-colors resize-none"
                        placeholder="Describe your issue or question..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full btn btn-primary py-4 text-lg"
                    >
                      <Send className="w-5 h-5" />
                      Send Message
                    </button>
                  </form>
                </div>
              )}
            </motion.div>

            {/* FAQs */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-2">Frequently Asked Questions</h2>
                <p className="text-zinc-400">Quick answers to common questions</p>
              </div>

              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="p-5 rounded-xl bg-white/5 border border-white/10"
                  >
                    <h4 className="font-semibold text-white mb-2 flex items-start gap-2">
                      <HelpCircle className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                      {faq.question}
                    </h4>
                    <p className="text-zinc-400 text-sm pl-7">{faq.answer}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Support Info */}
      <section className="py-24">
        <div className="container max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="panel p-12 text-center bg-white/[0.03] border border-white/10 relative overflow-hidden group"
          >
            <div className="w-20 h-20 rounded-3xl bg-cyan-400/20 flex items-center justify-center mx-auto mb-8 relative z-10">
              <Shield className="w-10 h-10 text-cyan-400" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 relative z-10 text-white">Your Privacy <span className="gradient-text">Matters</span></h2>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed relative z-10">
              At ZenZero, we handle all communications with extreme care and security. Your data is protected by industry-leading encryption and never shared with third parties.
            </p>
            <div className="flex flex-wrap justify-center gap-8 text-sm font-bold text-zinc-500 relative z-10">
              <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-cyan-500" /> AES-256 Encryption</span>
              <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-violet-500" /> Secure Storage</span>
              <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-cyan-500" /> No Data Sharing</span>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
