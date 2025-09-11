import { Button } from "./ui/button";
import { motion } from "framer-motion";
import "../index.css";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex flex-1 items-center justify-center px-6 pt-28 md:pt-32 pb-16 
                 bg-gradient-to-b from-[#0d0d0d] via-[#111] to-[#1a1a1a] overflow-hidden"
    >
      {/* dots layer */}
      <div className="absolute inset-0 bg-hexagons opacity-30 pointer-events-none" />
      {/* layer grid */}
      <div className="absolute inset-0 bg-dots opacity-40 pointer-events-none" />

      <div className="relative max-w-4xl text-center">
        <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-5xl font-bold mb-6 leading-snug"
            >
              <span className="bg-gradient-to-r from-lime-400 to-green-600 bg-clip-text text-transparent">
                Solusi Digital
            </span>{" "} Inovatif untuk Mengembangkan Bisnis Anda
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-base md:text-lg text-gray-300 mb-10"
        >
          Kami siap menjadi mitra digital yang berdedikasi untuk menciptakan website, platform, dan strategi pemasaran yang tidak hanya indah, tetapi juga terukur dan efektif untuk kebutuhan bisnis anda.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="flex justify-center gap-4"
        >
          <Button className="bg-gradient-to-bl from-lime-400 to-green-500 hover:bg-[#2e922e] text-white px-5 py-3 rounded-xl text-sm md:text-base">
            Mulai Sekarang
          </Button>
          <Button
            variant="outline"
            className="border-[#39e639] text-[#39e639] px-5 py-3 rounded-xl text-sm md:text-base hover:bg-[#39e639] hover:text-white"
          >
            Lihat Portofolio
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
