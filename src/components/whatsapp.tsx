import { MessageCircle } from "lucide-react";

export default function Whatsapp() {
  return (
    <a
      href="https://wa.me/6281234567890"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:scale-110 transition z-60"
    >
      <MessageCircle size={28} />
    </a>
  );
}
