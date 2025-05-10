'use client'
import { motion } from 'framer-motion'
import TextReveal from './TextReveal'

type POSKitCardProps = {
  title: string
  description: string
  kit: string
  imageSrc: string
  delay?: number
}

const kits = [
  {
    title: 'Restaurant Mobile',
    kit: 'POS Kit',
    description: 'Pick up your card from us or choose our easy delivery option',
    imageSrc: '/assets/pos1.png',
  },
  {
    title: 'Restaurant Mobile',
    kit: 'POS Kit',
    description: 'Pick up your card from us or choose our easy delivery option',
    imageSrc: '/assets/pos2.png',
  },
  {
    title: 'Restaurant Mobile',
    kit: 'POS Kit',
    description: 'Pick up your card from us or choose our easy delivery option',
    imageSrc: '/assets/pos3.png',
  },
]

const POSKitCard = ({ title, description, imageSrc, kit, delay = 0 }: POSKitCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
      className="rounded-2xl p-3 text-center shadow-lg hover:shadow-xl transition-shadow duration-300 "
    >
      <motion.img
        src={imageSrc}
        alt={title}
        className="mx-auto mb-4 rounded-xl object-contain h-48"
        loading="lazy"
        initial={{ scale: 0.95, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ delay: delay + 0.1, duration: 0.5, ease: 'easeOut' }}
      />
      <h3 className="md:text-2xl text-lg font-semibold text-white">{title}</h3>
      <h3 className="md:text-2xl text-lg font-semibold text-white mb-2">{kit}</h3>
      <p className="md:text-base text-sm text-white">{description}</p>
    </motion.div>
  )
}


export default function POSKits() {
  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      <motion.div className="text-center mb-12">
        <TextReveal
          as="h2"
          text="Craft the perfect card"
          className="text-3xl md:text-7xl font-bold bg-gradient-to-r from-[#7D7D7D] via-neutral-50 to-neutral-900 bg-clip-text text-transparent"
        />
        <TextReveal
          as="h2"
          text="payment experience"
          className="text-3xl md:text-7xl font-bold bg-gradient-to-r from-[#7D7D7D] via-neutral-50 to-neutral-900 bg-clip-text text-transparent"
          delay={0.4}
        />
        <TextReveal
          as="p"
          delay={0.6}
          text="By providing customizable card management service, including card payment processing, tokenization, service automation and advanced payment security solutions. This service ensures secure, effective, and efficient cardholder experience."
          className="mt-6 text-base md:text-lg text-white max-w-xl mx-auto"
        />
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {kits.map((kit, i) => (
          <POSKitCard key={i} {...kit} delay={i * 0.3} />
        ))}
      </div>
    </section>
  )
}
