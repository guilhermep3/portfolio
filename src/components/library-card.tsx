import { LibraryType } from "@/data/libraries-data"
import { motion } from "motion/react"

type props = {
  data: LibraryType;
}
export const LibraryCard = ({ data }: props) => {

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="group h-full"
    >
      <div className="cardStyle flex-col h-full p-5">
        <h3 className="text-base font-bold text-[var(--foreground)]">
          {data.name}
        </h3>
        <p className="text-sm leading-relaxed flex-1 text-[var(--foreground-muted)]">
          {data.description}
        </p>
        <div className="flex flex-wrap gap-1.5 pt-1">
          {data.tags.map((tag) => (
            <span key={tag} className="spanStyle">{tag}</span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}