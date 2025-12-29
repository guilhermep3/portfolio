"use client"
import { BackTop } from "@/components/back-top";
import { About } from "@/components/layout/about";
import { ClientPage } from "@/components/layout/client-page";
import { Contacts } from "@/components/layout/contacts";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/layout/hero";
import { Libraries } from "@/components/layout/libraries";
import { Loading } from "@/components/layout/loading";
import { Projects } from "@/components/layout/projects";
import { Technologies } from "@/components/layout/technologies";
import { Modal } from "@/components/modal";
import { useEffect, useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => setLoading(false), 300)
    }, 2000)

    return () => clearTimeout(timer);
  }, [])

  return (
    <main className="relative">
      {loading && <Loading fadeOut={fadeOut} />}
      <ClientPage>
        <Hero />
        <About />
        <Technologies />
        <Libraries />
        <Projects />
        <Modal />
        <Contacts />
        <Footer />
        <BackTop />
      </ClientPage >
    </main>
  );
}
