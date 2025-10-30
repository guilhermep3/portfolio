import { aboutData } from "@/data/aboutData"
import { bgGradient } from "@/utils/styles"

export const AboutContent = () => {

  return (
    <div className="flex flex-col md:flex-row gap-6 z-10">
      <div className="flex-1 flex relative justify-center items-center">
        <img src="/window.png" alt="window" className="" />
        <div data-aos={'zoom-in'} className="absolute top-1/2 left-1/2 -translate-1/2 text-2xl sm:text-3xl md:text-4xl font-bold text-center">
          <p>Descubra mais<br /> Sobre mim</p>
        </div>
      </div>
      <div className="flex-1 flex flex-col justify-center items-start gap-6 z-20">
        <div data-aos="zoom-in" className="text-base md:text-lg text-center md:text-start text-zinc-300">
          Sou desenvolvedor front-end com grande entusiasmo por UI/UX e layouts modernos.
          Tenho um olhar atento para o design e a experiência do usuário, buscando sempre criar interfaces intuitivas,
          funcionais e visualmente atraentes.
          <br />
          Meu foco está em "criar novos mundos" através de código e interatividade.
          Estou em constante aprendizado, me atualizando com as melhores práticas, tecnologias e tendências do desenvolvimento web.
          <br />
        </div>
        <div className="w-full">
          <div data-aos="zoom-in">
            <p className="text-xl md:text-2xl text-center mb-4">Principais destaques</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
            {aboutData.map((item, index) => (
              <div data-aos="fade-down">
                <div key={index}
                  className={`${bgGradient} p-4 flex items-center gap-2 border border-gray-500 hover:border-gray-300 rounded-lg transition-all duration-300`}>
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