import React from "react";
import img1 from "../../assets/Aboutimages/newimg/handbottle.webp";
import img2 from "../../assets/Aboutimages/newimg/img2.png";
import img3 from "../../assets/Aboutimages/3.jpg";
import img4 from "../../assets/Aboutimages/newimg/Consistency.png";
import img5 from "../../assets/Aboutimages/newimg/Untitled-6.webp";
import img6 from "../../assets/Aboutimages/newimg/img5.png";

const Whoweare: React.FC = () => {
  return (
    <>
      <section>
        {/* FIRST SECTION */}
        <div className="bg-white">
          <div className="max-w-5xl mx-auto px-4 md:px-6 py-10">
            <div className="flex flex-col md:flex-row gap-6">
              
              {/* LEFT IMAGE */}
              <div className="w-full md:w-52 flex-shrink-0">
                <img
                  src={img1}
                  alt=""
                  className="w-full object-cover h-[300px] md:h-[560px]"
                />
              </div>

              {/* RIGHT CONTENT */}
              <div className="flex-1 flex flex-col justify-between">
                
                {/* TOP */}
                <div className="flex flex-col md:flex-row items-start gap-6 md:gap-10 md:px-8">
                  
                  <div className="flex-1">
                    <p className="text-label mb-3">
                      Who we are
                    </p>

                    <h1 className="text-display text-black">
                      Hydration,
                      <br />
                      designed for
                      <br />
                      balance.
                    </h1>
                  </div>

                  <div className="w-full md:w-72 flex-shrink-0">
                    <img
                      src={img2}
                      alt=""
                      className="w-full object-cover rounded-sm h-[180px] md:h-[200px]"
                    />
                  </div>
                </div>

                <hr className="border-t border-gray-500 my-6 md:mx-8" />

                {/* BOTTOM */}
                <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10 md:px-2">
                  
                  <div className="w-full md:w-72 flex-shrink-0">
                    <img
                      src={img3}
                      alt=""
                      className="w-full object-cover rounded-sm h-[180px] md:h-[190px]"
                    />
                  </div>

                  <div className="flex-1">
                    <h2 className="text-h3 mb-4">
                      Precision in every drop.
                    </h2>
 
                    <p className="">
                      ASVA water is purified through advanced multi-stage processes.
                      <br />
                      Strict quality control ensures consistency across every batch.
                      <br />
                      From sourcing to bottling, every step is designed for reliability.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SECOND SECTION */}
        <div className="bg-white">
          <div className="max-w-5xl mx-auto py-10 px-4 md:px-0">
            <div className="flex flex-col-reverse md:flex-row gap-6">

              {/* CONTENT */}
              <div className="flex-1 flex flex-col justify-between">

                <hr className="border-t border-gray-500 md:mx-8" />

                {/* TOP */}
                <div className="flex flex-col md:flex-row items-start gap-6 md:gap-10 md:px-2">
                  
                  <div className="flex-1">
                    <h2 className="text-h3 mb-3">
                      Consistency you can trust.
                    </h2>

                    <p>
                     We maintain strict standards across purification and packaging.
                      <br />
                     Each batch is tested to ensure safety and reliability.
                      <br />
                     The result is water that feels clean, smooth, and dependable.
                    </p>
                  </div>

                  <div className="w-full md:w-72 flex-shrink-0">
                    <img
                      src={img4}
                      alt=""
                      className="w-full object-cover rounded-sm h-[180px] md:h-[200px]"
                    />
                  </div>
                </div>

                <hr className="border-t border-gray-500 my-6 md:mx-8" />

                {/* BOTTOM */}
                <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10 md:px-8">
                  
                  <div className="w-full md:w-72 flex-shrink-0">
                    <img
                      src={img6}
                      alt=""
                      className="w-full object-cover rounded-sm h-[180px] md:h-[190px]"
                    />
                  </div>

                  <div className="flex-1">
                    <h2 className="text-h3 mb-4">
                      Built for everyday living.
                    </h2>

                    <p className="">
                     Designed for daily consumption across lifestyles.
                      <br />
                     Whether at work, at the gym, or at home.
                      <br />
                     Hydration that fits seamlessly into your routine.
                    </p>
                  </div>
                </div>
              </div>

              {/* RIGHT IMAGE */}
              <div className="w-full md:w-52 flex-shrink-0">
                <img
                  src={img5}
                  alt=""
                  className="w-full object-cover h-[300px] md:h-[560px]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Whoweare;