"use client"
import { projectType } from "@/utils/types";
import { useEffect, useState } from "react";
import { Project } from "../project";

export const ProjectsClient = () => {
  const [projects, setProjects] = useState<projectType[] | null>(null);

  useEffect(() => {
    async function fetchProjects() {
      const res = await fetch('/projects.json');
      const data = await res.json();
      setProjects(data)
    }
    fetchProjects();
  }, [])

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects?.map((p) => (
          <Project key={p.id} project={p} />
        ))}
      </div>
    </div>
  )
}