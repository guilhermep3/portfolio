import Link from "next/link"

export const Footer = () => {

  return (
    <footer className="w-full bg-zinc-800 py-10 text-center">
      <div className="flex flex-col gap-4 text-sm text-zinc-200">
        <p>&copy; - Copyright - Todos os direitos autorais reservados</p>
        <p>Desenvolvido por <Link href={'https://www.linkedin.com/in/guilherme-pereira3/'} target="_blank" className="underline">Guilherme Pereira</Link></p>
      </div>
    </footer>
  )
}