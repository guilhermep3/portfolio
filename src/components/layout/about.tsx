import { containerStyle } from "@/utils/styles"
import { SectionName } from "../section-name"
import { AboutCard } from "../about-card"
import { AboutTop } from "./about-top"

export const About = () => {

  return (
    <section id="about" className="relative bg-center bg-cover"
      style={{ backgroundImage: 'url("./stars.jpg")' }}
    >
      <div className="absolute left-0 right-0 top-0 h-1/2 bg-[linear-gradient(to_top,_#00000000,_#000000bb)] z-0"></div>
      <div className={containerStyle + ' flex flex-col z-10'}>
        <SectionName label="Sobre" />
        <AboutTop />
      </div>
    </section>
  )
}