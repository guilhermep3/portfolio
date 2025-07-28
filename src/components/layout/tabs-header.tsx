type props = {
  tabs: string[];
  activeTab: string;
  setActiveTab: (newV: string) => void;
}
export const TabsHeader = ({ tabs, activeTab, setActiveTab }: props) => {

  return (
    <div className="flex justify-center items-center gap-1 overflow-x-auto px-1 pb-1">
      {tabs.map((i) => (
        <button
          key={i}
          onClick={() => setActiveTab(i)}
          className={`px-4 py-2 rounded-lg text-sm transition-all duration-300 whitespace-nowrap cursor-pointer
              ${activeTab === i ? 'bg-[linear-gradient(to_right,_#7f33e4,_#3150ff)] text-white' : 'bg-zinc-800 text-zinc-200'}
            `}
        >
          {i}
        </button>
      ))}
    </div>
  );
};
