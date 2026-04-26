import { motion } from "motion/react"

type props = {
  label: string;
}
export const SectionName = ({ label }: props) => {

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="flex justify-center items-center z-10"
    >
      <div className="relative text-center mt-4 mb-20 w-fit">
        <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-2/3 righteous
          text-6xl md:text-8xl select-none pointer-events-none"
          style={{
            color: 'transparent',
            WebkitTextStroke: '1px rgba(255,255,255,0.04)',
            filter: 'blur(1px)',
          }}
        >
          {label}
        </p>
        <p className="righteous text-2xl md:text-5xl lg:text-6xl font-bold mb-3 relative"
          style={{ color: 'var(--foreground)' }}
        >
          {label}
        </p>
        <span className="separatorLinePrimary"></span>
        <span className="separatorLineSecondary"></span>
      </div>
    </motion.div>
  )
}