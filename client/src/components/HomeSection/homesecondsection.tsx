import React from 'react';
import herosecond from '../../assets/HomeImg/bottleasvascale.webp';

const HomeSecondSection: React.FC = () => {
  return (
    <section className="relative w-full mb-10   lg:mb-20 h-[40vh] md:h-[80vh] lg:h-[90vh] min-h-[300px] overflow-hidden">
      <img
        src={herosecond}
        alt="About ASVA"
        className="w-full h-full object-cover object-center scale-205 sm:scale-150"
      />
    </section>
  );
};

export default HomeSecondSection;