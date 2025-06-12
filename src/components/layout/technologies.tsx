import { containerStyle } from "@/utils/styles"
import { SectionName } from "../section-name"
import { SkillsTech } from "./skills-tech"
import { Divider } from "../svg/divider"

export const Technologies = () => {

  return (
    <section id="technologies" className="relative bg-center bg-cover bg-no-repeat"
      style={{ backgroundImage: 'url("/frame-dark.png")' }}>
      <div className="absolute top-0 w-full">
        <Divider />
      </div>
      <div className="absolute bottom-0 w-full rotate-180 translate-y-1/2">
        <Divider />
      </div>
      <div className={containerStyle + ' flex flex-col justify-center items-center w-full md:py-36'}>
        <SectionName label="Tecnologias" />
        <SkillsTech />
      </div>
    </section>
  )
}