export default function Navbar() {
    return (
        <nav className="sticky top-0 z-50 bg-surface-light/95 dark:bg-surface-dark/95 backdrop-blur-sm shadow-sm border-b border-gray-100 dark:border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    <div className="flex items-center">
                        <div className="flex items-center gap-2">
                            <img src="https://www.oxxy.in/image/oxxy_logo.png" alt="OXXY" className="h-8 md:h-10 w-auto" />
                        </div>
                    </div>
                    <div className="hidden md:flex items-center space-x-6">
                        <div className="flex items-center gap-3 ml-2">

                            <button className="bg-primary hover:bg-primary-dark text-white px-6 py-2 rounded-full font-bold shadow-md hover:shadow-lg transition transform hover:-translate-y-0.5">Gift 40% Savings</button>
                        </div>
                    </div>
                    <div className="md:hidden flex items-center">
                        <button className="text-gray-600 dark:text-white">
                            <span className="material-symbols-outlined text-3xl">menu</span>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
}
