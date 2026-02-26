export default function StickyMobileCTA() {
    return (
        <div className="md:hidden fixed inset-x-3 bottom-3 z-[70]" style={{ paddingBottom: "env(safe-area-inset-bottom)" }}>
            <div className="grid grid-cols-2 gap-2 p-2 rounded-2xl border border-gray-200 bg-white/95 backdrop-blur shadow-[0_10px_30px_rgba(10,25,47,0.2)]">
                <a
                    href="https://www.oxxy.in"
                    className="min-h-11 rounded-xl bg-primary text-white font-bold text-sm flex items-center justify-center gap-1.5"
                >
                    <span className="material-symbols-outlined text-base">shopping_bag</span>
                    Buy Now
                </a>
                <a
                    href="https://www.oxxy.in"
                    className="min-h-11 rounded-xl bg-secondary text-white font-bold text-sm flex items-center justify-center gap-1.5"
                >
                    <span className="material-symbols-outlined text-base">call</span>
                    Talk to Expert
                </a>
            </div>
        </div>
    );
}
