import React, { useState } from 'react';
// import BottleImage from '../../assets/bottle_png_.png';
import formImage from '../../assets/subscribe_img/subss.png'

const SUBSCRIPTION_PLANS = [
    {
        id: 'ASVA-SUB-FAM-20L-08-DL',
        name: 'Family Plan',
        details: '20L × 8 Jars / Month',
        mrp: 640,
        offerPrice: 600,
        sku: 'ASVA-SUB-FAM-20L-08-DL'
    },
    {
        id: 'ASVA-SUB-OFF-20L-20-DL',
        name: 'Office Plan',
        details: '20L × 20 Jars / Month',
        mrp: 1600,
        offerPrice: 1440,
        sku: 'ASVA-SUB-OFF-20L-20-DL'
    },
    {
        id: 'ASVA-SUB-PRO-20L-40-DL',
        name: 'Pro Plan',
        details: '20L × 40 Jars / Month',
        mrp: 3200,
        offerPrice: 2800,
        sku: 'ASVA-SUB-PRO-20L-40-DL'
    }
];

export const SubscriptionForm: React.FC = () => {
    const [selectedPlanId, setSelectedPlanId] = useState(SUBSCRIPTION_PLANS[0].id);
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

    const selectedPlan = SUBSCRIPTION_PLANS.find(p => p.id === selectedPlanId) || SUBSCRIPTION_PLANS[0];

    const handleSubmit = () => {
        if (!startDate) {
            alert('Please select a start date');
            return;
        }
        const formData = {
            product: 'Asva 20 Litre Water Jars',
            plan: selectedPlan.name,
            sku: selectedPlan.sku,
            offerPrice: selectedPlan.offerPrice,
            startDate,
            endDate
        };
        console.log('Subscription Form Data:', formData);
        alert(`Successfully subscribed to ${selectedPlan.name}!`);
    };

    const isDateValid = !startDate || !endDate || new Date(endDate) >= new Date(startDate);

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-0 md:px-12 flex flex-col lg:flex-row items-center justify-center gap-16 max-w-6xl">

                {/* Left: Bottles */}
                <div className="flex justify-center relative lg:w-1/2">
                    <div className="flex gap-4">
                        <img src={formImage} alt="Bottle 1" className="h-80 md:h-[700px] w-auto object-cover" />
                    </div>
                    {/* Badges */}
                    {/* <div className="absolute top-1/2 -translate-y-1/2 -right-8 flex flex-col gap-4">
                        <div className="w-8 h-24 bg-[#00659e] rounded-lg flex items-center justify-center text-white shadow-lg">
                            <span className="-rotate-90 text-xs font-bold whitespace-nowrap tracking-widest">20 L</span>
                        </div>
                        <div className="w-8 h-24 bg-[#00659e] rounded-lg flex items-center justify-center text-white shadow-lg">
                            <span className="-rotate-90 text-[10px] font-bold leading-tight text-center">
                                <span className="block">Pure</span>
                                <span className="block mt-1">Water</span>
                            </span>
                        </div>
                    </div> */}
                </div>

                {/* Right: Form Card */}
                <div className="lg:w-2/3 w-full max-w-2xl bg-white rounded-4xl border border-gray-200 p-4 md:p-10 shadow-sm">
                    <div className="mb-6">
                        <span className="text-[10px] text-gray-400 font-medium uppercase tracking-wide">Asva Packaged Drinking Water</span>
                        <h3 className="text-xl md:text-2xl font-serif text-black mt-1 mb-2">Core Subscription Plans</h3>
                        <p className="text-xs text-justify text-gray-500 leading-relaxed mb-6">
                            Choose the perfect plan for your household or business. Our 20-litre jars are delivered with hygiene and quality at the forefront.
                        </p>

                        <div className="space-y-4 mb-8">
                            <label className="block text-[10px] font-bold text-gray-900 mb-2 uppercase tracking-widest">Select Plan</label>
                            <div className="grid gap-3">
                                {SUBSCRIPTION_PLANS.map(plan => (
                                    <button
                                        key={plan.id}
                                        onClick={() => setSelectedPlanId(plan.id)}
                                        className={`flex flex-col md:flex-row md:items-center justify-between p-4 rounded-2xl border transition-all text-left
                                            ${selectedPlanId === plan.id
                                                ? 'border-[#00659e] bg-blue-50/30'
                                                : 'border-gray-100 hover:border-gray-200 bg-white'
                                            }`}
                                    >
                                        <div>
                                            <h4 className="text-sm font-bold text-gray-900">{plan.name}</h4>
                                            <p className="text-[10px] text-gray-500">{plan.details}</p>
                                        </div>
                                        <div className="mt-2 md:mt-0 text-right">
                                            <div className="flex items-center gap-2 justify-end">
                                                <span className="text-xs text-gray-400 line-through">₹{plan.mrp}</span>
                                                <span className="text-lg font-bold text-[#00659e]">₹{plan.offerPrice}</span>
                                            </div>
                                            <p className="text-[9px] text-gray-400 uppercase">Monthly</p>
                                        </div>
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="space-y-6 border border-gray-100 rounded-2xl p-6">
                        <div>
                            <label className="block text-[10px] font-bold text-gray-900 mb-2 uppercase tracking-widest">Subscription Duration</label>
                            <div className="flex flex-col md:flex-row gap-4">
                                <div className="w-full">
                                    <p className="text-[9px] text-gray-400 mb-1 ml-2">Start Date</p>
                                    <input
                                        type="date"
                                        value={startDate}
                                        onChange={(e) => setStartDate(e.target.value)}
                                        className="border border-gray-300 rounded-full px-5 py-3 text-xs text-gray-900 bg-white w-full appearance-none min-h-[42px] focus:outline-none focus:border-[#00659e]"
                                        placeholder="Start Date"
                                    />
                                </div>
                                <div className="w-full">
                                    <p className="text-[9px] text-gray-400 mb-1 ml-2">End Date (Optional)</p>
                                    <input
                                        type="date"
                                        value={endDate}
                                        onChange={(e) => setEndDate(e.target.value)}
                                        className={`border rounded-full px-5 py-3 text-xs text-gray-900 bg-white w-full appearance-none min-h-[42px] focus:outline-none focus:border-[#00659e]
                                            ${!isDateValid ? 'border-red-300 bg-red-50' : 'border-gray-300'}
                                        `}
                                        placeholder="End Date"
                                    />
                                </div>
                            </div>
                            {!isDateValid && <p className="text-[10px] text-red-500 mt-1 pl-2 font-medium">End date must be after start date</p>}
                        </div>

                        <div className="pt-4 flex items-center justify-between border-t border-gray-100 mt-6">
                            <div>
                                <p className="text-[10px] text-gray-400 uppercase tracking-widest">Selected: {selectedPlan.name}</p>
                                <p className="text-xl font-bold text-gray-900">Total: ₹{selectedPlan.offerPrice}</p>
                            </div>
                            <button
                                onClick={handleSubmit}
                                className="bg-[#00659e] text-white px-8 py-3 rounded-full text-[10px] font-bold uppercase tracking-widest hover:opacity-90 transition-all shadow-lg shadow-blue-200"
                            >
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* <div className="text-center mt-12">
                <button
                    className="text-[10px] font-bold text-gray-400 uppercase tracking-widest hover:text-black transition-all border-b border-transparent hover:border-black pb-0.5"
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                >
                    Back to top
                </button>
            </div> */}
        </section>
    );
};

