import React from "react";
import blog2 from "../../assets/partner/img_10.webp"
import addsAsva from "../../assets/partner/img_5.png";
import grothImg from "../../assets/partner/img_6.png";
import leadingBg from "../../assets/partner/img_7.png";

/**
 * PartnerSupport Component
 * Features a 2x2 grid of wide images matching the provided design.
 * Maintains consistency with the top section's spacing and typography.
 */
const PartnerSupport: React.FC = () => {
  return (
    <section className="w-full bg-white py-12 md:py-20 lg:py-24 px-8 lg:px-32 overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-4 md:px-12 lg:px-20">
        
        {/* Header Section */}
        <div className="mb-10 lg:mb-2">
          <span className="text-label block mb-1 opacity-80 text-gray-400">
            Support We Provide
          </span>
          <h2 className="text-h1">
            Consistent Supply  <br /> & Brand Support
          </h2>
        </div>

        {/* Horizontal Image Grid (2x2) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-6">
          
          {/* Image Card 1 */}
          <div className="w-full aspect-[531/242] overflow-hidden rounded-[4px] shadow-md group">
            <img 
              src={blog2} 
              alt="Care Image 1" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>

          {/* Image Card 2 */}
          <div className="w-full aspect-[531/242] overflow-hidden rounded-[4px] shadow-md group">
            <img 
              src={addsAsva} 
              alt="Care Image 2" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            /> 
          </div> 

          {/* Image Card 3 */}
          <div className="w-full aspect-[531/242] overflow-hidden rounded-[4px] shadow-md group">
            <img 
              src={grothImg} 
              alt="Care Image 3" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>

          {/* Image Card 4 */}
          <div className="w-full aspect-[531/242] overflow-hidden rounded-[4px] shadow-md group">
            <img 
              src={leadingBg} 
              alt="Care Image 4" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default PartnerSupport;
