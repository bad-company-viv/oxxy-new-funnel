export default function Hero() {
    return (
        <section className="relative overflow-hidden pt-14 pb-24 lg:pt-28 lg:pb-36 bg-white dark:from-gray-900 dark:to-gray-800">
            {/* Soft background blobs */}
            <div className="absolute top-0 right-0 -mr-32 -mt-32 w-[520px] h-[520px] bg-gradient-to-br from-teal-custom/10 to-primary/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 -ml-24 -mb-24 w-[400px] h-[400px] bg-primary/5 rounded-full blur-2xl pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-50/60 dark:bg-blue-900/10 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

                    {/* Left — Copy */}
                    <div className="space-y-8 text-center lg:text-left">
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-teal-custom/15 to-primary/10 border border-teal-custom/20 text-teal-custom dark:text-teal-400 font-semibold text-sm backdrop-blur">
                            <span className="material-symbols-outlined text-base">card_giftcard</span>
                            The Gift That Actually Matters
                        </div>

                        {/* Headline */}
                        <h1 className="font-display font-bold text-5xl sm:text-6xl lg:text-[4rem] text-secondary dark:text-white leading-[1.08] tracking-tight">
                            Some Gifts Are<br />
                            Forgotten.<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-custom via-primary to-[#15a352]">
                                This One Saves Lives.
                            </span>
                        </h1>

                        {/* Subheadline */}
                        <p className="text-lg text-gray-500 dark:text-gray-300 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                            Gift Oxxy to your parents, spouse, or best friend — and give them <strong className="text-secondary dark:text-white">up to 40% off</strong> on every hospital bill, doctor visit, and diagnostic test.
                        </p>

                        {/* Trust pill strip */}
                        <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                            {[
                                { icon: "verified", label: "No Age Limit" },
                                { icon: "local_hospital", label: "2L+ Hospitals" },
                                { icon: "payments", label: "Up to 40% Savings" },
                            ].map((pill) => (
                                <span key={pill.label} className="inline-flex items-center gap-1.5 text-xs font-semibold bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 px-3 py-1.5 rounded-full border border-gray-200 dark:border-gray-700">
                                    <span className="material-symbols-outlined text-primary text-sm">{pill.icon}</span>
                                    {pill.label}
                                </span>
                            ))}
                        </div>

                        {/* CTAs */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <a
                                href="#get-support"
                                className="relative group flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-5 bg-gradient-to-r from-primary to-[#12c951] text-white font-bold text-lg rounded-2xl shadow-[0_12px_28px_rgba(21,163,82,0.35)] hover:shadow-[0_16px_36px_rgba(21,163,82,0.5)] hover:-translate-y-0.5 transition-all duration-300"
                            >
                                <span className="material-symbols-outlined text-2xl">card_giftcard</span>
                                Gift This to a Loved One
                            </a>
                            <a
                                href="#how-it-works"
                                className="flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-5 bg-white dark:bg-gray-800 text-secondary dark:text-white font-bold text-lg rounded-2xl border-2 border-gray-200 dark:border-gray-700 hover:border-primary/40 hover:-translate-y-0.5 shadow-sm hover:shadow-md transition-all duration-300"
                            >
                                <span className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center flex-shrink-0">
                                    <span className="material-symbols-outlined text-lg">play_arrow</span>
                                </span>
                                See How It Works
                            </a>
                        </div>
                    </div>

                    {/* Right — Image + Floating Cards */}
                    <div className="relative">
                        {/* Glow behind image */}
                        <div className="absolute inset-0 bg-gradient-to-r from-teal-200/40 to-blue-200/40 dark:from-teal-900/30 dark:to-blue-900/30 rounded-3xl blur-2xl transform scale-105" />

                        <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/60 dark:border-gray-700">
                            <img
                                alt="Smiling person gifting health protection to their parents"
                                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
                                src="/hero.jpeg"
                            />
                            {/* Overlay gradient at bottom */}
                            <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-black/40 to-transparent" />
                        </div>

                        {/* Floating badge — top right */}
                        <div className="absolute -top-4 -right-4 bg-white dark:bg-gray-800 rounded-2xl shadow-xl px-4 py-3 flex items-center gap-3 border border-gray-100 dark:border-gray-700 animate-bounce-slow">
                            <div className="w-9 h-9 rounded-xl bg-green-100 dark:bg-green-900/40 text-primary flex items-center justify-center">
                                <span className="material-symbols-outlined text-lg">savings</span>
                            </div>
                            <div>
                                <p className="text-[10px] text-gray-400 font-medium leading-none mb-0.5">Average Savings</p>
                                <p className="text-sm font-extrabold text-secondary dark:text-white leading-none">Up to 40% Off</p>
                            </div>
                        </div>

                        {/* Floating badge — bottom left */}
                        <div className="absolute -bottom-4 -left-4 bg-white dark:bg-gray-800 rounded-2xl shadow-xl px-4 py-3 flex items-center gap-3 border border-gray-100 dark:border-gray-700">
                            <div className="w-9 h-9 rounded-xl bg-blue-100 dark:bg-blue-900/40 text-blue-600 flex items-center justify-center">
                                <span className="material-symbols-outlined text-lg">local_hospital</span>
                            </div>
                            <div>
                                <p className="text-[10px] text-gray-400 font-medium leading-none mb-0.5">Hospital Network</p>
                                <p className="text-sm font-extrabold text-secondary dark:text-white leading-none">2,00,000+ Centers</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
