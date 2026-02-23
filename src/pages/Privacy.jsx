import { motion } from 'framer-motion'
import { Shield, Camera, Image, HardDrive, MapPin, Bell, Lock, Server, Users, Trash2, AlertTriangle, CheckCircle, BarChart3 } from 'lucide-react'

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
}

const permissions = [
  {
    icon: Camera,
    title: 'Camera',
    description: 'Used to capture photos within the app (for profile or car-related uploads).',
  },
  {
    icon: Image,
    title: 'Gallery / Photos',
    description: 'Used to upload images from your device.',
  },
  {
    icon: HardDrive,
    title: 'Storage',
    description: 'Used to store and retrieve uploaded images and app-related files.',
  },
  {
    icon: MapPin,
    title: 'Location',
    description: 'Used to enable location-based features within the app.',
  },
]

export default function Privacy() {
  return (
    <div className="page">
      {/* Header */}
      <section className="page-header pt-32">
        <div className="container relative z-10">
          <motion.div
            initial="initial"
            animate="animate"
            transition={{ duration: 0.6 }}
            variants={fadeIn}
          >
            <div className="badge badgeCyan mb-6">
              <Shield className="w-4 h-4 text-cyan-400" />
              <span>Legal</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Privacy Policy</h1>
            <p className="text-xl text-zinc-400 max-w-2xl">
              Last Updated: February 2026
            </p>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="sectionBlock border-b border-white/5">
        <div className="container contentNarrow">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="panel"
          >
            <p className="text-zinc-300 leading-relaxed mb-4">
              <strong className="text-white">ZenZero Developer</strong> ("Company", "we", "our", or "us") operates the <strong className="text-white">Cars0</strong> mobile application ("App"). This Privacy Policy explains how we collect, use, store, and protect your information when you use our App on Android and iOS devices.
            </p>
            <p className="text-zinc-400 leading-relaxed">
              By using Cars0, you agree to the collection and use of information in accordance with this Privacy Policy.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 1. Information We Collect */}
      <section className="sectionBlock">
        <div className="container contentNarrow">
          <div className="row mb-8">
            <div className="iconBox">
              <Shield className="w-6 h-6 text-cyan-400" />
            </div>
            <div>
              <h2 className="sectionTitle">1. Information We Collect</h2>
              <p className="sectionLead">We collect the following categories of information:</p>
            </div>
          </div>

          <div className="stack">
            <div className="panelSoft">
              <h3 className="text-xl font-semibold text-white mb-3">1.1 Personal Information</h3>
              <p className="text-zinc-400 mb-4">When you create an account, we collect:</p>
              <ul className="dotList">
                {['Full Name', 'Email Address', 'Phone Number', 'Profile Photo'].map((item) => (
                  <li key={item} className="dotItem"><span className="dot" />{item}</li>
                ))}
              </ul>
              <p className="muted2 mt-6">This information is required to create and manage your user account.</p>
            </div>

            <div className="panelSoft">
              <h3 className="text-xl font-semibold text-white mb-3">1.2 Location Information</h3>
              <p className="text-zinc-400 mb-4">We collect location data to provide location-based services within the App. This may include:</p>
              <ul className="dotList">
                {['Precise GPS location', 'Approximate location derived from device settings'].map((item) => (
                  <li key={item} className="dotItem"><span className="dot" />{item}</li>
                ))}
              </ul>
              <p className="muted2 mt-6">Location data is only collected when the app is actively in use.</p>
            </div>

            <div className="panelSoft">
              <h3 className="text-xl font-semibold text-white mb-3">1.3 Device and Usage Information</h3>
              <p className="text-zinc-400 mb-4">We automatically collect certain technical information, including:</p>
              <ul className="dotList">
                {[
                  'Device type and operating system',
                  'IP address',
                  'App usage data',
                  'User interaction behavior',
                  'Session activity',
                ].map((item) => (
                  <li key={item} className="dotItem"><span className="dot" />{item}</li>
                ))}
              </ul>
              <p className="muted2 mt-6">This information is used to analyze user behavior, improve performance, and enhance user experience.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Permissions Section */}
      <section className="sectionBlockAlt">
        <div className="container contentNarrow">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">2. Permissions We Request</h2>
            <p className="text-zinc-400">Cars0 requires the following permissions to provide full functionality:</p>
          </motion.div>

          <div className="grid2">
            {permissions.map((perm, index) => (
              <motion.div
                key={perm.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="card"
              >
                <div className="iconBox mb-4">
                  <perm.icon className="w-6 h-6 text-cyan-400" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{perm.title}</h3>
                <p className="text-zinc-400 text-sm">{perm.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center text-zinc-500 mt-8 text-sm italic"
          >
            Permissions are only used for app functionality and not for unauthorized tracking.
          </motion.p>
        </div>
      </section>

      {/* 3. How We Use Your Information */}
      <section className="sectionBlockAlt">
        <div className="container contentNarrow">
          <div className="row mb-8">
            <div className="iconBox">
              <CheckCircle className="w-6 h-6 text-cyan-400" />
            </div>
            <h2 className="sectionTitle">3. How We Use Your Information</h2>
          </div>

          <div className="panel">
            <p className="text-zinc-400 mb-6">We use collected information to:</p>
            <ul className="dotList">
              {[
                'Create and manage user accounts',
                'Provide core app services',
                'Improve app features and functionality',
                'Analyze user behavior and engagement',
                'Send important service-related notifications',
                'Ensure security and prevent fraud',
              ].map((item) => (
                <li key={item} className="dotItem"><span className="dot" />{item}</li>
              ))}
            </ul>
            <div className="panelSuccess mt-8">
              <p className="text-zinc-200"><strong className="text-white">We do not sell or rent your personal information.</strong></p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Push Notifications */}
      <section className="sectionBlock">
        <div className="container contentNarrow">
          <div className="row mb-8">
            <div className="iconBox">
              <Bell className="w-6 h-6 text-cyan-400" />
            </div>
            <h2 className="sectionTitle">4. Push Notifications</h2>
          </div>
          <div className="panel">
            <p className="text-zinc-400 mb-6">Cars0 may send push notifications related to:</p>
            <ul className="dotList mb-6">
              {['Account activity', 'Service updates', 'Important alerts'].map((item) => (
                <li key={item} className="dotItem"><span className="dot" />{item}</li>
              ))}
            </ul>
            <p className="muted2">You may disable push notifications at any time through your device settings.</p>
          </div>
        </div>
      </section>

      {/* 5. Data Storage and Security */}
      <section className="sectionBlockAlt">
        <div className="container contentNarrow">
          <div className="row mb-8">
            <div className="iconBox">
              <Lock className="w-6 h-6 text-cyan-400" />
            </div>
            <h2 className="sectionTitle">5. Data Storage and Security</h2>
          </div>
          <div className="panel">
            <p className="text-zinc-400 mb-6">Your information is stored on secure Virtual Private Server (VPS) infrastructure.</p>
            <p className="text-zinc-400 mb-4">We implement reasonable technical and organizational security measures to protect your data, including:</p>
            <ul className="dotList mb-6">
              {['Secure server configurations', 'Encrypted data transmission (HTTPS)', 'Access controls', 'Authentication protections'].map((item) => (
                <li key={item} className="dotItem"><span className="dot" />{item}</li>
              ))}
            </ul>
            <p className="muted2">However, no method of electronic storage is 100% secure.</p>
          </div>
        </div>
      </section>

      {/* 6. Data Sharing */}
      <section className="sectionBlock">
        <div className="container contentNarrow">
          <div className="row mb-8">
            <div className="iconBox">
              <Users className="w-6 h-6 text-cyan-400" />
            </div>
            <h2 className="sectionTitle">6. Data Sharing</h2>
          </div>
          <div className="panel">
            <div className="panelSuccess mb-6">
              <p className="text-zinc-200"><strong className="text-white">We do not sell your personal information.</strong></p>
            </div>
            <p className="text-zinc-400 mb-4">We may share information only in the following circumstances:</p>
            <ul className="dotList">
              {[
                'To comply with legal obligations',
                'To protect the rights and safety of users',
                'With trusted service providers who assist in operating the app under confidentiality agreements',
              ].map((item) => (
                <li key={item} className="dotItem"><span className="dot" />{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 7. Data Retention */}
      <section className="sectionBlockAlt">
        <div className="container contentNarrow">
          <div className="row mb-8">
            <div className="iconBox">
              <Server className="w-6 h-6 text-cyan-400" />
            </div>
            <h2 className="sectionTitle">7. Data Retention</h2>
          </div>
          <div className="panel">
            <p className="text-zinc-400 mb-4">We retain your personal information only as long as necessary to:</p>
            <ul className="dotList mb-6">
              {['Provide services', 'Comply with legal obligations', 'Resolve disputes', 'Enforce agreements'].map((item) => (
                <li key={item} className="dotItem"><span className="dot" />{item}</li>
              ))}
            </ul>
            <p className="muted2">When data is no longer required, it will be securely deleted.</p>
          </div>
        </div>
      </section>

      {/* 8. Account Deletion */}
      <section className="sectionBlock">
        <div className="container contentNarrow">
          <div className="row mb-8">
            <div className="iconBox">
              <Trash2 className="w-6 h-6 text-cyan-400" />
            </div>
            <h2 className="sectionTitle">8. Account Deletion</h2>
          </div>
          <div className="panel">
            <p className="text-zinc-400 mb-6">Users will have the ability to request account deletion through future in-app functionality.</p>
            <p className="text-zinc-400 mb-4">Upon receiving a valid deletion request:</p>
            <ul className="dotList">
              {[
                'Personal information will be permanently deleted from our active systems',
                'Some data may be retained temporarily if required by law',
              ].map((item) => (
                <li key={item} className="dotItem"><span className="dot" />{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 9. Children’s Privacy */}
      <section className="sectionBlockAlt">
        <div className="container contentNarrow">
          <div className="row mb-8">
            <div className="iconBox">
              <AlertTriangle className="w-6 h-6 text-cyan-400" />
            </div>
            <h2 className="sectionTitle">9. Children’s Privacy</h2>
          </div>
          <div className="panelDanger">
            <p className="text-zinc-200"><strong className="text-white">Cars0 is not intended for children under the age of 13.</strong></p>
            <p className="text-zinc-400 mt-4">We do not knowingly collect personal information from children under 13. If we become aware of such data collection, we will take steps to remove the information promptly.</p>
          </div>
        </div>
      </section>

      {/* Rights Section */}
      <section className="sectionBlock">
        <div className="container contentNarrow">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="sectionTitle mb-8">10. Your Rights</h2>
            <div className="panel">
              <p className="text-zinc-400 mb-6">Depending on your location, you may have the right to:</p>
              <ul className="dotList mb-8">
                {['Access your personal information', 'Request correction of inaccurate data', 'Request deletion of your data', 'Withdraw consent'].map((right, idx) => (
                  <li key={idx} className="dotItem"><span className="dot" />{right}</li>
                ))}
              </ul>
              <p className="text-zinc-400">To exercise these rights, contact us using the details below.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Play Store disclosure: analytics */}
      <section className="sectionBlockAlt">
        <div className="container contentNarrow">
          <div className="row mb-8">
            <div className="iconBox">
              <BarChart3 className="w-6 h-6 text-cyan-400" />
            </div>
            <h2 className="sectionTitle">Analytics & Tracking Disclosure</h2>
          </div>
          <div className="panel">
            <p className="text-zinc-400 leading-relaxed">
              Cars0 uses <strong className="text-white">internally implemented analytics</strong> to understand app usage and improve performance.
              We do <strong className="text-white">not</strong> use third-party analytics or tracking SDKs (such as Firebase Analytics, Google Analytics, or similar) for collecting user behavior data.
            </p>
          </div>
        </div>
      </section>

      {/* Changes Section */}
      <section className="sectionBlockAlt">
        <div className="container contentNarrow">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="sectionTitle mb-8">11. Changes to This Privacy Policy</h2>
            <div className="panel">
              <p className="text-zinc-400 leading-relaxed">
                We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated "Last Updated" date. Continued use of the App after updates means you accept the revised policy.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="sectionBlock">
        <div className="container contentNarrow">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="sectionTitle mb-8">12. Contact Information</h2>
            <div className="panel">
              <p className="text-zinc-400 mb-8">If you have any questions about this Privacy Policy, you may contact:</p>
              <div className="stack">
                <div className="rowStart">
                  <span className="muted2" style={{ width: '8rem' }}>Company</span>
                  <span className="text-white font-medium">ZenZero Developer</span>
                </div>
                <div className="rowStart">
                  <span className="muted2" style={{ width: '8rem' }}>App</span>
                  <span className="text-white font-medium">Cars0</span>
                </div>
                <div className="rowStart">
                  <span className="muted2" style={{ width: '8rem' }}>Email</span>
                  <a href="mailto:yashborse11111@gmail.com" className="link">
                    yashborse11111@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
