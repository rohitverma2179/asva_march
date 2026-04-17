import appyIcon from "../../assets/appyicon.png";
import onboardingImg from "../../assets/Onboarding.png";
import verificationImg from "../../assets/verification.png";

/**
 * HowItWorks Component
 * A staggered layout showing the 3-step process for partners.
 * Designed based on the user provided dimensions and design.
 */
const HowItWorks: React.FC = () => {
  return (
    <section className="w-full bg-white py-4 px-8 lg:px-32">
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
              <div className="w-16 h-16 flex items-center justify-center mb-4">
                <img src={appyIcon} alt="Apply Icon" className="w-full h-full object-contain" />
              </div>
              <p className="font-['Kantumruy'] text-[13px] md:text-[14px] text-gray-600 max-w-[280px]">
                Select your required service or plan and book online in seconds.
              </p>
            </div>
          </div>

          {/* Step 2: Verification */}
          <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8 md:gap-80">
            <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
              <div className="w-16 h-16 flex items-center justify-center mb-4">
                <img src={verificationImg} alt="Verification Icon" className="w-full h-full object-contain" />
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
              <div className="w-16 h-16 flex items-center justify-center mb-4">
                <img src={onboardingImg} alt="Onboarding Icon" className="w-full h-full object-contain" />
              </div>
              <p className="font-['Kantumruy'] text-[13px] md:text-[14px] text-gray-600 max-w-[280px]">
                Enjoy pure water with our ongoing maintenance and support guarantee.
              </p>
            </div>
          </div>

          {/* Start CTA */}
          <div className="text-center pt-0">
            <span className="font-['Kalnia'] text-[24px] text-black opacity-80">Start</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
