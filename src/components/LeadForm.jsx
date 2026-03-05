import { useState } from 'react';

const giftForOptions = [
    "My Parents",
    "My Spouse / Partner",
    "My Children",
    "My Best Friend",
    "My Sibling",
    "My Grandparents",
    "Someone Else",
];

export default function LeadForm({ onSuccess, source = "unknown" }) {
    const [form, setForm] = useState({ name: '', phone: '', giftFor: '' });
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        const normalizedName = form.name.trim();
        const normalizedPhone = form.phone.replace(/\D/g, "");

        if (!normalizedName || normalizedPhone.length < 10) return;

        // Open WhatsApp with pre-filled message
        const giftTarget = form.giftFor || 'a loved one';
        const msg = `Hi! I want to gift Oxxy to ${giftTarget}. My name is ${normalizedName}. Please help me choose the right plan.`;
        window.open(`https://wa.me/918800855340?text=${encodeURIComponent(msg)}`, '_blank');

        setSubmitted(true);
        if (onSuccess) onSuccess();
    };

    if (submitted) {
        return (
            <div className="text-center py-6">
                <div className="w-16 h-16 rounded-full bg-green-100 dark:bg-green-900/30 text-primary flex items-center justify-center mx-auto mb-4">
                    <span className="material-symbols-outlined fill-1 text-4xl">check_circle</span>
                </div>
                <h3 className="font-display text-xl font-bold text-secondary dark:text-white mb-2">Connecting to WhatsApp...</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm">Our team will guide you from there to choose the best plan.</p>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-4 text-left">
            {/* Name */}
            <div>
                <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-1.5">Your Name</label>
                <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-gray-400 text-xl">person</span>
                    <input
                        type="text"
                        required
                        placeholder="Rahul Sharma"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full pl-11 pr-4 py-3 rounded-xl border-2 border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-secondary dark:text-white placeholder-gray-400 focus:outline-none focus:border-primary transition-colors text-base"
                    />
                </div>
            </div>

            {/* Phone */}
            <div>
                <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-1.5">Phone Number</label>
                <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-gray-400 text-xl">phone</span>
                    <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="w-full pl-11 pr-4 py-3 rounded-xl border-2 border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-secondary dark:text-white placeholder-gray-400 focus:outline-none focus:border-primary transition-colors text-base"
                    />
                </div>
            </div>

            {/* Gift For */}
            <div>
                <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-1.5">Gifting For</label>
                <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-gray-400 text-xl">favorite</span>
                    <select
                        value={form.giftFor}
                        onChange={(e) => setForm({ ...form, giftFor: e.target.value })}
                        className="w-full pl-11 pr-4 py-3 rounded-xl border-2 border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-secondary dark:text-white focus:outline-none focus:border-primary transition-colors text-base appearance-none"
                    >
                        <option value="">Select relationship</option>
                        {giftForOptions.map((o) => (
                            <option key={o} value={o}>{o}</option>
                        ))}
                    </select>
                </div>
            </div>

            {/* Submit */}
            <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-[#12c951] text-white font-bold text-lg py-3.5 rounded-xl shadow-[0_8px_24px_rgba(21,163,82,0.35)] hover:shadow-[0_12px_32px_rgba(21,163,82,0.5)] hover:-translate-y-0.5 transition-all duration-300 mt-2"
            >
                <span className="text-xl">💬</span>
                Chat on WhatsApp
            </button>

            <p className="text-center text-xs text-gray-400 dark:text-gray-500 mt-3">
                Or call directly: <a href="tel:8800855340" className="text-primary font-bold hover:underline">88008 55340</a>
            </p>
        </form>
    );
}
