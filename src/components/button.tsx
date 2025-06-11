import React from "react"

type props = {
  children: React.ReactNode;
  className?: string;
  shadow?: boolean;
}
export const Button = ({children, className, shadow}: props) => {

  return (
    <button className={`px-6 py-3 text-lg font-semibold transition duration-300 cursor-crosshair bg-[linear-gradient(to_right,_#8f3fe6,_#3150ff)]
       ${shadow && 'boxShadow'} rounded-4xl ${className && className}`}
    >
      {children}
    </button>
  )
}