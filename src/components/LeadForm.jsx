import { useState } from 'react';

const giftForOptions = [
    "Friend",
    "Relative",
    "Colleague",
    "Someone in need",
    "Any other",
];

export default function LeadForm({ onSuccess, source = "unknown" }) {
    const [form, setForm] = useState({ name: '', phone: '', giftFor: '' });
    const [submitted, setSubmitted] = useState(false);
    const [errors, setErrors] = useState({ name: '', phone: '' });

    const validateForm = () => {
        const newErrors = { name: '', phone: '' };
        const normalizedName = form.name.trim();
        const normalizedPhone = form.phone.replace(/\D/g, "");

        if (!normalizedName) {
            newErrors.name = 'Please enter your name';
        }

        if (normalizedPhone.length < 10) {
            newErrors.phone = 'Please enter a valid 10-digit phone number';
        }

        setErrors(newErrors);
        return !newErrors.name && !newErrors.phone;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        setSubmitted(true);
        if (onSuccess) onSuccess();
    };

    if (submitted) {
        return (
            <div className="text-center py-8">
                <div className="w-16 h-16 rounded-full bg-green-100 dark:bg-green-900/30 text-primary flex items-center justify-center mx-auto mb-4 animate-bounce">
                    <span className="material-symbols-outlined fill-1 text-4xl">check_circle</span>
                </div>
                <h3 className="font-display text-2xl font-bold text-secondary dark:text-white mb-2">Details Submitted!</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">Thank you for sharing your details.</p>
                <p className="text-gray-500 dark:text-gray-400 text-sm">Our team will guide you to choose the perfect plan.</p>
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
                        placeholder="Enter your name"
                        value={form.name}
                        onChange={(e) => {
                            setForm({ ...form, name: e.target.value });
                            if (errors.name) setErrors({ ...errors, name: '' });
                        }}
                        className={`w-full pl-11 pr-4 py-3 rounded-xl border-2 bg-gray-50 dark:bg-gray-800 text-secondary dark:text-white placeholder-gray-400 focus:outline-none transition-colors text-base ${
                            errors.name ? 'border-red-500 dark:border-red-500' : 'border-gray-200 dark:border-gray-700 focus:border-primary'
                        }`}
                    />
                </div>
                {errors.name && <p className="text-red-500 text-xs mt-1.5">{errors.name}</p>}
            </div>

            {/* Phone */}
            <div>
                <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-1.5">Phone Number</label>
                <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-gray-400 text-xl">phone</span>
                    <input
                        type="tel"
                        required
                        placeholder="Enter your phone number"
                        value={form.phone}
                        onChange={(e) => {
                            setForm({ ...form, phone: e.target.value });
                            if (errors.phone) setErrors({ ...errors, phone: '' });
                        }}
                        className={`w-full pl-11 pr-4 py-3 rounded-xl border-2 bg-gray-50 dark:bg-gray-800 text-secondary dark:text-white placeholder-gray-400 focus:outline-none transition-colors text-base ${
                            errors.phone ? 'border-red-500 dark:border-red-500' : 'border-gray-200 dark:border-gray-700 focus:border-primary'
                        }`}
                    />
                </div>
                {errors.phone && <p className="text-red-500 text-xs mt-1.5">{errors.phone}</p>}
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
                <span className="material-symbols-outlined text-xl">send</span>
                Submit Details
            </button>

            <p className="text-center text-xs text-gray-400 dark:text-gray-500 mt-3">
                Or call directly: <a href="tel:8800855340" className="text-primary font-bold hover:underline">88008 55340</a>
            </p>
        </form>
    );
}
