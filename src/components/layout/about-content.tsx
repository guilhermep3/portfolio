import { aboutData } from "@/data/about-data"
import Image from "next/image"
import Link from "next/link"

export const AboutContent = () => {

  return (
    <div className="flex flex-col lg:flex-row gap-10 z-10">
      <div className="flex-1 flex flex-col gap-5 justify-center items-center">
        <div data-aos={'zoom-in'} className="orbitron w-full text-2xl md:text-3xl xl:text-4xl font-bold text-center lg:text-start tracking-wide">
          <p>Descubra mais<br className="my-1" /> Sobre mim</p>
        </div>
        <div data-aos="zoom-in" className="text-sm lg:text-base text-center md:text-start text-zinc-300">
          <p>
            Sou desenvolvedor front-end com foco em criação de interfaces modernas e funcionais para web, com ênfase na integração e consumo de API.
          </p>
          <p>
            Ao desenvolver, sempre opto por soluções intuitivas e funcionais, garantino uma boa experiência de usuário (UI/UX). Além de sempre utlizar a lógica da programação e trazer total compatibilidade com o back-end.
            Busco sempre estudar para entregar o melhor resultado possível em cada projeto, evoluindo de maneira constante.
          </p>
          <p>
            Estou disponível para oportunidades profissionais de trabalho, para evoluir junto do time de desenvolvedores.
          </p>
        </div>
      </div>
      <div className="flex-1 flex flex-col justify-center items-start gap-8 z-20">
        <div className="w-full">
          <div data-aos="zoom-in">
            <div className="text-xl md:text-2xl text-center mb-4 font-semibold">Estudos</div>
          </div>
          <div data-aos="fade-down">
            <Link href={"https://b7web.com.br/"} target="_blank"
              className="bgGradient flex justify-between items-center gap-2 transition p-2 rounded-md">
              <div className="flex gap-3 items-center">
                <Image src="/b7web_logo.png" alt="b7web"
                  width={40} height={40}
                  className="w-10 h-10 rounded-md"
                />
                B7Web
              </div>
              <div>Desenvolvimento Web</div>
            </Link>
          </div>
        </div>
        <div className="w-full">
          <div data-aos="zoom-in">
            <p className="text-xl md:text-2xl text-center mb-4 font-semibold">Principais destaques</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
            {aboutData.map((item, index) => (
              <div key={index} data-aos="fade-down">
                <div className="bgGradient p-4 flex items-center gap-2 rounded-lg transition-all duration-300">
                  {item.icon}
                  <p>{item.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}