"use client"
import { projectsData } from "@/data/projects"
import { Project } from "./project"

export const Projects = () => {

   return (
      <section id="projects">
         <div className="container projects-content">
            <div className="section-title">Meus projetos</div>
            <div className="projects-list">
               {projectsData.map((project) => (
                  <Project key={project.id} project={project}
                  />
               ))}
            </div>
         </div>
      </section>
   )
}