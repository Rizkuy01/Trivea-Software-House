import { MessageCircle } from "lucide-react";

export default function Whatsapp() {
  const message = encodeURIComponent("Halo, saya ingin menjalin kerjasama dengan Trivea");
  const whatsappUrl = `https://wa.me/6282123805041?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:scale-110 transition z-60"
    >
      <MessageCircle size={28} />
    </a>
  );
}
