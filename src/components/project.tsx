import { useModalStore } from "@/store/modalStore";
import { bgGradient, bgGradientHover, bgGradientOpaque } from "@/utils/styles"
import { projectType } from "@/utils/types"
import { Eye } from "lucide-react";
import Image from "next/image";

type props = {
  project: projectType;
}
export const Project = ({ project }: props) => {
  const { setModalProject, setIsModalOpen } = useModalStore();

  function handleOpenModal(id: number) {
    setModalProject(project);
    setIsModalOpen(true);
  };

  return (
    <div onClick={() => handleOpenModal(project.id)} className={`${bgGradient} group p-2 md:p-4 border border-zinc-600 rounded-lg flex flex-col gap-4 
      cursor-pointer hover:border-zinc-400 hover:${bgGradientHover} transition duration-300`}
    >
      <div className="relative w-full rounded-lg overflow-hidden">
        <Image src={`/projects/${project.image}`} alt={project.name ?? 'Portfolio desenvolvedor'}
          width={440} height={440} className="w-full object-cover group-hover:scale-110 transition duration-300"
        />
        <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 bg-black/70 transition duration-300">
          <Eye className="w-8 h-8" />
        </div>
      </div>
      <div className="flex justify-between items-center gap-2">
        <p className="text-lg md:text-xl font-bold">{project.name}</p>
        <p className="text-sm md:text-base">{project.type}</p>
      </div>
      <div className="flex flex-wrap gap-2">
        {project.technologies.map((tech => (
          <span key={tech} className="text-sm p-1 bg-zinc-800 rounded-sm">{tech}</span>
        )))}
      </div>
    </div>
  )
}