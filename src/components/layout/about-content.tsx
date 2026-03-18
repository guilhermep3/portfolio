"use client"
import { aboutData } from "@/data/about-data"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { motion } from "motion/react"

const paragraphs = [
  "Sou desenvolvedor front-end em evolução para fullstack, com foco em Next.js e TypeScript, criando interfaces modernas, responsivas e orientadas à melhor experiência do usuário.",
  "Desenvolvo aplicações com código limpo, soluções intuitivas e integração eficiente com APIs, garantindo organização, performance e compatibilidade com o back-end.",
  "Atualmente, estou expandindo meus conhecimentos para o back-end, estudando Node.js, SQL e conceitos de APIs e autenticação.",
  "Estou em constante aprendizado, ampliando meus conhecimentos em back-end e evoluindo como desenvolvedor.",
]

export const AboutContent = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  return (
    <div className="flex flex-col lg:flex-row gap-10 z-10">
      <div className="flex-1 flex flex-col gap-5 justify-center items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.2, y: 40 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 1 }}
          className="righteous w-full text-2xl md:text-3xl xl:text-4xl font-bold text-center lg:text-start tracking-wide"
        >
          <p>Descubra mais<br className="my-1" /> Sobre mim</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.2, y: 40 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 1 }}
          className="flex flex-col text-sm lg:text-[0.95rem] leading-relaxed text-zinc-300"
        >
          {paragraphs.map((text, index) => (
            <p key={index}
              className={`py-2 pl-2 border-l-2 transition-all duration-200
                ${activeIndex === null || activeIndex === index
                  ? "text-foreground border-[var(--primary-color)]"
                  : "text-zinc-300 border-transparent"
                }`}
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
            >
              {text}
            </p>
          ))}
        </motion.div>
      </div>
      <div className="flex-1 flex flex-col justify-center items-start gap-8 z-20">
        <div className="w-full">
          <motion.div
            initial={{ opacity: 0, scale: 0.2, y: 40 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 1 }}
          >
            <p className="text-xs sm:text-sm uppercase tracking-[0.25em] text-foreground mb-3 font-semibold"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Formação
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.2, y: -40 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 1 }}
            className="group"
          >
            <Link href={"https://b7web.com.br/"} target="_blank"
              className="bgGradient flex justify-between items-center gap-2 transition p-3 rounded-md">
              <div className="flex gap-3 items-center">
                <Image src="/b7web_logo.png" alt="b7web"
                  width={40} height={40}
                  className="w-10 h-10 rounded-md"
                />
                B7Web
              </div>
              <div className="text-xs text-zinc-300 bg-zinc-900 py-1 px-2 rounded-full border border-zinc-500 group-hover:border-[var(--primary-color)] transition-all duration-200">
                Desenvolvimento Web
              </div>
            </Link>
          </motion.div>
        </div>
        <div className="w-full">
          <motion.div
            initial={{ opacity: 0, scale: 0.2, y: -0 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 1 }}
          >
            <p className="text-xs sm:text-sm uppercase tracking-[0.25em] text-foreground mb-3 font-semibold"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Principais destaques
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
            {aboutData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.2, y: -40 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 1 }}
              >
                <div className="bgGradient p-4 flex items-center gap-2 rounded-lg transition-all duration-300">
                  {item.icon}
                  <p>{item.title}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}