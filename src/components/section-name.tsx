type props = {
  label: string;
}
export const SectionName = ({ label }: props) => {

  return (
    <div data-aos="fade-down" className="flex justify-center items-center">
      <div className="relative text-center orbitron mt-4 mb-20 w-fit">
        <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-2/3 text-6xl md:text-8xl text-white/5 blur-[2px] select-none">{label}</p>
        <p className="text-2xl md:text-4xl font-bold">{label}</p>
        <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 bg-gradient-to-r from-transparent via-[var(--primary-color)] to-transparent w-full h-[2px]"></span>
        <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 bg-gradient-to-r from-transparent via-[var(--secondary-color)] to-transparent w-2/4 h-[8px] blur-sm"></span>
      </div>
    </div>
  )
}