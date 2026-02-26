export default function Plans() {
    const plans = [
        {
            name: "OXXY Everyday",
            originalPrice: "Rs. 2000",
            price: "Rs. 999",
            savings: "Rs. 40000",
            features: [
                "Works on Bills up to 10 Lacs",
                "Works on OPD",
                "Applicable on New Diseases",
                "Works on Eye & Dental Check ups",
                "Age limit Upto 70 Years",
                "Up to 20% Instant Discounts on all Treatments",
                "50 Medical Records on Cloud for Free",
                "Appointment Booking",
                "Activation in 72 hours",
                "Health Screening Not Required",
            ],
        },
        {
            name: "OXXY Vital",
            originalPrice: "Rs. 4000",
            price: "Rs. 1999",
            savings: "Rs. 60000",
            features: [
                "Works on Bills up to 20 Lacs",
                "Works on OPD & IPD",
                "Applicable on New Diseases",
                "Works on Eye, Dental & Skin Check ups",
                "Age limit Upto 75 Years",
                "Up to 25% Instant Discounts on all Treatments",
                "100 Medical Records on Cloud for Free",
                "Priority Appointment Booking",
                "Activation in 48 hours",
                "Health Screening Not Required",
                "Works during Pregnancy",
                "No Treatment Exclusion",
            ],
        },
        {
            name: "OXXY Thrive",
            originalPrice: "Rs. 6000",
            price: "Rs. 2999",
            savings: "Rs. 100000",
            features: [
                "Works on Bills up to 30 Lacs",
                "Works on OPD & IPD",
                "Applicable on New & Pre-Existing Diseases",
                "Works on Eye, Dental & Skin Treatments",
                "Age limit Upto 80 Years",
                "Up to 30% Instant Discounts on all Treatments",
                "200 Medical Records on Cloud for Free",
                "Priority Appointment Booking",
                "Activation in 24 hours",
                "Health Screening Not Required",
                "Works during Pregnancy",
                "No Treatment Exclusion",
                "Good for Cancers & Heart Patients",
            ],
        },
        {
            name: "OXXY Infinity",
            originalPrice: "Rs. 8000",
            price: "Rs. 3999",
            savings: "Rs. 140000",
            features: [
                "Works on Bills with No Upper Limit",
                "Works on OPD & IPD",
                "Applicable on New & Pre-Existing Diseases",
                "Works on Eye, Dental, Skin & Cosmetic Treatments",
                "No Age limit",
                "Up to 40% Instant Discounts on all Treatments",
                "500 Medical Records on Cloud for Free",
                "Priority Appointment Booking",
                "Activation in 24 hours",
                "Health Screening Not Required",
                "Works during Pregnancy",
                "No Treatment Exclusion",
                "Good for Covid, Cancers & Heart Patients",
            ],
        },
    ];

    return (
        <section className="py-16 bg-gray-50 dark:bg-gray-900 border-y border-gray-100 dark:border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <a
                        href="https://www.oxxy.in"
                        className="text-primary font-bold tracking-wider uppercase text-sm hover:underline"
                    >
                        Give The Gift of Savings
                    </a>
                    <h2 className="font-display text-3xl md:text-4xl font-bold text-secondary dark:text-white mt-2">Choose How To Help Your Loved Ones</h2>
                    <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto">Pick from the latest OXXY plans based on current pricing, savings and treatment coverage.</p>
                </div>

                <div className="flex gap-5 overflow-x-auto snap-x snap-mandatory pb-3 px-1">
                    {plans.map((plan) => {
                        const monthlyPrice = plan.price.replace("Rs. ", "");

                        return (
                            <div
                                key={plan.name}
                                className="bg-[#f7f7f8] dark:bg-surface-dark p-5 rounded-[1.75rem] shadow-sm border border-gray-200 dark:border-gray-700 transition-all hover:shadow-lg hover:-translate-y-1 flex flex-col h-[500px] min-w-[300px] sm:min-w-[330px] lg:min-w-[340px] snap-start"
                            >
                                <div className="mb-4 min-h-[145px]">
                                    <h3 className="text-[2.1rem] leading-[1.05] font-bold tracking-tight text-secondary dark:text-white">
                                        {plan.name}
                                    </h3>
                                    <div className="mt-3">
                                        <p className="line-through text-red-500 text-[1.35rem] leading-none">{plan.originalPrice}</p>
                                        <div className="mt-1 flex items-end gap-2">
                                            <span className="font-display text-[2.6rem] leading-none font-bold text-primary">
                                                Rs. {monthlyPrice}
                                            </span>
                                            <span className="text-gray-500 dark:text-gray-400 text-[1.5rem] leading-none pb-1">/month</span>
                                        </div>
                                    </div>
                                </div>
                                <p className="mb-4 min-h-[96px] bg-gray-200/70 dark:bg-gray-800 text-secondary dark:text-gray-100 text-[1.15rem] font-semibold px-4 py-3 rounded-xl flex items-center leading-tight">
                                    GUARANTEED ANNUAL SAVINGS of {plan.savings}*
                                </p>
                                <ul className="space-y-2.5 mb-5 text-[1rem] text-gray-600 dark:text-gray-400 flex-grow min-h-0 overflow-y-auto pr-1 leading-[1.35]">
                                    {plan.features.map((feature) => (
                                        <li key={feature} className="flex items-start">
                                            <span className="material-symbols-outlined text-teal-custom mr-3 text-base leading-5">check_circle</span>
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                                <a
                                    href="https://www.oxxy.in"
                                    className="w-full py-2.5 px-6 bg-gray-100 dark:bg-gray-800 text-secondary dark:text-white font-bold rounded-xl hover:bg-gray-200 dark:hover:bg-gray-700 transition mt-auto inline-flex items-center justify-center"
                                >
                                    Buy Now
                                </a>
                            </div>
                        );
                    })}
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-4">Swipe to view all plans.</p>
            </div>
        </section>
    );
}
