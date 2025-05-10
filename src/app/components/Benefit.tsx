'use client'

import { motion } from 'framer-motion'

type BenefitBlockProps = {
  imageSrc: string
  title: string
  points: string[]
  reverse?: boolean
}

function BenefitBlock({ imageSrc, title, points, reverse = false }: BenefitBlockProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`flex flex-col md:flex-row items-center gap-12 ${reverse ? 'md:flex-row-reverse' : ''}`}
    >
      {/* Image */}
      <div className="w-full md:w-1/2">
        <img
          src={imageSrc}
          alt={title}
          className="rounded-2xl w-full object-cover shadow-lg"
        />
      </div>

      {/* Text */}
      <div className="w-full md:w-1/2">
        <h3 className="md:text-[70px] text-3xl font-semibold  mb-6 bg-gradient-to-r from-[#7D7D7D] via-neutral-50 to-neutral-900 bg-clip-text text-transparent">{title}</h3>
        <ul className="text-base md:text-[24px] text-[#737373]">
          {points.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </div>
    </motion.div>
  )
}

export default function Benefits() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto space-y-24">
      <BenefitBlock
        imageSrc="/assets/benefit1.png"
        title="Benefits to Customer"
        points={[
          'An efficiently reliable solution for card',
          'transactions',
          'Promotes user satisfaction',
          'Guarantees transaction security',
        ]}
      />
      <BenefitBlock
        imageSrc="/assets/benefit2.png"
        title="Benefits to Customer"
        points={[
            'An efficiently reliable solution for card',
          'transactions',
          'Promotes user satisfaction',
          'Guarantees transaction security',
        ]}
        reverse
      />
    </section>
  )
}
