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
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay }}
      className="rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow duration-300"
    >
      <img
        src={imageSrc}
        alt={title}
        className="mx-auto mb-6 rounded-xl object-contain h-48"
        loading="lazy"
      />
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-sm text-gray-400">{description}</p>
    </motion.div>
  )
}

const kits = [
  {
    title: 'Restaurant Mobile POS Kit',
    description: 'Pick up your food item or choose our easy delivery system',
    imageSrc: '/assets/pos1.png',
  },
  {
    title: 'Retail POS Terminal',
    description: 'Handle in-store transactions seamlessly with our robust POS kit',
    imageSrc: '/assets/pos2.png',
  },
  {
    title: 'Delivery Rider POS Kit',
    description: 'Equip your delivery riders with mobile card payment tools',
    imageSrc: '/assets/pos3.png',
  },
]

export default function POSKits() {
  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
        Craft the <span className="text-white">perfect card payment experience</span>
      </h2>
      <p className="text-center text-gray-400 mb-16 max-w-2xl mx-auto">
        Customize the way your business accepts card payments, with features like tokenization, card processing, and secure interactions.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {kits.map((kit, i) => (
          <POSKitCard key={i} {...kit} delay={i * 0.2} />
        ))}
      </div>
    </section>
  )
}
