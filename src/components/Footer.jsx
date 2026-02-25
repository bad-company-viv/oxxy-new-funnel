export default function Footer() {
    return (
        <footer className="bg-secondary dark:bg-black text-white pt-16 pb-8 border-t border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <div className="bg-gradient-to-r from-teal-custom to-primary w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm">O</div>
                            <span className="font-display font-bold text-2xl tracking-tight">OXXY</span>
                        </div>
                        <p className="text-gray-300 text-sm leading-relaxed">
                            Oxxy is dedicated to providing financial relief and emotional security to families across India through expertly negotiated healthcare rates.
                        </p>
                        <div className="flex space-x-4 pt-2">
                            <a className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition" href="#"><span className="material-symbols-outlined text-sm">public</span></a>
                            <a className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition" href="#"><span className="material-symbols-outlined text-sm">alternate_email</span></a>
                        </div>
                    </div>
                    <div>
                        <h4 className="font-bold text-lg mb-4 text-teal-custom">Trust Center</h4>
                        <ul className="space-y-2 text-gray-300 text-sm">
                            <li><a className="hover:text-white transition" href="#">Family Success Stories</a></li>
                            <li><a className="hover:text-white transition" href="#">Our Hospital Partners</a></li>
                            <li><a className="hover:text-white transition" href="#">Safety Standards</a></li>
                            <li><a className="hover:text-white transition" href="#">Secure Payments</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold text-lg mb-4 text-teal-custom">Protection Plans</h4>
                        <ul className="space-y-2 text-gray-300 text-sm">
                            <li><a className="hover:text-white transition" href="#">Everyday Wellness Shield</a></li>
                            <li><a className="hover:text-white transition" href="#">Vital Protection Plan</a></li>
                            <li><a className="hover:text-white transition" href="#">Thrive Family Guard</a></li>
                            <li><a className="hover:text-white transition" href="#">Infinity Peace Plan</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold text-lg mb-4 text-teal-custom">Support</h4>
                        <ul className="space-y-3 text-gray-300 text-sm">
                            <li className="flex items-center gap-2"><span className="material-symbols-outlined text-sm">phone</span> 9999-000-111</li>
                            <li className="flex items-center gap-2"><span className="material-symbols-outlined text-sm">email</span> security@oxxy.in</li>
                            <li className="flex items-center gap-2"><span className="material-symbols-outlined text-sm">location_on</span> New Delhi, India</li>
                        </ul>
                    </div>
                </div>
                <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-gray-400">© 2026 Oxxy Health. Protecting Indian Families Since Inception.</p>
                    <div className="flex space-x-6 text-sm text-gray-400">
                        <a className="hover:text-white" href="#">Privacy Policy</a>
                        <a className="hover:text-white" href="#">Terms of Security</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
