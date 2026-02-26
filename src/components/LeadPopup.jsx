import { useEffect, useRef, useState } from "react";

const POPUP_STATE_KEY = "oxxy_popup_state";
const POPUP_LEAD_KEY = "oxxy_popup_last_lead";

function getPopupState() {
    try {
        return window.localStorage.getItem(POPUP_STATE_KEY);
    } catch {
        return null;
    }
}

function setPopupState(value) {
    try {
        window.localStorage.setItem(POPUP_STATE_KEY, value);
    } catch {
        // no-op
    }
}

function saveLeadPayload(payload) {
    try {
        window.localStorage.setItem(POPUP_LEAD_KEY, JSON.stringify(payload));
    } catch {
        // no-op
    }
}

function trackEvent(eventName, payload = {}) {
    if (typeof window === "undefined") return;
    if (window.dataLayer && Array.isArray(window.dataLayer)) {
        window.dataLayer.push({
            event: eventName,
            ...payload,
        });
    }
}

export default function LeadPopup() {
    const [isOpen, setIsOpen] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [source, setSource] = useState(null);
    const [formData, setFormData] = useState({
        fullName: "",
        phone: "",
        city: "",
    });
    const [error, setError] = useState("");
    const hasTriggeredRef = useRef(false);

    useEffect(() => {
        if (typeof window === "undefined") return undefined;
        if (getPopupState()) return undefined;

        const openPopup = (triggerSource) => {
            if (hasTriggeredRef.current) return;
            hasTriggeredRef.current = true;
            setSource(triggerSource);
            setIsOpen(true);
            trackEvent("oxxy_popup_open", { trigger_source: triggerSource });
        };

        const timeoutId = window.setTimeout(() => openPopup("timer_5s"), 5000);

        const onScroll = () => {
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            if (docHeight <= 0) return;
            const scrollRatio = window.scrollY / docHeight;
            if (scrollRatio >= 0.3) {
                openPopup("scroll_30_percent");
            }
        };

        window.addEventListener("scroll", onScroll, { passive: true });
        return () => {
            window.clearTimeout(timeoutId);
            window.removeEventListener("scroll", onScroll);
        };
    }, []);

    useEffect(() => {
        if (typeof document === "undefined") return;
        if (!isOpen) return;

        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";

        return () => {
            document.body.style.overflow = previousOverflow;
        };
    }, [isOpen]);

    const closePopup = () => {
        setPopupState("dismissed");
        setIsOpen(false);
        trackEvent("oxxy_popup_close", { trigger_source: source });
    };

    const closeSubmittedPopup = () => {
        setIsOpen(false);
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        setError("");
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const normalizedName = formData.fullName.trim();
        const normalizedCity = formData.city.trim();
        const normalizedPhone = formData.phone.replace(/\D/g, "");

        if (!normalizedName || !normalizedCity || normalizedPhone.length !== 10) {
            setError("Please enter name, city and a valid 10-digit phone number.");
            return;
        }

        const payload = {
            fullName: normalizedName,
            phone: normalizedPhone,
            city: normalizedCity,
            source: source || "unknown",
            submittedAt: new Date().toISOString(),
        };

        saveLeadPayload(payload);
        setPopupState("submitted");
        trackEvent("oxxy_popup_submit", {
            trigger_source: source,
            city: normalizedCity,
        });
        setIsSubmitted(true);
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[90] bg-black/60 backdrop-blur-sm p-4 flex items-center justify-center">
            <div className="w-full max-w-xl rounded-3xl bg-white text-text-light border border-gray-200 shadow-[0_24px_60px_rgba(10,25,47,0.35)] overflow-hidden">
                <div className="bg-gradient-to-r from-primary to-teal-custom px-7 py-6 text-white">
                    <h3 className="font-display text-2xl font-bold mt-1">Get Your Family Savings Plan</h3>
                    <p className="text-sm mt-1 opacity-90">Share details to continue with the best OXXY option.</p>
                </div>

                {isSubmitted ? (
                    <div className="px-7 py-8 text-center">
                        <div className="w-14 h-14 mx-auto rounded-full bg-green-100 text-primary flex items-center justify-center">
                            <span className="material-symbols-outlined fill-1 text-3xl">check</span>
                        </div>
                        <h4 className="text-2xl font-bold text-secondary mt-4">Thank you. Request submitted.</h4>
                        <p className="text-gray-600 mt-2">
                            Our team will contact you shortly with the best OXXY plan details.
                        </p>
                        <button
                            type="button"
                            onClick={closeSubmittedPopup}
                            className="mt-6 w-full sm:w-auto rounded-xl bg-primary text-white font-bold py-3.5 px-8 hover:bg-primary-dark transition"
                        >
                            Done
                        </button>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="px-7 py-7 space-y-5">
                        <div>
                            <label htmlFor="fullName" className="block text-sm font-semibold text-secondary mb-1">
                                Full Name
                            </label>
                            <input
                                id="fullName"
                                name="fullName"
                                type="text"
                                value={formData.fullName}
                                onChange={handleChange}
                                placeholder="Enter your full name"
                                className="w-full h-14 rounded-xl border-gray-300 focus:border-primary focus:ring-primary"
                            />
                        </div>

                        <div>
                            <label htmlFor="phone" className="block text-sm font-semibold text-secondary mb-1">
                                Phone Number
                            </label>
                            <input
                                id="phone"
                                name="phone"
                                type="tel"
                                inputMode="numeric"
                                maxLength={10}
                                value={formData.phone}
                                onChange={handleChange}
                                placeholder="10-digit mobile number"
                                className="w-full h-14 rounded-xl border-gray-300 focus:border-primary focus:ring-primary"
                            />
                        </div>

                        <div>
                            <label htmlFor="city" className="block text-sm font-semibold text-secondary mb-1">
                                City
                            </label>
                            <input
                                id="city"
                                name="city"
                                type="text"
                                value={formData.city}
                                onChange={handleChange}
                                placeholder="Enter your city"
                                className="w-full h-14 rounded-xl border-gray-300 focus:border-primary focus:ring-primary"
                            />
                        </div>

                        {error && (
                            <p className="text-sm text-red-600">{error}</p>
                        )}

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                            <button
                                type="button"
                                onClick={closePopup}
                                className="w-full rounded-xl border border-gray-300 text-secondary font-semibold py-3.5 px-4 hover:bg-gray-50 transition"
                            >
                                Maybe Later
                            </button>
                            <button
                                type="submit"
                                className="w-full rounded-xl bg-primary text-white font-bold py-3.5 px-4 hover:bg-primary-dark transition"
                            >
                                Submit Request
                            </button>
                        </div>
                    </form>
                )}
            </div>
        </div>
    );
}
