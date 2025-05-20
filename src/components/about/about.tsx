"use client"

import { FaGithub, FaLinkedin } from "react-icons/fa"

export const About = () => {

   return (
      <section id="about">
         <div className="container-row about-content">
            <div className="about-image">
               <img src="/about-me.svg" alt="sobre mim" />
            </div>
            <div className="about-text">
               <h1 className="section-title">Sobre mim</h1>
               <p>
                  Meu nome é Guilherme Pereira e sou desenvolvedor front-end, com foco na criação de interfaces
                  modernas,
                  responsivas e intuitivas. Me dedico diariamente ao aprimoramento de minhas habilidades com
                  React, Next.js, TypeScript, JavaScript, Css e outras tecnologias. Além disso, estou sempre em busca de
                  novos
                  projetos desafiadores, buscando aprimorar constantemente minha capacidade de resolver problemas e
                  entregar soluções de qualidade.
               </p>
               <div className="about-socialmedias">
                  <a href="https://www.linkedin.com/in/guilherme-pereira3" target="_blank"
                     data-aos="fade-down"
                  >
                     <FaLinkedin />
                  </a>
                  <a href="https://github.com/guilhermep3" target="_blank"
                     data-aos="fade-down"
                  >
                     <FaGithub />
                  </a>
               </div>
            </div>
         </div>
      </section>
   )
}