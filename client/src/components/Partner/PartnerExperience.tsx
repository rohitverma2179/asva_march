import React from "react";
import bottlePng from "../../assets/bottle_png_.png";
import heroBottle from "../../assets/home/hero_img_bottle.png";
import amcPrime from "../../assets/services/amc_prime.png";
import amcHome from "../../assets/services/amc_home.png";

const PartnerExperience: React.FC = () => {
  return (
    <section className="w-full bg-white pt-24 pb-20 px-8 lg:px-32 overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-4 md:px-12 lg:px-20">
        {/* Header Section: Two-column layout matching the mockup */}
        <div className="flex flex-col lg:flex-row justify-between items-start mb-16 lg:mb-16 gap-12 lg:gap-20">
          <div className="flex-1">
            <span className="font-['Kantumruy'] text-[12px] md:text-[14px] text-gray-500 block mb-4 font-medium uppercase tracking-widest opacity-80">
              Why Partner with Us
            </span>
            <h1 className="font-['Kalnia'] font-medium text-[32px] sm:text-[44px] lg:text-[56px] xl:text-[64px] leading-[1] text-black">
              Expert Care & <br />
              Maintenance
            </h1>
          </div>

          <div className="flex-1 flex flex-col gap-4 lg:pt-0">
            <p className="font-['Kantumruy'] font-normal text-[13px] sm:text-[14px] md:text-[15px] text-[#393939] leading-relaxed max-w-[580px]">
              Keep your water pure and your system running flawlessly with our premium installation and AMC plans.
            </p>
            <p className="font-['Kantumruy'] font-normal text-[13px] sm:text-[14px] md:text-[15px] text-[#393939] leading-relaxed max-w-[580px]">
              Keep your water pure and your system running flawlessly with our premium installation and AMC plans. Keep your water pure and your system running flawlessly with our premium installation and AMC plans.
            </p>
          </div>
        </div>

        {/* Image Grid Section: Matching the asymmetrical border radii from design */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">

          {/* Image 1: Standard/Slightly Rounded */}
          <div className="aspect-[4/5] w-full overflow-hidden shadow-sm">
            <img
              src={heroBottle}
              alt="Expert Care 1"
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
            />
          </div>

          {/* Image 2: Heavy rounded Bottom-Left and Top-Right */}
          <div className="aspect-[4/5] w-full rounded-bl-[50px] rounded-tr-[50px] overflow-hidden shadow-sm">
            <img
              src={amcPrime}
              alt="Expert Care 2"
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
            />
          </div>

          {/* Image 3: Heavy rounded Top-Left and Bottom-Right */}
          <div className="aspect-[4/5] w-full rounded-tl-[50px] rounded-br-[50px] overflow-hidden shadow-sm">
            <img
              src={amcHome}
              alt="Expert Care 3"
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
            />
          </div>

          {/* Image 4: Top half and Bottom-Left rounded */}
          <div className="aspect-[4/5] w-full rounded-t-[60px] rounded-bl-[60px] overflow-hidden shadow-sm">
            <img
              src={bottlePng}
              alt="Expert Care 4"
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default PartnerExperience;