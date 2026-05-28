import React from "react";

/**
 * PartnerHero Component
 * A clean, centered hero section for the Partner page as per the provided design.
 */
const PartnerHero: React.FC = () => {
  return (
    <section className="w-full bg-white pt-24 sm:pb-20 md:pt-32 md:pb-10 px-8 lg:px-32 overflow-hidden">
      <div className="max-w-[1280px] mx-auto text-center flex flex-col items-center">
        {/* Main Heading */}
        <h1 className="text-display mb-3">
          Grow with consistency. <br className="hidden md:block" />
          Built to scale.
        </h1>

        {/* Sub-heading / Description */}
        <div className="max-w-[650px] space-y-2 mb-12">
          <p>Expand your business with a trusted hydration partner.</p>
          <p>Deliver clean, balanced water your customers can rely on.</p>
        </div>

        {/* Call to Action Button */}
        {/* <button className="bg-black text-white px-10 py-3 rounded-[6px] font-['Kantumruy'] font-medium text-[14px] hover:bg-zinc-800 transition-all duration-300 shadow-xl active:scale-95">
          Apply Now
        </button> */}
      </div>
    </section>
  );
};

export default PartnerHero;
