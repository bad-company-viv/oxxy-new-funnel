export default function Footer() {
    return (
        <footer className="bg-secondary dark:bg-black text-white pt-8 sm:pt-16 pb-4 sm:pb-8 border-t border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-12 mb-8 sm:mb-12">
                    <div className="space-y-4">
                        <a href="https://www.oxxy.in" className="inline-block">
                            <img src="https://www.oxxy.in/image/oxxy_logo.png" alt="OXXY" className="h-10 w-auto" />
                        </a>
                        <p className="text-gray-300 text-sm leading-relaxed">
                            Oxxy is dedicated to providing financial relief and emotional security to families across India through expertly negotiated healthcare rates.
                        </p>
                    </div>
                    <div>
                        <h4 className="font-bold text-lg mb-4 text-teal-custom">Protection Plans</h4>
                        <ul className="space-y-2 text-gray-300 text-sm">
                            <li><a className="hover:text-white transition" href="https://www.oxxy.in">Oxxy Everyday Plan</a></li>
                            <li><a className="hover:text-white transition" href="https://www.oxxy.in">Oxxy Vital Plan</a></li>
                            <li><a className="hover:text-white transition" href="https://www.oxxy.in">Oxxy Thrive Plan</a></li>
                            <li><a className="hover:text-white transition" href="https://www.oxxy.in">Oxxy Infinity Plan</a></li>
                            <li><a className="hover:text-white transition" href="https://www.oxxy.in">What is OXXY PLUS PLAN</a></li>
                            <li><a className="hover:text-white transition" href="https://www.oxxy.in">Oxxy Hospital Plan</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold text-lg mb-4 text-teal-custom">Support</h4>
                        <ul className="space-y-3 text-gray-300 text-sm">
                            <li>
                                <a className="flex items-center gap-2 hover:text-white transition" href="tel:8800855340">
                                    <span className="material-symbols-outlined text-sm">phone</span>
                                    8800855340
                                </a>
                            </li>
                            <li>
                                <a className="flex items-center gap-2 hover:text-white transition" href="https://wa.me/918800855340">
                                    <span className="material-symbols-outlined text-sm">chat</span>
                                    8800855340
                                </a>
                            </li>
                            <li>
                                <a className="flex items-center gap-2 hover:text-white transition" href="mailto:info@oxxy.in">
                                    <span className="material-symbols-outlined text-sm">email</span>
                                    info@oxxy.in
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="border-t border-gray-700 pt-4 sm:pt-8 flex flex-col items-center justify-center gap-4">
                    <p className="text-xs sm:text-sm text-gray-400 text-center">© 2026 Oxxy Health. Protecting Indian Families Since Inception.</p>
                    
                    {/* Credit Section */}
                    <div className="inline-flex items-center gap-1.5 rounded-md px-2 py-1 border border-white/30 bg-white/15 shadow-sm hover:shadow-md hover:bg-white/20 transition-all duration-300">
                        <a
                            href="https://fabulousmedia.in"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="rounded p-0.5 opacity-90 hover:opacity-100 transition-opacity flex items-center justify-center hover:scale-110 transition-transform"
                            aria-label="FabulousMedia"
                        >
                            <img
                                src="/sitecredits/fabulous.png"
                                alt="FabulousMedia"
                                className="h-3 w-auto"
                                loading="lazy"
                                width="80"
                                height="12"
                            />
                        </a>
                        <div className="h-3 w-px bg-white/30 transition-colors duration-300"></div>
                        <a
                            href="https://gocommercially.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="rounded p-0.5 opacity-90 hover:opacity-100 transition-opacity flex items-center justify-center hover:scale-110 transition-transform"
                            aria-label="GoCommercially"
                        >
                            <img
                                src="/sitecredits/gocommercially.svg"
                                alt="GoCommercially"
                                className="h-3 w-auto"
                                loading="lazy"
                                width="80"
                                height="12"
                            />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
