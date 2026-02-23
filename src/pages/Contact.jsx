import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, MapPin, Clock, Send, MessageSquare, User, CheckCircle, HelpCircle, FileQuestion, Shield } from 'lucide-react'

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
}

const contactMethods = [
  {
    icon: Mail,
    title: 'Email Support',
    description: 'Get help via email',
    value: 'yashborse11111@gmail.com',
    action: 'Send Email',
    href: 'mailto:yashborse11111@gmail.com'
  },
  {
    icon: Clock,
    title: 'Response Time',
    description: 'How fast we reply',
    value: '24-48 hours',
    action: null,
    href: null
  },
  {
    icon: MapPin,
    title: 'Developer',
    description: 'App developed by',
    value: 'ZenZero Developer',
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
      <section className="page-header pt-32">
        <div className="container relative z-10">
          <motion.div
            initial="initial"
            animate="animate"
            transition={{ duration: 0.6 }}
            variants={fadeIn}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-6">
              <HelpCircle className="w-4 h-4 text-cyan-400" />
              <span className="text-sm text-cyan-400 font-medium">Support</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-zinc-400 max-w-2xl">
              Have questions? We're here to help. Reach out to our support team.
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
                className="card text-center"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-violet-500/20 flex items-center justify-center mx-auto mb-4">
                  <method.icon className="w-7 h-7 text-cyan-400" />
                </div>
                <h3 className="text-lg font-bold text-white mb-1">{method.title}</h3>
                <p className="text-zinc-500 text-sm mb-3">{method.description}</p>
                <p className="text-white font-medium mb-3">{method.value}</p>
                {method.action && (
                  <a
                    href={method.href}
                    className="text-cyan-400 hover:text-cyan-300 text-sm font-medium transition-colors"
                  >
                    {method.action} →
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
            className="p-10 rounded-3xl bg-gradient-to-br from-cyan-900/30 to-violet-900/30 border border-cyan-500/20 text-center"
          >
            <div className="w-16 h-16 rounded-full bg-cyan-500/20 flex items-center justify-center mx-auto mb-6">
              <Shield className="w-8 h-8 text-cyan-400" />
            </div>
            <h2 className="text-2xl font-bold mb-4">Your Privacy Matters</h2>
            <p className="text-zinc-400 max-w-xl mx-auto mb-6">
              All communications are handled securely and in accordance with our Privacy Policy. We never share your contact information with third parties.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-zinc-500">
              <span>Encrypted Connection</span>
              <span>•</span>
              <span>Secure Storage</span>
              <span>•</span>
              <span>No Data Sharing</span>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
