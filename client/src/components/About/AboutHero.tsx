import React from "react";
import aboutHero from "../../assets/Aboutimages/newimg/aboutHeromain.png";

const AboutHero: React.FC = () => {
  return (
    <section className="w-full overflow-hidden pt-20 pb-10 md:pt-20 md:pb-12 lg:pt-28 lg:pb-28">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Content Side */}
          <div className="lg:col-span-7 flex flex-col space-y-5 lg:space-y-6 animate-fadeIn text-black">
            <h1 className="text-h1">
              Pure Alkaline Water for Better <br className="hidden sm:block" /> Every Day Hydration
            </h1>
            
            <p className="max-w-[500px]">
              ASVA offers high-quality alkaline water with balanced pH, delivering clean, safe, and refreshing hydration for everyday wellness.
            </p>
          </div>

          {/* Image Side */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative group">
              <div className="absolute -inset-4 rounded-[30px] transition-colors duration-500"></div>
              
              <img
                src={aboutHero}
                alt="About Hero"
                className="relative w-full max-w-[300px] md:max-w-[380px] lg:max-w-[420px] aspect-square object-cover rounded-[20px] transition-all duration-700 hover:scale-[1.02]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;