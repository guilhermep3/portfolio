import { useModalStore } from "@/store/modalStore";
import { projectType } from "@/utils/types"
import { Eye } from "lucide-react";
import Image from "next/image";
import { motion } from "motion/react"

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
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="cardStyle flex-col group p-3 hover:scale-102 cursor-pointer"
        onClick={handleOpenModal}
      >
        <div className="relative w-full rounded-xl overflow-hidden aspect-video">
          <Image src={`/projects/${project.image}`} alt={project.name ?? 'Projeto portfolio'}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            width={440} height={248}
          />
          <div className="absolute inset-0 flex justify-center items-center opacity-0
            group-hover:opacity-100 transition-opacity duration-300 bg-[var(--background)]/75"
            style={{ backdropFilter: 'blur(2px)' }}
          >
            <div className="p-3 rounded-full bg-[var(--primary-glow)] border border-[var(--primary)]">
              <Eye className="w-6 h-6 text-[var(--foreground)]" />
            </div>
          </div>
        </div>
        <div className="flex justify-between items-start gap-2 px-1">
          <p className="text-base md:text-lg font-bold leading-snug text-[var(--foreground)]"
          >
            {project.name}
          </p>
          <div className="flex shrink-0 items-center gap-1 mt-0.5">
            {project.type.map((i, index) => (
              <span key={i} className="text-xs text-[var(--foreground-muted)]"
              >
                {i}{index < project.type.length - 1 && (
                  <span className="mx-1 text-[var(--foreground-muted)]">/</span>
                )}
              </span>
            ))}
          </div>
        </div>
        <div className="flex flex-wrap gap-1.5 px-1 pb-1">
          {project.technologies.map((tech) => (
            <span key={tech} className="spanStyle">{tech}</span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}