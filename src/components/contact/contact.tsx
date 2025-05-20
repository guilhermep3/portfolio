"use client"
import { FaCheck, FaEnvelope, FaPhone, FaRegCopy } from "react-icons/fa"
import { IconType } from "react-icons";
import { useState } from "react";

const contacts = [
   { name: 'Email', content: 'contatoguilhermep3@gmail.com', svg: 'FaEnvelope', id: 'copyEmail' },
   { name: 'Telefone', content: '(14) 998946158', svg: 'FaPhone', id: 'copyNumber' }
];
const iconMap: { [key: string]: IconType } = {
   FaEnvelope: FaEnvelope,
   FaPhone: FaPhone
};

export const Contact = () => {
   const [idClicked, setIdClicked] = useState<number | null>(null);

   function handleCopyText(content: any, index: number) {
      setIdClicked(index);
      navigator.clipboard.writeText(content);
      setTimeout(() => {
         setIdClicked(null);
      }, 3000);
      console.log("index clicked", index)
   }

   return (
      <section id="contact">
         <div className="container contact-container">
            <h1 className="" data-aos="reveal-top">Entre em contato</h1>
            <p className="contact-left-desc" data-aos="reveal-top">Se você deseja iniciar um novo projeto sinta-se à vontade para
               entrar em contato comigo!
            </p>
            <ul className="contact-list"  data-aos="reveal-down">
               {contacts.map((c, index) => {
                  const IconComponent = iconMap[c.svg];
                  console.log("index map", index)
                  return (
                     <li key={c.name} id={c.id}
                        onClick={() => handleCopyText(c.content, index)}
                     >
                        {IconComponent && <IconComponent />}
                        <div className="div-contact">
                           <span>{c.name}</span>
                           <p>{c.content}</p>
                        </div>
                        {idClicked === index
                           ? <FaCheck className="copy-checked" />
                           : <FaRegCopy />
                        }
                     </li>
                  )
               })}
            </ul>
         </div>
      </section>
   )
}