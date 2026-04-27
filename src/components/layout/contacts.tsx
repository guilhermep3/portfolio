"use client"
import { SectionName } from "../section-name"
import { Check, Copy, Github, Linkedin, Mail, Phone } from "lucide-react"
import { useToastStore } from "@/store/toastStore"
import { useState } from "react"
import { LinkIcon } from "../link-icon"
import { DottedBg } from "../svg/dotted-bg"
import { motion } from "motion/react"

const contactsData = [
  {
    id: 1,
    text: 'contatoguilhermep3@gmail.com',
    icon: Mail
  },
  {
    id: 2,
    text: '+55 14 998946158',
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
    <section id="contacts" className="relative pb-16">
      <DottedBg />
      <div className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-40 transition-all duration-400
        ${isToastOpen ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0 pointer-events-none'}`}
      >
        <div className="flex items-center gap-3 px-5 py-3 rounded-md shadow-lg
          bg-[var(--surface-1)] border border-[var(--primary-glow)]"
        >
          <Check size={15} className="text-[var(--secondary-bright)]" />
          <div>
            <p className="text-xs font-semibold text-[var(--foreground)]">Copiado!</p>
            <p className="text-xs mt-0.5 text-[var(--foreground-muted)]">{toastText ?? ''}</p>
          </div>
        </div>
      </div>

      <div className="containerStyle">
        <SectionName label="Contatos" />
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.7 }}
          className="text-center mb-12 text-sm md:text-base max-w-md mx-auto
            leading-relaxed text-[var(--foreground-muted)]"
        >
          Selecione a maneira que preferir e entre em contato comigo
        </motion.p>
        <div className="flex justify-center items-center flex-col md:flex-row gap-4 max-w-2xl mx-auto">
          {contactsData.map((c, i) => (
            <motion.div
              key={c.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 + 0.15, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="w-full"
            >
              <div className="cardStyle items-center group p-4 cursor-pointer"
                onClick={() => { handleCopyText(c.text); setIdClicked(c.id); }}
              >
                <div className="shrink-0 p-3 rounded-xl transition-all duration-300
                  bg-[var(--primary-glow)]/50 border border-[var(--primary-glow)]"
                >
                  <c.icon className="w-5 h-5 text-[var(--primary-bright)]" />
                </div>
                <p className="text-sm md:text-base flex-1 font-medium truncate text-[var(--foreground)]"                >
                  {c.text}
                </p>
                <div className={`shrink-0 p-2 rounded-lg transition-all duration-200
                  ${isToastOpen && idCicked === c.id
                    ? 'bg-[var(--secondary-glow)] border-[var(--secondary-light)]'
                    : 'bg-[var(--surface-border)] border-[var(--surface-border-hover)]'}
                  `}
                >
                  {isToastOpen && idCicked === c.id
                    ? <Check size={15} className="text-[var(--secondary-bright)]" />
                    : <Copy size={15} className="text-[var(--foreground-muted)]" />
                  }
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="flex justify-center items-center gap-4 mt-14"
        >
          <LinkIcon Icon={Linkedin} href="https://www.linkedin.com/in/guilherme-pereira3/" />
          <LinkIcon Icon={Github} href="https://github.com/guilhermep3" />
        </motion.div>
      </div>
    </section>
  )
}