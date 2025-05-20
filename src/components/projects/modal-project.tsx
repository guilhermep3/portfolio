"use client"
import { useModalStore } from "@/store/modal-store"
import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";

export const ModalProject = () => {
   const { isModalOpen, modalProject, setIsModalOpen, setModalProject } = useModalStore();

   if (!isModalOpen) return;

   return (
      <>
      <div className="modal-bg"></div>
         <div className={`modal modal-project ${isModalOpen && 'showModal'}`}>
            <div className="modal-container-row">
               <div className="modal-project-left">
                  <img className="modal-project-image"
                     src={`/projects/${modalProject?.image}`}
                     alt={`projeto ${modalProject?.name}`}
                  />
               </div>
               <div className="modal-project-right">
                  <h1>{modalProject?.name}</h1>
                  <p>{modalProject?.description}</p>
                  <div className="modal-technologies">
                     {modalProject?.technologies.map((t) => (
                        <span key={t}>{t}</span>
                     ))}
                  </div>
                  <div className="modal-buttons">
                     <div className="modal-buttons-right">
                        <Link href={modalProject?.url!} target="_blank"
                           className="btn uppercase">Acessar</Link>
                        <Link href={modalProject?.github!} className="modal-github">
                           <FaGithub />
                        </Link>
                     </div>
                     <button className="back-btn" onClick={() => { setModalProject(null), setIsModalOpen(false) }}>Fechar</button>
                  </div>
               </div>
            </div>
         </div>
      </>
   )
}