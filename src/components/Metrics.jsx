export default function Metrics() {
    return (
        <section className="py-16 bg-white dark:bg-surface-dark border-b border-gray-100 dark:border-gray-800">
            <div className="max-w-4xl mx-auto px-4 text-center">
                <h2 className="font-display text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-100 mb-6">
                    Is your family protected from the rising cost of care?
                </h2>
                <div className="bg-red-50 dark:bg-red-900/20 rounded-2xl p-8 border border-red-100 dark:border-red-900/50 shadow-sm">
                    <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
                        <div className="bg-white dark:bg-surface-dark p-4 rounded-full shadow-md">
                            <span className="material-symbols-outlined text-4xl text-accent">trending_up</span>
                        </div>
                        <div className="text-left">
                            <p className="text-gray-600 dark:text-gray-300 font-medium">Medical Inflation in India is currently at</p>
                            <p className="font-display font-extrabold text-5xl md:text-6xl text-accent my-2">14%</p>
                            <p className="text-gray-500 dark:text-gray-400 text-sm">Gain peace of mind by ensuring medical bills never drain your family's future.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
