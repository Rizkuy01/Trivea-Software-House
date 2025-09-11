import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { useState } from "react";
import React from 'react';

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleWhatsAppSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // WhatsApp
    const phoneNumber = "6282123805041";

    // Format chat
    const whatsappMessage = `Nama: ${name}\nEmail: ${email}\nPesan: ${message}`;
    const encodedMessage = encodeURIComponent(whatsappMessage);

    // URL WhatsApp
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section id="contact" className="py-20 md:py-28 px-6 bg-[#1a1a1a] text-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Page */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="w-full bg-[#0d0d0d] p-8 md:p-12 rounded-2xl shadow-lg border border-gray-800"
        >
          <form className="space-y-6" onSubmit={handleWhatsAppSubmit}>
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-400">
                Nama Lengkap
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-lime-400"
                placeholder="Masukkan nama Anda"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-400">
                Alamat Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-lime-400"
                placeholder="Masukkan email Anda"
              />
            </div>

            {/* Text */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-400">
                Pesan Anda
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-lime-400"
                placeholder="Tulis pesan Anda di sini..."
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-gradient-to-bl from-lime-400 to-green-500 hover:opacity-90 text-white px-5 py-3 rounded-xl text-lg font-semibold transition"
            >
              <Mail size={20} /> Kirim Pesan
            </button>
          </form>
        </motion.div>

        {/* Right Side */}
        <div className="space-y-6 text-center md:text-left">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-4xl font-bold leading-tight"
          >
            Siap Memulai Proyek Anda?{" "}
            <span className="bg-gradient-to-r from-lime-400 to-green-600 bg-clip-text text-transparent">
              Hubungi Kami
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-gray-300 text-lg"
          >
            Kirimkan pesan kepada kami, dan tim kami akan segera menghubungi Anda
            untuk berdiskusi lebih lanjut tentang kebutuhan digital Anda.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
