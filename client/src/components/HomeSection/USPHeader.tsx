import React from 'react';

const USPHeader: React.FC = () => {
  return (
    <section className="w-full bg-white pt-10 pb-6 lg:pt-16 lg:pb-10">
      <div className="max-w-[1280px] mx-auto px-6 text-center animate-fadeIn">
        
        {/* Main Heading */}
        <h2 className="font-['Kalnia'] text-[32px] md:text-[48px] lg:text-[56px] font-medium leading-tight text-black mb-6">
          What Makes Us Different (USP)
        </h2>
        
        {/* Centered Paragraph */}
        <p className="max-w-3xl mx-auto font-['Kantumruy'] text-[14px] md:text-[16px] text-[#393939]/80 leading-relaxed px-4">
          ASVA alkaline water is carefully processed using advanced purification <br className="hidden md:block" />
          and enhancement techniques to ensure purity, safety, optimal pH balance and effectiveness.
        </p>

      </div>
    </section>
  );
};

export default USPHeader;
