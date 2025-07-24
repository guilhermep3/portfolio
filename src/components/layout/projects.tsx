import { containerStyle } from "@/utils/styles"
import { SectionName } from "../section-name"
import { ProjectsClient } from "./projects-client"

export const Projects = () => {

  return (
    <section id="projects" className=" min-h-screen">
      <div className={containerStyle}>
        <SectionName label="Projetos" />
        <ProjectsClient />
      </div>
    </section>
  )
}