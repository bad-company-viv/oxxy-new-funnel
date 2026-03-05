export default function Services() {
    return (
        <section className="py-24 bg-white dark:bg-[#040f1a] relative overflow-hidden">
            {/* Ambient background glows */}
            <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-green-50 to-transparent dark:from-primary/5 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-1/3 h-full bg-gradient-to-t from-gray-50 to-transparent dark:from-gray-900/50 pointer-events-none" />

            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16 max-w-2xl mx-auto">
                    <span className="inline-flex items-center gap-2 bg-green-50 dark:bg-primary/10 text-primary px-4 py-1.5 rounded-full font-bold tracking-widest uppercase text-xs mb-6">
                        <span className="material-symbols-outlined text-sm">monitor_heart</span>
                        Be Their Safety Net
                    </span>
                    <h2 className="font-display text-4xl md:text-5xl font-bold text-secondary dark:text-white leading-tight">
                        Meaningful Help Beyond<br className="hidden md:block" /> One-Time Money
                    </h2>
                    <p className="text-gray-500 dark:text-gray-400 mt-6 text-lg">
                        Cash gifts are spent and forgotten. Gift them a healthcare membership that protects their health and their wallet — every single time they visit a doctor.
                    </p>
                </div>

                {/* The Comparison UI */}
                <div className="flex flex-col md:flex-row gap-6 lg:gap-8 items-stretch justify-center max-w-4xl mx-auto">

                    {/* The "Before / Regular" Scenario */}
                    <div className="flex-1 bg-white dark:bg-gray-800/40 rounded-3xl p-8 border border-gray-200 dark:border-gray-700 shadow-sm relative">
                        <div className="absolute top-0 inset-x-0 h-1 bg-gray-200 dark:bg-gray-700 rounded-t-3xl" />

                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-500">
                                <span className="material-symbols-outlined">receipt_long</span>
                            </div>
                            <div>
                                <h3 className="font-bold text-gray-800 dark:text-gray-200 text-lg">Without Protection</h3>
                                <p className="text-sm text-gray-500">Regular hospital visit</p>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <div className="flex justify-between items-center border-b border-gray-100 dark:border-gray-700/50 pb-4">
                                <span className="text-gray-500 dark:text-gray-400 flex items-center gap-2">
                                    <span className="material-symbols-outlined text-sm">medical_services</span>
                                    MRI & Advanced Scans
                                </span>
                                <span className="font-semibold text-gray-800 dark:text-gray-300">₹22,000</span>
                            </div>
                            <div className="flex justify-between items-center border-b border-gray-100 dark:border-gray-700/50 pb-4">
                                <span className="text-gray-500 dark:text-gray-400 flex items-center gap-2">
                                    <span className="material-symbols-outlined text-sm">vaccines</span>
                                    Specialist & Meds
                                </span>
                                <span className="font-semibold text-gray-800 dark:text-gray-300">₹12,000</span>
                            </div>
                            <div className="flex justify-between items-center pt-2">
                                <span className="font-bold text-gray-800 dark:text-white text-lg">Total Bill</span>
                                <span className="font-display font-bold text-2xl text-red-500">₹34,000</span>
                            </div>
                        </div>

                        <div className="mt-8 bg-red-50 dark:bg-red-500/10 text-red-600 dark:text-red-400 p-4 rounded-xl flex items-start gap-3">
                            <span className="material-symbols-outlined mt-0.5">warning</span>
                            <p className="text-sm font-medium">Out-of-pocket expense causes financial anxiety and delayed treatments.</p>
                        </div>
                    </div>

                    {/* The "After / Oxxy" Scenario */}
                    <div className="flex-1 bg-white dark:bg-gray-800/70 rounded-3xl p-8 border-2 border-primary shadow-[0_20px_50px_rgba(21,163,82,0.15)] relative transform md:-translate-y-4">
                        <div className="absolute top-0 inset-x-0 h-2 bg-gradient-to-r from-teal-custom to-primary rounded-t-[22px]" />
                        <div className="absolute -top-4 right-6 bg-gradient-to-r from-teal-custom to-primary text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg">
                            WITH OXXY
                        </div>

                        <div className="flex items-center gap-4 mb-8 pt-2">
                            <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-500/20 flex items-center justify-center text-primary">
                                <span className="material-symbols-outlined">health_and_safety</span>
                            </div>
                            <div>
                                <h3 className="font-bold text-gray-900 dark:text-white text-lg">Peace of Mind</h3>
                                <p className="text-sm text-primary">Zero paperwork, instant discount</p>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <div className="flex justify-between items-center border-b border-gray-100 dark:border-gray-700/50 pb-4">
                                <span className="text-gray-600 dark:text-gray-300">MRI & Advanced Scans</span>
                                <div className="text-right">
                                    <span className="text-xs text-gray-400 line-through mr-2">₹22,000</span>
                                    <span className="font-bold text-primary">₹14,000</span>
                                </div>
                            </div>
                            <div className="flex justify-between items-center border-b border-gray-100 dark:border-gray-700/50 pb-4">
                                <span className="text-gray-600 dark:text-gray-300">Specialist & Meds</span>
                                <div className="text-right">
                                    <span className="text-xs text-gray-400 line-through mr-2">₹12,000</span>
                                    <span className="font-bold text-primary">₹8,000</span>
                                </div>
                            </div>
                            <div className="flex justify-between items-center pt-2">
                                <span className="font-bold text-gray-900 dark:text-white text-lg">Total Bill</span>
                                <span className="font-display font-bold text-3xl text-primary">₹22,000</span>
                            </div>
                        </div>

                        <div className="mt-8 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-500/10 dark:to-emerald-500/10 border border-green-100 dark:border-green-500/20 p-4 rounded-xl flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-white dark:bg-gray-800 flex items-center justify-center shadow-sm text-primary flex-shrink-0">
                                <span className="material-symbols-outlined">savings</span>
                            </div>
                            <div>
                                <p className="text-sm font-bold text-gray-900 dark:text-white">They kept ₹12,000</p>
                                <p className="text-xs text-gray-500 dark:text-gray-400">That's immediate 35% savings via your gift</p>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="text-center mt-12">
                    <p className="text-sm text-gray-400 italic">
                        * Example representative of average network hospital rates. Actual savings may vary from 10% to 40% depending on the facility.
                    </p>
                </div>
            </div>
        </section>
    );
}
