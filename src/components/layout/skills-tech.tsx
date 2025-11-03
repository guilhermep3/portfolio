"use client"
import { skillsData } from "@/data/skills-data";
import { bgGradient } from "@/utils/styles";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export const SkillsTech = () => {
  const [defaultText, setDefaultText] = useState("*Passe o mouse em cima do card*");
  const [currentText, setCurrentText] = useState(defaultText);
  const skillText = useRef<HTMLDivElement | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setDefaultText(isMobile ? "*Clique no card*" : "*Passe o mouse em cima do card*");

    function handleResize() {
      setDefaultText(isMobile ? "*Clique no card*" : "*Passe o mouse em cima do card*");
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="flex flex-col gap-14 w-full max-w-3xl -mt-10">
      <p ref={skillText} className="text-center md:text-lg h-16 mt-10">{currentText}</p>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-6 justify-items-center mx-auto">
        {skillsData.map((skill) => (
          <div key={skill.name} data-aos="fade-up">
            <div
              className={`relative flex justify-center items-center w-20 sm:w-24 h-20 sm:h-24 p-2 md:p-3 rounded-lg
                cursor-crosshair transition-all duration-300
                overflow-hidden ${bgGradient}
              `}
              onMouseEnter={() => !isMobile && setCurrentText(skill.text)}
              onMouseLeave={() => !isMobile && setCurrentText(defaultText)}
              onClick={() => setCurrentText(skill.text)}
            >
              <Image src={`/technologies/${skill.src}`}
                alt={skill.name}
                width={80} height={80}
                className="w-full h-full"
              />
              {skill.begginer && (
                <span className="absolute -bottom-0 bg-red-600 text-xs text-center w-full">Iniciante</span>
              )}
            </div>
          </div>

        ))}
      </div>
    </div>
  )
}