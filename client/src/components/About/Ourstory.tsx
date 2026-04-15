import React from "react";
import ourStoryBg from "../../assets/Aboutimages/ourstory.png";

const Ourstory: React.FC = () => {
    return (
        <>
            <section 
            className="w-full bg-cover bg-center h-[700px] mb-20 grid grid-cols-[159px_778px_381px_auto] grid-rows-[100px_226px_auto]"
            style={{ backgroundImage: `url(${ourStoryBg})` }}
        >
            {/* Title "Our Story" */}
            {/* <h2 
                className="col-start-1 row-start-1 font-['Kalnia'] text-[64px] text-black mt-[40px] capitalize-none"
                style={{ textTransform: 'none' }}
            >
                Our Story
            </h2> */}

            {/* Content Box */}
            <div 
                className="col-start-3 row-start-2 bg-white p-[40px] flex flex-col justify-center shadow-[0_10px_30px_rgba(0,0,0,0.1)] w-[381px] h-[226px]"
            >
                <h3 className="font-['Kalnia'] font-medium text-[18px] leading-[120%] mb-[15px] capitalize-none" style={{ textTransform: 'none' }}>
                    Expert Care & Maintenance, <br /> Expert Care & Maintenance
                </h3>
                <p className="font-['Kantumruy'] text-[12px] leading-[150%] text-[#393939] m-0">
                    Ultra-premium iceberg water from Svalbard helping fight climate change . 
                    Ultra-premium iceberg water from Svalbard helping fight climate change .
                    Ultra-premium iceberg water from Svalbard helping fight climate change
                </p>
            </div>
        </section>

        {/* New Section: Our Story & Maintenance (3 Columns) */}
        <section className="w-full bg-white py-24 px-4 sm:px-10 lg:px-20">
            <div className="max-w-[1224px] mx-auto">
                <div className="flex flex-col items-center mb-16">
                    <h2 className="font-['Kalnia'] text-[48px] leading-tight text-black mb-2 relative inline-block">
                        Our Story & Maintenance
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {/* Column 1 */}
                    <div className="flex flex-col">
                        <span className="font-bold text-[18px] mb-4">1.</span>
                        <p className="font-['Kantumruy'] text-[16px] leading-[1.6] text-[#393939]">
                            Svalbarði is carbon neutral-certified. The company invests in a carbon-offsetting scheme, 
                            which supports projects around the world. These have included a wind farm in western China, 
                            and upgrades to local water infrastructure in Uganda and Malawi. Our pure drinking water 
                            is produced in an entirely sustainable manner.
                        </p>
                    </div>

                    {/* Column 2 */}
                    <div className="flex flex-col">
                        <span className="font-bold text-[18px] mb-4">2.</span>
                        <p className="font-['Kantumruy'] text-[16px] leading-[1.6] text-[#393939]">
                            Svalbarði is carbon neutral-certified. The company invests in a carbon-offsetting scheme, 
                            which supports projects around the world. These have included a wind farm in western China, 
                            and upgrades to local water infrastructure in Uganda and Malawi. Our pure drinking water 
                            is produced in an entirely sustainable manner.
                        </p>
                    </div>

                    {/* Column 3 */}
                    <div className="flex flex-col">
                        <span className="font-bold text-[18px] mb-4">3.</span>
                        <p className="font-['Kantumruy'] text-[16px] leading-[1.6] text-[#393939]">
                            Svalbarði is carbon neutral-certified. The company invests in a carbon-offsetting scheme, 
                            which supports projects around the world. These have included a wind farm in western China, 
                            and upgrades to local water infrastructure in Uganda and Malawi. Our pure drinking water 
                            is produced in an entirely sustainable manner.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    </>
);
};

export default Ourstory;
