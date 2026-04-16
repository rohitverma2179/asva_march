import React from "react";
import img1 from "../../assets/Aboutimages/1.jpg";
import img4 from "../../assets/Aboutimages/4.jpg";

const OurCommitment: React.FC = () => {
    return (
        <section className="w-full bg-white py-16 lg:py-24 px-4 sm:px-10 lg:px-20 overflow-hidden">
            <div className="max-w-[1224px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                
                {/* Left: Content */}
                <div className="flex flex-col space-y-6 text-center lg:text-left">
                    <h2 className="font-['Kalnia'] text-[48px] md:text-[64px] leading-tight text-black">
                        Our Commitment
                    </h2>
                    <p className="font-['Kantumruy'] text-[18px] md:text-[22px] leading-[1.6] text-[#393939] max-w-[550px] mx-auto lg:mx-0">
                        We are committed to maintaining the highest standards 
                        in consistent quality, safety, trust, hygiene, and 
                        customer satisfaction. Every step — from purification 
                        to packaging — is designed to ensure that you receive 
                        water you can trust.
                    </p>
                </div>

                {/* Right: Overlapping Images */}
                <div className="relative h-[500px] flex items-center justify-center lg:justify-end mt-12 lg:mt-0">
                    {/* Background Image (Top/Left shifted) */}
                    <div className="relative z-0 w-[240px] md:w-[300px] h-[320px] md:h-[400px] rounded-[10px] overflow-hidden shadow-xl transform -translate-x-8 md:-translate-x-12 -translate-y-8 md:-translate-y-12">
                        <img 
                            src={img1} 
                            alt="Quality Assurance" 
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Foreground Image (Bottom/Right shifted) */}
                    <div className="absolute z-10 w-[240px] md:w-[300px] h-[320px] md:h-[400px] rounded-[10px] overflow-hidden shadow-2xl transform translate-x-8 md:translate-x-12 translate-y-8 md:translate-y-12 border-4 border-white">
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
