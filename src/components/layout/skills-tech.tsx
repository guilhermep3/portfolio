"use client"
import { skillsData } from "@/data/skills-data";
import Image from "next/image";
import { motion } from "motion/react";

export const SkillsTech = () => {

  return (
    <div className="flex flex-col gap-14 w-full max-w-3xl">
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-5 justify-items-center mx-auto w-full">
        {skillsData.map((skill, i) => (
          <motion.div key={skill.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.04 + 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="group relative w-full max-w-[96px]"
          >
            <div
              className="relative flex justify-center items-center p-3 rounded-2xl cursor-pointer
                bg-[var(--background)]/90 backdrop:blur-lg border border-[var(--surface-border)]
                hover:border-[var(--primary)] hover:scale-105
                shadow-lg overflow-hidden transition-all duration-300"
            >
              <Image src={`/technologies/${skill.src}`} alt={skill.name}
                width={100} height={100}
                className="w-14 h-14 sm:w-16 sm:h-16 object-contain"
              />
              <div className="absolute inset-0 flex items-center justify-center px-2 text-xs text-center
                bg-[var(--background)]/90 backdrop:blur-lg border border-[var(--surface-border)]
                opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"
              >
                {skill.description}
              </div>
              {skill.intermediate && (
                <span className="absolute top-1.5 right-1.5 text-[9px] px-1.5 py-0.5 rounded-full font-semibold
                  bg-[#ff645026] border border-[#ff645066] text-[#ff8070]"
                >
                  Médio
                </span>
              )}
            </div>
            <p className="mt-2.5 text-xs text-center font-medium text-[var(--foreground-muted)]">
              {skill.name}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};