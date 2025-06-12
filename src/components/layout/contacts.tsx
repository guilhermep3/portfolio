"use client"
import { bgGradient, containerStyle } from "@/utils/styles"
import { SectionName } from "../section-name"
import { Check, Copy, Github, Linkedin, Mail, Phone } from "lucide-react"
import Link from "next/link"
import { useToastStore } from "@/store/toastStore"
import { useState } from "react"

const contactsData = [
  {
    id: 1,
    text: 'contatoguilhermep3@gmail.com',
    icon: Mail
  },
  {
    id: 2,
    text: '14 998946158',
    icon: Phone
  }
]
export const Contacts = () => {
  const [idCicked, setIdClicked] = useState<number | null>(null);
  const { toastText, isToastOpen, setToastText, setIsToastOpen } = useToastStore();

  function handleCopyText(text: string) {
    setToastText(text);
    setIsToastOpen(true);
    setTimeout(() => {
      setIsToastOpen(false);
    }, 4000);
    navigator.clipboard.writeText(text);
  }

  return (
    <section id="contacts">
      <div className={`${isToastOpen ? 'translate-y-0' : 'translate-y-96'} fixed bottom-5 left-1/2 -translate-x-1/2 z-40 
        flex flex-col gap-2 p-4 text-center bg-zinc-900 border border-zinc-700 rounded-md transition duration-300`}>
        <p className="font-semibold">Conteúdo copiado</p>
        <p className="text-sm">{toastText ?? ''}</p>
      </div>
      <div className={containerStyle}>
        <SectionName label="Contatos" />
        <div className="flex justify-center sm:items-center flex-col md:flex-row gap-6 ">
          {contactsData.map((c) => (
            <div key={c.id}
              data-aos="zoom-in"
              className={`${bgGradient} group flex-1 sm:max-w-md flex items-center gap-2 md:gap-4 py-1 pr-2 rounded-2xl transition duration-300 cursor-pointer
              hover:bg-[linear-gradient(to_right,_#15152477,_#45454e77,_#15152477)] border border-gray-500 hover:border-gray-300 `}
              onClick={() => { handleCopyText(c.text), setIdClicked(c.id) }}
            >
              <div className={bgGradient + ' p-2 md:p-4 -mt-[1px] rounded-md scale-[120%] group-hover:scale-[130%] transition duration-300 border border-gray-500 group-hover:border-gray-300'}>
                <c.icon className="w-5 md:w-8 h-5 md:h-8" />
              </div>
              <p className="md:text-lg">{c.text}</p>
              {isToastOpen && idCicked === c.id
                ? <Check className="ml-auto" />
                : <Copy className="ml-auto" />
              }
            </div>
          ))}
        </div>
        <div className="flex justify-center items-center gap-4 mt-12 mx-auto">
          <Link href={'https://www.linkedin.com/in/guilherme-pereira3/'}
            target="_blank"
            className="p-2 bg-zinc-950 rounded-full cursor-pointer boxShadowSM  transition duration-300"
          >
            <Linkedin />
          </Link>
          <Link href={'https://github.com/guilhermep3'}
            target="_blank"
            className="p-2 bg-zinc-950 rounded-full cursor-pointer boxShadowSM  transition duration-300"
          >
            <Github />
          </Link>
        </div>
      </div>
    </section>
  )
}