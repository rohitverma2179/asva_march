import React from "react";

const MissionVision: React.FC = () => {
    return (
        <section className="w-full bg-white py-16 lg:py-24 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 overflow-hidden">
            <div className="max-w-[1280px] mx-auto">
                {/* Heading */}
                <div className="flex flex-col items-center text-center mb-12 lg:mb-20 px-4">
                    <h2 className="font-['Kalnia'] text-[36px] sm:text-[48px] md:text-[56px] lg:text-[64px] leading-tight text-black mb-6">
                        Our Mission
                    </h2>
                    <p className="font-['Kantumruy'] text-[14px] leading-[1.6] text-[#393939] max-w-[600px]">
                        Clean, safe, and balanced alkaline water for everyday hydration. Supporting better hydration habits while maintaining high quality standards and consistency.
                    </p>
                </div>

                {/* Content with Yellow Divider */}
                <div className="relative grid grid-cols-1 lg:grid-cols-[1fr_2px_1fr] gap-12 lg:gap-0 items-start">
                    
                    {/* Left Column: Mission & Vision */}
                    <div className="pr-0 lg:pr-16 flex flex-col space-y-8 px-4 sm:px-0">
                        <div>
                            <h3 className="font-['Kalnia'] text-[24px] lg:text-[32px] mb-4 text-black">
                                Our Mission to Deliver Clean Alkaline Water

                            </h3>
                            <p className="font-['Kantumruy'] text-[16px] leading-[1.6] text-[#393939]">
                                Our mission is to deliver clean, safe, and balanced alkaline water that enhances everyday hydration and supports overall well-being.
                            </p>
                        </div>
                        
                        <ul className="space-y-3">
                            {[
                                "Promoting better hydration habits",
                                "Maintaining high-quality standards",
                                "Making alkaline water accessible",
                                "Building trust through consistency ,transparency and standards."
                            ].map((item, index) => (
                                <li key={index} className="font-['Kantumruy'] text-[14px] text-[#393939] flex items-start">
                                    <span className="mr-2 font-bold">{index + 1}.</span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Yellow Vertical Divider */}
                    <div className="hidden lg:block w-[1px] bg-[#000] h-full justify-self-center self-stretch"></div>
                    <div className="lg:hidden w-full h-[4px] bg-[#000]"></div>

                    {/* Right Column: Future Plans */}
                    <div className="pl-0 lg:pl-16 mt-0 flex flex-col space-y-8 px-4 sm:px-0">
                        <div>
                            <h3 className="font-['Kalnia'] text-[24px] lg:text-[32px] mb-4 text-black">
                               Our Vision to Build a Trusted Hydration Brand
                            </h3>
                            <p className="font-['Kantumruy'] text-[16px] leading-[1.6] text-[#393939]">
                                We aim to establish ASVA as a trusted name in the hydration industry.
                            </p>
                        </div>

                        <ul className="space-y-3">
                            {[
                                "Expanding distribution across multiple cities",
                                "Partnering with fitness centres, clinics, and wellness centers",
                                "Increasing awareness about alkaline water.",
                                "Continuously improving product quality.",
                                "Introducing innovative hydration solutions.",
                                "Building a strong community around health and wellness."
                            ].map((item, index) => (
                                <li key={index} className="font-['Kantumruy'] text-[14px] text-[#393939] flex items-start">
                                    <span className="mr-2 font-bold">{index + 1}.</span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MissionVision;
