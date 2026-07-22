import React, { useEffect } from "react";
import imgAsva from "../../assets/ASVA_Logo.png";
import { Link } from "react-router-dom";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebook, FaWhatsapp } from "react-icons/fa";
import reportPdf from "../../assets/KEVVALI FOOD_AND_BEVERAGES_PRIVATE_LIMITED_0002.pdf";
// import fssai from "../../assets/fssai.png"

export const Footer: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <footer className="w-full h-1/2 bg-linear-to-b from-[#cbf1fa] to-white pt-20 lg:pt-40 pb-10">
      <div className="container mx-auto px-5 md:px-16">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end">
          {/* Left: Navigation */}
          <nav className="flex flex-col gap-6  text-black mb-12 md:mb-6 w-full md:w-1/3">
            <Link to="/" className="hover:text-blue-600  transition-colors">
              Home
            </Link>
            <Link
              to="/about"
              className="hover:text-blue-600  transition-colors"
            >
              About
            </Link>
            <Link to="/shop?category=Alkaline%20Water" className="text-[15px] hover:text-blue-600 transition-colors">
              Alkaline Water
            </Link>
            <Link to="/shop?category=Alkaline%20Machines" className="text-[15px] hover:text-blue-600 transition-colors">
              Alkaline Machines
            </Link>
            <Link to="/shop?category=ASVA%20Sip" className="text-[15px] hover:text-blue-600 transition-colors">
              ASVA Sip
            </Link>
            <Link
              to="/services"
              className="hover:text-blue-600  transition-colors"
            >
              Services
            </Link>
            <Link
              to="/partner"
              className="hover:text-blue-600  transition-colors"
            >
              Partner
            </Link>
            <Link
              to="/subscription"
              className="hover:text-blue-600  transition-colors"
            >
              Subscription
            </Link>
            <Link to="/blog" className="hover:text-blue-600  transition-colors">
              Blog
            </Link>
            <a
              href={reportPdf}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 transition-colors"
            >
              Report
            </a>
          </nav>

          {/* Center: Logo */}
          <div className="w-full md:w-1/3 flex justify-center mb-12 md:mb-0">
            <div className="flex flex-col items-center">
              <Link to="/">
                <img className="h-64 w-64" src={imgAsva} alt="Logo" />
              </Link>
              {/* <Droplets size={40} className="text-[#1a3b5c] fill-current opacity-80" />
                            <span className="text-[10px] tracking-[0.4em] uppercase mt-2 text-[#1a3b5c] font-bold">ASVA</span> */}
            </div>
          </div>

          {/* Right: Contact & Address */}
          <div className="w-full md:w-1/3 flex flex-col items-start md:items-end text-[14px] text-zinc-800 font-medium leading-relaxed">
            <div className="mb-4 flex flex-col items-start md:items-end">
              <p className="text-label mb-3 text-black">Contact</p>
              <p className="hover:text-blue-600 cursor-pointer pb-1">
                info@kevvali.com
              </p>
              <p>9193099919</p>
            </div>

            <div className="mb-6 flex flex-col items-start md:items-end">
              <p className="text-label mb-0 text-black">Office Address</p>
              <p className="md:text-right text-gray-600">
                KEVVALI FOOD AND BEVERAGES <br /> PRIVATE LIMITED Shop No .4
                Plot No .39 <br /> Ist FLR, DEEP Cinema Comp <br /> North West
                Delhi -110052
              </p>
              <p className="md:text-right text-gray-600 flex">
                {/* <span ><img src={fssai} className="f" alt="FSSAI Logo" /></span> */}
                <p>
                  {" "}
                  <span className="text-16 font-bold"> Fssai No. </span>{" "}
                  23325001004840{" "}
                </p>
              </p>
            </div>

            <div className="flex gap-4 mt-2">
              <a
                href="https://www.instagram.com/asva_by_kevvali"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow ASVA on Instagram"
                className="p-3 rounded-full bg-white/70 text-gray-800 shadow-sm transition-all duration-300 hover:bg-[#00659e] hover:text-white hover:shadow-md"
              >
                <AiFillInstagram size={24} />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61584590330735"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow ASVA on Facebook"
                className="p-3 rounded-full bg-white/70 text-gray-800 shadow-sm transition-all duration-300 hover:bg-[#00659e] hover:text-white hover:shadow-md"
              >
                <FaFacebook size={24} />
              </a>
              <a
                href="https://wa.me/9193099919"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat with ASVA on WhatsApp"
                className="p-3 rounded-full bg-white/70 text-gray-800 shadow-sm transition-all duration-300 hover:bg-[#25D366] hover:text-white hover:shadow-md"
              >
                <FaWhatsapp size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
