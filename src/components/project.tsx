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
      <div className="group flex flex-col gap-4 p-3 rounded-2xl cursor-pointer transition-all duration-300"
        style={{
          background: 'rgba(8,8,20,0.8)',
          border: '1px solid rgba(255,255,255,0.07)',
          backdropFilter: 'blur(16px)',
          boxShadow: '0 4px 24px rgba(0,0,0,0.4)',
        }}
        onClick={handleOpenModal}
        onMouseEnter={e => {
          (e.currentTarget as HTMLElement).style.borderColor = 'rgba(79,99,255,0.3)';
          (e.currentTarget as HTMLElement).style.boxShadow = '0 0 24px rgba(79,99,255,0.1), 0 8px 32px rgba(0,0,0,0.5)';
          (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)';
        }}
        onMouseLeave={e => {
          (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.07)';
          (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 24px rgba(0,0,0,0.4)';
          (e.currentTarget as HTMLElement).style.transform = '';
        }}
      >
        <div className="relative w-full rounded-xl overflow-hidden aspect-video">
          <Image src={`/projects/${project.image}`} alt={project.name ?? 'Projeto portfolio'}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            width={440} height={248}
          />
          <div className="absolute inset-0 flex justify-center items-center opacity-0
            group-hover:opacity-100 transition-opacity duration-300"
            style={{ background: 'rgba(2,2,10,0.65)', backdropFilter: 'blur(2px)' }}
          >
            <div className="p-3 rounded-full"
              style={{
                background: 'rgba(79,99,255,0.2)',
                border: '1px solid rgba(79,99,255,0.4)',
                boxShadow: '0 0 20px rgba(79,99,255,0.3)',
              }}
            >
              <Eye className="w-6 h-6" style={{ color: 'var(--foreground)' }} />
            </div>
          </div>
        </div>
        <div className="flex justify-between items-start gap-2 px-1">
          <p className="text-base md:text-lg font-bold leading-snug"
            style={{ color: 'var(--foreground)' }}
          >
            {project.name}
          </p>
          <div className="flex shrink-0 items-center gap-1 mt-0.5">
            {project.type.map((i, index) => (
              <span key={i} className="text-xs"
                style={{ color: 'var(--foreground-muted)' }}
              >
                {i}{index < project.type.length - 1 && <span className="mx-1" style={{ color: 'var(--foreground-muted)' }}>/</span>}
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