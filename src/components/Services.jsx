export default function Services() {
    return (
        <section className="py-20 bg-background-light dark:bg-background-dark">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <span className="text-primary font-bold tracking-wider uppercase text-sm">Be Their Safety Net</span>
                    <h2 className="font-display text-3xl md:text-4xl font-bold text-secondary dark:text-white mt-2">Real Help Beyond Just Adding Funds</h2>
                    <p className="text-gray-600 dark:text-gray-400 mt-4">Instead of just paying the bills, provide a permanent solution that instantly cuts their healthcare costs.</p>
                </div>
                <div className="bg-white dark:bg-surface-dark rounded-3xl shadow-xl overflow-hidden border border-gray-100 dark:border-gray-700">
                    <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-100 dark:divide-gray-700">
                        <div className="p-8 flex flex-col justify-center items-center text-center bg-gray-50 dark:bg-gray-800/50">
                            <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/50 rounded-full flex items-center justify-center mb-4 text-secondary dark:text-blue-300">
                                <span className="material-symbols-outlined text-3xl">medical_services</span>
                            </div>
                            <h3 className="font-bold text-xl text-gray-800 dark:text-white mb-2">Diagnostic Scan</h3>
                            <p className="text-gray-500 dark:text-gray-400 text-sm">Essential care for family wellness</p>
                        </div>
                        <div className="p-8 flex flex-col justify-center items-center text-center">
                            <p className="text-gray-500 dark:text-gray-400 font-medium mb-2">Unprotected Cost</p>
                            <p className="font-display font-bold text-4xl text-gray-400 line-through decoration-red-500 decoration-2">₹8,000</p>
                            <p className="text-red-500 text-sm mt-2 font-medium">Financial Anxiety</p>
                        </div>
                        <div className="p-8 flex flex-col justify-center items-center text-center bg-green-50 dark:bg-green-900/10 relative overflow-hidden">
                            <div className="absolute top-0 right-0 bg-primary text-white text-xs font-bold px-3 py-1 rounded-bl-lg">THE SOLUTION</div>
                            <p className="text-secondary dark:text-green-300 font-medium mb-2">With Your Oxxy Gift</p>
                            <p className="font-display font-bold text-5xl text-primary">₹4,800</p>
                            <div className="mt-3 bg-white dark:bg-surface-dark px-4 py-1 rounded-full border border-primary/20 shadow-sm">
                                <p className="text-primary font-bold text-sm">A 40% Immediate Reduction</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-center mt-12">
                    <p className="text-sm text-gray-500 italic mb-4">* Don't just give them Rs 8,000. Give them the power to make it Rs 4,800 forever.</p>
                </div>
            </div>
        </section>
    );
}
