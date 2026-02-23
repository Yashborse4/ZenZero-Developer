import { useState } from 'react'
import { motion } from 'framer-motion'
import { Trash2, AlertTriangle, CheckCircle, Mail, User, MessageSquare, Send, Clock, Database, Shield } from 'lucide-react'

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
}

const steps = [
  {
    icon: Mail,
    title: 'Send Request',
    description: 'Email us from your registered email address requesting account deletion.'
  },
  {
    icon: Clock,
    title: 'Verification',
    description: 'We verify your identity and confirm the deletion request within 48 hours.'
  },
  {
    icon: Database,
    title: 'Data Removal',
    description: 'Your personal data is permanently deleted from our active systems.'
  },
  {
    icon: CheckCircle,
    title: 'Confirmation',
    description: 'You receive confirmation once the deletion process is complete.'
  },
]

const dataCategories = [
  { name: 'Account Information', status: 'deleted', description: 'Name, email, phone number, profile photo' },
  { name: 'Usage Data', status: 'deleted', description: 'App usage statistics and interactions' },
  { name: 'Device Information', status: 'deleted', description: 'Device type, OS version, IP address' },
  { name: 'Location History', status: 'deleted', description: 'GPS and location-based data' },
  { name: 'Uploaded Content', status: 'deleted', description: 'Photos and files uploaded to the app' },
  { name: 'Legal Retention', status: 'retained', description: 'Minimal data required by law (if applicable)' },
]

export default function DeleteAccount() {
  const [formData, setFormData] = useState({
    email: '',
    reason: '',
    confirm: false,
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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 mb-6">
              <Trash2 className="w-4 h-4 text-red-400" />
              <span className="text-sm text-red-400 font-medium">Account</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Delete Account</h1>
            <p className="text-xl text-zinc-400 max-w-2xl">
              We're sorry to see you go. Here's everything you need to know about account deletion.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Warning Banner */}
      <section className="py-8 border-b border-white/5">
        <div className="container max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="p-6 rounded-2xl bg-red-500/10 border border-red-500/20 flex items-start gap-4"
          >
            <AlertTriangle className="w-6 h-6 text-red-400 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-lg font-semibold text-red-400 mb-2">Important Notice</h3>
              <p className="text-zinc-400">
                Account deletion is permanent and cannot be undone. Once deleted, you will lose access to all your data, including your profile, saved cars, and any in-app purchases. This action cannot be reversed.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-24">
        <div className="container max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Deletion Process</h2>
            <p className="text-zinc-400">Here's what happens when you request account deletion:</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card relative"
              >
                <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500 to-violet-500 flex items-center justify-center text-white font-bold text-sm">
                  {index + 1}
                </div>
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-violet-500/20 flex items-center justify-center mb-4 mt-2">
                  <step.icon className="w-6 h-6 text-cyan-400" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                <p className="text-zinc-400 text-sm">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Data Deletion Info */}
      <section className="py-24 bg-white/[0.02]">
        <div className="container max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">What Data Gets Deleted?</h2>
            <p className="text-zinc-400">Here's how we handle your data during account deletion:</p>
          </motion.div>

          <div className="space-y-4">
            {dataCategories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="p-6 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between"
              >
                <div>
                  <h4 className="font-semibold text-white mb-1">{category.name}</h4>
                  <p className="text-zinc-500 text-sm">{category.description}</p>
                </div>
                <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                  category.status === 'deleted' 
                    ? 'bg-green-500/20 text-green-400' 
                    : 'bg-amber-500/20 text-amber-400'
                }`}>
                  {category.status === 'deleted' ? 'Deleted' : 'Retained*'}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-zinc-500 text-sm mt-6 italic"
          >
            * Some data may be retained if required by applicable law or for legitimate business purposes such as fraud prevention and security. This data is anonymized where possible and kept only as long as legally necessary.
          </motion.p>
        </div>
      </section>

      {/* Request Form */}
      <section className="py-24">
        <div className="container max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            {submitted ? (
              <div className="p-10 rounded-3xl bg-gradient-to-br from-green-900/30 to-cyan-900/30 border border-green-500/20 text-center">
                <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-8 h-8 text-green-400" />
                </div>
                <h2 className="text-2xl font-bold mb-4">Request Received</h2>
                <p className="text-zinc-400 mb-6">
                  We've received your account deletion request. Please check your email for confirmation and follow the verification steps.
                </p>
                <p className="text-zinc-500 text-sm">
                  Processing typically takes 5-7 business days.
                </p>
              </div>
            ) : (
              <div className="p-10 rounded-3xl bg-white/5 border border-white/10">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-500/20 to-amber-500/20 flex items-center justify-center">
                    <Trash2 className="w-6 h-6 text-red-400" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold">Request Deletion</h2>
                    <p className="text-zinc-400 text-sm">Fill out the form below</p>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-zinc-400 mb-2">
                      <User className="w-4 h-4 inline mr-2" />
                      Registered Email
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-zinc-500 focus:outline-none focus:border-cyan-500/50 transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-zinc-400 mb-2">
                      <MessageSquare className="w-4 h-4 inline mr-2" />
                      Reason for Leaving (Optional)
                    </label>
                    <textarea
                      value={formData.reason}
                      onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
                      rows={4}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-zinc-500 focus:outline-none focus:border-cyan-500/50 transition-colors resize-none"
                      placeholder="Tell us why you're leaving (optional)..."
                    />
                  </div>

                  <div className="flex items-start gap-3 p-4 rounded-xl bg-red-500/5 border border-red-500/10">
                    <input
                      type="checkbox"
                      id="confirm"
                      required
                      checked={formData.confirm}
                      onChange={(e) => setFormData({ ...formData, confirm: e.target.checked })}
                      className="w-5 h-5 rounded border-white/20 bg-white/5 text-cyan-500 focus:ring-cyan-500/20 mt-0.5"
                    />
                    <label htmlFor="confirm" className="text-sm text-zinc-400">
                      I understand that account deletion is <span className="text-red-400 font-medium">permanent</span> and cannot be undone. I will lose access to all my data and any in-app purchases.
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="w-full btn btn-primary py-4 text-lg"
                  >
                    <Send className="w-5 h-5" />
                    Submit Deletion Request
                  </button>
                </form>

                <div className="mt-8 pt-8 border-t border-white/10 flex items-center gap-3 text-zinc-500 text-sm">
                  <Shield className="w-4 h-4" />
                  <span>Your data is handled securely and in accordance with our Privacy Policy</span>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </section>
    </div>
  )
}
