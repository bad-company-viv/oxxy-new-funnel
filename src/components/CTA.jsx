export default function CTA() {
    return (
        <section className="py-24 bg-background-light dark:bg-background-dark relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 dark:opacity-0"></div>
            <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
                <h2 className="font-display text-4xl md:text-5xl font-bold text-secondary dark:text-white mb-6">
                    Be the Solution in Times of Need
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300 mb-10">
                    Join millions of Indians who empower their friends and family to cut medical bills by up to 40% without compromising on the quality of care.
                </p>
                <div className="flex flex-col items-center gap-6">
                    <a href="https://www.oxxy.in" className="bg-primary hover:bg-primary-dark text-white text-xl font-bold py-5 px-12 rounded-full shadow-2xl transform hover:scale-105 transition duration-300 animate-pulse-slow flex items-center gap-3">
                        Give Them 40% Savings Today
                        <span className="material-symbols-outlined">favorite</span>
                    </a>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                        <span className="material-symbols-outlined text-base align-text-bottom text-green-500">check_circle</span> Instant Activation for Any Mobile Number
                        <span className="mx-2">•</span>
                        <span className="material-symbols-outlined text-base align-text-bottom text-green-500">check_circle</span> Accepted at 2 Lakh+ Centers India-Wide
                    </p>
                </div>
            </div>
        </section>
    );
}
