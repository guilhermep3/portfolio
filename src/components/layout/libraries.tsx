import { SectionName } from "../section-name"
import { Divider } from "../svg/divider"
import { DottedBg } from "../svg/dotted-bg"
import { librariesData } from "@/data/libraries-data"

export const Libraries = () => {
  return (
    <section id="libraries" className="relative bg-center bg-cover bg-no-repeat">
      <DottedBg />
      <div className="absolute top-0 w-full">
        <Divider />
      </div>
      <div className="absolute bottom-0 w-full rotate-180 translate-y-1/2">
        <Divider />
      </div>
      <div className="containerStyle flex flex-col justify-center items-center md:py-36">
        <SectionName label="Bibliotecas" />
        <div className="w-full max-w-5xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {librariesData.map((lib) => (
              <div key={lib.name} data-aos="fade-up" className="group relative">
                <div className="h-full p-5 rounded-2xl bg-black/20 backdrop-blur-md border border-zinc-500/50
                    shadow-lg transition-all duration-300 group-hover:scale-105 group-hover:shadow-indigo-500/30"
                >
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {lib.name}
                  </h3>
                  <p className="text-sm text-zinc-200 mb-4 leading-relaxed">
                    {lib.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {lib.tags.map((tag) => (
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
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
