export default function Plans() {
    return (
        <section className="py-20 bg-gray-50 dark:bg-gray-900 border-y border-gray-100 dark:border-gray-800">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <span className="text-primary font-bold tracking-wider uppercase text-sm">Give The Gift of Savings</span>
                    <h2 className="font-display text-3xl md:text-4xl font-bold text-secondary dark:text-white mt-2">Choose How To Help Your Loved Ones</h2>
                    <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto">Select a plan to instantly authorize a 40% discount across our network for your friends or family.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Basic Plan */}
                    <div className="bg-white dark:bg-surface-dark p-8 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-700 transition-all hover:shadow-lg hover:-translate-y-1">
                        <div className="mb-6">
                            <h3 className="text-xl font-bold text-secondary dark:text-white">Individual Card</h3>
                            <p className="text-gray-500 dark:text-gray-400 text-sm mt-2">Essential protection for one person</p>
                        </div>
                        <div className="mb-6">
                            <p className="font-display text-4xl font-bold text-secondary dark:text-white">₹999<span className="text-base text-gray-500 font-normal">/year</span></p>
                        </div>
                        <ul className="space-y-4 mb-8 text-sm text-gray-600 dark:text-gray-400">
                            <li className="flex items-center"><span className="material-symbols-outlined text-teal-custom mr-3">check_circle</span> 1 Member Coverage</li>
                            <li className="flex items-center"><span className="material-symbols-outlined text-teal-custom mr-3">check_circle</span> Up to 50% OPD Discounts</li>
                            <li className="flex items-center"><span className="material-symbols-outlined text-teal-custom mr-3">check_circle</span> Access to 2 Lakh+ Centers</li>
                        </ul>
                        <button className="w-full py-3 px-6 bg-gray-100 dark:bg-gray-800 text-secondary dark:text-white font-bold rounded-xl hover:bg-gray-200 dark:hover:bg-gray-700 transition">Get Started</button>
                    </div>

                    {/* Family Plan (Popular) */}
                    <div className="bg-white dark:bg-surface-dark p-8 rounded-3xl shadow-xl border-2 border-primary relative transform md:-translate-y-4">
                        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary text-white px-4 py-1 rounded-full text-xs font-bold tracking-wider">MOST POPULAR</div>
                        <div className="mb-6">
                            <h3 className="text-xl font-bold text-secondary dark:text-white">Family Shield</h3>
                            <p className="text-gray-500 dark:text-gray-400 text-sm mt-2">Complete peace of mind for the whole family</p>
                        </div>
                        <div className="mb-6">
                            <p className="font-display text-4xl font-bold text-primary">₹1,999<span className="text-base text-gray-500 font-normal">/year</span></p>
                        </div>
                        <ul className="space-y-4 mb-8 text-sm text-gray-600 dark:text-gray-400">
                            <li className="flex items-center"><span className="material-symbols-outlined text-primary mr-3">check_circle</span> Up to 6 Members Coverage</li>
                            <li className="flex items-center"><span className="material-symbols-outlined text-primary mr-3">check_circle</span> Highest Discounts (up to 70%)</li>
                            <li className="flex items-center"><span className="material-symbols-outlined text-primary mr-3">check_circle</span> Priority Access at Hospitals</li>
                            <li className="flex items-center"><span className="material-symbols-outlined text-primary mr-3">check_circle</span> 24/7 Dedicated Support</li>
                        </ul>
                        <button className="w-full py-3 px-6 bg-primary text-white font-bold rounded-xl hover:bg-primary-dark transition shadow-lg shadow-primary/30">Select Family Plan</button>
                    </div>

                    {/* Corporate/Premium Plan */}
                    <div className="bg-white dark:bg-surface-dark p-8 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-700 transition-all hover:shadow-lg hover:-translate-y-1">
                        <div className="mb-6">
                            <h3 className="text-xl font-bold text-secondary dark:text-white">Premium Care</h3>
                            <p className="text-gray-500 dark:text-gray-400 text-sm mt-2">Maximum benefits and exclusive perks</p>
                        </div>
                        <div className="mb-6">
                            <p className="font-display text-4xl font-bold text-secondary dark:text-white">₹2,999<span className="text-base text-gray-500 font-normal">/year</span></p>
                        </div>
                        <ul className="space-y-4 mb-8 text-sm text-gray-600 dark:text-gray-400">
                            <li className="flex items-center"><span className="material-symbols-outlined text-teal-custom mr-3">check_circle</span> Unlimited Members</li>
                            <li className="flex items-center"><span className="material-symbols-outlined text-teal-custom mr-3">check_circle</span> Zero Waiting Period</li>
                            <li className="flex items-center"><span className="material-symbols-outlined text-teal-custom mr-3">check_circle</span> Free Annual Health Checkup</li>
                            <li className="flex items-center"><span className="material-symbols-outlined text-teal-custom mr-3">check_circle</span> Concierge Medical Service</li>
                        </ul>
                        <button className="w-full py-3 px-6 bg-gray-100 dark:bg-gray-800 text-secondary dark:text-white font-bold rounded-xl hover:bg-gray-200 dark:hover:bg-gray-700 transition">Get Premium</button>
                    </div>
                </div>
            </div>
        </section>
    );
}
