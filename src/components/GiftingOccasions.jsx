const occasions = [
    { icon: "cake", label: "Birthday", note: "Gift them a year of protection" },
    { icon: "elderly", label: "Parents' Day", note: "They gave you everything" },
    { icon: "favorite", label: "Anniversary", note: "Years of love, now years of care" },
    { icon: "work_off", label: "Retirement", note: "No office insurance anymore?" },
    { icon: "school", label: "Graduation", note: "Stepping into the world, protected" },
    { icon: "child_care", label: "New Baby", note: "Start their health journey strong" },
    { icon: "volunteer_activism", label: "Just Because", note: "You don't need a reason" },
    { icon: "healing", label: "Post Surgery", note: "Ongoing care after they come home" },
];

export default function GiftingOccasions() {
    return (
        <section className="py-20 bg-gradient-to-br from-[#f0fdf4] to-[#f0f9ff] dark:from-gray-900 dark:to-gray-900 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="text-center mb-14">
                    <span className="inline-flex items-center gap-2 text-primary font-bold tracking-widest uppercase text-sm">
                        <span className="material-symbols-outlined text-base">card_giftcard</span>
                        Every Occasion, One Gift
                    </span>
                    <h2 className="font-display text-4xl md:text-5xl font-bold text-secondary dark:text-white mt-3 leading-tight">
                        The Perfect Gift<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-custom to-primary">For Every Moment</span>
                    </h2>
                    <p className="text-gray-500 dark:text-gray-400 mt-4 text-lg max-w-xl mx-auto">
                        You don't need a reason to protect someone you love. But if you're looking for one, here are a few.
                    </p>
                </div>

                {/* Main content: 2 col — illustration left, cards right */}
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-center">

                    {/* Left — illustration + stat */}
                    <div className="lg:col-span-2 flex flex-col gap-6">
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                            <img
                                src="/gifting_family.png"
                                alt="Indian family gifting Oxxy health protection"
                                className="w-full object-cover"
                                style={{ maxHeight: '420px', objectPosition: 'top' }}
                            />
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                                <p className="text-white font-bold text-lg leading-tight">
                                    "Gift them what they'll use every month — not just once."
                                </p>
                            </div>
                        </div>

                        {/* CTA below image */}
                        <a
                            href="#support-options"
                            className="flex items-center justify-center gap-3 bg-gradient-to-r from-primary to-[#12c951] text-white font-bold text-lg px-8 py-4 rounded-2xl shadow-[0_12px_28px_rgba(21,163,82,0.35)] hover:shadow-[0_16px_36px_rgba(21,163,82,0.5)] hover:-translate-y-0.5 transition-all duration-300"
                        >
                            <span className="material-symbols-outlined text-xl">card_giftcard</span>
                            Choose a Plan to Gift
                        </a>
                    </div>

                    {/* Right — occasion grid */}
                    <div className="lg:col-span-3 grid grid-cols-2 gap-4">
                        {occasions.map((o) => (
                            <div
                                key={o.label}
                                className="group bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-primary/40 rounded-2xl p-5 flex items-center gap-4 shadow-sm hover:shadow-md transition-all duration-200 cursor-default"
                            >
                                <div className="w-11 h-11 rounded-xl bg-primary/10 dark:bg-primary/20 text-primary flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-colors duration-200">
                                    <span className="material-symbols-outlined fill-1 text-xl">{o.icon}</span>
                                </div>
                                <div>
                                    <p className="text-secondary dark:text-white font-bold text-sm">{o.label}</p>
                                    <p className="text-gray-400 dark:text-gray-500 text-xs mt-0.5 leading-snug">{o.note}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
