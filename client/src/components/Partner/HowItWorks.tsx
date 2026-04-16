import React from "react";
// import { motion } from "framer-motion";

/**
 * HowItWorks Component
 * A staggered layout showing the 3-step process for partners.
 * Designed based on the user provided dimensions and design.
 */
const HowItWorks: React.FC = () => {
  return (
    <section className="w-full bg-white py-20 px-8 lg:px-32">
      <div className="max-w-200 mx-auto">
        {/* Header */}
        <div className="text-center mb-24">
          <h2 className="font-['Kalnia'] font-medium text-[36px] md:text-[42px] text-black mb-4">
            How it works
          </h2>
          <p className="font-['Kantumruy'] text-[15px] text-gray-500">
            Follow 3 easy and simple steps!
          </p>
        </div>

        {/* Steps Container */}
        <div className="flex flex-col gap-[90px] max-w-[807px] mx-auto relative px-4">
          
          {/* Step 1: Apply */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-80">
            <div className="w-full md:w-1/2 flex justify-start">
              <h3 className="font-['Kalnia'] font-medium text-[28px] md:text-[40px] text-black">
                Apply
              </h3>
            </div>
            <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
              <div className="w-16 h-16 bg-[#E8F0F2] rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <p className="font-['Kantumruy'] text-[13px] md:text-[14px] text-gray-600 max-w-[280px]">
                Select your required service or plan and book online in seconds.
              </p>
            </div>
          </div>

          {/* Step 2: Verification */}
          <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8 md:gap-80">
            <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
              <div className="w-16 h-16 bg-[#F2F2F2] rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 001-1h1a2 2 0 100-4H7a1 1 0 01-1-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                </svg>
              </div>
              <p className="font-['Kantumruy'] text-[13px] md:text-[14px] text-gray-600 max-w-[280px]">
                Our certified technician arrives at your doorstep equipped with genuine parts.
              </p>
            </div>
            <div className="w-full md:w-1/2 flex justify-start">
              <h3 className="font-['Kalnia'] font-medium text-[28px] md:text-[40px] text-black">
                Verification
              </h3>
            </div>
          </div>

          {/* Step 3: Onboarding */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-80">
            <div className="w-full md:w-1/2 flex justify-start">
              <h3 className="font-['Kalnia'] font-medium text-[28px] md:text-[40px] text-black">
                Onboarding
              </h3>
            </div>
            <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
              <div className="w-16 h-16 bg-[#1D2130] rounded-2xl flex items-center justify-center mb-4 rotate-12">
                <svg className="w-8 h-8 text-white -rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <p className="font-['Kantumruy'] text-[13px] md:text-[14px] text-gray-600 max-w-[280px]">
                Enjoy pure water with our ongoing maintenance and support guarantee.
              </p>
            </div>
          </div>

          {/* Start CTA */}
          <div className="text-center pt-16">
            <span className="font-['Kalnia'] text-[24px] text-black opacity-80">Start</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
