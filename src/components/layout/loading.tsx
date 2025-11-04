import Image from "next/image"

export const Loading = ({ fadeOut }: { fadeOut: boolean }) => {

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center bg-black z-50 transition-opacity duration-300 ${fadeOut ? "opacity-0" : "opacity-100"}
        `}
    >
      <div className="w-32 h-32 animate-pulse">
        <Image
          src="/logo-g.png"
          alt="Logo"
          width={128} height={128}
          className="w-full h-full"
        />
      </div>
    </div>
  )
}