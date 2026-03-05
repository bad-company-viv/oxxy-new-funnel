import { useEffect, useRef, useState } from "react";
import LeadForm from "./LeadForm";

const POPUP_STATE_KEY = "oxxy_popup_state";

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
        // Only mark dismissed if we didn't submit successfully
        if (!isSubmitted) {
            setPopupState("dismissed");
        }
        setIsOpen(false);
        trackEvent("oxxy_popup_close", { trigger_source: source });
    };

    const handleSuccess = () => {
        setPopupState("submitted");
        setIsSubmitted(true);
        trackEvent("oxxy_popup_submit", { trigger_source: source });

        // Auto-close after a few seconds of showing success message inside the form
        setTimeout(() => {
            setIsOpen(false);
        }, 3000);
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[90] bg-black/60 backdrop-blur-sm p-4 flex items-center justify-center">
            <div className="w-full max-w-xl rounded-3xl bg-white text-text-light border border-gray-200 shadow-[0_24px_60px_rgba(10,25,47,0.35)] overflow-hidden relative">

                {/* Close Button X */}
                <button
                    onClick={closePopup}
                    className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-black/10 hover:bg-black/20 text-white transition-colors"
                >
                    <span className="material-symbols-outlined text-xl">close</span>
                </button>

                <div className="bg-gradient-to-r from-primary to-teal-custom px-7 py-6 text-white text-center">
                    <h3 className="font-display text-2xl font-bold mt-1">Be There for Your Loved Ones</h3>
                    <p className="text-sm mt-1 opacity-90">Share a few details and we will guide you to the right support.</p>
                </div>

                <div className="px-7 py-7">
                    <LeadForm onSuccess={handleSuccess} source={source || "popup"} />

                    {!isSubmitted && (
                        <div className="mt-4 text-center">
                            <button
                                type="button"
                                onClick={closePopup}
                                className="text-gray-400 hover:text-gray-600 font-medium text-sm transition-colors"
                            >
                                Maybe Later
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
