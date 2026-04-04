import { LibraryType } from "@/data/libraries-data"
import { motion } from "motion/react"

type props = {
  data: LibraryType;
}
export const LibraryCard = ({ data }: props) => {

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.4, y: 40 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.7 }}
      className="group relative bg-zinc-950"
    >
      <div className="h-full p-5 rounded-2xl bg-black/50 backdrop-blur-md border border-zinc-500/50
        shadow-lg transition-all duration-300 group-hover:scale-105 group-hover:shadow-green-500/10
        hover:border-zinc-500"
      >
        <h3 className="text-lg font-semibold text-white mb-2">
          {data.name}
        </h3>
        <p className="text-sm text-zinc-200 mb-4 leading-relaxed">
          {data.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {data.tags.map((tag) => (
            <span key={tag}
              className="spanStyle"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}