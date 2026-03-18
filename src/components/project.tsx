import { useModalStore } from "@/store/modalStore";
import { projectType } from "@/utils/types"
import { Eye } from "lucide-react";
import Image from "next/image";

type props = {
  project: projectType;
}
export const Project = ({ project }: props) => {
  if (!project) return;
  const { setModalProject, setIsModalOpen } = useModalStore();

  function handleOpenModal() {
    setModalProject(project);
    setIsModalOpen(true);
  };

  return (
    <div
      className={`bgGradient group flex flex-col gap-4 p-2 md:p-4 rounded-lg
        cursor-pointer transition duration-300 hover:-translate-y-1`}
      onClick={() => handleOpenModal()}
    >
      <div className="relative w-full rounded-lg overflow-hidden">
        <Image src={`/projects/${project.image}`} alt={project.name ?? 'Projeto portfolio'}
          className="w-full object-cover group-hover:scale-110 transition duration-300"
          width={440} height={440}
        />
        <div className="absolute inset-0 flex justify-center items-center opacity-0 
          group-hover:opacity-100 bg-black/50 transition duration-300"
        >
          <Eye className="w-8 h-8" />
        </div>
      </div>
      <div className="flex justify-between items-center gap-2">
        <p className="text-lg md:text-xl font-bold">{project.name}</p>
        <div className="flex">
          {project.type.map((i, index) => (
            <p key={i} className="text-sm">
              {i}
              {index < project.type.length - 1 && <span className="mx-1">/</span>}
            </p>
          ))}
        </div>
      </div>
      <div className="flex flex-wrap gap-2">
        {project.technologies.map((tech => (
          <span key={tech}
            className="spanStyle"
          >
            {tech}
          </span>
        )))}
      </div>
    </div>
  )
}