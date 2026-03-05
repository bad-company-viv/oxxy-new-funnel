const pressLogos = [
    "Economic Times", "NDTV", "Inc42", "YourStory", "Business Standard", "Hindustan Times", "Mint", "Financial Express",
    "Economic Times", "NDTV", "Inc42", "YourStory", "Business Standard", "Hindustan Times", "Mint", "Financial Express",
];

export default function MediaCoverage() {
    return (
        <section className="py-14 bg-white dark:bg-surface-dark border-y border-gray-100 dark:border-gray-800 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 mb-8 text-center">
                <p className="text-sm font-bold tracking-widest uppercase text-gray-400 dark:text-gray-500">Trusted & Featured In</p>
            </div>

            {/* Scrolling strip */}
            <div className="relative w-full overflow-hidden group">
                {/* Fade edges */}
                <div className="absolute z-10 top-0 left-0 h-full w-32 bg-gradient-to-r from-white dark:from-surface-dark to-transparent pointer-events-none" />
                <div className="absolute z-10 top-0 right-0 h-full w-32 bg-gradient-to-l from-white dark:from-surface-dark to-transparent pointer-events-none" />

                <div className="flex items-center space-x-16 animate-marquee whitespace-nowrap py-2">
                    {pressLogos.map((name, i) => (
                        <div
                            key={`${name}-${i}`}
                            className="flex items-center gap-3 flex-shrink-0"
                        >
                            <span className="w-2 h-2 rounded-full bg-primary/30 flex-shrink-0" />
                            <span className="text-xl font-black text-gray-300 dark:text-gray-600 font-display tracking-tight hover:text-gray-400 dark:hover:text-gray-400 transition-colors cursor-default">
                                {name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
