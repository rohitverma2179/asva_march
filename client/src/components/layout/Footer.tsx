import React, { useEffect } from 'react';
import imgAsva from "../../assets/ASVA_Logo.png";
import { Link } from 'react-router-dom';
export const Footer: React.FC = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <footer className="w-full h-1/2 bg-linear-to-b from-[#cbf1fa] to-white pt-20 lg:pt-40 pb-10">
            <div className="container mx-auto px-5 md:px-16">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end">

                    {/* Left: Navigation */}
                    <nav className="flex flex-col gap-6 text-[16px] uppercase font-bold tracking-widest text-black mb-12 md:mb-6 w-full md:w-1/3">
                        <Link to="/" className="hover:text-blue-600  transition-colors">Home</Link>
                        <Link to="/shop" className="hover:text-blue-600  transition-colors">Shop</Link>
                        <Link to="/blog" className="hover:text-blue-600  transition-colors">Blog</Link>
                        <Link to="/services" className="hover:text-blue-600  transition-colors">services</Link>
                        <Link to="/subscription" className="hover:text-blue-600  transition-colors">Subscription</Link>
                    </nav>

                    {/* Center: Logo */}
                    <div className="w-full md:w-1/3 flex justify-center mb-12 md:mb-0">
                        <div className="flex flex-col items-center">
                            <Link to="/">
                            <img className='h-64 w-64' src={imgAsva} alt="Logo" />
                            </Link>
                            {/* <Droplets size={40} className="text-[#1a3b5c] fill-current opacity-80" />
                            <span className="text-[10px] tracking-[0.4em] uppercase mt-2 text-[#1a3b5c] font-bold">ASVA</span> */}
                        </div>
                    </div>

                    {/* Right: Contact & Address */}
                    <div className="w-full md:w-1/3 flex flex-col items-start md:items-end text-[16px] text-zinc-800 font-medium leading-relaxed">
                        <div className="mb-4 flex flex-col items-start md:items-end">
                            <p className="uppercase font-bold tracking-widest mb-3 text-[14px] text-black">Contact</p>
                            <p className="hover:text-blue-600 cursor-pointer pb-1">Asva@asva.gmail.com</p>
                            <p>9999407455</p>
                        </div>

                        <div className="mb-6 flex flex-col items-start md:items-end">
                            <p className="uppercase font-bold tracking-widest mb-0 text-[14px] text-black">Office Address</p>
                            <p className="md:text-right text-gray-600">
                                Plot No. 2-A, Kh. No. 51/1, Third Floor,
                                <br />
                                Jai Vihar, Najafgarh Road,
                                <br />
                                Near Sant Haridas School,

                                Delhi - 110043
                            </p>
                        </div>

                        {/* <div className="flex gap-6 mt-2">
                            <BsTwitterX  size={30} className="text-gray-800 hover:text-black cursor-pointer transition-colors" />
                            <Instagram size={30} className="text-gray-800 hover:text-pink-600 cursor-pointer transition-colors" />
                            <Facebook size={30} className="text-gray-800 hover:text-blue-700 cursor-pointer transition-colors" />
                        </div> */}

                        {/* <div className="flex gap-6 mt-2">
                            <BsTwitterX  size={30} className="text-gray-800 hover:text-black cursor-pointer transition-colors" />
                            <Instagram size={30} className="text-gray-800 hover:text-pink-600 cursor-pointer transition-colors" />
                            <Facebook size={30} className="text-gray-800 hover:text-blue-700 cursor-pointer transition-colors" />
                        </div> */}
                    </div>
                </div>
            </div>
        </footer>
    );
};
