import { About } from "@/components/layout/about";
import { Hero } from "@/components/layout/hero";
import { Technologies } from "@/components/layout/technologies";

export default function Home() {
  return (
    <div className="">
      <Hero/>
      <About/>
      <Technologies/>
    </div>
  );
}
