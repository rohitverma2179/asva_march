import React from "react";

const AboutHeroMain: React.FC = () => {
  return (
    <section className="w-full bg-white pt-20 pb-12 lg:pt-32 lg:pb-0 overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 text-center animate-fadeIn">
        {/* Main Heading */}
        <h1 className="text-display mb-8">
          Grow with consistency. <br className="hidden sm:block" /> Built to
          scale.
        </h1>

        {/* Subtext */}
        <p className="max-w-xl mx-auto mb-10">
          Expand your business with a trusted hydration partner.{" "}
          <br className="hidden md:block" />
          Deliver clean, balanced water your customers can rely on.
        </p>

        {/* Call to Action */}
        {/* <button className="bg-black text-white px-12 py-4 rounded-[12px] font-bold text-[14px] tracking-wide hover:bg-[#1a1a1a] transition-all duration-300 shadow-xl hover:shadow-2xl active:scale-95 transform">
          Apply Now
        </button> */}
      </div>
    </section>
  );
};

export default AboutHeroMain;
