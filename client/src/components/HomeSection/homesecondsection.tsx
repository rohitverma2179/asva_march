import React from 'react';
import herosecond from '../../assets/home/herosecond.webp';

const HomeSecondSection: React.FC = () => {
  return (
    <section className="relative w-full mb-10  lg:mb-20 h-[50vh] md:h-[80vh] lg:h-[90vh] min-h-[350px] overflow-hidden">
      <img 
        src={herosecond} 
        alt="About ASVA" 
        className="w-full h-full object-cover object-center" 
      />
    </section>
  );
};

export default HomeSecondSection;
