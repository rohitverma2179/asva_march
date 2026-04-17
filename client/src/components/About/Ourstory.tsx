import React from "react";
import ourStoryBg from "../../assets/Aboutimages/newimg/oursty.webp";

const Ourstory: React.FC = () => {
    return (
        <>
        {/* Mobile View Hero */}
        <section 
            className="lg:hidden w-full bg-cover bg-center min-h-125 mb-12 flex items-center justify-center px-6"
            style={{ backgroundImage: `url(${ourStoryBg})` }}
        >
            <div className="bg-white p-8 flex flex-col justify-center shadow-2xl rounded-lg text-center">
                <h3 className="font-['Kalnia'] font-medium text-[20px] leading-tight mb-4 text-black">
                    Expert Care & Maintenance
                </h3>
                <p className="font-['Kantumruy'] text-[14px] leading-relaxed text-[#393939] m-0">
                    Ultra-premium iceberg water from Svalbard helping fight climate change.
                </p>
            </div>
        </section>

        {/* Original Desktop Hero */}
        <section 
            className="hidden lg:grid w-full bg-cover bg-center h-[700px] mb-20 grid-cols-[minmax(40px,159px)_minmax(400px,778px)_381px_auto] grid-rows-[100px_226px_auto] overflow-x-hidden px-4 md:px-0"
            style={{ backgroundImage: `url(${ourStoryBg})` }}
        >
            <div 
                className="col-start-3 row-start-2 bg-white p-[40px] flex flex-col justify-center shadow-[0_10px_30px_rgba(0,0,0,0.1)] w-[381px] h-[226px] z-10"
            >
                <h3 className="font-['Kalnia'] font-medium text-[18px] leading-[120%] mb-[15px] capitalize-none" style={{ textTransform: 'none' }}>
                    Water, reimagined for modern living. 
                </h3>
                <p className="font-['Kantumruy'] text-[12px] leading-[150%] text-[#393939] m-0">
                   ASVA began with a simple belief. Water should do more than just quench thirst.
In today's fast-paced lifestyle, imbalance is common. Fatigue, acidity, and poor hydration have become routine. We saw the need for something better.
                </p>
            </div>
        </section>

        {/* New Section: Our Story & Maintenance (3 Columns) */}
        <section className="w-full bg-white py-16 md:py-24 px-6 sm:px-10 lg:px-20">
            <div className="max-w-306 mx-auto">
                <div className="flex flex-col items-center mb-12 md:mb-16">
                    <h2 className="font-['Kalnia'] text-[32px] md:text-[48px] leading-tight text-black mb-4 relative inline-block text-center">
                        Built with purpose. Designed for consistency.
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                    {/* Column 1 */}
                    <div className="flex flex-col p-6 rounded-xl hover:bg-gray-50 transition-colors duration-300">
                        <span className="font-['Kalnia'] font-bold text-[24px]  mb-4">01.</span>
                        <p className="font-['Kantumruy'] text-[15px] md:text-[16px] leading-relaxed text-[#393939]">
                        Advanced purification forms the core of every bottle. Multi-stage filtration removes impurities with precision. While maintaining a clean and balanced composition. Ensuring safe, reliable hydration you can trust daily.
                        </p>
                    </div>

                    {/* Column 2 */}
                    <div className="flex flex-col p-6 rounded-xl hover:bg-gray-50 transition-colors duration-300">
                        <span className="font-['Kalnia'] font-bold text-[24px]  mb-4">02.</span>
                        <p className="font-['Kantumruy'] text-[15px] md:text-[16px] leading-relaxed text-[#393939]">
                        Strict quality control is followed at every stage. From sourcing to filtration and final bottling. Each batch is monitored for safety and consistency. Delivering uniform standards across every bottle.
                        </p>
                    </div>

                    {/* Column 3 */}
                    <div className="flex flex-col p-6 rounded-xl hover:bg-gray-50 transition-colors duration-300">
                        <span className="font-['Kalnia'] font-bold text-[24px]  mb-4">03.</span>
                        <p className="font-['Kantumruy'] text-[15px] md:text-[16px] leading-relaxed text-[#393939]">
                        Carefully developed for everyday consumption. A clean, smooth profile with balanced properties. Designed to support better hydration habits. Seamlessly fitting into modern, active lifestyles.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    </>
);
};

export default Ourstory;
