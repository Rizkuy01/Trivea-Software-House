import React from "react";
import { Code, Rocket, Briefcase, Headset } from "lucide-react";

interface BenefitProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const Benefit: React.FC<BenefitProps> = ({ title, description, icon }) => {
  return (
    <div className="relative p-6 md:p-8 rounded-xl border border-gray-700 backdrop-blur-sm bg-gray-800/50">
      <div className="text-lime-400 mb-4 flex justify-center">
        {icon}
      </div>
      <h3 className="text-xl md:text-2xl font-bold mb-2 text-white">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  );
};

export default function Features() {
  return (
    <section
      id="features"
      className="relative py-20 md:py-28 px-6 bg-gradient-to-b from-[#111] via-[#141414] to-[#0d0d0d] overflow-hidden text-white"
    >
      <style>
        {`
        .bg-hexagons {
            background-color: #0d0d0d;
            background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50"><path d="M25 0L50 12.5V37.5L25 50L0 37.5V12.5L25 0Z" fill="rgba(255, 255, 255, 0.05)"/></svg>');
            background-repeat: repeat;
        }
        `}
      </style>
      
      {/* Hexagon */}
      <div className="absolute inset-0 bg-hexagons opacity-30 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Why Choose{" "}
            <span className="bg-gradient-to-r from-lime-400 to-green-600 bg-clip-text text-transparent">
                Trivea
            </span>
        </h2>

        {/* Content */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 items-center justify-center">
          <Benefit
            title="PROFESSIONAL"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi cupiditate ad id tempore fugit expedita."
            icon={<Briefcase size={36} />}
          />
          <Benefit
            title="SUPPORT"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi cupiditate ad id tempore fugit expedita."
            icon={<Headset size={36} />}
          />
          <Benefit
            title="DEVELOPMENT"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi cupiditate ad id tempore fugit expedita."
            icon={<Code size={36} />}
          />
          <Benefit
            title="EFFECTIVE"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi cupiditate ad id tempore fugit expedita."
            icon={<Rocket size={36} />}
          />
        </div>

        {/* Logo */}
        <div className="absolute inset-0 flex items-center justify-center z-10 pt-8">
          <div className="w-40 h-40 md:w-56 md:h-56 rounded-full bg-gray-900/90 flex items-center justify-center overflow-hidden border-2 border-lime-400 shadow-lg">
             <img src="/src/assets/logo.png" alt="Trivea Logo" className="w-24 h-24 md:w-32 md:h-32"/>
          </div>
        </div>
      </div>
    </section>
  );
}
