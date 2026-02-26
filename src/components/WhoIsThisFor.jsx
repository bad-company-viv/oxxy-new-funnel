const benefitCards = [
    {
        icon: "health_and_safety",
        title: "Valid on all Pre-Existing Diseases",
        subtitle: "Oxxy works on pre-existing diseases like Diabetes, Cancer and more.",
        points: [
            "Works on Entire Body",
            "Includes Eye, Dental & Derma",
            "No Treatment Exclusion",
        ],
        tone: "from-[#f0fff7] to-[#f7fafc] border-[#cdeedc]",
    },
    {
        icon: "groups",
        title: "No Age Limit",
        subtitle: "Oxxy Health services can be availed by age groups from 0 to 120 years.",
        points: [
            "Activation in 24 Hours",
            "Priority Appointment Booking",
            "Full Support Call for Assistance",
        ],
        tone: "from-[#eef6ff] to-[#f7fafc] border-[#d5e5ff]",
    },
    {
        icon: "currency_rupee",
        title: "No Limit on Medical Expenses",
        subtitle: "Oxxy works seamlessly on medical expenses from Rs. 5,000 to Rs. 5 crores.",
        points: [
            "Unlimited Usage",
            "Discounts on Tests, Treatments & Surgeries",
            "Works on OPD & IPD",
        ],
        tone: "from-[#fff4ec] to-[#f9f7ff] border-[#ffe0ca]",
    },
    {
        icon: "local_hospital",
        title: "Works on OPD & IPD",
        subtitle: "From small tests to expensive surgeries, not limited to 24-hour hospitalization.",
        points: [
            "Includes Eye, Dental, Derma & Cosmetic",
            "Suitable for routine and major care",
            "Fast access with Priority Booking",
        ],
        tone: "from-[#f0f4ff] to-[#f6fffe] border-[#dbe3ff]",
    },
];

const reachStats = [
    { value: "1,500+", label: "Cities" },
    { value: "200,000+", label: "Hospitals & Diagnostics" },
    { value: "2,00,00,000+", label: "Customers" },
];

export default function WhoIsThisFor() {
    return (
        <section className="py-20 bg-white dark:bg-surface-dark">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <span className="text-primary font-bold tracking-wider uppercase text-sm">Card Benefits</span>
                    <h2 className="font-display text-3xl md:text-4xl font-bold text-secondary dark:text-white mt-2">
                        What This OXXY Card Covers
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-3xl mx-auto">
                        Coverage across pre-existing conditions, all age groups, OPD/IPD care, and high medical expense ranges.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
                    {benefitCards.map((card) => (
                        <article
                            key={card.title}
                            className={`rounded-3xl border p-6 bg-gradient-to-br ${card.tone} dark:bg-gray-900/70 dark:border-gray-700 shadow-sm hover:shadow-lg transition`}
                        >
                            <div className="w-12 h-12 rounded-2xl bg-white dark:bg-gray-800 shadow-sm flex items-center justify-center text-primary mb-4">
                                <span className="material-symbols-outlined fill-1">{card.icon}</span>
                            </div>
                            <h3 className="text-xl font-bold text-secondary dark:text-white leading-tight">{card.title}</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 min-h-[42px]">{card.subtitle}</p>
                            <ul className="mt-4 space-y-2.5 text-sm text-gray-700 dark:text-gray-300">
                                {card.points.map((point) => (
                                    <li key={point} className="flex items-start">
                                        <span className="material-symbols-outlined text-teal-custom mr-2 text-base leading-5">check_circle</span>
                                        <span>{point}</span>
                                    </li>
                                ))}
                            </ul>
                        </article>
                    ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                    {reachStats.map((stat) => (
                        <div
                            key={stat.label}
                            className="bg-gray-50 dark:bg-gray-800/60 border border-gray-200 dark:border-gray-700 rounded-2xl p-5 text-center"
                        >
                            <p className="font-display text-3xl font-extrabold text-primary">{stat.value}</p>
                            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
