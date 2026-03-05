export default function FAQ() {
    const faqs = [
        {
            question: "What is this for?",
            answer: "This helps you support your loved ones during medical emergencies by connecting you with structured guidance to lower treatment stress."
        },
        {
            question: "Is this the same as health insurance?",
            answer: "No. This does not replace insurance. It complements your planning with practical guidance and savings-focused support for real treatment situations."
        },
        {
            question: "How quickly can I get support?",
            answer: "After you share your details, the team follows up quickly and helps you with next steps based on your family's needs."
        },
        {
            question: "Can I do this for my parents or relatives?",
            answer: "Yes. You can request support for parents, spouse, children, or other close family members."
        },
        {
            question: "What details do I need to share?",
            answer: "Just your name, phone number, and city to get a callback and personalized support guidance."
        }
    ];

    return (
        <section className="py-20 bg-background-light dark:bg-background-dark">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="font-display text-3xl md:text-4xl font-bold text-secondary dark:text-white">Frequently Asked Questions</h2>
                    <p className="text-gray-600 dark:text-gray-400 mt-4">Everything you need to know to secure your family's health.</p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <details key={index} className="group bg-white dark:bg-surface-dark border border-gray-100 dark:border-gray-700 rounded-2xl open:shadow-md transition-shadow duration-200">
                            <summary className="flex items-center justify-between cursor-pointer p-6 font-bold text-secondary dark:text-white outline-none marker:content-none">
                                {faq.question}
                                <span className="material-symbols-outlined text-gray-400 group-open:rotate-180 transition-transform duration-200">
                                    keyboard_arrow_down
                                </span>
                            </summary>
                            <div className="px-6 pb-6 text-gray-600 dark:text-gray-400">
                                <p>{faq.answer}</p>
                            </div>
                        </details>
                    ))}
                </div>
            </div>
        </section>
    );
}
