import { Mail, Phone, Facebook, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0d0d0d] py-12 mt-auto px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
        {/* Brand */}
        <div>
          <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-lime-400 to-green-600 bg-clip-text text-transparent">Trivea</h3>
          <p className="text-gray-300">
            Membangun solusi digital yang relevan, efisien, dan berdampak untuk bisnis Anda.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold mb-4 text-[#39e639]">Quick Links</h4>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#hero" className="hover:text-[#39e639]">Home</a></li>
            <li><a href="#features" className="hover:text-[#39e639]">Features</a></li>
            <li><a href="#about" className="hover:text-[#39e639]">About</a></li>
            <li><a href="#contact" className="hover:text-[#39e639]">Contact</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold mb-4 text-[#39e639]">Contact</h4>
          <p className="text-gray-300 flex items-center gap-2 mb-2">
            <Mail size={16}/> info@trivea.tech
          </p>
          <p className="text-gray-300 flex items-center gap-2 mb-4">
            <Phone size={16}/> +62 821 2380 5041
          </p>

          {/* Social links */}
          <div className="flex gap-4 text-gray-400">
            <a href="#" className="hover:text-[#39e639]"><Facebook /></a>
            <a href="#" className="hover:text-[#39e639]"><Instagram /></a>
            <a href="#" className="hover:text-[#39e639]"><Linkedin /></a>
          </div>
        </div>
      </div>

      <div className="text-center text-gray-500 mt-8 border-t border-gray-800 pt-6">
        © {new Date().getFullYear()} Trivea. All rights reserved.
      </div>
    </footer>
  );
}
