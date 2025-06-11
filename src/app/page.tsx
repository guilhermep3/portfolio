import { About } from "@/components/layout/about";
import { Contacts } from "@/components/layout/contacts";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/layout/hero";
import { Projects } from "@/components/layout/projects";
import { Technologies } from "@/components/layout/technologies";
import { Modal } from "@/components/modal";
import ParticlesBackground from "@/utils/particles"

export default function Home() {
  return (
    <main className="relative">
      <div className="container-particles">
        <ParticlesBackground />
      </div>
      <Hero />
      <About />
      <Technologies />
      <Projects />
      <Modal/>
      <Contacts/>
      <Footer/>
    </main>
  );
}
