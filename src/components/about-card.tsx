import { bgGradient } from "@/utils/styles";
import { Computer } from "lucide-react";

type props = {
  title: string;
  body: string;
}
export const AboutCard = ({title, body}: props) => {

  return (
    <div className={`${bgGradient} group relative w-80 h-48 md:h-64 p-4 md:p-6 flex justify-end items-start flex-col
      rounded-4xl md:rounded-[44px] rounded-tl-none md:rounded-tl-none border-2 border-gray-500 hover:border-gray-100 transition duration-300`}
    >
      <div className="absolute top-0 left-1/2 -translate-1/2 w-16 h-16 md:w-20 md:h-20 flex justify-center items-center 
        bg-zinc-800 rounded-full border-2 border-gray-500 group-hover:border-gray-100 transition duration-300"
      >
        <Computer className="w-6 h-6 md:w-8 md:h-8"/>
      </div>
      <p className="text-xl font-bold">{title}</p>
      <p className="text-sm md:text-base my-2 md:my-4">{body}</p>
    </div>
  )
}