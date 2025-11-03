type props = {
  tabs: string[];
  activeTab: string;
  setActiveTab: (newV: string) => void;
}
export const TabsHeader = ({ tabs, activeTab, setActiveTab }: props) => {

  return (
    <div className="flex md:justify-center md:items-center w-full overflow-x-auto px-2 pb-5">
      <div className="inline-flex gap-1 border p-1 rounded-md border-[var(--primary-color)]/20">
        {tabs.map((i) => (
          <button
            key={i}
            onClick={() => setActiveTab(i)}
            className={`px-4 py-2 rounded-lg text-sm transition-all duration-300 whitespace-nowrap cursor-pointer
          ${activeTab === i ? 'bg-[linear-gradient(to_right,_#7f33e4,_#3150ff)] text-white' : 'bg-zinc-800 text-zinc-200 hover:bg-zinc-700'}
          `}
          >
            {i}
          </button>
        ))}
      </div>
    </div>
  );
};
