import { About } from "@/components/about/about";
import { Contact } from "@/components/contact/contact";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero/hero";
import { ModalProject } from "@/components/projects/modal-project";
import { Projects } from "@/components/projects/projects";
import { Skills } from "@/components/skills/skills";

export default function Home() {
  return (
    <>
      <Header/>
      <Hero/>
      <About/>
      <Skills/>
      <Projects />
      <Contact />
      <Footer/>
      <ModalProject/>
    </>
  );
}
