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
              className="relative flex justify-center items-center p-3 rounded-2xl cursor-pointer overflow-hidden transition-all duration-300"
              style={{
                background: 'rgba(0,0,0,0.55)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255,255,255,0.07)',
                boxShadow: '0 4px 24px rgba(0,0,0,0.4)',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(79,99,255,0.5)';
                (e.currentTarget as HTMLElement).style.boxShadow = '0 0 20px rgba(79,99,255,0.2), 0 4px 24px rgba(0,0,0,0.4)';
                (e.currentTarget as HTMLElement).style.transform = 'translateY(-3px) scale(1.04)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.07)';
                (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 24px rgba(0,0,0,0.4)';
                (e.currentTarget as HTMLElement).style.transform = '';
              }}
            >
              <Image src={`/technologies/${skill.src}`} alt={skill.name}
                width={100} height={100}
                className="w-14 h-14 sm:w-16 sm:h-16 object-contain"
              />
              <div
                className="absolute inset-0 flex items-center justify-center px-2 text-xs text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"
                style={{ background: 'rgba(2,2,10,0.88)', color: 'var(--foreground-muted)' }}
              >
                {skill.description}
              </div>
              {skill.intermediate && (
                <span className="absolute top-1.5 right-1.5 text-[9px] px-1.5 py-0.5 rounded-full font-semibold"
                  style={{
                    background: 'rgba(255,100,80,0.15)',
                    border: '1px solid rgba(255,100,80,0.4)',
                    color: '#ff8070',
                  }}
                >
                  Médio
                </span>
              )}
            </div>
            <p className="mt-2.5 text-xs text-center font-medium"
              style={{ color: 'var(--foreground-muted)' }}
            >
              {skill.name}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};