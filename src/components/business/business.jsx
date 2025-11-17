import { useEffect, useState } from "react";
import { FiX } from "react-icons/fi";
import ElectricBorder from "../ElectricBorder/ElectricBorder";
import ShinyText from "../ShinyText/ShinyText";
import pc from "/assets/pc.png";
import phone from "/assets/phone.png";
import { createPortal } from "react-dom";

const Business = () => {
  const [isOpen, setIsOpen] = useState(false); // Trạng thái mở/đóng modal
  const [isClosing, setIsClosing] = useState(false); // Trạng thái animation đóng
  const [currentImage, setCurrentImage] = useState(null); // Ảnh hiện tại trong modal

  // 🔹 Hàm mở modal
  const handleOpen = (img) => {
    // Nếu đang trong quá trình đóng → bỏ qua animation, reset nhanh
    setIsClosing(false);
    setCurrentImage(img);
    setIsOpen(true);
  };

  // 🔹 Hàm đóng modal
  const handleClose = () => {
    setIsClosing(true);
    // Sau khi animation kết thúc, tắt modal
    setTimeout(() => {
      setIsOpen(false);
      setIsClosing(false);
      setCurrentImage(null);
    }, 300);
  };

  // 🔹 Tắt scroll background khi modal mở
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [isOpen]);

  return (
    <ElectricBorder
      color="#d1f8f8"
      speed={1.2}
      chaos={0.6}
      thickness={2}
      style={{ borderRadius: 24 }}
    >
      <div className="container mt-16 md:mt-32 space-y-6 md:px-6 lg:px-20 w-full max-w-[1600px] rounded-3xl p-5 md:p-8 overflow-hidden">
        {/* --- Header --- */}
        <h1
          className="text-center text-lg sm:text-2xl md:text-3xl font-bold text-white mb-2 pt-10"
          data-aos="fade-up"
        >
          My Own eCommerce Store
        </h1>
        <div className="text-center py-3">
          <ShinyText text="My first eCommerce Store in Finland" />
        </div>

        {/* --- Images --- */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 mt-8 overflow-hidden">
          {/* PC version */}
          <img
            data-aos="fade-up"
            src={pc}
            alt="PC view"
            className="hidden md:block w-full md:w-[85%] rounded-2xl cursor-pointer shadow-xl hover:scale-105 transition-transform duration-300"
            onClick={() => handleOpen(pc)}
          />

          {/* Mobile version */}
          <div className="relative md:hidden w-screen -mx-[calc((100vw-100%)/2)] overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/40 mix-blend-multiply pointer-events-none"></div>
            <img
              data-aos="fade-up"
              src={phone}
              alt="Mobile view"
              className="w-full h-[70vh] sm:h-[80vh] object-cover rounded-none cursor-pointer hover:scale-105 transition-transform duration-300"
              onClick={() => handleOpen(phone)}
            />
          </div>
        </div>

        {/* --- Modal --- */}
        {isOpen &&
          createPortal(
            <div
              onClick={handleClose}
              className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-[9999] p-4 overflow-y-auto"
            >
              <div
                onClick={(e) => e.stopPropagation()}
                className={`
          bg-zinc-900 border border-violet-500/50 rounded-2xl shadow-2xl shadow-violet-500/20
          w-full max-w-3xl transform transition-transform duration-300
          flex flex-col
          ${isClosing ? "animate-out" : "animate-in"}
        `}
                style={{
                  maxHeight: "calc(100vh - 2rem)",
                  overflowY: "auto",
                }}
              >
                {/* Hình ảnh */}
                <img
                  src={currentImage}
                  alt="OmaCustom.fi"
                  className="w-full h-72 md:h-96 object-cover rounded-t-2xl"
                />

                {/* Nội dung */}
                <div className="p-6 md:p-8 flex flex-col gap-4">
                  <div className="flex justify-between items-start">
                    <h2 className="text-2xl md:text-3xl font-bold text-white">
                      OmaCustom.fi
                    </h2>
                    <button
                      onClick={handleClose}
                      className="text-zinc-400 hover:text-white transition-colors p-2 rounded-full hover:bg-zinc-700 -mt-2 -mr-2"
                    >
                      <FiX size={24} />
                    </button>
                  </div>

                  <p className="text-zinc-300 text-sm md:text-base leading-relaxed">
                    My first personalized eCommerce store in Finland, built with{" "}
                    <span className="text-violet-300 font-medium">Shopify</span>{" "}
                    as the main platform and integrated with{" "}
                    <span className="text-violet-300 font-medium">
                      Teinblue
                    </span>{" "}
                    to manage print-on-demand production. The website
                    specializes in fully customizable products such as T-shirts,
                    blankets, mugs, pillows, metal signs, and more — all
                    customizable through a rich library of cliparts, allowing
                    customers to design their own unique gifts or personal
                    items.
                  </p>

                  <a
                    href="https://omacustom.fi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center justify-center gap-2 font-semibold bg-violet-600 p-3 px-5 rounded-full w-full cursor-pointer border border-transparent hover:bg-violet-700 transition-colors text-sm md:text-base"
                  >
                    Visit Website
                  </a>
                </div>
              </div>

              {/* Animation CSS */}
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
            </div>,
            document.body
          )}
      </div>
    </ElectricBorder>
  );
};

export default Business;
