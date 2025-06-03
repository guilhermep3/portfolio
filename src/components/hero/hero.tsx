"use client"
import ParticlesBackground from "@/components/particles"

export const Hero = () => {

   return (
      <section id="hero">
         <div className="container-particles">
            <ParticlesBackground />
         </div>
         <div className="container-center" style={{ position: 'relative' }}>
            <div className="hero-div">
               <span data-aos="fade-down">Hello World!</span>
               <span data-aos="fade-down">Eu sou o</span>
            </div>
            <div className="hero-div">
               <h1 className="" data-aos="fade-up">Guilherme Pereira</h1>
               <h2 className="" data-aos="fade-up">Desenvolvedor Front-End</h2>
            </div>
            <a href="/curriculo-guilherme-pereira-dev.pdf"
               data-aos="fade-down"
               className="btn uppercase"
               download="curriculo-guilherme-pereira-dev"
            >
               Download CV
            </a>
         </div>
      </section>
   )
}