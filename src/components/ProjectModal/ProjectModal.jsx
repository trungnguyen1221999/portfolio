import React, { useState, useEffect } from "react";
import { FiX, FiGithub } from "react-icons/fi";

const ProjectModal = ({ isOpen, onClose, project }) => {
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
      setIsClosing(false);
    }, 300);
  };

  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      onClick={handleClose}
      className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50 p-4 overflow-y-auto"
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
        {/* Hình ảnh dự án */}
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-72 md:h-96 object-cover rounded-t-2xl"
        />

        {/* Nội dung modal */}
        <div className="p-6 md:p-8 flex flex-col gap-4">
          <div className="flex justify-between items-start">
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              {project.title}
            </h2>
            <button
              onClick={handleClose}
              className="text-zinc-400 hover:text-white transition-colors p-2 rounded-full hover:bg-zinc-700 -mt-2 -mr-2"
            >
              <FiX size={24} />
            </button>
          </div>

          {/* Tech Stack Tags */}
          {project.tenchStack && project.tenchStack.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {project.tenchStack.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 text-xs md:text-sm font-medium rounded-full bg-violet-600/20 text-violet-300 border border-violet-500/30"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}

          {/* Mô tả dự án */}
          <p className="text-zinc-300 text-sm md:text-base leading-relaxed">
            {project.fullDescription}
          </p>

          {/* Link source code */}
          {project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center justify-center gap-2 font-semibold bg-violet-600 p-3 px-5 rounded-full w-full cursor-pointer border border-transparent hover:bg-violet-700 transition-colors text-sm md:text-base"
            >
              <FiGithub />
              <span>Source Code</span>
            </a>
          )}
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
