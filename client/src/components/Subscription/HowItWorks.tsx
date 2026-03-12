import React from 'react';
// import { MousePointerClick, CheckSquare, Truck } from 'lucide-react';
import icon1 from "../../assets/subscribe_img/icon_1.png"
import icon2 from "../../assets/subscribe_img/icon_2.png"
import icon3 from "../../assets/subscribe_img/icon_3.png"
import { Link } from 'react-router-dom';

export const HowItWorks: React.FC = () => {
    const steps = [
        {
            id: 1,
            title: "Choose Product",
            desc: [
                "Go to the “Shop Products” tab",
                "Select bottles or jars"
            ],
            Icon: icon1,
            align: "right"
        },
        {
            id: 2,
            title: "Choose Subscription Plan",
            desc: [
                "Select subscription duration (1, 3, 6 or 12 months)",
                "Choose subscription type (Daily / Alternate / Weekly)"
            ],
            Icon: icon2,
            align: "left"
        },
        {
            id: 3,
            title: "Set Delivery Details",
            desc: [
                "Select start date and delivery schedule",
                "Confirm address and preferred time slot"
            ],
            Icon: icon3,
            align: "right"
        }
    ];

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-6 md:px-12">
                <div className="text-center mb-20">
                    <h2 className="text-3xl md:text-5xl font-serif text-black mb-4">How it works</h2>
                    <p className="text-md font-bold text-gray-900">3 simple steps to get started</p>
                </div>

                <div className="flex flex-col gap-24 max-w-4xl mx-auto">
                    {steps.map((step) => (
                        <div key={step.id} className={`flex flex-col md:flex-row items-center gap-12 md:gap-24 ${step.align === 'left' ? 'md:flex-row-reverse' : ''}`}>
                            {/* Text Side */}
                            <div className="flex-1 text-center md:text-left">
                                <h3 className="text-2xl md:text-4xl font-serif text-black mb-6">
                                   <span className='text-3xl'> STEP {step.id}</span><br />
                                    {step.title}
                                </h3>
                            </div>

                            {/* Icon/Content Side */}
                            <div className="flex-1 flex flex-col items-center justify-center">
                                <div className="w-48 h-32 relative mb-6 flex items-center justify-center">
                                    <img src={step.Icon} alt="" className="w-32 h-32 text-[#00b5ad]" />
                                </div>
                                <div className="text-lg text-gray-600 space-y-1">
                                    {step.desc.map((line, idx) => (
                                        <p key={idx}>• {line}</p>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-20">
                    <span className="text-xs font-bold text-gray-500 uppercase tracking-widest"> <Link to="/shop"> Shop</Link></span>
                </div>
            </div>
        </section>
    );
};
