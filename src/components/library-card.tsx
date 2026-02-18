import { LibraryType } from "@/data/libraries-data"

type props = {
  data: LibraryType;
}
export const LibraryCard = ({ data }: props) => {

  return (
    <div key={data.name} data-aos="fade-up" className="group relative bg-zinc-950">
      <div className="h-full p-5 rounded-2xl bg-black/20 backdrop-blur-md border border-zinc-500/50
        shadow-lg transition-all duration-300 group-hover:scale-105 group-hover:shadow-indigo-500/30"
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
              className="text-xs px-2 py-1 rounded-full text-indigo-200
                          bg-indigo-500/20 border border-indigo-500/30"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}