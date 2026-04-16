import React from "react";
import img1 from "../../assets/Aboutimages/1.jpg";
import img2 from "../../assets/Aboutimages/2.jpg";
import img3 from "../../assets/Aboutimages/3.jpg";
import img4 from "../../assets/Aboutimages/4.jpg";
import img5 from "../../assets/Aboutimages/5.png";
import img6 from "../../assets/Aboutimages/6.png";

const Whoweare: React.FC = () => {
    return (
    <section className="w-full bg-white pb-20 lg:pb-32 px-4 sm:px-10 lg:px-20 overflow-x-hidden">
        {/* Mobile View */}
        <div className="lg:hidden flex flex-col space-y-12 max-w-[600px] mx-auto pt-10">
            <div className="text-center px-4">
                <p className="font-['Kantumruy'] text-[14px] text-[#555] mb-2">Who we are</p>
                <h2 className="font-['Kalnia'] font-medium text-[32px] leading-tight text-black">Expert Care & Maintenance</h2>
            </div>
            
            <div className="flex flex-col space-y-8 px-4">
                <img src={img1} className="w-full h-auto object-cover rounded-lg" alt="Who we are 1" />
                <h3 className="font-['Kalnia'] font-medium text-[20px] text-black">Expert Care & Maintenance</h3>
                <p className="font-['Kantumruy'] text-[14px] text-[#393939]">
                    Ultra-premium iceberg water from Svalbard helping fight climate change.
                </p>
                <img src={img3} className="w-full h-[200px] object-cover rounded-lg" alt="Who we are 3" />
                <img src={img4} className="w-full h-[200px] object-cover rounded-lg" alt="Who we are 4" />
                <img src={img5} className="w-full h-auto object-cover rounded-lg" alt="Who we are 5" />
                <img src={img6} className="w-full h-[200px] object-cover rounded-lg" alt="Who we are 6" />
            </div>
        </div>

        {/* Original Desktop View */}
        <div
            className="hidden lg:grid mx-auto w-[998px] grid-cols-[22px_219px_46px_22px_29px_151px_107px_29px_26px_84px_203px_16px_14px_30px] grid-rows-[4px_159px_4px_134px_44px_24px_15px_115px_90px_193px_119px_159px_72px]"
        >
            {/* ROW 1: Top section */}
            <div className="col-start-2 col-end-3 row-start-2 row-end-10">
                <img src={img1} className="w-[219px] h-[456px] object-cover" alt="Who we are 1" />
            </div>

            {/* Text Block 1: "Who we are" and "Expert Care" */}
            <div
                className="col-start-3 col-end-10 row-start-2 text-center grid align-content-start pt-[20px]"
            >
                <p className="font-['Kantumruy'] font-normal text-[16px] leading-none mb-[10px]">Who we are</p>
                <h2 className="font-['Kalnia'] font-medium text-[36px] leading-none m-0 normal-case">Expert Care & Maintenance</h2>
            </div>

            {/* Image 2: left 877, top 812, w 287, h 163 */}
            <div className="col-start-10 col-end-12 row-start-1 row-end-3">
                <img src={img2} className="w-[287px] h-[163px] object-cover" alt="Who we are 2" />
            </div>

            {/* Divider 1 */}
            <div className="col-start-3 col-end-15 row-start-4 border-t border-[#D1D1D1] my-[20px]"></div>

            {/* ROW 2 */}
            {/* Image 3: left 564, top 1113, w 287, h 159 */}
            <div className="col-start-5 col-end-9 row-start-5 row-end-8">
                <img src={img3} className="w-[287px] h-[159px] object-cover" alt="Who we are 3" />
            </div>

            {/* Text Block 2 */}
            <div className="col-start-10 col-end-15 row-start-5">
                <h3 className="font-['Kalnia'] font-medium text-[16px] leading-none m-0 w-[347px] normal-case">
                    Expert Care & Maintenance, <br /> Expert Care & Maintenance
                </h3>
            </div>
            <div className="col-start-10 col-end-15 row-start-6">
                <p className="font-['Kantumruy'] text-[12px] leading-[140%] text-[#393939] w-[338px]">
                    Ultra-premium iceberg water from Svalbard helping fight climate change .
                    Ultra-premium iceberg water from Svalbard helping fight climate change
                </p>
            </div>

            {/* Divider 2 */}
            <div className="col-start-1 col-end-10 row-start-7 border-t border-[#D1D1D1] my-[40px]"></div>

            {/* ROW 3 */}
            {/* Image 4 */}
            <div className="col-start-4 col-end-8 row-start-10">
                <img src={img4} className="w-[287px] h-[193px] object-cover" alt="Who we are 4" />
            </div>

            {/* Image 5: left 961, top 1311, w 219, h 561 */}
            <div className="col-start-11 col-end-13 row-start-9 row-end-13">
                <img src={img5} className="w-[219px] h-[561px] object-cover" alt="Who we are 5" />
            </div>

            {/* Divider 3 */}
            <div className="col-start-1 col-end-9 row-start-11 border-t border-[#D1D1D1] self-center my-[20px]"></div>

            {/* ROW 4 */}
            {/* Image 6: left 226, top 1713, w 287, h 159 */}
            <div className="col-start-1 col-end-4 row-start-12">
                <img src={img6} className="w-[287px] h-[159px] object-cover" alt="Who we are 6" />
            </div>

            <div className="col-start-5 col-end-9 row-start-12">
                <h3 className="font-['Kalnia'] font-medium text-[16px] leading-none mb-[10px] normal-case">
                    Expert Care & Maintenance, <br /> Expert Care & Maintenance
                </h3>
                <p className="font-['Kantumruy'] text-[12px] leading-[140%] text-[#393939] max-w-[340px]">
                    Ultra-premium iceberg water from Svalbard helping fight climate change .
                    Ultra-premium iceberg water from Svalbard helping fight climate change
                </p>
            </div>
        </div>
    </section>
    );
};

export default Whoweare;