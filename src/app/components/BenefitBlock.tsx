'use client'
import { motion } from 'framer-motion'

type BenefitBlockProps = {
  imageSrc: string
  title: string
  points: string[]
  reverse?: boolean
}

export default function BenefitBlock({ imageSrc, title, points, reverse = false }: BenefitBlockProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`flex flex-col md:flex-row items-center gap-12 ${reverse ? 'md:flex-row-reverse' : ''}`}
    >
 
      <div className="w-full md:w-1/2">
        <img
          src={imageSrc}
          alt={title}
          className="rounded-2xl w-full object-cover shadow-lg"
        />
      </div>

    
      <div className="w-full md:w-1/2">
        <h3 className="text-2xl font-semibold text-white mb-6">{title}</h3>
        <ul className="space-y-4 text-gray-300 list-disc list-inside">
          {points.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </div>
    </motion.div>
  )
}
