const stats = [
    { value: "1 in 4", label: "Indian families face a medical emergency every year" },
    { value: "₹4.5L", label: "Average cost of a major surgery in India in 2024" },
    { value: "68%", label: "Indians pay hospital bills directly out of their own pocket" },
    { value: "14%", label: "Annual medical inflation — the fastest-rising expense in India" },
];

export default function UrgencyBanner() {
    return (
        <section className="relative overflow-hidden py-16 lg:py-24 bg-[#071523]">
            {/* Subtle ambient glow */}
            <div className="absolute top-0 left-1/2 w-[600px] h-[400px] bg-teal-custom/10 rounded-full blur-[120px] -translate-x-1/2 pointer-events-none" />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

                    {/* Left — infographic image */}
                    <div className="flex items-center justify-center order-2 lg:order-1 mt-4 lg:mt-0">
                        <div className="relative rounded-3xl overflow-hidden shadow-[0_0_60px_rgba(21,163,82,0.15)] border border-white/10 w-full">
                            <img
                                src="/medical_cost_graph_v2.png"
                                alt="Rising medical costs in India infographic"
                                className="w-full object-cover rounded-3xl"
                            />
                            {/* Subtle inner glow overlay */}
                            <div className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/5" />
                        </div>
                    </div>

                    {/* Right — content */}
                    <div className="order-1 lg:order-2 text-center lg:text-left">
                        <span className="inline-flex items-center gap-1.5 sm:gap-2 text-amber-400 font-bold tracking-widest uppercase text-xs sm:text-sm mb-4 lg:mb-5">
                            <span className="material-symbols-outlined text-base">warning</span>
                            The Reality Check
                        </span>
                        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-4 lg:mb-5">
                            Medical Costs Are Rising.<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">
                                Are your friends, relatives and network ready?
                            </span>
                        </h2>
                        <p className="text-gray-400 text-base sm:text-lg leading-relaxed mb-8 lg:mb-9 max-w-lg mx-auto lg:mx-0">
                            Don't wait for an emergency to act. Help your network get protected and save big on medical bills.
                        </p>

                        {/* Stats — 2x2 grid */}
                        <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-8 lg:mb-10 text-left">
                            {stats.map((s) => (
                                <div
                                    key={s.label}
                                    className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-5 hover:border-amber-400/30 hover:bg-white/8 transition-all"
                                >
                                    <p className="font-display text-2xl sm:text-3xl font-extrabold text-amber-400 mb-1 lg:mb-1.5">{s.value}</p>
                                    <p className="text-gray-400 text-[11px] sm:text-xs leading-snug">{s.label}</p>
                                </div>
                            ))}
                        </div>

                        {/* CTA */}
                        <a
                            href="https://wa.me/?text=Hey!%20Check%20out%20Oxxy.%20It's%20a%20health%20protection%20plan%20that%20gives%20up%20to%2040%25%20off%20on%20every%20hospital%20bill%20and%20diagnostic%20test.%20Highly%20recommend%20it!%20https%3A%2F%2Fwww.oxxy.in"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex sm:inline-flex w-full sm:w-auto items-center justify-center gap-2 sm:gap-3 bg-gradient-to-r from-primary to-[#12c951] text-white font-bold text-base sm:text-lg px-6 py-3.5 sm:px-8 sm:py-4 rounded-xl sm:rounded-2xl shadow-[0_12px_28px_rgba(21,163,82,0.4)] hover:shadow-[0_16px_36px_rgba(21,163,82,0.55)] hover:-translate-y-0.5 transition-all duration-300"
                        >
                            <span className="material-symbols-outlined text-xl">share</span>
                            Recommend them Oxxy
                        </a>
                        <p className="text-gray-500 text-sm mt-4 italic">
                            "Don't wait for an emergency to wish you had gifted this."
                        </p>
                    </div>

                </div>
            </div>
        </section >
    );
}
