"use client"
import { skillsData } from "@/data/skills-data";
import Image from "next/image";
import { motion } from "motion/react";

export const SkillsTech = () => {
  return (
    <div className="flex flex-col gap-14 w-full max-w-3xl">
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-6 justify-items-center mx-auto">
        {skillsData.map((skill) => (
          <motion.div key={skill.name}
            initial={{ opacity: 0, scale: 0.4, y: 40 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="group relative">
            <div
              className="relative flex justify-center items-center p-3 rounded-2xl cursor-pointer
              bg-black/50 backdrop-blur-md border border-zinc-500/50 shadow-lg overflow-hidden
                hover:border-[var(--primary-color)] group-hover:scale-105 group-hover:shadow-blue-500/20
                transition-all duration-300"
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
                <span
                  className="absolute top-1 right-1 bg-red-500/90 text-[10px] px-2 py-0.5 rounded-full text-white"
                >
                  Médio
                </span>
              )}
            </div>
            <p className="mt-2 text-sm text-center text-gray-300">
              {skill.name}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
