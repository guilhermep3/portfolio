"use client"
import { skillsData } from "@/data/skills-data";
import Image from "next/image";

export const SkillsTech = () => {
  return (
    <div className="flex flex-col gap-14 w-full max-w-3xl">
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-6 justify-items-center mx-auto">
        {skillsData.map((skill) => (
          <div key={skill.name} data-aos="fade-up" className="group relative">
            <div
              className="relative flex justify-center items-center p-3 rounded-2xl
              bg-black/20 backdrop-blur-md border border-zinc-500/50 shadow-lg overflow-hidden cursor-pointer
              transition-all duration-300 group-hover:scale-105 group-hover:shadow-indigo-500/30"
            >
              <Image src={`/technologies/${skill.src}`} alt={skill.name}
                width={100} height={100}
                className="w-14 h-14 sm:w-20 sm:h-20 object-contain"
              />
              <div
                className="absolute inset-0 flex items-center justify-center bg-black/80 text-xs text-center px-2
                opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                {skill.description}
              </div>
              {skill.intermediate && (
                <span className="absolute top-1 right-1 bg-red-500/90 text-[10px] px-2 py-0.5 rounded-full text-white">
                  Médio
                </span>
              )}
            </div>
            <p className="mt-2 text-sm text-center text-gray-300">
              {skill.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
