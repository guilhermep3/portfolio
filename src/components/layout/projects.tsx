import { containerStyle } from "@/utils/styles"
import { SectionName } from "../section-name"
import { ProjectsTabs } from "./projects-tabs"

export const Projects = () => {

  return (
    <section id="projects" className=" min-h-screen">
      <div className="relative">
        <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 bg-gradient-to-r from-transparent via-[var(--primary-color)] to-transparent w-full h-[2px]"></span>
        <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 bg-gradient-to-r from-transparent via-[var(--secondary-color)] to-transparent w-2/4 h-[8px] blur-sm"></span>
      </div>
      <div className={containerStyle}>
        <SectionName label="Projetos" />
        <ProjectsTabs />
      </div>
      <div className="relative">
        <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 bg-gradient-to-r from-transparent via-[var(--primary-color)] to-transparent w-full h-[2px]"></span>
        <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 bg-gradient-to-r from-transparent via-[var(--secondary-color)] to-transparent w-2/4 h-[8px] blur-sm"></span>
      </div>
    </section>
  )
}