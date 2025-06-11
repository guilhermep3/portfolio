import { containerStyle } from "@/utils/styles"
import { SectionName } from "../section-name"
import { SkillsTech } from "./skills-tech"
import { Divider } from "../svg/divider"

export const Technologies = () => {

  return (
    <section id="technologies" className="relative">
      <div className="absolute top-0 w-full">
        <Divider/>
      </div>
      <div className="absolute bottom-0 w-full rotate-180">
        <Divider/>
      </div>
      <div className="absolute inset-0 h-screen w-full bg-center bg-cover brightness-50"
        style={{ backgroundImage: 'url("/frame-dark.png")', zIndex: -2 }}>
      </div>
      <div className={containerStyle + ' flex flex-col justify-center items-center w-full pt-32 pb-40'}>
        <SectionName label="Tecnologias" />
        <SkillsTech/>
      </div>
    </section>
  )
}