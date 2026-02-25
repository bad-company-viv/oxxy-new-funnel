export default function Testimonial() {
    return (
        <section className="py-20 bg-gradient-to-br from-secondary to-[#004080] dark:from-gray-900 dark:to-gray-800 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="relative order-2 lg:order-1">
                        <div className="absolute -inset-4 bg-primary/30 rounded-full blur-xl animate-pulse"></div>
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10 aspect-video group cursor-pointer">
                            <img alt="Indian customer video testimonial thumbnail" className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA3Ty93eL2aBH5wUsKKoE592bgAC8X7hkHBDyJLGURWqc3VEuooMDhHW1n4Z5zHCYwRe6pQMFwhGkztL4kW_u3w32lZlt4y03dHBEk04_phwuDpIVwcEz-NW2JpK5ROOpDLTvzuKL9K_D3Z8u1h527gN4uuyc3suttfhseBdtbfJdVEhSUQEpIu6_37mqO8_RSnLY_ty1mlOsuKGgWY3Y4jUYv7wFE_Xu5D6UL3HZi-leQzRDgnEWDMS2AZWcAxJiuJKAJvrSwryTo" />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center group-hover:bg-primary transition duration-300">
                                    <span className="material-symbols-outlined text-5xl text-white">play_arrow</span>
                                </div>
                            </div>
                            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                                <p className="font-bold text-lg">Priyanshu Sharma</p>
                                <p className="text-sm text-gray-300">Gained 100% Peace of Mind</p>
                            </div>
                        </div>
                    </div>
                    <div className="order-1 lg:order-2 space-y-8">
                        <span className="material-symbols-outlined text-6xl text-primary opacity-50">format_quote</span>
                        <div className="space-y-4">
                            <h3 className="text-primary font-bold tracking-widest uppercase text-sm">Empowering Your Family</h3>
                            <h2 className="font-display text-xl md:text-3xl font-medium leading-relaxed text-gray-100">
                                "When my father needed urgent eye surgery, I couldn't be there. But gifting him Oxxy cut his bill by 40%. It wasn't just about the money, <span className="text-primary font-bold underline decoration-2 underline-offset-8">it was giving him a solution</span> when he needed it most."
                            </h2>
                        </div>
                        <div className="flex items-center space-x-4">
                            <div className="flex text-yellow-400">
                                <span className="material-symbols-outlined fill-1">star</span>
                                <span className="material-symbols-outlined fill-1">star</span>
                                <span className="material-symbols-outlined fill-1">star</span>
                                <span className="material-symbols-outlined fill-1">star</span>
                                <span className="material-symbols-outlined fill-1">star</span>
                            </div>
                            <span className="text-blue-100 font-medium">4.8/5 Families Experience Greater Security</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
