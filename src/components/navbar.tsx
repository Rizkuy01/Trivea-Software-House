import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-gradient-to-r from-[#1a1a1a]/90 via-[#0d0d0d]/90 to-[#1a1a1a]/90 backdrop-blur-md px-6 md:px-12 py-3 flex justify-between items-center">
      {/* Logo */}
      <a href="#hero" className="flex items-center gap-2 text-xl md:text-2xl font-bold tracking-wide">
        <img src="/src/assets/logo.png" alt="Trivea Logo" className="w-8 h-8" />
        Trivea
      </a>

      {/* Desktop menu */}
      <div className="hidden md:flex gap-8 items-center text-sm md:text-base">
        <a href="#features" className="hover:text-[#39e639] transition">
          Features
        </a>
        <a href="#about" className="hover:text-[#39e639] transition">
          About
        </a>
        <a href="#contact" className="hover:text-[#39e639] transition">
          Contact
        </a>
        <button className="bg-[#39e639] hover:bg-[#0d0d0d] hover:border hover:border-[#39e639] text-white hover:text-[#39e639] px-5 py-2 rounded-lg">
          Get Started
        </button>
      </div>

      {/* Mobile menu button */}
      <button
        className="md:hidden text-gray-200"
        onClick={() => setOpen(!open)}
      >
        {open ? <X size={26} /> : <Menu size={26} />}
      </button>

      {/* Mobile dropdown */}
      <div
        className={`absolute top-14 left-0 w-full md:hidden transition-all duration-300 ${
          open
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <div className="bg-[#111]/95 backdrop-blur-md border-t border-gray-800 flex flex-col items-center gap-5 py-6 text-base shadow-lg">
          <a
            href="#features"
            onClick={() => setOpen(false)}
            className="hover:text-[#39e639]"
          >
            Features
          </a>
          <a
            href="#about"
            onClick={() => setOpen(false)}
            className="hover:text-[#39e639]"
          >
            About
          </a>
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="hover:text-[#39e639]"
          >
            Contact
          </a>
          <button className="bg-[#007bff] hover:bg-[#006ae6] text-white px-5 py-2 rounded-lg w-40">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
}
