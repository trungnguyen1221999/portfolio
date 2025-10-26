import React, { useState, useEffect } from "react";
import { FiX, FiGithub } from "react-icons/fi";

const ProjectModal = ({ isOpen, onClose, project }) => {
  // State để quản lý animation đóng modal
  const [isClosing, setIsClosing] = useState(false);

  // Hàm đóng modal với animation
  const handleClose = () => {
    setIsClosing(true);
    // Chờ 300ms animation trước khi gọi onClose
    setTimeout(() => {
      onClose();
      setIsClosing(false); // reset trạng thái để mở lần sau
    }, 300);
  };

  // Ngăn scroll ở background khi modal mở
  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    // Overlay che full màn hình
    <div
      onClick={handleClose}
      className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50 p-4 overflow-y-auto"
    >
      {/* Nội dung modal */}
      <div
        onClick={(e) => e.stopPropagation()} // Ngăn modal đóng khi click vào bên trong
        className={`
          bg-zinc-900 border border-violet-500/50 rounded-2xl shadow-2xl shadow-violet-500/20
          w-full max-w-lg transform transition-transform duration-300
          flex flex-col
          ${isClosing ? "animate-out" : "animate-in"}
        `}
        style={{
          // Trên mobile: full height nếu nội dung dài
          maxHeight: "calc(100vh - 2rem)",
          overflowY: "auto",
        }}
      >
        {/* --- Hình ảnh dự án --- */}
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-56 object-cover rounded-t-2xl"
        />

        {/* --- Nội dung modal --- */}
        <div className="p-6 flex flex-col gap-4">
          {/* Header modal */}
          <div className="flex justify-between items-start">
            <h2 className="text-xl md:text-3xl font-bold text-white">
              {project.title}
            </h2>
            <button
              onClick={handleClose}
              className="text-zinc-400 hover:text-white transition-colors p-2 rounded-full hover:bg-zinc-700 -mt-2 -mr-2"
            >
              <FiX size={24} />
            </button>
          </div>

          {/* Mô tả dự án */}
          <p className="text-zinc-300 text-sm md:text-base leading-relaxed">
            {project.fullDescription}
          </p>

          {/* Link source code */}
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center justify-center gap-2 font-semibold bg-violet-600 p-3 px-5 rounded-full w-full cursor-pointer border border-transparent hover:bg-violet-700 transition-colors text-sm md:text-base"
          >
            <FiGithub />
            <span>Source Code</span>
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
  );
};

export default ProjectModal;
