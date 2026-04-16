import React from "react";
import aboutHero from "../../assets/Aboutimages/ASVA.png";

const AboutHero: React.FC = () => {
  return (
    <section className="w-full bg-white overflow-x-hidden pt-10 pb-10 lg:pt-[100px] lg:pb-[100px]">
      <div className="lg:hidden flex flex-col items-center px-6 text-center space-y-6">
        <h1 className="font-['Kalnia'] font-medium text-[36px] leading-tight text-black">
          Pure Alkaline Water for Better Everyday Hydration
        </h1>
        <p className="font-['Kantumruy'] font-normal text-[16px] text-[#393939]">
          ASVA offers high-quality alkaline water with balanced pH, delivering clean, safe, and refreshing hydration for everyday wellness.
        </p>
        <img src={aboutHero} alt="About Hero" className="w-full max-w-[320px] rounded-[20px] shadow-lg" />
      </div>

      <div
        className="hidden lg:grid grid-cols-[minmax(40px,159px)_3px_minmax(300px,423px)_minmax(100px,241px)_minmax(100px,172px)_312px] grid-rows-[172px_29px_144px_139px]"
      >
        {/* Heading */}
        <h1
          className="col-start-2 col-end-6 row-start-1 font-['Kalnia'] font-medium text-[64px] leading-none tracking-[0%] m-0 p-0 text-black normal-case"
        >
          Pure Alkaline Water for Better <br /> Everyday Hydration
        </h1>

        {/* Paragraph */}
        <p
          className="col-start-3 col-end-4 row-start-2 font-['Kantumruy'] font-normal text-[20px]  text-[#393939] tracking-[0%] m-0 p-0"
        >
          {/* Ultra-premium iceberg water from Svalbard 
          helping fight climate change . Ultra-premium <br />
          iceberg water from Svalbard helping fight <br />
          climate change */}

          ASVA offers high-quality alkaline water <br /> with balanced pH, delivering clean, safe, <br /> and refreshing hydration for everyday wellness.
        </p>

        {/* Image */}
        <div className="col-start-5 col-end-7 row-start-1 row-end-5 z-0">
          <img
            src={aboutHero}
            alt="About Hero"
            className="w-[484px] h-[484px] object-cover rounded-[20px] opacity-100"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutHero;