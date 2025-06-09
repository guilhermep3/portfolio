"use client"
import Image from "next/image"
import Link from "next/link"
import { Button } from "./button"
import { useEffect, useState } from "react"

const headerLinks = [
  { name: 'Início', href: 'hero' },
  { name: 'Sobre', href: 'about' },
  { name: 'Tecnologias', href: 'technologies' },
  { name: 'Projetos', href: 'projects' },
  { name: 'Contatos', href: 'contacts' },
]
export const Header = () => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    function checkScroll(){
      if(window.scrollY > 0){
        setIsActive(true);
      } else {
        setIsActive(false);
      }
    };

    checkScroll();

    window.addEventListener('scroll', checkScroll)
    return () => window.removeEventListener('scroll', checkScroll);
  }, [])

  return (
    <header className={`fixed ${isActive ? 'top-2' : 'top-8'} left-1/2 -translate-x-1/2 z-30 w-80 md:w-full md:max-w-3xl lg:max-w-4xl
      flex justify-between items-center gap-6 bg-zinc-900/70 px-4 py-3 rounded-[40px] transition-all duration-500`}>
      <Link href={'/'}>
        <Image src={'/logo-g.png'} alt="logo desenvolvedor front-end"
          width={48} height={48}
        />
      </Link>
      <nav className="hidden md:block">
        <ul className="flex gap-6">
          {headerLinks.map((item) => (
            <li key={item.href} className="linkHeader h-full text-sm font-bold text-white/70 hover:text-white transition duration-300">
              <Link href={`#${item.href}`} className="uppercase">{item.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <Button className="">Contatos</Button>
    </header>
  )
}