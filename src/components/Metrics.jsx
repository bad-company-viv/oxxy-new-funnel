export default function Metrics() {
    return (
        <section className="py-16 bg-gradient-to-r from-[#f0fdf4] to-[#f0f9ff] dark:from-gray-900 dark:to-gray-900 border-y border-gray-100 dark:border-gray-800">
            <div className="max-w-4xl mx-auto px-4">
                {/* Medical inflation warning card */}
                <div className="relative rounded-3xl overflow-hidden bg-white dark:bg-surface-dark border border-gray-200 dark:border-gray-700 shadow-[0_8px_32px_rgba(15,23,42,0.08)] p-8 md:p-10">
                    {/* Accent blob */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-red-500/5 rounded-full -mr-20 -mt-20 blur-2xl pointer-events-none" />

                    <div className="flex flex-col md:flex-row items-center gap-8 relative z-10">
                        {/* Icon */}
                        <div className="flex-shrink-0 w-24 h-24 rounded-3xl bg-gradient-to-br from-red-500/10 to-orange-500/10 border border-red-500/20 flex items-center justify-center shadow-inner">
                            <span className="material-symbols-outlined text-5xl text-red-500">trending_up</span>
                        </div>

                        {/* Text */}
                        <div className="text-center md:text-left flex-grow">
                            <p className="text-sm font-bold tracking-widest uppercase text-red-500 mb-2">Healthcare Cost Crisis</p>
                            <h2 className="font-display text-2xl md:text-3xl font-bold text-secondary dark:text-white leading-snug">
                                Medical inflation in India is at{" "}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600 text-5xl font-extrabold">14%</span>{" "}
                            </h2>
                            <p className="text-gray-500 dark:text-gray-400 mt-2 text-base">
                                Don't let a hospital bill wipe out your family's savings. Gift them a shield against rising costs.
                            </p>
                        </div>

                        {/* CTA */}
                        <a
                            href="#support-options"
                            className="flex-shrink-0 inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-bold text-sm px-6 py-3.5 rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5"
                        >
                            <span className="material-symbols-outlined text-lg">card_giftcard</span>
                            Gift Protection
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
