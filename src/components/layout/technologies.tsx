import { containerStyle } from "@/utils/styles"
import { SectionName } from "../section-name"
import { SkillsTech } from "./skills-tech"

export const Technologies = () => {

  return (
    <section id="technologies">
      <div className={containerStyle + ' flex flex-col justify-center items-center w-full'}>
        <SectionName label="Tecnologias" />
        <SkillsTech/>
      </div>
    </section>
  )
}