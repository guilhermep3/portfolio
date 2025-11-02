import { boxShadowStyle, buttonStyle } from "@/utils/styles";
import React from "react"

type props = {
  children: React.ReactNode;
  className?: string;
  shadow?: boolean;
}
export const Button = ({ children, className, shadow }: props) => {

  return (
    <button className={`${buttonStyle} ${shadow && boxShadowStyle} ${className && className}`}
    >
      {children}
    </button>
  )
}