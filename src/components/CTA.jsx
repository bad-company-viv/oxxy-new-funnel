export default function CTA() {
    return (
        <section className="py-24 relative overflow-hidden bg-gradient-to-br from-[#0a1929] via-[#0d2137] to-[#071523]">
            {/* Background glows */}
            <div className="absolute top-0 left-1/3 w-96 h-96 bg-primary/15 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-teal-custom/10 rounded-full blur-[100px] pointer-events-none" />

            {/* Subtle grid overlay */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]" />

            <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
                {/* Eyebrow */}
                <span className="inline-flex items-center gap-2 text-teal-custom font-bold tracking-widest uppercase text-sm mb-6">
                    <span className="material-symbols-outlined text-base">favorite</span>
                    Because care is the best gift
                </span>

                {/* Headline */}
                <h2 className="font-display text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                    Show Them You Care,<br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-custom to-primary">
                        Protect Their Health.
                    </span>
                </h2>

                {/* Subheadline */}
                <p className="text-gray-400 text-xl mb-4 max-w-2xl mx-auto leading-relaxed">
                    Gift Oxxy to your parents, spouse, or best friend — and give them up to 40% off every hospital bill, doctor visit, and diagnostic.
                </p>

                {/* Italic tagline */}
                <p className="italic text-gray-500 text-base mb-12">
                    "Don't wait for an emergency to wish you had gifted this."
                </p>

                {/* CTA Button */}
                <a
                    href="tel:8800855340"
                    className="inline-flex items-center gap-3 bg-gradient-to-r from-primary to-[#12c951] text-white text-xl font-bold py-5 px-10 rounded-2xl shadow-[0_16px_40px_rgba(21,163,82,0.4)] hover:shadow-[0_20px_50px_rgba(21,163,82,0.55)] hover:-translate-y-1 transition-all duration-300"
                >
                    <span className="material-symbols-outlined text-2xl">card_giftcard</span>
                    Gift Oxxy
                    <span className="material-symbols-outlined fill-1 text-2xl">favorite</span>
                </a>

                {/* Trust bullets */}
                <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mt-8 text-sm text-gray-500">
                    <span className="flex items-center gap-1.5">
                        <span className="material-symbols-outlined fill-1 text-base text-primary">check_circle</span>
                        Quick callback from our team
                    </span>
                    <span className="text-gray-700">•</span>
                    <span className="flex items-center gap-1.5">
                        <span className="material-symbols-outlined fill-1 text-base text-primary">check_circle</span>
                        Plans for parents, spouse &amp; friends
                    </span>
                    <span className="text-gray-700">•</span>
                    <span className="flex items-center gap-1.5">
                        <span className="material-symbols-outlined fill-1 text-base text-primary">check_circle</span>
                        Satisfaction-based refund
                    </span>
                </div>
            </div>
        </section>
    );
}
