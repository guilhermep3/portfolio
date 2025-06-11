"use client"
import { useModalStore } from "@/store/modalStore";
import { buttonStyle } from "@/utils/styles";
import { Github } from "lucide-react";
import Link from "next/link";

export const Modal = () => {
  const { isModalOpen, modalProject, setIsModalOpen, setModalProject } = useModalStore();

  if (!isModalOpen || !modalProject) return;

  return (
    <div className={`fixed inset-0 bg-black/50 z-40 flex justify-center items-center p-2 transition duration-300
     ${isModalOpen ? 'visible opacity-100 pointer-events-auto' : 'invisible opacity-0 pointer-events-none'}`}
    >
      <div className={`p-4 bg-zinc-900 rounded-xl transition duration-300 ${isModalOpen ? 'translate-y-0' : 'translate-y-full'}`}>
        <div className="flex justify-center items-center flex-col md:flex-row gap-6 max-w-5xl">
          <div className="flex-1 max-w-2xl rounded-lg overflow-hidden bg-amber-990">
            <img className="w-full"
              src={`/projects/${modalProject?.image}`}
              alt={`projeto ${modalProject?.name}`}
            />
          </div>
          <div className="flex-1 flex flex-col gap-4 modal-project-right">
            <h1 className="text-xl md:text-2xl font-bold">{modalProject?.name}</h1>
            <p>{modalProject?.description}</p>
            <div className="flex flex-wrap gap-2">
              {modalProject?.technologies.map((t) => (
                <span key={t} className="text-sm px-2 py-1 bg-zinc-800 shadow-md">{t}</span>
              ))}
            </div>
            <div className="flex justify-between">
              <div className="flex items-center gap-4">
                <Link href={modalProject?.url!}
                  target="_blank"
                  className={buttonStyle}
                >
                  Acessar
                </Link>
                <Link href={modalProject?.github!}
                  target="_blank"
                  className="bg-zinc-800 p-2 rounded-full"
                >
                  <Github />
                </Link>
              </div>
              <button className="cursor-pointer"
                onClick={() => { setModalProject(null), setIsModalOpen(false) }}
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}