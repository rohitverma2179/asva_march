import React from 'react';

export const InfoSection: React.FC = () => {
    return (
        <section className="bg-linear-to-b from-[#cbf1fa] via-[#e0f7fc] to-white  py-6 sm:py-20 px-6 mt-10 w-full">
            <div className="max-w-full mx-auto text-center md:text-left">
                <h2 className="text-2xl md:text-4xl font-serif text-black mb-8 leading-tight text-center">
                    Explore the complete ASVA Alkaline Ecosystem

                </h2>

                <div className="text-[16px] md:text-[16px] text-gray-600 leading-relaxed space-y-4 max-w-[92.5%] mx-auto">
                    <p>
                        ASVA by Kevvali is created with one purpose: <b> Pure Water, Better India.</b>We make alkaline hydration simple and reliable for Indian homes and businesses through <b>packaged alkaline water, refill jar subscriptions, and portable alkaline ionizer machines</b> under one accountable brand.
                    </p>
                    <p>
                        Most water solutions are fragmented, different vendors for bottles, jars, dispensers and devices. ASVA integrates everything with consistent quality controls, responsible packaging, and customer support designed for long-term trust.

                    </p>
                    <ul className="list-disc pl-5 space-y-2 text-[16px] text-left inline-block">
                        <li>
                            <span className="font-bold text-gray-800">ASVA Bottles:</span>  Premium alkaline water for on-the-go hydration and lifestyle needs.
                            The most trusted brand of packaged drinking water in India. Water is treated with an 11-step process to ensure purity and safety. You can choose from various pack sizes, from 250ml to 20 litres.
                        </li>
                        <li>
                            <span className="font-bold text-gray-800">ASVA Jars & Subscriptions:</span>  Refill jars with deposit-return model for homes, offices and institutions.
                        </li>
                        <li>
                            <span className="font-bold text-gray-800">ASVA Ionizer Machines:</span>   Convert normal water into alkaline water on demand—ideal for high-use daily hydration.
                        </li>
                    </ul>
                    <p className="pt-4 text-[16px]  italic">
                        Choose the hydration model you prefer: <b> delivered water </b> or <b> water-on-demand </b> - ASVA supports both.
                    </p>
                </div>

                <div className="text-center mt-16">
                    <h3 className="text-2xl md:text-4xl font-serif text-black mb-4">
                        Premium Water Solutions for Modern India
                    </h3>
                    <p className="text-[16px]  text-gray-500 max-w-[92.5%] mx-auto">
                        Whether you are a home user, a clinic, a gym, an office pantry or a hospitality brand, ASVA offers reliable alkaline hydration in formats that fit your daily needs, backed by trust, compliance and service.
                    </p>
                </div>
            </div>
        </section>
    );
};
