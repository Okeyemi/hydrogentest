'use client'
import { motion } from 'framer-motion'

type POSKitCardProps = {
  title: string
  description: string
  imageSrc: string
  delay?: number
}

const POSKitCard = ({ title, description, imageSrc, delay = 0 }: POSKitCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="bg-[#1E1E1E] rounded-2xl p-6 text-center shadow-lg"
    >
      <img src={imageSrc} alt={title} className="mx-auto mb-6 rounded-xl object-contain h-48" />
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-sm text-gray-400">{description}</p>
    </motion.div>
  )
}
export default POSKitCard