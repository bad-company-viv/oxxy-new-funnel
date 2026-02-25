export default function Steps() {
    return (
        <section className="py-20 bg-background-light dark:bg-background-dark relative">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="font-display text-3xl md:text-4xl font-bold text-secondary dark:text-white">A Simple Path to Family Well-being</h2>
                    <p className="text-gray-600 dark:text-gray-400 mt-4">Providing security for your loved ones is now effortless and completely stress-free.</p>
                </div>
                <div className="space-y-12 relative">
                    <div className="absolute top-0 bottom-0 left-10 -ml-[1px] w-0.5 bg-gradient-to-b from-secondary/20 via-teal-custom/40 to-primary/20 hidden sm:block"></div>

                    <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8 relative">
                        <div className="flex-shrink-0 w-20 h-20 bg-secondary text-white rounded-full flex items-center justify-center text-2xl font-bold shadow-lg z-10">1</div>
                        <div className="bg-white dark:bg-surface-dark p-8 rounded-2xl shadow-md border-l-4 border-secondary flex-grow transition duration-300 hover:shadow-xl">
                            <h3 className="text-xl font-bold text-secondary dark:text-white mb-3">Selecting Your Family's Shield</h3>
                            <p className="text-gray-600 dark:text-gray-400">Choose the health protection plan that best embraces your family’s unique needs and ensures their future security without compromise.</p>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8 relative">
                        <div className="flex-shrink-0 w-20 h-20 bg-teal-custom text-white rounded-full flex items-center justify-center text-2xl font-bold shadow-lg z-10">2</div>
                        <div className="bg-white dark:bg-surface-dark p-8 rounded-2xl shadow-md border-l-4 border-teal-custom flex-grow transition duration-300 hover:shadow-xl">
                            <h3 className="text-xl font-bold text-secondary dark:text-white mb-3">Worry-Free Access to Care</h3>
                            <p className="text-gray-600 dark:text-gray-400">Walk into any network hospital with absolute confidence; simply show your member code for priority reassurance and seamless assistance.</p>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8 relative">
                        <div className="flex-shrink-0 w-20 h-20 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold shadow-lg z-10">3</div>
                        <div className="bg-white dark:bg-surface-dark p-8 rounded-2xl shadow-md border-l-4 border-primary flex-grow transition duration-300 hover:shadow-xl">
                            <h3 className="text-xl font-bold text-secondary dark:text-white mb-3">Cherish Peace and Recovery</h3>
                            <p className="text-gray-600 dark:text-gray-400">Experience instant financial relief with reduced bills, allowing your entire family to focus solely on what matters most—a full and speedy recovery.</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
