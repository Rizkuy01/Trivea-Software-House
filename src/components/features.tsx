import { Card } from "./ui/card";
import { Code, Rocket, Globe } from "lucide-react";
import "../index.css";

export default function Features() {
  return (
    <section
      id="features"
      className="relative py-20 md:py-28 px-6 bg-gradient-to-b from-[#111] via-[#141414] to-[#0d0d0d] overflow-hidden"
    >
      {/* dots layer */}
      <div className="absolute inset-0 bg-hexagons opacity-30 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto text-center">
        <h2 className="text-2xl md:text-4xl font-bold mb-12">Mengapa Pilih Kami?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <Card
            title="Custom Website"
            description="Website dirancang sesuai kebutuhan bisnis Anda, responsif, dan cepat."
            icon={<Code size={36} />}
          />
          <Card
            title="Digital Marketing"
            description="Strategi pemasaran berbasis data untuk meningkatkan traffic dan konversi."
            icon={<Globe size={36} />}
          />
          <Card
            title="Support & Growth"
            description="Dukungan jangka panjang dan analisis untuk terus mengembangkan bisnis Anda."
            icon={<Rocket size={36} />}
          />
        </div>
      </div>
    </section>
  );
}
