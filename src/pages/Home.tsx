import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { CheckCircle, Zap, Shield } from 'lucide-react'

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="text-center py-20 bg-gradient-to-r from-purple-600 to-blue-500 text-white">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-extrabold mb-4 tracking-tight"
        >
          AI Editing Made Simple
        </motion.h1>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Enhance your content with the power of AI. Fast, easy, and reliable.
        </p>
        <div className="flex justify-center gap-3">
          <Link
            to="/pricing"
            className="px-6 py-3 rounded-full font-semibold bg-white text-purple-700 hover:bg-gray-100"
          >
            Get Started
          </Link>
          <Link
            to="/features"
            className="px-6 py-3 rounded-full font-semibold bg-white/20 hover:bg-white/30"
          >
            Learn More
          </Link>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 container mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center">Why Choose Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: CheckCircle, title: 'AI Precision', desc: 'State-of-the-art models deliver accurate results.' },
            { icon: Zap, title: 'Fast Processing', desc: 'Optimized pipelines for blazing performance.' },
            { icon: Shield, title: 'Secure & Reliable', desc: 'Your data stays safe with us.' }
          ].map(({ icon: Icon, title, desc }) => (
            <div key={title} className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow border border-gray-200 dark:border-gray-800">
              <Icon className="w-10 h-10 text-purple-600 mb-4" />
              <h3 className="text-xl font-semibold">{title}</h3>
              <p className="text-gray-600 dark:text-gray-400 mt-2">{desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
