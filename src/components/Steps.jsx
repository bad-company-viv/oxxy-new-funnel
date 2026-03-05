const steps = [
    {
        num: "1",
        icon: "card_giftcard",
        title: "Choose a Plan to Gift",
        desc: "Pick the plan that fits your loved one's health needs — from routine care to comprehensive support. Starter from ₹999/month.",
        color: "bg-secondary",
        border: "border-secondary",
    },
    {
        num: "2",
        icon: "phone_in_talk",
        title: "Share Their Details",
        desc: "Our team calls you back, understands their needs, and activates the membership within 24 hours. No paperwork.",
        color: "bg-teal-custom",
        border: "border-teal-custom",
    },
    {
        num: "3",
        icon: "health_and_safety",
        title: "They Save on Every Bill",
        desc: "Your loved one shows the Oxxy membership at any of 2,00,000+ hospitals and gets instant savings — every single time.",
        color: "bg-primary",
        border: "border-primary",
    },
];

export default function Steps() {
    return (
        <section id="how-it-works" className="py-20 relative overflow-hidden">
            {/* Full-bleed infographic background */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: "url('/gift_steps.png')" }}
            />
            {/* Frosted white overlay so text stays readable */}
            <div className="absolute inset-0 bg-white/88 dark:bg-gray-900/92 backdrop-blur-[2px]" />

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-14">
                    <span className="inline-flex items-center gap-2 text-primary font-bold tracking-widest uppercase text-sm">
                        <span className="material-symbols-outlined text-base">card_giftcard</span>
                        How to Gift Oxxy
                    </span>
                    <h2 className="font-display text-4xl md:text-5xl font-bold text-secondary dark:text-white mt-3 leading-tight">
                        3 Simple Steps to<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-custom to-primary">Protect Someone You Love</span>
                    </h2>
                    <p className="text-gray-500 dark:text-gray-400 mt-4 text-lg">You don't need to be a doctor. You just need to care.</p>
                </div>

                {/* Steps with connector line */}
                <div className="space-y-8 relative">
                    <div className="absolute top-10 bottom-10 left-10 w-0.5 bg-gradient-to-b from-secondary via-teal-custom to-primary hidden sm:block" />

                    {steps.map((step) => (
                        <div key={step.num} className="flex flex-col sm:flex-row items-center sm:items-start gap-6 relative">
                            {/* Icon bubble */}
                            <div className={`flex-shrink-0 w-20 h-20 ${step.color} text-white rounded-full flex items-center justify-center shadow-xl z-10`}>
                                <span className="material-symbols-outlined fill-1 text-3xl">{step.icon}</span>
                            </div>

                            {/* Card */}
                            <div className={`bg-white/80 dark:bg-gray-800/70 backdrop-blur-sm border-l-4 ${step.border} rounded-2xl p-7 shadow-md hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 flex-grow`}>
                                <span className="text-xs font-bold tracking-widest uppercase text-gray-400 mb-1 block">Step {step.num}</span>
                                <h3 className="text-xl font-bold text-secondary dark:text-white mb-2">{step.title}</h3>
                                <p className="text-gray-500 dark:text-gray-400 leading-relaxed">{step.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
