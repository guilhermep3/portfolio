import { SectionName } from "../section-name"
import { ProjectsTabs } from "./projects-tabs"
import { SeparatorLine } from "../separator-line"

export const Projects = () => {

  return (
    <section id="projects" className="min-h-screen">
      <SeparatorLine opacity={50} />
      <div className="containerStyle">
        <SectionName label="Projetos" />
        <ProjectsTabs />
      </div>
      <SeparatorLine opacity={50} />
    </section>
  )
}