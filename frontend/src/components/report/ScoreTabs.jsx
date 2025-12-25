const tabs = ["Speechace", "CEFR", "IELTS", "PTE", "TOEFL"];

function ScoreTabs({ active, onChange }) {
    return (
        <div className="flex gap-2 bg-slate-100 p-2 rounded-lg w-fit">
            {tabs.map((tab) => (
                <button
                    key={tab}
                    onClick={() => onChange(tab)}
                    className={`px-4 py-2 rounded-md text-sm font-medium transition
            ${tab === active
                            ? "bg-blue-600 text-white shadow"
                            : "text-slate-600 hover:bg-slate-200"
                        }`}
                >
                    {tab}
                </button>
            ))}
        </div>
    );
}

export default ScoreTabs;
