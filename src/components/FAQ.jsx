export default function FAQ() {
    const faqs = [
        {
            question: "What exactly is Oxxy Health Savings?",
            answer: "Oxxy Health Savings is India's largest healthcare network that guarantees you discounted rates on treatments, tests, and medical procedures at over 2,00,000 affiliated hospitals, clinics, and labs."
        },
        {
            question: "How long is the waiting period before I can use the card?",
            answer: "There is absolutely zero waiting period. Your card is active the moment you purchase it, and you can start saving on your medical bills instantly."
        },
        {
            question: "Does this replace my regular health insurance?",
            answer: "No, Oxxy is not an insurance policy. It is a discount network. Health insurance covers hospitalization (usually IPD), while Oxxy gives you discounts on OPD, diagnostics, and procedures that insurance often rejects or limits."
        },
        {
            question: "Can I use the Family Card for my parents?",
            answer: "Yes! The Family Shield covers up to 6 members of your family, which can include your parents, spouse, children, and even parents-in-law."
        },
        {
            question: "How do I claim my discount at a hospital or lab?",
            answer: "Simply present your active Oxxy Health Savings digital or physical card at the reception or billing desk of our partner centers before they generate the bill."
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
