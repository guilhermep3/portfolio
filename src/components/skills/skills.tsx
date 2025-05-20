"use client"
import { skillsData } from "@/data/skill-data"
import { useEffect, useRef, useState } from "react"

export const Skills = () => {
   const [defaultText, setDefaultText] = useState('');

   useEffect(() => {
      if (window) {
         setDefaultText(typeof window !== undefined && window.innerWidth > 768
            ? "*Passe o mouse em cima do card*"
            : "*Clique no card*");
      };
   }, []);

   const [currentText, setCurrentText] = useState(defaultText);
   const skillRef = useRef<HTMLDivElement | null>(null);
   const skillText = useRef<HTMLDivElement | null>(null);

   return (
      <section id="skills">
         <div className="container-row skills-content">
            <div className="skills-left">
               <h1 className="section-title">Habilidades</h1>
               <p ref={skillText} className="skill-text">{currentText}</p>
            </div>
            <div className="skills-right">
               <div className="skills">
                  {skillsData.map((skill) => (
                     <div key={skill.name} ref={skillRef}
                        className="skill"
                        data-aos={"fade-up"}
                        onMouseEnter={() => {
                           setCurrentText(skill.text)
                        }}
                        onMouseLeave={() => {
                           setCurrentText(defaultText)
                        }}
                     >
                        <img src={`languages/${skill.src}`} alt={skill.name} />
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </section>
   )
}