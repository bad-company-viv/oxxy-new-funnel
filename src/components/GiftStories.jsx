const stories = [
    {
        name: "Rahul Mehta",
        city: "Delhi",
        avatar: "RM",
        color: "from-blue-500 to-indigo-600",
        occasion: "🎂 Birthday Gift for Parents",
        quote: "I gifted Oxxy to my parents for their anniversary. Two weeks later, Dad needed knee surgery. We saved ₹22,000 on the spot. I couldn't believe how fast it worked.",
        saving: "₹22,000 saved",
    },
    {
        name: "Priya Kapoor",
        city: "Pune",
        avatar: "PK",
        color: "from-rose-500 to-pink-600",
        occasion: "❤️ Just Because",
        quote: "My mom is diabetic and always skips doctor visits to save money. Now she goes every month without worrying. She cried when I told her I had sorted it. Best ₹999 I've ever spent.",
        saving: "Peace of mind — priceless",
    },
    {
        name: "Arjun Sharma",
        city: "Bangalore",
        avatar: "AS",
        color: "from-teal-500 to-green-600",
        occasion: "💼 Friend Who Lost Job Insurance",
        quote: "My college roommate lost his company insurance when he switched jobs. I gifted him Oxxy. He's used it 6 times in 4 months — for everything from blood tests to a dental procedure.",
        saving: "6 visits, zero stress",
    },
    {
        name: "Sunita Verma",
        city: "Jaipur",
        avatar: "SV",
        color: "from-orange-500 to-amber-600",
        occasion: "🧓 Parents' Day Gift",
        quote: "My father-in-law was hesitant. But when Oxxy saved us ₹8,500 on his eye surgery at a top hospital, he couldn't stop talking about it. Now my whole extended family wants one.",
        saving: "₹8,500 saved on eye surgery",
    },
];

export default function GiftStories() {
    return (
        <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50/30 dark:from-gray-900 dark:to-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <span className="inline-flex items-center gap-2 text-primary font-bold tracking-widest uppercase text-sm">
                        <span className="material-symbols-outlined text-base">auto_stories</span>
                        Real Gift Stories
                    </span>
                    <h2 className="font-display text-4xl md:text-5xl font-bold text-secondary dark:text-white mt-3 leading-tight">
                        Gifts That Changed<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-custom to-primary">Real Families</span>
                    </h2>
                    <p className="text-gray-500 dark:text-gray-400 mt-4 text-lg max-w-2xl mx-auto">
                        From parents who stopped skipping doctor visits, to friends who never worried again — here's what an Oxxy gift really means.
                    </p>
                </div>

                {/* Story Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {stories.map((s) => (
                        <article
                            key={s.name}
                            className="group bg-white dark:bg-surface-dark border border-gray-100 dark:border-gray-700 rounded-3xl p-7 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden"
                        >
                            {/* Gradient accent top border */}
                            <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${s.color}`} />

                            {/* Occasion badge */}
                            <span className="inline-block text-xs font-bold bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 px-3 py-1.5 rounded-full mb-5">
                                {s.occasion}
                            </span>

                            {/* Quote */}
                            <p className="text-gray-700 dark:text-gray-200 text-[1.05rem] leading-relaxed mb-6 italic">
                                "{s.quote}"
                            </p>

                            {/* Footer */}
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${s.color} text-white text-sm font-bold flex items-center justify-center flex-shrink-0`}>
                                        {s.avatar}
                                    </div>
                                    <div>
                                        <p className="font-bold text-secondary dark:text-white text-sm">{s.name}</p>
                                        <p className="text-gray-400 text-xs">{s.city}</p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <div className="flex mb-1 justify-end">
                                        {[...Array(5)].map((_, i) => (
                                            <span key={i} className="material-symbols-outlined fill-1 text-amber-400 text-base">star</span>
                                        ))}
                                    </div>
                                    <p className="text-primary font-bold text-xs">{s.saving}</p>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="text-center mt-12">
                    <p className="text-gray-500 dark:text-gray-400 text-base mb-4">Join 2 crore+ families across India who trust Oxxy</p>
                    <a
                        href="#support-options"
                        className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-bold px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5"
                    >
                        <span className="material-symbols-outlined text-xl">card_giftcard</span>
                        Write Your Own Story
                    </a>
                </div>
            </div>
        </section>
    );
}
