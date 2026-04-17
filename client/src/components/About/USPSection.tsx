import React from "react";
// import uspImg from "../../assets/home/groth_section.png";
import uspImg from "../../assets/Aboutimages/newimg/usp.png";

const USPSection: React.FC = () => {
    return (
    <section className="w-full bg-white py-16 lg:py-24 px-8 lg:px-32 overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-4 md:px-12 lg:px-20">
        {/* Heading */}
        <div className="flex justify-center mb-10 lg:mb-14">
          <h2 className="font-['Kalnia'] text-[32px] md:text-[48px] leading-tight text-black text-center">
            What Makes Us Different (USP)
          </h2>
        </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Image Container with controlled sizing */}
          <div className="w-full max-w-[500px] mx-auto overflow-hidden rounded-[8px] shadow-xl aspect-[4/4] bg-gray-50 flex items-center justify-center transition-transform duration-700 hover:scale-[1.02]">
            <img 
              src={uspImg} 
              alt="ASVA USP" 
              className="w-full h-full object-cover"
            />
          </div>

                    {/* Right: Content */}
          <div className="flex flex-col space-y-6">
            <p className="font-['Kantumruy'] text-[15px] md:text-[17px] leading-[1.6] text-[#393939] opacity-90">
              ASVA alkaline water is carefully processed using advanced purification
              and enhancement techniques to ensure purity, safety, optimal
              pH balance and effectiveness.
            </p>

            <div className="p-6 bg-gray-50/50 rounded-[12px] border border-gray-100">
              <h3 className="font-['Kalnia'] text-[20px] md:text-[24px] mb-6 text-black">
                Key features:
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
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
                    className="font-['Kantumruy'] text-[14px] md:text-[16px] text-[#393939] flex items-start"
                  >
                    <span className="font-bold mr-3 text-black opacity-40">{index + 1}.</span>
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
