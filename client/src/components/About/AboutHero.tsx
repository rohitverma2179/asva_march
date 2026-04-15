import React from "react";
import aboutHero from "../../assets/Aboutimages/ASVA.png";

const AboutHero: React.FC = () => {
  return (
    <section className="w-full bg-white overflow-x-hidden pt-[100px] pb-[100px]">
      <div
        className="grid grid-cols-[159px_3px_423px_241px_172px_312px] grid-rows-[172px_29px_144px_139px]"
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
          Ultra-premium iceberg water from Svalbard <br />
          helping fight climate change . Ultra-premium <br />
          iceberg water from Svalbard helping fight <br />
          climate change
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