import React from "react";
import { Code, Rocket, Briefcase, Headset } from "lucide-react";
import { motion } from "framer-motion";

interface BenefitProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const Benefit: React.FC<BenefitProps> = ({ title, description, icon }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative p-6 md:p-8 rounded-xl border border-gray-700 backdrop-blur-sm bg-gray-800/50"
    >
        <div className="text-lime-400 mb-4 flex justify-center">
          {icon}
        </div>
        <h3 className="text-xl md:text-2xl font-bold mb-2 text-white">{title}</h3>
        <p className="text-gray-300">{description}</p>
    </motion.div>
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
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-3xl md:text-4xl font-bold mb-12"
        >
          Why Choose{" "}
          <span className="bg-gradient-to-r from-lime-400 to-green-600 bg-clip-text text-transparent">
            Trivea
          </span>
        </motion.h2>

        {/* Content */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 items-center justify-center">
          <Benefit
            title="PROFESSIONAL"
            description="Kami mengedepankan komunikasi terbuka di setiap tahapan proyek. Anda akan mendapatkan pembaruan rutin, akses ke progress pengerjaan, dan masukan kami di setiap langkah, memastikan tidak ada kejutan di akhir."
            icon={<Briefcase size={36} />}
          />
          <Benefit
            title="SUPPORT"
            description="Layanan kami tidak berhenti setelah peluncuran. Tim support kami siap membantu Anda dengan cepat, menjawab pertanyaan, dan menyelesaikan kendala teknis agar website atau kampanye digital Anda selalu berjalan optimal."
            icon={<Headset size={36} />}
          />
          <Benefit
            title="DEVELOPMENT"
            description="Setiap baris kode yang kami tulis dan setiap desain yang kami buat didasarkan pada strategi bisnis Anda. Kami menganalisis target pasar dan tujuan Anda terlebih dahulu, memastikan hasil akhirnya adalah aset yang benar-benar mendorong pertumbuhan."
            icon={<Code size={36} />}
          />
          <Benefit
            title="EFFECTIVE"
            description="Kami tidak hanya membuat website yang indah, kami membuatnya untuk berkinerja. Dengan menggunakan alat analisis data, kami melacak metrik penting seperti konversi, traffic, dan peringkat SEO, memberikan Anda laporan yang jelas tentang dampak investasi Anda."
            icon={<Rocket size={36} />}
          />
        </div>

        {/* Logo */}
        <div className="absolute inset-0 flex items-center justify-center z-10 pt-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="w-40 h-40 md:w-56 md:h-56 mx-auto rounded-full bg-gray-900/50 flex items-center justify-center overflow-hidden border-2 border-lime-400 shadow-lg"
          >
             <img src="/src/assets/logo.png" alt="Trivea Logo" className="w-24 h-24 md:w-32 md:h-32"/>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
