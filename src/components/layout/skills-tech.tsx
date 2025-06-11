"use client"
import { skillsData } from "@/data/skills-data";
import { bgGradient } from "@/utils/styles";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export const SkillsTech = () => {
  const [defaultText, setDefaultText] = useState('');
  const [currentText, setCurrentText] = useState(defaultText);
  useEffect(() => {
    if (window) {
      setDefaultText(typeof window !== undefined && window.innerWidth > 768
        ? "*Passe o mouse em cima do card*"
        : "*Clique no card*");
    };
  }, []);

  const skillRef = useRef<HTMLDivElement | null>(null);
  const skillText = useRef<HTMLDivElement | null>(null);

  return (
    <div className="flex flex-col gap-14 w-full max-w-3xl">
      <p ref={skillText} className="text-center md:text-lg h-16 mt-10">{currentText}</p>
      <div className="grid grid-cols-3 sm:grid-cols-4 gap-6 justify-items-center mx-auto">
        {skillsData.map((skill) => (
          <div key={skill.name} ref={skillRef}
            className={bgGradient+' flex justify-center items-center w-fit p-4 md:p-6 rounded-lg border border-zinc-500 hover:border-[var(--primary-color)]'}
            data-aos={"fade-up"}
            onMouseEnter={() => {
              setCurrentText(skill.text)
            }}
            onMouseLeave={() => {
              setCurrentText(defaultText)
            }}
          >
            <Image src={`/languages/${skill.src}`} alt={skill.name}
              width={80} height={80} className="w-14 sm:w-20"
            />
          </div>
        ))}
      </div>
    </div>
  )
}