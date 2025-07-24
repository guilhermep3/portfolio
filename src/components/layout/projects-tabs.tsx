"use client"
import { projectType } from "@/utils/types";
import { useEffect, useState } from "react";
import { Project } from "../project";
import { TabsHeader } from "./tabs-header";

export const ProjectsTabs = () => {
  const [projects, setProjects] = useState<projectType[] | null>(null);
  const [activeTab, setActiveTab] = useState<string>('Todos');
  const [tabs, setTabs] = useState<string[]>(['Todos']);

  useEffect(() => {
    async function fetchProjects() {
      const res = await fetch('/projects.json');
      const data = await res.json();
      setProjects(data);
    }
    fetchProjects();
  }, [])

  useEffect(() => {
    if (projects) {
      const allTypes = new Set<string>();

      projects.forEach((project) => {
        project.type.forEach(t => allTypes.add(t));
      });

      setTabs(['Todos', ...Array.from(allTypes)]);
    }
  }, [projects])

  const filteredProjects = projects?.filter((p) =>
    activeTab === 'Todos' ? true : p.type.includes(activeTab)
  );

  return (
    <div className="flex flex-col gap-4 w-full">
      {projects &&
        <TabsHeader tabs={tabs}
          activeTab={activeTab} setActiveTab={setActiveTab}
        />
      }
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 min-h-80 border border-zinc-800 p-3 rounded-xl">
        {filteredProjects?.map((p) => (
          <Project key={p.id} project={p} />
        ))}
      </div>
    </div>
  )
}