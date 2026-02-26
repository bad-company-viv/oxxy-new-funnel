const comparisonRows = [
    {
        topic: "Impact Duration",
        cash: "One-time relief for one bill",
        oxxy: "Savings across repeated OPD and IPD usage",
    },
    {
        topic: "Predictability",
        cash: "No fixed discount on next treatment",
        oxxy: "Defined instant discount slabs by plan",
    },
    {
        topic: "Access Support",
        cash: "No appointment or activation support",
        oxxy: "Priority booking and faster activation options",
    },
];

export default function WhyGiftVsCash() {
    return (
        <section className="py-20 bg-[#eef2f5] dark:bg-background-dark">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <span className="text-primary font-bold tracking-wider uppercase text-sm">Smart Gifting</span>
                    <h2 className="font-display text-3xl md:text-4xl font-bold text-secondary dark:text-white mt-2">
                        Why Gift OXXY Instead of Cash
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-3xl mx-auto">
                        Cash helps once. A plan helps every time they need treatment.
                    </p>
                </div>

                <div className="bg-white dark:bg-surface-dark rounded-[2rem] border border-gray-200 dark:border-gray-700 shadow-[0_16px_34px_rgba(15,23,42,0.08)] overflow-hidden">
                    <div className="hidden md:grid md:grid-cols-[220px_1fr_1fr] border-b border-gray-200 dark:border-gray-700">
                        <div className="p-8 bg-white dark:bg-surface-dark" />
                        <div className="p-8 border-r border-gray-200 dark:border-gray-700 bg-[#f7f9fb] dark:bg-gray-800/40">
                            <div className="flex items-center gap-4">
                                <div className="w-14 h-14 rounded-2xl bg-red-100 text-red-600 flex items-center justify-center">
                                    <span className="material-symbols-outlined text-3xl">currency_rupee</span>
                                </div>
                                <h3 className="text-4xl font-bold text-secondary dark:text-white">Giving Cash</h3>
                            </div>
                            <p className="text-gray-600 dark:text-gray-400 mt-5 text-[1.15rem] leading-relaxed">
                                Helpful in emergencies, but no structured healthcare advantage after the money is spent.
                            </p>
                        </div>
                        <div className="p-8 bg-gradient-to-br from-[#eaf7f4] to-[#eef8f9] dark:from-[#123826] dark:to-[#10283f]">
                            <div className="flex items-center gap-4">
                                <div className="w-14 h-14 rounded-2xl bg-primary text-white flex items-center justify-center">
                                    <span className="material-symbols-outlined text-3xl">health_and_safety</span>
                                </div>
                                <h3 className="text-4xl font-bold text-secondary dark:text-white">Gifting OXXY</h3>
                            </div>
                            <p className="text-gray-700 dark:text-gray-200 mt-5 text-[1.15rem] leading-relaxed">
                                Creates repeatable medical savings and organized care support over multiple treatments.
                            </p>
                        </div>
                    </div>

                    <div className="md:hidden p-4 space-y-3 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/60">
                        <div className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-surface-dark p-5">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-xl bg-red-100 text-red-600 flex items-center justify-center">
                                    <span className="material-symbols-outlined">currency_rupee</span>
                                </div>
                                <h3 className="text-xl font-bold text-secondary dark:text-white">Giving Cash</h3>
                            </div>
                            <p className="text-gray-600 dark:text-gray-400 mt-3">
                                Helpful in emergencies, but no structured healthcare advantage after the money is spent.
                            </p>
                        </div>
                        <div className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-gradient-to-br from-[#eaf7f4] to-[#eef8f9] dark:from-[#123826] dark:to-[#10283f] p-5">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-xl bg-primary text-white flex items-center justify-center">
                                    <span className="material-symbols-outlined">health_and_safety</span>
                                </div>
                                <h3 className="text-xl font-bold text-secondary dark:text-white">Gifting OXXY</h3>
                            </div>
                            <p className="text-gray-700 dark:text-gray-200 mt-3">
                                Creates repeatable medical savings and organized care support over multiple treatments.
                            </p>
                        </div>
                    </div>

                    <div className="divide-y divide-gray-100 dark:divide-gray-700">
                        {comparisonRows.map((row) => (
                            <div
                                key={row.topic}
                                className="grid grid-cols-1 md:grid-cols-[220px_1fr_1fr] md:items-center gap-3 md:gap-0 p-5 md:p-0"
                            >
                                <h4 className="md:p-7 text-sm md:text-[1.05rem] uppercase tracking-wider font-bold text-gray-500 dark:text-gray-400">
                                    {row.topic}
                                </h4>
                                <p className="md:p-7 md:border-l border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 text-base md:text-[1.08rem] leading-relaxed">
                                    {row.cash}
                                </p>
                                <p className="md:p-7 md:border-l border-gray-200 dark:border-gray-700 text-secondary dark:text-white font-semibold text-base md:text-[1.08rem] leading-relaxed">
                                    {row.oxxy}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
