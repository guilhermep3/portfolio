import Image from "next/image"
import Link from "next/link"
import { FaGithub, FaLinkedin, FaPhone, FaRegEnvelope } from "react-icons/fa"

export const Footer = () => {

   return (
      <footer>
         <div className="container-row">
            <div className="footer-div">
               <div className="footer-logo-div">
                  <Image src="/logo-g.png" className="logo" alt="logo GP3"
                     width={40} height={40} />
                  <p>Guilherme Pereira</p>
               </div>
               <p className="footer-text">Desenvolvedor front-end</p>
            </div>
            <div className="footer-div">
               <h1 className="footer-title">Contatos</h1>
               <ul className="footer-contact">
                  <li><FaRegEnvelope />contatoguilhermep3@gmail.com</li>
                  <li><FaPhone />(14) 998946158</li>
               </ul>
               <div className="footer-socialmedias">
                  <Link href="https://www.linkedin.com/in/guilherme-pereira3" target="_blank">
                     <FaLinkedin />
                  </Link>
                  <Link href="https://github.com/guilhermep3" target="_blank">
                     <FaGithub />
                  </Link>
               </div>
            </div>
         </div>
         <div className="container footer-bottom">
            <p>© Copyright | todos os direitos reservados</p>
            <a href="https://github.com/guilhermep3" target="_blank">Guilherme Pereira</a>
         </div>
      </footer>
   )
}