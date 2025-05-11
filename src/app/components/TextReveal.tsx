'use client'
import { motion } from 'framer-motion'

type TextRevealProps = {
  text: string
  className?: string
  delay?: number
  as?: 'p' | 'h1' | 'h2' | 'span' | 'div'
}

export default function TextReveal({
  text,
  className = '',
  delay = 0,
  as = 'span',
}: TextRevealProps) {
  const Tag = motion[as as keyof typeof motion] as any

  const words = text.split(' ')

  return (
    <Tag
      className={`${className} inline-block` as string}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        visible: { transition: { staggerChildren: 0.06, delayChildren: delay } },
        hidden: {},
      }}
    >
      {words.map((word, i) => (
        <motion.span
          key={i}
          className="inline-block mr-1"
          variants={{
            hidden: { opacity: 0, y: 10 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          {word}
        </motion.span>
      ))}
    </Tag>
  )
}
