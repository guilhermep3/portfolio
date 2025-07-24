import { containerStyle } from "@/utils/styles"
import { SectionName } from "../section-name"
import { ProjectsTabs } from "./projects-tabs"

export const Projects = () => {

  return (
    <section id="projects" className=" min-h-screen">
      <div className={containerStyle}>
        <SectionName label="Projetos" />
        <ProjectsTabs />
      </div>
    </section>
  )
}