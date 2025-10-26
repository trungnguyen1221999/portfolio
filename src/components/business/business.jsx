import React, { useState, useEffect } from "react";
import { FiX } from "react-icons/fi";
import pc from "/assets/pc.png";
import phone from "/assets/phone.png";
import ShinyText from "../ShinyText/ShinyText";

const Business = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

  const handleOpen = (img) => {
    setCurrentImage(img);
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsOpen(false);
      setIsClosing(false);
      setCurrentImage(null);
    }, 300);
  };

  // Ngăn scroll khi modal mở
  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <div className="container mt-40 space-y-6 px-4 sm:px-6 lg:px-20 w-full max-w-[1600px] rounded-3xl border-[5px] border-violet-500/40 shadow-[0_0_30px_rgba(168,85,247,0.4)] bg-gradient-to-br from-[#0a0a0a] via-[#111111] to-[#1a1a1a] p-6">
      {/* Header */}
      <h1
        className="text-center text-4xl font-bold text-white mb-2 mt-20"
        data-aos="fade-up"
      >
        My Own eCommerce Store
      </h1>
      <div className="text-center py-3">
        <ShinyText text="My first eCommerce Store in Finland" />
      </div>

      {/* Images */}
      <div className="flex justify-center gap-4 mt-10">
        <img
          data-aos="fade-up"
          src={pc}
          alt="PC view"
          className="hidden md:block w-full rounded-xl cursor-pointer shadow-lg hover:scale-105 transition-transform duration-300"
          onClick={() => handleOpen(pc)}
        />
        <img
          data-aos="fade-up"
          src={phone}
          alt="Mobile view"
          className="md:hidden w-2/3 rounded-xl cursor-pointer shadow-lg hover:scale-105 transition-transform duration-300"
          onClick={() => handleOpen(phone)}
        />
      </div>

      {/* Modal */}
      {isOpen && (
        <div
          onClick={handleClose}
          className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50 p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className={`bg-zinc-900 border border-violet-500/50 rounded-2xl shadow-2xl shadow-violet-500/20 w-full max-w-lg transform transition-transform duration-300 ${
              isClosing ? "animate-out" : "animate-in"
            }`}
          >
            {/* Image */}
            <img
              src={currentImage}
              alt="OmaCustom.fi"
              className="w-full h-56 object-cover rounded-t-2xl"
            />

            {/* Content */}
            <div className="p-6 flex flex-col gap-4">
              <div className="flex justify-between items-start">
                <h2 className="text-2xl font-bold text-white">OmaCustom.fi</h2>
                <button
                  onClick={handleClose}
                  className="text-zinc-400 hover:text-white transition-colors p-2 rounded-full hover:bg-zinc-700 -mt-2 -mr-2"
                >
                  <FiX size={24} />
                </button>
              </div>

              <p className="text-zinc-300 text-base leading-relaxed">
                My first eCommerce store in Finland, built on Shopify to sell
                customized products for local customers. It was my first project
                focusing on the Finnish market after years of running U.S.
                stores.
              </p>

              <a
                href="https://omacustom.fi"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center justify-center gap-2 font-semibold bg-violet-600 p-3 px-5 rounded-full w-full cursor-pointer border border-transparent hover:bg-violet-700 transition-colors"
              >
                Visit Website
              </a>
            </div>
          </div>

          {/* CSS animation */}
          <style>{`
            @keyframes scaleIn {
              from { transform: scale(0.95); opacity: 0; }
              to { transform: scale(1); opacity: 1; }
            }
            .animate-in {
              animation: scaleIn 0.3s ease-out forwards;
            }
            
            @keyframes scaleOut {
              from { transform: scale(1); opacity: 1; }
              to { transform: scale(0.95); opacity: 0; }
            }
            .animate-out {
              animation: scaleOut 0.3s ease-in forwards;
            }
          `}</style>
        </div>
      )}
    </div>
  );
};

export default Business;
