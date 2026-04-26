"use client"
import { useModalStore } from "@/store/modalStore";
import { Github, X } from "lucide-react";
import Link from "next/link";

export const Modal = () => {
  const { isModalOpen, modalProject, setIsModalOpen, setModalProject } = useModalStore();

  if (!isModalOpen || !modalProject) return;

  const handleClose = () => { setModalProject(null); setIsModalOpen(false); };

  return (
    <div className={`fixed inset-0 z-40 flex justify-center items-center p-4 transition-all duration-300
      ${isModalOpen ? 'visible opacity-100' : 'invisible opacity-0 pointer-events-none'}`}
      style={{ background: 'rgba(2,2,10,0.85)', backdropFilter: 'blur(8px)' }}
      onClick={(e) => e.target === e.currentTarget && handleClose()}
    >
      <div className={`w-full max-w-5xl rounded-2xl overflow-hidden transition-all duration-300
        ${isModalOpen ? 'translate-y-0 scale-100' : 'translate-y-8 scale-95'}`}
        style={{
          background: 'rgba(10,10,24,0.98)',
          border: '1px solid rgba(255,255,255,0.1)',
          boxShadow: '0 24px 80px rgba(0,0,0,0.8), 0 0 0 1px rgba(79,99,255,0.1)',
        }}
      >
        <div className="flex justify-center items-center flex-col md:flex-row pl-0 md:pl-5">
          <div className="flex-1 max-w-2xl overflow-hidden"
            style={{ borderRight: '1px solid rgba(255,255,255,0.07)' }}
          >
            <img className="w-full h-full object-cover"
              src={`/projects/${modalProject?.image}`}
              alt={`projeto ${modalProject?.name}`}
            />
          </div>
          <div className="flex-1 flex flex-col gap-5 p-6 md:p-8">
            <div className="flex justify-between items-start">
              <h1 className="text-xl md:text-2xl font-bold pr-4" style={{ color: 'var(--foreground)' }}>
                {modalProject?.name}
              </h1>
              <button
                onClick={handleClose}
                className="shrink-0 p-2 rounded-lg transition-all duration-200"
                style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}
                onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.1)')}
                onMouseLeave={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.05)')}
              >
                <X size={16} style={{ color: 'var(--foreground-muted)' }} />
              </button>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--foreground-muted)' }}>
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
              <Link href={modalProject?.github!}
                target="_blank"
                className="p-2.5 rounded-xl transition-all duration-200"
                style={{
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.1)',
                }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = 'rgba(79,99,255,0.4)')}
                onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)')}
              >
                <Github size={18} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}