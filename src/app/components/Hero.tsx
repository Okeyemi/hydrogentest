'use client'
import { motion } from 'framer-motion'

const container = {
    hidden: { opacity: 0, y: 20 },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: 'easeOut',
            staggerChildren: 0.15,
        },
    },
}

const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export default function Hero() {
    return (
        <section className="md:py-16 py-10 px-4 md:pl-20 w-full md:text-center md:text-left md:flex justify-between w-full overflow-hidden  ">
            <motion.div
                initial="hidden"
                animate="show"
                variants={container}
                className="flex-1"
            >
                <motion.h1 className="text-4xl md:text-7xl font-bold mb-4 space-y-2">
                    {[
                        'Get a',
                        'Hydrogen card,',
                        'no maintenance',
                        'fee.',
                    ].map((line, i) => (
                        <motion.div
                            key={i}
                            variants={item}
                            className={`block bg-gradient-to-r ${i === 1 || i === 2
                                ? 'from-[#7D7D7D] via-neutral-50 to-neutral-900'
                                : 'from-[#7D7D7D] via-neutral-100 to-[#7D7D7D]'
                                } bg-clip-text text-transparent`}
                        >
                            {line}
                        </motion.div>
                    ))}
                </motion.h1>

                <motion.p
                    variants={item}
                    className="text-lg text-gray-300 mb-6 max-w-md"
                >
                    Request a Hydrogen Visa card on the Hydrogen app. We'll deliver it to you or you can pick it up whenever you're ready.
                </motion.p>

                <motion.div
                    variants={item}
                    className="flex gap-4 justify-between md:justify-start cursor-pointer"
                >
                    <img src="/assets/appstore.png" alt="App Store" className='hover:bg-yellow-900' />
                    <img src="/assets/playstore.png" alt="Google Play" className='hover:bg-yellow-900' />
                </motion.div>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.8, ease: 'easeOut' }}
                className="mt-10 md:mt-0 flex items-center justify-end flex-1 -mr-10 relative"
            >
                <motion.img
                    src="/assets/father.png"
                    alt="Hydrogen Card"
                    className="w-full max-w-sm absolute md:left-10 left-0 md:mb-20 mb:0 z-0"
                    initial={{ x: 0 }}
                    animate={{ x: 14 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                />


                <img
                    src="/assets/hero.png"
                    alt="Hydrogen Card"
                    className="w-full max-w-md relative"
                />

            </motion.div>
        </section>
    )
}
