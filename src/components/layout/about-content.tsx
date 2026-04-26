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
    <div className="flex flex-col lg:flex-row gap-16 z-10">
      <div className="flex-1 flex flex-col gap-8 justify-center items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.2, y: 40 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 1 }}
          className="w-full"
        >
          <p className="righteous text-2xl md:text-3xl xl:text-4xl font-bold text-center lg:text-start tracking-wide leading-tight"
            style={{ color: 'var(--foreground)' }}
          >
            Descubra mais<br className="my-1" /> Sobre mim
          </p>
          <div className="accentLine mt-4 mx-auto lg:mx-0" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.2, y: 40 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="flex flex-col gap-3 w-full"
        >
          {paragraphs.map((text, index) => (
            <p key={index}
              className="py-3 pl-4 rounded-r-lg text-sm lg:text-[0.9rem] leading-relaxed border-l-2 transition-all duration-300 cursor-default"
              style={{
                borderColor: activeIndex === null || activeIndex === index
                  ? 'var(--primary)'
                  : 'transparent',
                color: activeIndex === null || activeIndex === index
                  ? 'var(--foreground)'
                  : 'var(--foreground-muted)',
                background: activeIndex === index
                  ? 'rgba(79, 99, 255, 0.04)'
                  : 'transparent',
              }}
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
            >
              {text}
            </p>
          ))}
        </motion.div>
      </div>
      <div className="flex-1 flex flex-col justify-center items-start gap-10 z-20">
        <div className="w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mb-4"
          >
            <p className="labelStyle">Formação</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="group"
          >
            <Link href={"https://b7web.com.br/"} target="_blank"
              className="bgGradient flex justify-between items-center gap-3 p-4 rounded-xl"
            >
              <div className="flex gap-4 items-center">
                <div className="p-1 rounded-lg"
                  style={{ background: 'rgba(79,99,255,0.1)', border: '1px solid rgba(79,99,255,0.2)' }}
                >
                  <Image src="/b7web_logo.png" alt="b7web"
                    width={40} height={40}
                    className="w-9 h-9 rounded-md"
                  />
                </div>
                <div>
                  <p className="font-semibold text-sm" style={{ color: 'var(--foreground)' }}>B7Web</p>
                  <p className="text-xs mt-0.5" style={{ color: 'var(--foreground-muted)' }}>Plataforma de ensino</p>
                </div>
              </div>
              <span className="spanStyle shrink-0">Desenvolvimento Web</span>
            </Link>
          </motion.div>
        </div>
        <div className="w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mb-4"
          >
            <p className="labelStyle">Principais destaques</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 w-full">
            {aboutData.map((item, index) => (
              <motion.div key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index + 0.2, duration: 0.7 }}
              >
                <div className="bgGradient p-4 flex items-center gap-3 rounded-xl group">
                  <div className="shrink-0 p-2 rounded-lg transition-all duration-300"
                    style={{
                      background: 'rgba(79,99,255,0.1)',
                      border: '1px solid rgba(79,99,255,0.15)',
                    }}
                  >
                    {item.icon}
                  </div>
                  <p className="text-sm font-medium" style={{ color: 'var(--foreground)' }}>{item.title}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}