import { Github, Linkedin } from "lucide-react"
import Link from "next/link"
import { Divider } from "../svg/divider"
import { LinkIcon } from "../link-icon"
import { motion } from "motion/react"

export const Hero = () => {

  return (
    <section id="hero" className="relative h-screen w-full bg-center bg-cover overflow-hidden">
      <div className="absolute bottom-0 -left-1/2 translate-x-1/5 w-[150%] sm:left-0 sm:w-full sm:translate-x-0 rotate-180">
        <Divider />
      </div>
      <div className="absolute inset-0 h-screen w-full bg-center bg-cover"
        style={{ backgroundImage: 'url("/wavy_background_blue_green.jpg")', zIndex: -2 }}>
      </div>
      <div className="absolute inset-0 z-[-1]"
        style={{ background: 'linear-gradient(to bottom, rgba(2,2,10,0.4) 0%, rgba(2,2,10,0.1) 40%, rgba(2,2,10,0.7) 100%)' }}
      />
      <div className="absolute top-32 md:top-1/2 left-1/2 -translate-x-1/2 md:-translate-x-0 md:-left-24 md:-rotate-90
        flex justify-center items-center text-xs md:text-sm w-full md:w-fit gap-4"
        style={{ color: 'var(--foreground-muted)' }}
      >
        <p className="font-semibold tracking-widest uppercase text-xs">GP3</p>
        <span className="w-1.5 h-1.5 rounded-full"
          style={{ background: 'var(--secondary-bright)', boxShadow: '0 0 8px var(--secondary-bright)' }}
        />
        <p className="tracking-widest uppercase text-xs">Desenvolvedor Front-end</p>
      </div>
      <div className="containerStyle relative flex justify-center items-center flex-col z-10">
        <div className="flex justify-center items-center flex-col gap-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8 }}
          >
            <p className="labelStyle">Olá, eu sou o</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: -30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="righteous text-5xl md:text-8xl font-extrabold tracking-tight"
              style={{
                background: 'var(--gradient-text)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Guilherme Pereira
            </h1>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.8 }}
          >
            <p className="text-sm md:text-base mt-2 mb-8 max-w-md leading-relaxed"
              style={{ color: 'var(--foreground-muted)' }}
            >
              Desenvolvedor Front-End. Construindo Universos Digitais,<br />
              Transformando Ideias em Realidade
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <Link href={'/curriculo-guilherme-pereira-dev.pdf'}
              download={'curriculo-guilherme-pereira-dev'}
              className="buttonStyle boxShadowStyle"
            >
              Download CV
            </Link>
          </motion.div>
        </div>
        <div className="absolute bottom-10 md:bottom-20 right-5 flex gap-3">
          <LinkIcon Icon={Linkedin} href="https://www.linkedin.com/in/guilherme-pereira3/" />
          <LinkIcon Icon={Github} href="https://github.com/guilhermep3" />
        </div>
      </div>
    </section>
  )
}