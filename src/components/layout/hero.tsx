import { buttonStyle, containerStyle } from "@/utils/styles"
import { Button } from "../button"

export const Hero = () => {

  return (
    <section id="hero"
      className="relative h-screen w-full bg-center bg-cover"
      style={{ backgroundImage: 'url("/hero-bg.jpg")' }}
    >
      <div className="absolute inset-0 bg-black/50 -z-[5]"></div>
      <div className={containerStyle + ' flex justify-center items-center flex-col z-10'}>
        <div className="absolute top-32 md:top-1/2 left-1/2 -translate-x-1/2 md:-translate-x-0 md:-left-28 md:-rotate-90
          flex justify-center items-center text-zinc-300 text-xs md:text-sm w-full md:w-fit"
        >
          <p>GP3</p><span className="w-2 md:w-3 h-2 md:h-3 bg-zinc-300 rounded-full mx-4"></span><p>Desenvolvedor Front-end</p>
        </div>
        <div className="flex justify-center items-center flex-col text-center">
          <p className="text-base md:text-lg font-semibold">Olá, eu sou o</p>
          <h1 className="text-5xl md:text-7xl font-extrabold">Guilherme Pereira</h1>
          <p className="text-sm md:text-base mt-4 mb-8 max-w-xl ">Desenvolvedor Front-End: Construindo Universos Digitais, Transformando Ideias em Realidade</p>
          <Button className={`${buttonStyle}`} shadow>Download CV</Button>
        </div>
      </div>
    </section>
  )
}