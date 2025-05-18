"use client"
import ParticlesComponent from "../particles"

export const Hero = () => {

   return (
      <section id="hero" className="container-center">
         <ParticlesComponent id="particles" />
         <span className="hello-world" data-aos="fade-top">Hello World!</span>
         <span className="" data-aos="fade-top">Eu sou o</span>
         <h1 className="" data-aos="fade-top">Guilherme Pereira</h1>
         <h2 className="" data-aos="fade-bottom">Desenvolvedor Front-End</h2>
         <a href="src/curriculo/curriculo-guilherme-pereira.pdf"
            data-aos="fade-bottom"
            className="btn uppercase"
            download="curriculo-guilherme-pereira">Download CV</a>
      </section>
   )
}