import React from "react";
import uspImg from "../../assets/home/groth_section.png";

const USPSection: React.FC = () => {
    return (
        <section className="w-full bg-white py-16 lg:py-24 px-4 sm:px-10 lg:px-20 overflow-hidden">
            <div className="max-w-[1224px] mx-auto">
                {/* Heading */}
                <div className="flex justify-center mb-12 lg:mb-16">
                    <h2 className="font-['Kalnia'] text-[48px] md:text-[64px] leading-tight text-black text-center">
                        What Makes Us Different (USP)
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Left: Image */}
                    <div className="rounded-[20px] overflow-hidden shadow-2xl transition-transform duration-700 hover:scale-[1.02]">
                        <img
                            src={uspImg} 
                            alt="ASVA USP" 
                            className="w-full h-auto object-cover"
                        />
                    </div>

                    {/* Right: Content */}
                    <div className="flex flex-col space-y-8">
                        <p className="font-['Kantumruy'] text-[18px] md:text-[20px] leading-[1.6] text-[#393939]">
                            ASVA alkaline water is carefully processed using advanced purification 
                            and enhancement techniques to ensure purity, safety, optimal 
                            pH balance and effectiveness.
                        </p>

                        <div className="lg:bg-transparent lg:p-0 lg:rounded-none lg:border-none p-6 bg-gray-50 rounded-[20px] border border-gray-100">
                            <h3 className="font-['Kalnia'] text-[24px] mb-6 text-black">
                                Key features:
                            </h3>
                            <ul className="space-y-4">
                                {[
                                    "Balanced alkaline pH (8+ / 9+)",
                                    "Multi-stage purification process",
                                    "Mineral-enriched composition",
                                    "Hygienically bottled",
                                    "Free from harmful contaminants",
                                    "Clean, smooth and refreshing taste."
                                ].map((feature, index) => (
                                    <li 
                                        key={index} 
                                        className="font-['Kantumruy'] text-[16px] md:text-[18px] text-[#393939] flex items-start"
                                    >
                                        <span className="font-bold mr-3">{index + 1}.</span>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default USPSection;
