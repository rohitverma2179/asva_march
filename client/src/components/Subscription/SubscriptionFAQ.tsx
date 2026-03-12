// import React, { useState } from 'react';
// import { ChevronRight } from 'lucide-react';

// interface FAQItem {
//     id: string;
//     question: string;
//     answer: string;
// }

// const faqData: FAQItem[] = [

//     {
//         id: "1",
//         question: "What is ASVA subscription?",
//         answer: "ASVA subscription is a scheduled delivery plan for alkaline water bottles or refill jars. You choose the product, delivery frequency, and plan duration (1, 3, 6 or 12 months) and we deliver fresh as per schedule."
//     },
//     {
//         id: "2",
//         question: "What products can I subscribe to?",
//         answer: "You can subscribe to ASVA alkaline water bottles and refill jars (including 20L jars, where applicable). Subscription options depend on availability in your service location."
//     },
//     {
//         id: "3",
//         question: "Can I select my delivery days and time?",
//         answer: "Yes. You can choose delivery days (Mon to Sat) and preferred slot. You can also update the schedule anytime as per subscription rules."
//     },
//     {
//         id: "4",
//         question: "Can I pause or reschedule deliveries?",
//         answer: "Yes. You can pause, reschedule, or skip deliveries during the plan period. This helps when you are traveling, shifting location, or do not need supply for a few days."
//     },
//     {
//         id: "5",
//         question: "Can I change my address during subscription?",
//         answer: "Yes, you can change your address within our serviceable areas. If the new address is outside delivery coverage, the subscription will be adjusted as per policy."
//     },
//     {
//         id: "6",
//         question: "How will I be billed?",
//         answer: "Billing is based on the subscription plan you select (monthly or plan-based). The billing schedule and invoice details are shown during checkout."
//     },
//     {
//         id: "7",
//         question: "Is delivery free?",
//         answer: "Free delivery is available for selected products, pack sizes, and locations. Final delivery charges (if applicable) will be shown at checkout."
//     },
//     {
//         id: "8",
//         question: "Is ASVA safe and compliant?",
//         answer: "Yes. ASVA follows FSSAI requirements and quality processes aligned with applicable safety and hygiene standards. Regular quality checks are performed to maintain product safety and consistency."
//     },
//     {
//         id: "9",
//         question: "Do you provide bottles with deposit return?",
//         answer: "For refill jars and selected packs, a deposit may be applicable. Deposit terms are clearly shown on the product page and checkout."
//     },
//     {
//         id: "10",
//         question: "How can I contact ASVA support?",
//         answer: "You can contact ASVA support through phone, email, or the Contact page for delivery changes, subscription updates, and service assistance."
//     }

// ]

// const faqData: FAQItem[] = [

//     {
//         id: "1",
//         question: "What is ASVA subscription?",
//         answer: "ASVA subscription is a scheduled delivery plan for alkaline water bottles or refill jars. You choose the product, delivery frequency, and plan duration (1, 3, 6 or 12 months) and we deliver fresh as per schedule."
//     },
//     {
//         id: "2",
//         question: "What products can I subscribe to?",
//         answer: "You can subscribe to ASVA alkaline water bottles and refill jars (including 20L jars, where applicable). Subscription options depend on availability in your service location."
//     },
//     {
//         id: "3",
//         question: "Can I select my delivery days and time?",
//         answer: "Yes. You can choose delivery days (Mon to Sat) and preferred slot. You can also update the schedule anytime as per subscription rules."
//     },
//     {
//         id: "4",
//         question: "Can I pause or reschedule deliveries?",
//         answer: "Yes. You can pause, reschedule, or skip deliveries during the plan period. This helps when you are traveling, shifting location, or do not need supply for a few days."
//     },
//     {
//         id: "5",
//         question: "Can I change my address during subscription?",
//         answer: "Yes, you can change your address within our serviceable areas. If the new address is outside delivery coverage, the subscription will be adjusted as per policy."
//     },
//     {
//         id: "6",
//         question: "How will I be billed?",
//         answer: "Billing is based on the subscription plan you select (monthly or plan-based). The billing schedule and invoice details are shown during checkout."
//     },
//     {
//         id: "7",
//         question: "Is delivery free?",
//         answer: "Free delivery is available for selected products, pack sizes, and locations. Final delivery charges (if applicable) will be shown at checkout."
//     },
//     {
//         id: "8",
//         question: "Is ASVA safe and compliant?",
//         answer: "Yes. ASVA follows FSSAI requirements and quality processes aligned with applicable safety and hygiene standards. Regular quality checks are performed to maintain product safety and consistency."
//     },
//     {
//         id: "9",
//         question: "Do you provide bottles with deposit return?",
//         answer: "For refill jars and selected packs, a deposit may be applicable. Deposit terms are clearly shown on the product page and checkout."
//     },
//     {
//         id: "10",
//         question: "How can I contact ASVA support?",
//         answer: "You can contact ASVA support through phone, email, or the Contact page for delivery changes, subscription updates, and service assistance."
//     }

// ]


// export const SubscriptionFAQ: React.FC = () => {
//     const [openIndex, setOpenIndex] = useState<number | null>(null);

//     return (
//         <section className="py-20 px-6 bg-white">
//             <div className="container mx-auto max-w-4xl pt-12 border-t border-gray-200">
//                 <h3 className="text-xl font-serif text-gray-800 mb-8">Frequently Asked Questions</h3>

//                 <div className="space-y-0">
//                     {faqData.map((item) => (
//                         <div key={item.id} className="border-b border-gray-100">
//                             <div
//                                 onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
//                                 className="flex items-center justify-between py-6 cursor-pointer hover:bg-gray-50 px-4 transition-colors group"
//                             >
//                                 <span className="text-xl md:text-3xl font-serif text-black group-hover:text-gray-600 transition-colors">
//                                     Also Frequently Asked Questions
//                                 </span>
//                                 <ChevronRight
//                                     className={`text-gray-400 w-5 h-5 transition-transform duration-300 ${openIndex === item.id ? 'rotate-90 text-black' : ''}`}
//                                 />
//                             </div>
//                             {/* Accordion Content */}
//                             <div className={`overflow-hidden transition-all duration-300 ${openIndex === item.id ? 'max-h-40 py-4' : 'max-h-0'}`}>
//                                 <p className="text-sm text-gray-600 px-4">
//                                     Here is the answer to this question. It provides details about the subscription plan, delivery, or product specifics.
//                                 </p>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// };
