import { motion } from 'framer-motion'

export default function AmbientFluid() {
  return (
    <div className="ambient-orbs" aria-hidden="true">
      {/* Deep red ember — slow drift, like fire under the river */}
      <motion.div
        animate={{
          x: ['-8%', '6%', '-5%', '4%', '-8%'],
          y: ['-3%', '10%', '-6%', '8%', '-3%'],
          scale: [1, 1.1, 0.94, 1.06, 1],
          opacity: [0.08, 0.13, 0.06, 0.11, 0.08],
        }}
        transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
        className="absolute top-1/3 -left-24 w-[500px] h-[500px] rounded-full bg-brand-red blur-[130px]"
      />

      {/* Cool pearl mist — rising from the depths */}
      <motion.div
        animate={{
          x: ['4%', '-10%', '6%', '-4%', '4%'],
          y: ['5%', '-8%', '10%', '-3%', '5%'],
          scale: [1, 0.92, 1.07, 0.96, 1],
          opacity: [0.04, 0.08, 0.03, 0.07, 0.04],
        }}
        transition={{ duration: 35, repeat: Infinity, ease: 'linear', delay: 4 }}
        className="absolute bottom-1/3 right-0 w-[450px] h-[450px] rounded-full bg-white blur-[120px]"
      />

      {/* Midnight current — deep black flow */}
      <motion.div
        animate={{
          x: ['6%', '-4%', '8%', '-8%', '6%'],
          y: ['-10%', '5%', '-5%', '3%', '-10%'],
          scale: [1, 1.05, 0.93, 1.04, 1],
          opacity: [0.06, 0.1, 0.05, 0.09, 0.06],
        }}
        transition={{ duration: 40, repeat: Infinity, ease: 'linear', delay: 8 }}
        className="absolute top-1/2 left-1/3 w-[550px] h-[550px] rounded-full bg-black blur-[140px]"
      />

      {/* Red echo — a second, smaller ember */}
      <motion.div
        animate={{
          x: ['-5%', '10%', '-8%', '6%', '-5%'],
          y: ['8%', '-5%', '12%', '-10%', '8%'],
          scale: [1, 1.15, 0.88, 1.1, 1],
          opacity: [0.03, 0.07, 0.04, 0.08, 0.03],
        }}
        transition={{ duration: 22, repeat: Infinity, ease: 'linear', delay: 6 }}
        className="absolute bottom-1/4 left-1/4 w-[320px] h-[320px] rounded-full bg-brand-red blur-[90px]"
      />
    </div>
  )
}
