import Link from "next/link"

export const Footer = () => {

  return (
    <footer className="w-full bg-zinc-800 p-4 md:p-8 text-center">
      <div>
        <p className="text-sm text-zinc-200">Desenvolvido por <Link href={'https://www.linkedin.com/in/guilherme-pereira3/'} target="_blank" className="underline">Guilherme Pereira</Link></p>
      </div>
    </footer>
  )
}