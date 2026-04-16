import React from "react";
import img1 from "../../assets/Aboutimages/1.jpg";
import img4 from "../../assets/Aboutimages/4.jpg";

const OurCommitment: React.FC = () => {
    return (
    <section className="w-full bg-white py-16 lg:py-24 px-8 lg:px-32 overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-4 md:px-12 lg:px-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                
                {/* Left: Content */}
                <div className="flex flex-col space-y-6 text-center lg:text-left">
          <h2 className="font-['Kalnia'] text-[32px] md:text-[48px] leading-tight text-black">
            Our Commitment
          </h2>
          <p className="font-['Kantumruy'] text-[14px] md:text-[16px] leading-[1.6] text-[#393939] max-w-[500px] mx-auto lg:mx-0 opacity-90">
            We are committed to maintaining the highest standards
            in consistent quality, safety, trust, hygiene, and
            customer satisfaction. Every step — from purification
            to packaging — is designed to ensure that you receive
            water you can trust.
          </p>
                </div>

        {/* Right: Overlapping Images */}
        <div className="relative h-[450px] flex items-center justify-center lg:justify-end mt-12 lg:mt-0">
          {/* Background Image (Top/Left shifted) */}
          <div className="relative z-0 w-[200px] md:w-[260px] h-[260px] md:h-[340px] rounded-[10px] overflow-hidden shadow-xl transform -translate-x-8 md:-translate-x-12 -translate-y-8 md:-translate-y-12">
            <img 
              src={img1} 
              alt="Quality Assurance" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Foreground Image (Bottom/Right shifted) */}
          <div className="absolute z-10 w-[200px] md:w-[260px] h-[260px] md:h-[340px] rounded-[10px] overflow-hidden shadow-2xl transform translate-x-8 md:translate-x-12 translate-y-8 md:translate-y-12 border-4 border-white">
            <img 
              src={img4} 
              alt="Commitment to Excellence" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

      </div>
    </section>
    );
};

export default OurCommitment;
