type props = {
  label: string;
}
export const SectionName = ({label}: props) => {

  return (
    <div data-aos="fade-down" className="relative text-center orbitron mt-4 mb-20">
      <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-2/3 text-5xl md:text-7xl text-white/10 blur-[2px] select-none">{label}</p>
      <p className="text-xl md:text-2xl font-bold">{label}</p>
    </div>
  )
}