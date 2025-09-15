import { motion } from "framer-motion";
import { Sparkles, Users, Award } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 px-6 bg-[#0d0d0d]">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left side*/}
        <div className="space-y-6 text-center md:text-left">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-4xl font-bold leading-tight"
          >
            Kami Membangun Solusi Digital untuk{" "}
            <span className="bg-gradient-to-r from-lime-400 to-green-600 bg-clip-text text-transparent">
              Pertumbuhan Bisnis
            </span>{" "}
            Anda
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-gray-300 text-lg"
          >
            Kami membantu bisnis Anda berkembang lebih cepat dengan solusi digital yang tepat guna. Setiap website yang kami bangun bukan sekadar tampilan, melainkan alat strategis untuk mencapai target bisnis Anda.
          </motion.p>

          {/* Points */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left pt-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex items-center gap-3 p-4 rounded-lg"
            >
              <div className="p-2 rounded-full bg-lime-400/20 text-lime-400">
                <Sparkles size={20} />
              </div>
              <div>
                <h4 className="font-semibold text-white">Inovasi</h4>
                <p className="text-sm text-gray-400">Solusi Relevan.</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex items-center gap-3 p-4 rounded-lg"
            >
              <div className="p-2 rounded-full bg-lime-400/20 text-lime-400">
                <Users size={20} />
              </div>
              <div>
                <h4 className="font-semibold text-white">Kolaborasi</h4>
                <p className="text-sm text-gray-400">Mitra Jangka Panjang.</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="flex items-center gap-3 p-4 rounded-lg"
            >
              <div className="p-2 rounded-full bg-lime-400/20 text-lime-400">
                <Award size={20} />
              </div>
              <div>
                <h4 className="font-semibold text-white">Kualitas</h4>
                <p className="text-sm text-gray-400">Hasil yang Terukur.</p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Gambar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative w-full h-80 md:h-96 rounded-3xl overflow-hidden shadow-2xl mt-8 md:mt-0"
        >
          <img
            src="../assets/about.png"
            alt="About us - Trivea team"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
