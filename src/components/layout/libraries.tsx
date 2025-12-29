import { containerStyle } from "@/utils/styles"
import { SectionName } from "../section-name"
import { Divider } from "../svg/divider"
import { LibrariesGrid } from "./libraries-grid"

export const Libraries = () => {
  return (
    <section
      id="libraries"
      className="relative bg-center bg-cover bg-no-repeat"
      style={{ backgroundImage: 'url("/wavy_background.jpg")' }}
    >
      <div className="absolute top-0 w-full">
        <Divider />
      </div>
      <div className="absolute bottom-0 w-full rotate-180 translate-y-1/2">
        <Divider />
      </div>
      <div className={`${containerStyle} flex flex-col justify-center items-center md:py-36`}>
        <SectionName label="Bibliotecas" />
        <LibrariesGrid />
      </div>
    </section>
  )
}
