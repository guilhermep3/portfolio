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
      <div className="h-full p-5 rounded-2xl flex flex-col gap-3 transition-all duration-300"
        style={{
          background: 'rgba(8,8,20,0.8)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255,255,255,0.07)',
          boxShadow: '0 4px 24px rgba(0,0,0,0.4)',
        }}
        onMouseEnter={e => {
          (e.currentTarget as HTMLElement).style.borderColor = 'rgba(0,196,126,0.3)';
          (e.currentTarget as HTMLElement).style.boxShadow = '0 0 24px rgba(0,196,126,0.1), 0 8px 32px rgba(0,0,0,0.5)';
          (e.currentTarget as HTMLElement).style.transform = 'translateY(-3px)';
        }}
        onMouseLeave={e => {
          (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.07)';
          (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 24px rgba(0,0,0,0.4)';
          (e.currentTarget as HTMLElement).style.transform = '';
        }}
      >
        <h3 className="text-base font-bold" style={{ color: 'var(--foreground)' }}>
          {data.name}
        </h3>
        <p className="text-sm leading-relaxed flex-1" style={{ color: 'var(--foreground-muted)' }}>
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