import Image from "next/image"
import { ToggleTheme } from "./toggle-theme"
import Link from "next/link"

const headerLinks = [
   { href: "hero", title: "Início" },
   { href: "about", title: "Sobre" },
   { href: "skills", title: "Habilidades" },
   { href: "projects", title: "Projetos" },
];

export const Header = () => {

   return (
      <header>
         <div className="header-container">
            <Link href="/" className="logo">
               <Image src="/logo-g.png" alt="logo do portifolio"
                  width={64} height={64} />
            </Link>
            <nav>
               <ul>
                  {headerLinks.map((h) => (
                     <li key={h.href}>
                        <a href={`#${h.href}`}>{h.title}</a>
                     </li>
                  ))}
               </ul>
            </nav>
            <ToggleTheme/>
         </div>
      </header>
   )
}