type props = {
  label: string;
}
export const SectionName = ({ label }: props) => {

  return (
    <div data-aos="fade-down" className="flex justify-center items-center z-10">
      <div className="relative orbitron text-center mt-4 mb-20 w-fit">
        <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-2/3 text-6xl md:text-8xl text-white/5 blur-[2px] select-none">{label}</p>
        <p className="text-2xl md:text-4xl font-bold">{label}</p>
        <span className="separatorLinePrimary"></span>
        <span className="separatorLineSecondary"></span>
      </div>
    </div>
  )
}