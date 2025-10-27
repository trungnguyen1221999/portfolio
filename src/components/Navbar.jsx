import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import GooeyNav from "./GooeyNav/GooeyNav";

const Navbar = ({ hidden = false }) => {
  if (hidden) return null;

  const [active, setActive] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setActive(window.scrollY > 30);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Menu items desktop (không có Home, logo sẽ là Home)
  const desktopItems = [
    { label: "About", href: "#about" },
    { label: "Project", href: "#project" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full transition-all duration-300 z-50">
      <div className="relative py-5 w-full flex items-center justify-between px-6 md:px-12">
        {/* Logo (Home) */}
        <div
          className={`flex items-center cursor-pointer 
            bg-white/10 backdrop-blur-md p-1 rounded-br-2xl rounded-bl-2xl 
            transition-all duration-500
            ${
              active ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
            }`}
        >
          <a
            href="#home"
            className="text-xl sm:text-2xl font-bold text-white p-1 md:bg-transparent"
          >
            &lt;KAI NGUYEN/&gt;
          </a>
        </div>

        {/* Desktop GooeyNav */}
        <div className="hidden md:block transition-all duration-500">
          <GooeyNav
            items={desktopItems}
            particleCount={15}
            particleDistances={[90, 10]}
            particleR={100}
            initialActiveIndex={0}
            animationTime={600}
            timeVariance={300}
            colors={[1, 2, 3, 1, 2, 3, 1, 4]}
          />
        </div>

        {/* Hamburger icon (mobile) */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white text-3xl z-[60]"
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>

        {/* Overlay menu (mobile) */}
        {menuOpen && (
          <div className="fixed inset-0 bg-black/90 backdrop-blur-md flex flex-col items-center justify-center gap-10 text-white text-2xl font-semibold z-50 animate-fadeIn">
            {desktopItems.map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="hover:scale-150 transition-all"
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
