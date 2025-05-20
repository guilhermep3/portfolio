import { projectType } from "@/data/projects"
import { FaEye } from "react-icons/fa"
import { useModalStore } from "@/store/modal-store"

type props = {
   project: projectType;
}
export const Project = ({ project }: props) => {
   const { setIsModalOpen, setModalProject, isModalOpen, modalProject } = useModalStore()

   function handleProjectClicked() {
      setIsModalOpen(true);
      setModalProject(project)
      console.log('clicou')
      console.log('isModalOpen: ', isModalOpen)
      console.log('modalProject: ', modalProject)
   };

   return (
      <div className="project" data-name={project.name}
         onClick={handleProjectClicked}
      >
         <div className="project-image-div">
            <img className="project-image" src={`/projects/${project.image}`} alt={'projeto ' + project.name} />
            <div className="maximize-div">
               <FaEye />
            </div>
         </div>
         <div className="project-infos">
            <div className="project-name-div">
               <p className="project-name">{project.name}</p>
               <span style={{fontSize: '14px'}}>{project.type}</span>
            </div>
            <div className="project-infos-bottom">
               {project.technologies.map((t) => (
                  <span key={t}>{t}</span>
               ))}
            </div>
         </div>
      </div>
   )
}