"use client"
import { useModalStore } from "@/store/modalStore";
import { Github, X } from "lucide-react";
import Link from "next/link";
import { LinkIcon } from "./link-icon";

export const Modal = () => {
  const { isModalOpen, modalProject, setIsModalOpen, setModalProject } = useModalStore();

  if (!isModalOpen || !modalProject) return;

  const handleClose = () => { setModalProject(null); setIsModalOpen(false); };

  return (
    <div className={`fixed inset-0 z-40 flex justify-center items-center p-4 transition-all duration-300
      bg-[var(--background)]/80
      ${isModalOpen ? 'visible opacity-100' : 'invisible opacity-0 pointer-events-none'}`}
      style={{ backdropFilter: 'blur(8px)' }}
      onClick={(e) => e.target === e.currentTarget && handleClose()}
    >
      <div className={`w-full max-w-5xl rounded-2xl overflow-hidden transition-all duration-300
        bg-[var(--bg-card)] border border-[var(--surface-2)]
        ${isModalOpen ? 'translate-y-0 scale-100' : 'translate-y-8 scale-95'}`}
      >
        <div className="flex justify-center items-center flex-col md:flex-row pl-0 md:pl-5">
          <div className="flex-1 max-w-2xl overflow-hidden border-r border-[var(--surface-border)]">
            <img className="w-full h-full object-cover"
              src={`/projects/${modalProject?.image}`}
              alt={`projeto ${modalProject?.name}`}
            />
          </div>
          <div className="flex-1 flex flex-col gap-5 p-6 md:p-8">
            <div className="flex justify-between items-start">
              <h1 className="text-xl md:text-2xl font-bold pr-4 text-[var(--foreground)]">
                {modalProject?.name}
              </h1>
              <button
                onClick={handleClose}
                className="shrink-0 p-2 rounded-lg transition-all duration-200 bg-[var(--surface-2)]
                  border border-[var(--surface-border)] cursor-pointer
                  hover:bg-[var(--surface-border)] hover:border-[var(--surface-border-hover)]"
              >
                <X size={16} className="text-[var(--foreground-muted)]" />
              </button>
            </div>
            <p className="text-sm leading-relaxed text-[var(--foreground-muted)]">
              {modalProject?.description}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {modalProject?.technologies.map((t) => (
                <span key={t} className="spanStyle">{t}</span>
              ))}
            </div>
            <div className="flex items-center gap-3 pt-2">
              <Link href={modalProject?.url!}
                target="_blank"
                className="buttonStyle"
              >
                Acessar projeto
              </Link>
              <LinkIcon href="https://github.com/guilhermep3"
                Icon={Github}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}