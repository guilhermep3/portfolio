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
        <div className="flex items-center gap-3 px-5 py-3 rounded-xl"
          style={{
            background: 'rgba(10,10,24,0.95)',
            border: '1px solid rgba(79,99,255,0.3)',
            boxShadow: '0 8px 32px rgba(0,0,0,0.6), 0 0 20px rgba(79,99,255,0.15)',
            backdropFilter: 'blur(20px)',
          }}
        >
          <Check size={15} style={{ color: 'var(--secondary-bright)' }} />
          <div>
            <p className="text-xs font-semibold" style={{ color: 'var(--foreground)' }}>Copiado!</p>
            <p className="text-xs mt-0.5" style={{ color: 'var(--foreground-muted)' }}>{toastText ?? ''}</p>
          </div>
        </div>
      </div>

      <div className="containerStyle">
        <SectionName label="Contatos" />
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.7 }}
          className="text-center mb-12 text-sm md:text-base max-w-md mx-auto leading-relaxed"
          style={{ color: 'var(--foreground-muted)' }}
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
              <div
                className="group flex items-center gap-4 p-4 rounded-2xl cursor-pointer transition-all duration-300"
                style={{
                  background: 'rgba(8,8,20,0.8)',
                  border: '1px solid rgba(255,255,255,0.07)',
                  backdropFilter: 'blur(16px)',
                  boxShadow: '0 4px 24px rgba(0,0,0,0.4)',
                }}
                onClick={() => { handleCopyText(c.text); setIdClicked(c.id); }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(79,99,255,0.4)';
                  (e.currentTarget as HTMLElement).style.boxShadow = '0 0 20px rgba(79,99,255,0.12), 0 4px 24px rgba(0,0,0,0.5)';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.07)';
                  (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 24px rgba(0,0,0,0.4)';
                }}
              >
                <div className="shrink-0 p-3 rounded-xl transition-all duration-300"
                  style={{
                    background: 'rgba(79,99,255,0.1)',
                    border: '1px solid rgba(79,99,255,0.2)',
                  }}
                >
                  <c.icon className="w-5 h-5" style={{ color: 'var(--primary-bright)' }} />
                </div>
                <p className="text-sm md:text-base flex-1 font-medium truncate"
                  style={{ color: 'var(--foreground)' }}
                >
                  {c.text}
                </p>
                <div className="shrink-0 p-2 rounded-lg transition-all duration-200"
                  style={{
                    background: isToastOpen && idCicked === c.id
                      ? 'rgba(0,196,126,0.12)'
                      : 'rgba(255,255,255,0.04)',
                    border: `1px solid ${isToastOpen && idCicked === c.id
                      ? 'rgba(0,196,126,0.3)'
                      : 'rgba(255,255,255,0.08)'}`,
                  }}
                >
                  {isToastOpen && idCicked === c.id
                    ? <Check size={15} style={{ color: 'var(--secondary-bright)' }} />
                    : <Copy size={15} style={{ color: 'var(--foreground-muted)' }} />
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