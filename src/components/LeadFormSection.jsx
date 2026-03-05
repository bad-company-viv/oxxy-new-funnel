import LeadForm from './LeadForm';

export default function LeadFormSection() {
    return (
        <section id="get-support" className="py-24 bg-gradient-to-br from-[#f0fdf4] via-white to-[#f0f9ff] dark:from-gray-900 dark:via-gray-900 dark:to-gray-900">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Left — Copy */}
                    <div>
                        <span className="inline-flex items-center gap-2 text-primary font-bold tracking-widest uppercase text-sm mb-5">
                            <span className="material-symbols-outlined text-base">contact_support</span>
                            Get Personalised Help
                        </span>
                        <h2 className="font-display text-4xl md:text-5xl font-bold text-secondary dark:text-white leading-tight mb-6">
                            Not Sure Which<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-custom to-primary">
                                Plan to Gift?
                            </span>
                        </h2>
                        <p className="text-gray-500 dark:text-gray-400 text-lg leading-relaxed mb-8">
                            Our team will call you back, understand your loved one's health needs, and recommend the perfect plan — in under 5 minutes.
                        </p>

                        {/* Checklist */}
                        <ul className="space-y-3">
                            {[
                                "Free consultation, no obligation",
                                "Plans starting at just ₹999/month",
                                "Works for all ages & pre-existing conditions",
                                "Same-day plan activation after call",
                            ].map((pt) => (
                                <li key={pt} className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                                    <span className="material-symbols-outlined fill-1 text-primary text-xl flex-shrink-0">check_circle</span>
                                    <span className="text-base">{pt}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Right — Form */}
                    <div className="bg-white dark:bg-surface-dark rounded-3xl shadow-2xl border border-gray-100 dark:border-gray-700 p-8 relative overflow-hidden">
                        {/* Accent blob */}
                        <div className="absolute top-0 right-0 w-40 h-40 bg-primary/5 rounded-full -mr-10 -mt-10 blur-2xl pointer-events-none" />

                        <div className="mb-7 relative z-10">
                            <h3 className="font-display text-2xl font-bold text-secondary dark:text-white">Gift the Right Plan</h3>
                            <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">We'll help you choose in under 5 minutes</p>
                        </div>

                        <div className="relative z-10">
                            <LeadForm source="lead_form_section" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
