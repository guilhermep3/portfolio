import { SectionName } from "../section-name"
import { AboutContent } from "./about-content"
import { Circle } from "../svg/circle"

export const About = () => {

  return (
    <section id="about" className="relative bg-center bg-cover overflow-hidden">
      <div className="absolute left-0 right-0 top-0 h-1/2 bg-[linear-gradient(to_top,_#00000000,_#000000bb)] z-0"></div>
      <div className="containerStyle flex flex-col">
        <SectionName label="Sobre Mim" />
        <AboutContent />
        <Circle top={0} right={0} className="translate-x-1/2" />
        <Circle bottom={0} left={0} className="-translate-x-1/2" />
      </div>
    </section>
  )
}