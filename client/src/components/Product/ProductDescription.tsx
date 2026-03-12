import React from 'react';
import { FAQSection } from '../Shop/FAQSection';
import { productFAQData } from '../../data/productFaqData';

export const ProductDescription: React.FC<{ description: string, subDescription: string, keyFeatures: string[] }> = ({ description, subDescription, keyFeatures }) => {

    return (
        <div className="mt-12 md:ml-8 lg:ml-16 bg-linear-to-b from-[#cbf1fa] via-[#dcf6fc]/50 to-white/10 rounded-3xl p-8 md:p-12 shadow-sm">
            <div className="space-y-6 text-[17px] text-gray-800 leading-relaxed font-medium">
                <p dangerouslySetInnerHTML={{ __html: description }} />
                <p dangerouslySetInnerHTML={{ __html: subDescription }} />

                <ul className='list-disc ml-3 text-[16px]'>
                    {keyFeatures.map((feature, index) => (
                        <li key={index} className="mr-2" dangerouslySetInnerHTML={{ __html: feature }} />
                    ))}
                </ul>
            </div>

            <div className="mt-12 space-y-12">
                {/* FAQ */}
                <div className="-mx-6 md:-mx-12">
                    <FAQSection
                        faqData={productFAQData}
                        defaultOpen={true}
                        showAll={true}
                        compact={true}
                        title="FAQ"
                    />
                </div>
                {/* Disclaimer */}
                {/* <div>
                    <h3 className="font-serif font-bold text-lg mb-4 text-black">Disclaimer</h3>
                    <p className="text-sm text-gray-800">
                        {disclaimer}
                    </p>
                </div> */}
            </div>
        </div>
    );
};
