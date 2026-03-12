import React, { useState } from "react";
import { ChevronRight } from "lucide-react";
import type { FAQItem } from "../../data/faqData";

interface FAQSectionProps {
  faqData: FAQItem[];
  defaultOpen?: boolean;
  showAll?: boolean;
  compact?: boolean;
  title?: string;
}

export const FAQSection: React.FC<FAQSectionProps> = ({
  faqData,
  defaultOpen = false,
  showAll = false,
  compact = false,
  title = "Frequently Asked Questions"
}) => {
  const [activeFAQ, setActiveFAQ] = useState<number | null>(defaultOpen && faqData.length > 0 ? faqData[0].id : null);
  const [showMore, setShowMore] = useState(showAll);


  const toggleFAQ = (id: number) => {
    setActiveFAQ(activeFAQ === id ? null : id);
  };

  // 🔥 show only first 3 initially unless showAll is true
  const visibleFAQs = showMore || showAll ? faqData : faqData.slice(0, 3);
  return (
    <section className={`${compact ? 'py-8' : 'py-20'} px-6 container mx-auto max-w-4xl`}>
      <div className={`${compact ? '' : 'border-t border-gray-100 pt-16'}`}>
        {title && (
          <h3 className={`font-serif text-gray-800 mb-2 ${compact ? 'text-2xl pl-5 font-bold text-left' : 'text-xl text-center'}`}>
            {title}
          </h3>
        )}

        <div>
          {visibleFAQs.map((item) => {
            const isOpen = activeFAQ === item.id;

            return (
              <div key={item.id} className="border-b border-gray-100">
                {/* QUESTION */}
                <div
                  onClick={() => toggleFAQ(item.id)}
                  className="flex items-center justify-between py-6 px-4 cursor-pointer hover:bg-gray-50 transition-colors"
                >
                  <span className="text-xl md:text-xl font-serif text-black">
                    {item.question}
                  </span>
                  <ChevronRight
                    className={`w-5 h-5 transition-transform duration-300 ${isOpen ? "rotate-90 text-black" : "text-gray-400"
                      }`}
                  />
                </div>

                {/* ANSWER */}
                <div
                  className={`overflow-hidden transition-all duration-700 px-4 ${isOpen ? "max-h-40 pb-6 opacity-100" : "max-h-0 opacity-0"
                    }`}
                >
                  <p className="text-gray-600 text-md md:text-sm">{item.answer}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* LEARN MORE BUTTON */}
        {!showAll && (
          <div className="flex justify-center mt-12">
            <button
              onClick={() => setShowMore(!showMore)}
              className="text-[10px] font-bold text-gray-500 uppercase tracking-widest hover:text-black transition-colors"
            >
              {showMore ? "Show Less" : "Learn More"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
