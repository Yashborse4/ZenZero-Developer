import { motion } from 'framer-motion'
import { FileText, Scale, AlertCircle, CheckCircle, XCircle, RefreshCw, Ban } from 'lucide-react'

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
}

const sections = [
  {
    id: 'acceptance',
    icon: CheckCircle,
    title: '1. Acceptance of Terms',
    content: 'By downloading, installing, or using the Cars0 mobile application ("App"), you agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use the App.'
  },
  {
    id: 'eligibility',
    icon: Scale,
    title: '2. Eligibility',
    content: 'You must be at least 13 years of age to use the App. By using the App, you represent and warrant that you meet this age requirement and have the legal capacity to enter into these Terms.'
  },
  {
    id: 'license',
    icon: FileText,
    title: '3. License to Use',
    content: 'ZenZero Developer grants you a limited, non-exclusive, non-transferable, revocable license to use the App for personal, non-commercial purposes. You may not: Copy, modify, or create derivative works of the App; Reverse engineer, decompile, or disassemble the App; Rent, lease, lend, sell, or sublicense the App; Remove any proprietary notices or labels on the App.'
  },
  {
    id: 'account',
    icon: AlertCircle,
    title: '4. User Accounts',
    content: 'To access certain features, you must create an account. You are responsible for: Maintaining the confidentiality of your account credentials; All activities that occur under your account; Notifying us immediately of any unauthorized use of your account. We reserve the right to terminate accounts that violate these Terms.'
  },
  {
    id: 'conduct',
    icon: Ban,
    title: '5. User Conduct',
    content: 'You agree not to use the App to: Violate any applicable laws or regulations; Infringe upon the rights of others; Upload or transmit viruses, malware, or other harmful code; Interfere with or disrupt the App or its servers; Collect or store personal data about other users without their consent; Engage in any activity that could damage, disable, or impair the App.'
  },
  {
    id: 'content',
    icon: FileText,
    title: '6. Content and Intellectual Property',
    content: 'The App and its original content, features, and functionality are owned by ZenZero Developer and are protected by international copyright, trademark, and other intellectual property laws. User-generated content remains the property of the user, but you grant us a license to use, display, and distribute such content within the App.'
  },
  {
    id: 'privacy',
    icon: CheckCircle,
    title: '7. Privacy',
    content: 'Your use of the App is also governed by our Privacy Policy, which can be found on our website. By using the App, you consent to the collection and use of your information as outlined in the Privacy Policy.'
  },
  {
    id: 'termination',
    icon: XCircle,
    title: '8. Termination',
    content: 'We may terminate or suspend your access to the App immediately, without prior notice or liability, for any reason, including breach of these Terms. Upon termination, your right to use the App will immediately cease. Provisions that by their nature should survive termination shall survive.'
  },
  {
    id: 'disclaimer',
    icon: AlertCircle,
    title: '9. Disclaimer of Warranties',
    content: 'The App is provided "as is" and "as available" without warranties of any kind, either express or implied. We do not warrant that: The App will be uninterrupted, timely, secure, or error-free; The results from using the App will be accurate or reliable; Any errors in the App will be corrected.'
  },
  {
    id: 'limitation',
    icon: Scale,
    title: '10. Limitation of Liability',
    content: 'To the maximum extent permitted by law, ZenZero Developer shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or relating to your use of the App. Our total liability shall not exceed the amount you paid us (if any) in the past 12 months.'
  },
  {
    id: 'changes',
    icon: RefreshCw,
    title: '11. Changes to Terms',
    content: 'We reserve the right to modify these Terms at any time. We will notify you of any material changes by posting the new Terms on our website or through the App. Your continued use of the App after such changes constitutes acceptance of the updated Terms.'
  },
]

export default function Terms() {
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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 mb-6">
              <Scale className="w-4 h-4 text-violet-400" />
              <span className="text-sm text-violet-400 font-medium">Legal</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Terms of Service</h1>
            <p className="text-xl text-zinc-400 max-w-2xl">
              Last Updated: February 2026
            </p>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 border-b border-white/5">
        <div className="container max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl bg-white/5 border border-white/10"
          >
            <p className="text-zinc-300 leading-relaxed">
              These Terms and Conditions ("Terms") govern your access to and use of the Cars0 mobile application operated by <strong className="text-white">ZenZero Developer</strong> ("Company", "we", "our", or "us"). Please read these Terms carefully before using our App.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Terms Sections */}
      {sections.map((section, index) => (
        <section key={section.id} className={`py-16 ${index % 2 === 0 ? '' : 'bg-white/[0.02]'}`}>
          <div className="container max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-violet-500/20 flex items-center justify-center flex-shrink-0">
                  <section.icon className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">{section.title}</h2>
                  <p className="text-zinc-400 leading-relaxed">{section.content}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      ))}

      {/* Governing Law */}
      <section className="py-16">
        <div className="container max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6">12. Governing Law</h2>
            <p className="text-zinc-400 leading-relaxed mb-8">
              These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which ZenZero Developer operates, without regard to its conflict of law provisions. Any disputes arising under these Terms shall be subject to the exclusive jurisdiction of the courts in that jurisdiction.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-24 bg-white/[0.02]">
        <div className="container max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="p-10 rounded-3xl bg-gradient-to-br from-violet-900/30 to-cyan-900/30 border border-violet-500/20"
          >
            <h2 className="text-3xl font-bold mb-8">13. Contact Us</h2>
            <p className="text-zinc-400 mb-8">
              If you have any questions about these Terms, please contact us:
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <span className="text-zinc-500 w-32">Company:</span>
                <span className="text-white font-medium">ZenZero Developer</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-zinc-500 w-32">Email:</span>
                <a href="mailto:yashborse11111@gmail.com" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                  yashborse11111@gmail.com
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
