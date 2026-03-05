const personas = [
    {
        icon: "elderly",
        relation: "Your Parents",
        tag: "Most Popular",
        tagColor: "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300",
        iconBg: "bg-orange-100 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400",
        accent: "border-orange-200 dark:border-orange-800",
        headline: "No age limit. Works on all pre-existing conditions.",
        desc: "Diabetes, cardiac, cancer — Oxxy covers them fully. No paperwork, no waiting period. Works from ₹500 to ₹5 crore bills.",
        points: ["All pre-existing diseases covered", "Works from ₹500 to ₹5 crore bills", "Home delivery of medicines"],
    },
    {
        icon: "diversity_1",
        relation: "Your Spouse",
        tag: "Family Favourite",
        tagColor: "bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-300",
        iconBg: "bg-rose-100 dark:bg-rose-900/20 text-rose-600 dark:text-rose-400",
        accent: "border-rose-200 dark:border-rose-800",
        headline: "From pregnancy to dental — total family care.",
        desc: "OPD visits, hospital stays, eye care, skin treatments and more — for the person you share your life with.",
        points: ["Pregnancy & maternity support", "Eye, dental & skin care", "Priority hospital booking"],
    },
    {
        icon: "people",
        relation: "Your Best Friend",
        tag: "Great Gift Idea",
        tagColor: "bg-violet-100 text-violet-700 dark:bg-violet-900/30 dark:text-violet-300",
        iconBg: "bg-violet-100 dark:bg-violet-900/20 text-violet-600 dark:text-violet-400",
        accent: "border-violet-200 dark:border-violet-800",
        headline: "Real friends cover hospital bills — not just drinks.",
        desc: "Lost job insurance? Between plans? Oxxy is the gift that actually shows up when it matters most.",
        points: ["No waiting period to use", "Works in 1,500+ cities", "Instant 40% savings"],
    },
    {
        icon: "child_care",
        relation: "Your Kids",
        tag: "Future Ready",
        tagColor: "bg-teal-100 text-teal-700 dark:bg-teal-900/30 dark:text-teal-300",
        iconBg: "bg-teal-100 dark:bg-teal-900/20 text-teal-600 dark:text-teal-400",
        accent: "border-teal-200 dark:border-teal-800",
        headline: "Start them protected from day one.",
        desc: "Routine checkups, vaccinations, diagnostics — give your child the healthiest head start possible.",
        points: ["Works from birth", "Routine & emergency care", "Diagnostics & lab tests"],
    },
];

const stats = [
    { value: "1,500+", label: "Cities" },
    { value: "2,00,000+", label: "Hospitals & Diagnostics" },
    { value: "2 Crore+", label: "Families Protected" },
];

export default function WhoIsThisFor() {
    return (
        <section className="py-24 bg-white dark:bg-surface-dark">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <span className="inline-flex items-center gap-2 text-primary font-bold tracking-widest uppercase text-sm">
                        <span className="material-symbols-outlined text-base">favorite</span>
                        Perfect for every bond
                    </span>
                    <h2 className="font-display text-4xl md:text-5xl font-bold text-secondary dark:text-white mt-3 leading-tight">
                        The Gift That Fits<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-custom to-primary">Every Relationship</span>
                    </h2>
                    <p className="text-gray-500 dark:text-gray-400 mt-5 max-w-2xl mx-auto text-lg">
                        Whether for ageing parents, a health-conscious spouse, or a best friend starting over — Oxxy fits every life stage.
                    </p>
                </div>

                {/* 2x2 editorial card grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {personas.map((p) => (
                        <article
                            key={p.relation}
                            className={`group flex gap-6 bg-white dark:bg-gray-800/50 border ${p.accent} rounded-3xl p-7 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300`}
                        >
                            {/* Icon column */}
                            <div className={`flex-shrink-0 w-14 h-14 rounded-2xl ${p.iconBg} flex items-center justify-center`}>
                                <span className="material-symbols-outlined fill-1 text-3xl">{p.icon}</span>
                            </div>

                            {/* Content */}
                            <div className="flex flex-col flex-grow min-w-0">
                                <div className="flex items-center gap-3 mb-3 flex-wrap">
                                    <h3 className="font-bold text-secondary dark:text-white text-lg">{p.relation}</h3>
                                    <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full ${p.tagColor}`}>{p.tag}</span>
                                </div>
                                <p className="text-sm font-semibold text-secondary dark:text-gray-100 mb-1.5 leading-snug">{p.headline}</p>
                                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-4">{p.desc}</p>
                                <ul className="flex flex-col gap-1.5 mt-auto">
                                    {p.points.map((pt) => (
                                        <li key={pt} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                                            <span className="material-symbols-outlined fill-1 text-primary text-base leading-none flex-shrink-0">check_circle</span>
                                            {pt}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </article>
                    ))}
                </div>

                {/* Trust Stats Strip */}
                <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4">
                    {stats.map((s) => (
                        <div
                            key={s.label}
                            className="bg-gray-50 dark:bg-gray-800/60 border border-gray-200 dark:border-gray-700 rounded-2xl p-6 text-center"
                        >
                            <p className="font-display text-4xl font-extrabold text-primary">{s.value}</p>
                            <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 font-medium">{s.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
