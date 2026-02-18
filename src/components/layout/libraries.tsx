import { LibraryCard } from "../library-card"
import { SectionName } from "../section-name"
import { Divider } from "../svg/divider"
import { librariesData } from "@/data/libraries-data"

export const Libraries = () => {
  return (
    <section id="libraries" className="relative bg-zinc-950">
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
            {librariesData.map((lib, index) => (
              <LibraryCard key={index} data={lib} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
