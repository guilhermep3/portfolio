import { aboutData } from "@/data/about-data"
import Image from "next/image"
import Link from "next/link"

export const AboutContent = () => {

  return (
    <div className="flex flex-col lg:flex-row gap-10 z-10">
      <div className="flex-1 flex flex-col gap-5 justify-center items-center">
        <div data-aos={'zoom-in'} className="righteous w-full text-2xl md:text-3xl xl:text-4xl font-bold text-center lg:text-start tracking-wide">
          <p>Descubra mais<br className="my-1" /> Sobre mim</p>
        </div>
        <div data-aos="zoom-in" className="text-sm lg:text-base text-center md:text-start text-zinc-200">
          <p>
            Sou desenvolvedor front-end em evolução para fullstack, com foco em Next.js e TypeScript,
            criando interfaces modernas, responsivas e orientadas à melhor experiência do usuário.
          </p>
          <p>
            Desenvolvo aplicações com código limpo, soluções intuitivas e integração eficiente com APIs,
            garantindo organização, performance e compatibilidade com o back-end.
          </p>
          <p>
            Atualmente, estou expandindo meus conhecimentos para o back-end, estudando Node.js, SQL
            e conceitos de APIs e autenticação.
          </p>
          <p>
            Estou em constante aprendizado, ampliando meus conhecimentos em back-end e evoluindo
            como desenvolvedor.
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
              className="bgGradient flex justify-between items-center gap-2 transition p-3 rounded-md">
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