import { useState, useEffect } from "react";

const Navbar = ({ hidden = false }) => {
  // ⛔ Nếu thuộc tính hidden = true, không hiển thị gì cả
  if (hidden) return null;

  const [active, setActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => setActive(window.scrollY > 30);
    handleScroll(); // check vị trí ban đầu
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full transition-all duration-300 md:z-10">
      <div className="relative py-7 w-full flex items-center justify-between px-6 md:px-12">
        {/* Logo */}
        <div
          className={`flex items-center logo cursor-pointer 
            bg-white/10 backdrop-blur-md p-1 rounded-br-2xl rounded-bl-2xl 
            transition-all duration-500
            ${
              active ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
            }`}
        >
          <a
            href="#home"
            className="text-3xl font-bold text-white p-1 md:bg-transparent md:text-white"
          >
            &lt;KAI NGUYEN/&gt;
          </a>
        </div>

        {/* Menu điều hướng */}
        <ul
          className={`flex items-center sm:gap-10 gap-4 
            bg-white/10 backdrop-blur-md p-4 rounded-br-2xl rounded-bl-2xl 
            transition-all duration-500
            ${
              active ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
            }`}
        >
          <li>
            <a
              href="#about"
              className="sm:text-lg text-base font-medium text-white"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#project"
              className="sm:text-lg text-base font-medium text-white"
            >
              Project
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="sm:text-lg text-base font-medium text-white"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
