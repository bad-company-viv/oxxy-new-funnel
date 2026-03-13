const rows = [
    {
        icon: "schedule",
        topic: "Lasts",
        cash: "One-time, till the money is spent",
        oxxy: "Every month, on every hospital visit",
    },
    {
        icon: "favorite",
        topic: "Feels Like",
        cash: "\"Here, handle it yourself\"",
        oxxy: "\"I've got your back — always\"",
    },
    {
        icon: "local_hospital",
        topic: "Network",
        cash: "Wherever they can find",
        oxxy: "2,00,000+ hospitals across 1,800+ cities",
    },
    {
        icon: "medication",
        topic: "Pre-existing Diseases",
        cash: "No structured help",
        oxxy: "Fully works — diabetes, cancer, cardiac & more",
    },
    {
        icon: "memory",
        topic: "Emotional Recall",
        cash: "Forgotten in weeks",
        oxxy: "They think of you every time they save",
    },
];

export default function WhyGiftVsCash() {
    return (
        <section className="py-16 sm:py-24 relative overflow-hidden bg-gradient-to-br from-[#0a1929] via-[#0d2137] to-[#0a1929]">
            {/* Background accents */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-teal-custom/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header */}
                <div className="text-center mb-12 sm:mb-16">
                    <span className="inline-flex items-center gap-2 text-teal-custom font-bold tracking-widest uppercase text-xs sm:text-sm mb-4">
                        <span className="material-symbols-outlined text-base">lightbulb</span>
                        Smart Gifting
                    </span>
                    <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-2 leading-tight">
                        Why Oxxy &gt; Cash
                    </h2>
                    <p className="text-gray-400 mt-4 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
                        Cash helps once. A gift that protects helps every single time they need care.
                    </p>
                </div>

                {/* Mobile: Stacked view, Desktop: Grid view */}
                <div className="hidden md:grid md:grid-cols-[1fr_1fr_1fr] gap-4 mb-4 px-2">
                    <div />
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-5 text-center">
                        <div className="w-12 h-12 mx-auto rounded-xl bg-red-500/10 text-red-400 flex items-center justify-center mb-3">
                            <span className="material-symbols-outlined text-2xl">currency_rupee</span>
                        </div>
                        <p className="text-white font-bold text-lg sm:text-xl">Giving Cash</p>
                        <p className="text-gray-500 text-xs sm:text-sm mt-1">One-time. Forgettable.</p>
                    </div>
                    <div className="bg-gradient-to-br from-primary/20 to-teal-custom/20 border border-primary/30 rounded-2xl p-5 text-center relative overflow-hidden">
                        <div className="absolute top-3 right-3 bg-primary text-white text-[10px] font-bold px-2 py-0.5 rounded-full">BEST GIFT</div>
                        <div className="w-12 h-12 mx-auto rounded-xl bg-primary text-white flex items-center justify-center mb-3">
                            <span className="material-symbols-outlined text-2xl">card_giftcard</span>
                        </div>
                        <p className="text-white font-bold text-lg sm:text-xl">Gifting Oxxy</p>
                        <p className="text-teal-400 text-xs sm:text-sm mt-1">Ongoing. Meaningful.</p>
                    </div>
                </div>

                {/* Comparison Rows */}
                <div className="space-y-3 sm:space-y-4">
                    {rows.map((row, i) => (
                        <div
                            key={row.topic}
                            className="hidden md:grid md:grid-cols-[1fr_1fr_1fr] gap-4 items-stretch"
                            style={{ animationDelay: `${i * 60}ms` }}
                        >
                            {/* Label */}
                            <div className="bg-white/5 border border-white/8 rounded-2xl px-4 py-4 flex items-center gap-3">
                                <div className="w-9 h-9 rounded-xl bg-white/5 text-gray-400 flex items-center justify-center flex-shrink-0">
                                    <span className="material-symbols-outlined text-lg">{row.icon}</span>
                                </div>
                                <p className="text-gray-300 font-semibold text-sm leading-tight">{row.topic}</p>
                            </div>

                            {/* Cash column */}
                            <div className="bg-white/[0.03] border border-white/8 rounded-2xl px-5 py-4 flex items-center gap-3">
                                <span className="material-symbols-outlined text-red-500 text-lg flex-shrink-0">close</span>
                                <p className="text-gray-400 text-sm leading-snug">{row.cash}</p>
                            </div>

                            {/* Oxxy column */}
                            <div className="bg-gradient-to-r from-primary/10 to-teal-custom/10 border border-primary/25 rounded-2xl px-5 py-4 flex items-center gap-3">
                                <span className="material-symbols-outlined fill-1 text-primary text-lg flex-shrink-0">check_circle</span>
                                <p className="text-white font-semibold text-sm leading-snug">{row.oxxy}</p>
                            </div>
                        </div>
                    ))}

                    {/* Mobile: Card-based comparison */}
                    <div className="md:hidden space-y-4">
                        {rows.map((row) => (
                            <div key={row.topic} className="space-y-3">
                                {/* Topic header */}
                                <div className="flex items-center gap-2 px-4 py-3 bg-white/5 border border-white/8 rounded-xl">
                                    <div className="w-8 h-8 rounded-lg bg-white/5 text-gray-400 flex items-center justify-center flex-shrink-0">
                                        <span className="material-symbols-outlined text-base">{row.icon}</span>
                                    </div>
                                    <p className="text-gray-300 font-semibold text-sm">{row.topic}</p>
                                </div>

                                {/* Cash vs Oxxy comparison */}
                                <div className="grid grid-cols-2 gap-3">
                                    {/* Cash */}
                                    <div className="bg-white/[0.03] border border-white/8 rounded-xl p-3 flex flex-col gap-2">
                                        <div className="flex items-center gap-2">
                                            <span className="material-symbols-outlined text-red-500 text-base">close</span>
                                            <p className="text-gray-400 text-xs font-medium">Cash</p>
                                        </div>
                                        <p className="text-gray-400 text-xs leading-snug">{row.cash}</p>
                                    </div>

                                    {/* Oxxy */}
                                    <div className="bg-gradient-to-r from-primary/10 to-teal-custom/10 border border-primary/25 rounded-xl p-3 flex flex-col gap-2">
                                        <div className="flex items-center gap-2">
                                            <span className="material-symbols-outlined fill-1 text-primary text-base">check_circle</span>
                                            <p className="text-primary text-xs font-medium">Oxxy</p>
                                        </div>
                                        <p className="text-white text-xs font-semibold leading-snug">{row.oxxy}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bottom CTA note */}
                <div className="mt-8 sm:mt-12 text-center">
                    <p className="text-gray-500 italic text-sm sm:text-base">
                        "Because the best gifts protect, not just delight."
                    </p>
                </div>
            </div>
        </section>
    );
}
