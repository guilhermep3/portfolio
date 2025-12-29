import { LucideProps } from "lucide-react";
import Link from "next/link"
import type { ComponentType } from "react"

type Props = {
  Icon: ComponentType<LucideProps>;
  href: string;
}
export const LinkIcon = ({ Icon, href }: Props) => {

  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`p-2 rounded-md transition duration-300 bgGradient-noOpacity`}
    >
      <Icon />
    </Link>
  )
}