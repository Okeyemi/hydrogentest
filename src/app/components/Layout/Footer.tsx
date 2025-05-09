'use client'
import { motion } from 'framer-motion'
import { MailIcon } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[#111] text-gray-400 py-20 px-6">
      {/* Newsletter Signup */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-5xl mx-auto mb-16 text-center"
      >
        <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">
          Subscribe to our newsletter
        </h2>
        <p className="mb-6 text-gray-400">Stay up to date with the latest product updates and announcements.</p>
        <form className="flex flex-col md:flex-row items-center justify-center gap-4 max-w-lg mx-auto">
          <div className="relative w-full md:w-auto flex-1">
            <MailIcon className="absolute left-3 top-3.5 text-gray-500 w-5 h-5" />
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full bg-[#1E1E1E] text-white py-3 pl-10 pr-4 rounded-xl outline-none placeholder:text-gray-500"
            />
          </div>
          <button
            type="submit"
            className="bg-white text-black py-3 px-6 rounded-xl font-medium hover:bg-gray-200 transition"
          >
            Subscribe
          </button>
        </form>
      </motion.div>

      {/* Footer Links */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12"
      >
        <div>
          <h4 className="text-white font-semibold mb-4">Product</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#">Features</a></li>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">Integrations</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4">Company</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#">About</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4">Legal</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Service</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4">Follow Us</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#">Twitter</a></li>
            <li><a href="#">LinkedIn</a></li>
            <li><a href="#">Instagram</a></li>
          </ul>
        </div>
      </motion.div>

      <div className="text-center text-sm text-gray-600 mt-16">
        &copy; {new Date().getFullYear()} Hydrogen. All rights reserved.
      </div>
    </footer>
  )
}
