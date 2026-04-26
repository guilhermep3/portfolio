import Link from "next/link"

export const Footer = () => {

  return (
    <footer className="w-full py-10 text-center relative overflow-hidden"
      style={{
        background: 'rgba(6,6,16,0.98)',
        borderTop: '1px solid rgba(255,255,255,0.06)',
      }}
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, var(--primary), transparent)' }}
      />
      <div className="flex flex-col gap-2 text-xs"
        style={{ color: 'var(--foreground-muted)' }}
      >
        <p>&copy; {new Date().getFullYear()} — Todos os direitos reservados</p>
        <p>
          Desenvolvido por{' '}
          <Link href={'https://www.linkedin.com/in/guilherme-pereira3/'} target="_blank"
            className="font-semibold transition-colors duration-200"
            style={{ color: 'var(--foreground-muted)' }}
            onMouseEnter={e => (e.currentTarget.style.color = 'var(--primary-bright)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'var(--foreground-muted)')}
          >
            Guilherme Pereira
          </Link>
        </p>
      </div>
    </footer>
  )
}