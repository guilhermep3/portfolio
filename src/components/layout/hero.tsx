import { buttonStyle, containerStyle } from "@/utils/styles"
import { Button } from "../button"
import { Github, Linkedin } from "lucide-react"
import Link from "next/link"

export const Hero = () => {

  return (
    <section id="hero"
      className="relative h-screen w-full bg-center bg-cover"
      style={{ backgroundImage: 'url("/hero-bg.jpg")' }}
    >
      <div className="absolute left-0 right-0 bottom-0 h-1/2 bg-[linear-gradient(to_bottom,_#00000000,_#000000bb)] z-0"></div>
      <div className="absolute top-32 md:top-1/2 left-1/2 -translate-x-1/2 md:-translate-x-0 md:-left-24 md:-rotate-90
          flex justify-center items-center text-zinc-300 text-xs md:text-sm w-full md:w-fit"
      >
        <p>GP3</p><span className="w-2 md:w-3 h-2 md:h-3 bg-zinc-300 rounded-full mx-4"></span><p>Desenvolvedor Front-end</p>
      </div>
      <div className={containerStyle + ' relative flex justify-center items-center flex-col z-10'}>
        <div className="flex justify-center items-center flex-col text-center">
          <p className="text-base md:text-lg font-semibold">Olá, eu sou o</p>
          <h1 className="orbitron text-5xl md:text-7xl font-extrabold">Guilherme Pereira</h1>
          <p className="text-sm md:text-base mt-4 mb-8 max-w-xl ">Desenvolvedor Front-End: Construindo Universos Digitais, Transformando Ideias em Realidade</p>
          <Button className={`${buttonStyle}`} shadow>Download CV</Button>
        </div>
        <div className="absolute bottom-10 right-5 flex gap-4">
          <Link href={'https://www.linkedin.com/in/guilherme-pereira3/'}
            target="_blank"
            className="p-2 bg-black/50 rounded-full cursor-pointer boxShadowSM  transition duration-300"
          >
            <Linkedin />
          </Link>
          <Link href={'https://github.com/guilhermep3'}
            target="_blank"
            className="p-2 bg-black/50 rounded-full cursor-pointer boxShadowSM  transition duration-300"
          >
            <Github />
          </Link>
        </div>
      </div>
    </section>
  )
}