"use client"
import { skillsData } from "@/data/skills-data";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export const SkillsTech = () => {
  const [defaultText, setDefaultText] = useState("*Passe o mouse em cima do card*");
  const [currentText, setCurrentText] = useState(defaultText);
  const skillText = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (typeof window !== undefined) {
      const isMobile = window.innerWidth <= 768;
      setDefaultText(isMobile ? "*Clique no card*" : "*Passe o mouse em cima do card*");

      function handleResize() {
        setDefaultText(isMobile ? "*Clique no card*" : "*Passe o mouse em cima do card*");
      };

      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []);

  return (
    <div className="flex flex-col gap-14 w-full max-w-3xl -mt-10">
      <p ref={skillText} className="text-center md:text-lg h-16 mt-10">{currentText}</p>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-6 justify-items-center mx-auto">
        {skillsData.map((skill) => (
          <div key={skill.name} data-aos="fade-up">
            <div
              className="flex justify-center items-center w-20 sm:w-28 h-20 sm:h-28 p-3 md:p-4 rounded-lg border
                border-zinc-500 hover:border-[var(--primary-color)] cursor-crosshair transition-all duration-300
                bg-[linear-gradient(to_right,_#10101b,_#27272a,_#10101b)]
                hover:bg-[linear-gradient(to_right,_#151524,_#45454e,_#151524)]
              "
              onMouseEnter={() => setCurrentText(skill.text)}
              onMouseLeave={() => setCurrentText(defaultText)}
            >
              <div className="relative w-20 h-20 p-0">
                <Image src={`/technologies/${skill.src}`}
                  alt={skill.name}
                  width={80} height={80}
                  className="w-full h-full"
                />
                {skill.begginer && (
                  <span className="absolute -bottom-5 bg-red-600 text-xs text-center w-full">Iniciante</span>
                )}
              </div>
            </div>
          </div>

        ))}
      </div>
    </div>
  )
}