"use client"
import { containerStyle } from "@/utils/styles"
import { SectionName } from "../section-name"
import { Project } from "../project"
import { useEffect, useState } from "react"
import { projectType } from "@/utils/types"

export const Projects = () => {
  const [projects, setProjects] = useState<projectType[] | null>(null);

  useEffect(() => {
    async function fetchProjects(){
      const res = await fetch('/projects.json');
      const data = await res.json();
      setProjects(data)
    }
    fetchProjects();
  }, [])

  return (
    <section id="projects">
      <div className={containerStyle+' '}>
        <SectionName label="Projetos"/>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects?.map((p) => (
            <Project key={p.id} project={p}/>
          ))}
        </div>
      </div>
    </section>
  )
}