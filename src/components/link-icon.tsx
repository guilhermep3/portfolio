import { LucideProps } from "lucide-react";
import Link from "next/link"
import type { ComponentType } from "react"

type Props = {
  Icon: ComponentType<LucideProps>;
  href: string;
}
export const LinkIcon = ({ href, Icon }: Props) => {

  return (
    <Link href={href} target="_blank"
      className="p-2.5 rounded-sm transition-all duration-200 bg-[var(--surface-1)] cursor-pointer
        border border-[var(--surface-border)]
        hover:bg-[var(--surface-2)] hover:border-[var(--primary)]"
    >
      {Icon && <Icon size={18} />}
    </Link>
  )
}