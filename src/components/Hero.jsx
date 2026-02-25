export default function Hero() {
    return (
        <section className="relative overflow-hidden pt-12 pb-20 lg:pt-24 lg:pb-32 bg-gradient-to-br from-blue-50/50 to-white dark:from-gray-900 dark:to-gray-800">
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-teal-custom/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-8 text-center lg:text-left">
                        <div className="inline-flex items-center px-4 py-2 rounded-full bg-teal-custom/10 text-teal-custom dark:text-teal-400 font-semibold text-sm">
                            <span className="material-symbols-outlined text-base mr-2">volunteer_activism</span>
                            Don't Just Help With Money—Provide A Solution
                        </div>
                        <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-secondary dark:text-white leading-tight">
                            Help Your Loved Ones <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-custom to-primary">Cut Medical Expenses by up to 40%</span>
                        </h1>
                        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                            During medical emergencies, money isn't enough. Give your friends and family the gift of Oxxy to drastically reduce their healthcare bills across India's top hospitals.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <button className="bg-primary hover:bg-primary-dark text-white text-lg font-bold py-4 px-8 rounded-full shadow-lg transform hover:-translate-y-1 transition duration-300 flex items-center justify-center gap-2">
                                Gift Protection Now
                                <span className="material-symbols-outlined fill-1">health_and_safety</span>
                            </button>
                            <button className="bg-white dark:bg-surface-dark text-text-light dark:text-white border-2 border-gray-200 dark:border-gray-600 hover:border-text-light font-bold py-4 px-8 rounded-full shadow-sm transition duration-300 flex items-center justify-center gap-2">
                                <span className="material-symbols-outlined text-primary fill-1">play_circle</span>
                                See How Much They Save
                            </button>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="bg-white dark:bg-surface-dark p-2 rounded-2xl shadow-2xl relative overflow-hidden group">
                            <div className="absolute inset-0 bg-gradient-to-tr from-secondary/80 to-teal-custom/80 z-10 opacity-0 group-hover:opacity-10 transition-opacity"></div>
                            <img alt="Smiling person helping their parents with medical care" className="rounded-xl w-full h-auto object-cover transform transition duration-700 hover:scale-105" src="/hero.jpeg" />
                            <div className="absolute top-6 right-6 bg-white dark:bg-gray-800 p-3 rounded-xl shadow-lg z-20 flex items-center gap-3 animate-bounce-slow">
                                <div className="bg-green-100 p-2 rounded-full text-green-600 flex items-center justify-center">
                                    <span className="material-symbols-outlined text-xl">payments</span>
                                </div>
                                <div>
                                    <p className="text-[10px] sm:text-xs text-gray-500 dark:text-gray-400 font-medium leading-tight">Average Savings</p>
                                    <p className="text-sm border sm:text-base font-bold text-secondary dark:text-white leading-tight">Up to 40% Off</p>
                                </div>
                            </div>
                        </div>
                        <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-r from-blue-200 to-teal-200 dark:from-blue-900 dark:to-teal-900 rounded-full blur-3xl opacity-30"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}
