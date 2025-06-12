"use client"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"
import { buttonStyle } from "@/utils/styles"

const headerLinks = [
  { name: 'Início', href: 'hero' },
  { name: 'Sobre', href: 'about' },
  { name: 'Tecnologias', href: 'technologies' },
  { name: 'Projetos', href: 'projects' },
]

export const Header = () => {
  const [isScroll, setIsScroll] = useState(false);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    function checkScroll() {
      if (window.scrollY > 0) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };

    checkScroll();

    window.addEventListener('scroll', checkScroll)
    return () => window.removeEventListener('scroll', checkScroll);
  }, [])

  return (
    <>
      <header className={`fixed ${isScroll ? 'top-2' : 'top-8'} left-1/2 -translate-x-1/2 z-40 w-[360px] md:w-full md:max-w-3xl lg:max-w-4xl
        flex justify-between items-center gap-6 bg-zinc-900/50 backdrop-blur-md px-5 py-3 rounded-[40px] transition-all duration-500`}
        data-aos="zoom-in"
      >
        <Link href={'/'}>
          <Image src={'/logo-g.png'} alt="logo desenvolvedor front-end"
            width={48} height={48}
          />
        </Link>
        <nav className="hidden md:block">
          <ul className="flex gap-6">
            {headerLinks.map((item) => (
              <li key={item.href}
                className={`linkHeader h-full text-sm font-bold hover:text-white transition duration-300 text-white/70`}
              >
                <Link href={`#${item.href}`} className="uppercase">{item.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center gap-2">
          <Link href={'#contacts'} className={buttonStyle}>Contatos</Link>
          {
            isActive
              ? <X className="w-8 h-8 cursor-pointer md:hidden" onClick={() => setIsActive(false)} />
              : <Menu className="w-8 h-8 cursor-pointer md:hidden" onClick={() => setIsActive(true)} />
          }
        </div>
      </header>
      <div className={`${isActive ? '-translate-y-0' : '-translate-y-full'} fixed md:hidden bg-black inset-0 w-full h-full z-30 transition duration-300`}>
        <div className="flex justify-center items-center h-full flex-col gap-8">
          {headerLinks.map((item) => (
            <p key={item.href} className="linkHeader w-fit text-sm font-bold text-white transition duration-300">
              <Link href={`#${item.href}`}
                className="uppercase"
                onClick={() => setIsActive(false)}
              >
                {item.name}
              </Link>
            </p>
          ))}
        </div>
      </div>
    </>
  )
}