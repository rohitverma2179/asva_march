import React from 'react';

export const BrandIntro: React.FC = () => {
    return (
        <section className="pb-20 pt-0 text-center">
            <h2 className="text-4xl md:text-5xl font-serif text-black mb-4">
                One brand. One accountable hydration partner.

            </h2>
            <p className="text-[16px] text-gray-500 text-sm md:text-base px-2 sm:px-0 tracking-wide max-w-[850px] mx-auto">
                Most customers manage multiple vendors for jars, bottles, dispensers and devices often with inconsistent quality. ASVA brings everything under one system: packaged alkaline water + refills + ionizers, so quality stays consistent and service stays reliable.
            </p>
        </section>
    );
};
