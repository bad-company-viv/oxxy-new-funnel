export default function Metrics() {
    return (
        <section className="py-16 bg-gray-100 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
            <div className="max-w-4xl mx-auto px-4 text-center">
                <h2 className="font-display text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-100 mb-6">
                    Is your family protected from the rising cost of care?
                </h2>
                <div className="bg-[#f3ebed] dark:bg-[#2b2530] rounded-[1.75rem] p-8 md:p-10 border border-[#ecd6da] dark:border-[#44364a] shadow-[0_8px_20px_rgba(15,23,42,0.08)]">
                    <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10">
                        <div className="w-24 h-24 flex-shrink-0 bg-[#f8fafc] dark:bg-[#322a36] rounded-full shadow-[0_6px_14px_rgba(15,23,42,0.12)] flex items-center justify-center">
                            <span className="material-symbols-outlined text-4xl text-[#21c7a2]">trending_up</span>
                        </div>
                        <div className="text-center md:text-left">
                            <p className="text-[#4b5565] dark:text-gray-300 font-semibold text-2xl md:text-[2rem]">
                                Medical Inflation in India is currently at
                            </p>
                            <p className="font-display font-extrabold text-6xl md:text-7xl text-[#21c7a2] my-2">14%</p>
                            <p className="text-[#667085] dark:text-gray-400 text-xl">
                                Gain peace of mind by ensuring medical bills never drain your family's future.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
