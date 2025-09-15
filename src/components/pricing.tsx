import { CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

// Card Properties
interface PricingCardProps {
  title: string;
  price: string;
  benefits: string[];
  isRecommended: boolean;
  buttonColor: string;
  cardBorder: string;
}

// Component for a single pricing card
const PricingCard = ({ title, price, benefits, isRecommended, buttonColor, cardBorder }: PricingCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: isRecommended ? 0.2 : 0 }}
      className={`p-8 rounded-2xl shadow-lg border-2 ${cardBorder} ${isRecommended ? 'bg-gradient-to-br from-lime-400 to-green-600' : 'bg-gray-900'} transition-all duration-300 transform hover:scale-105`}
    >
      <div className="text-center">
        <h3 className={`text-2xl font-bold mb-4 ${isRecommended ? 'text-gray-900' : 'text-lime-400'}`}>
          {title}
        </h3>
        <p className="text-4xl font-extrabold mb-6">
          <span className={`${isRecommended ? 'text-gray-900' : 'text-gray-200'}`}>{price}</span>
        </p>
      </div>
      <ul className="space-y-4 mb-8">
        {benefits.map((benefit, index) => (
          <li key={index} className="flex items-start gap-3">
            <CheckCircle2 size={20} className={`mt-1 flex-shrink-0 ${isRecommended ? 'text-gray-900' : 'text-lime-400'}`} />
            <span className={`${isRecommended ? 'text-gray-900' : 'text-gray-300'}`}>{benefit}</span>
          </li>
        ))}
      </ul>
      <button className={`w-full py-3 rounded-xl text-lg font-semibold transition ${buttonColor}`}>
        Pilih Paket
      </button>
    </motion.div>
  );
};

export default function Pricing() {
  const packages = [
    {
      title: "Starter Kit 🚀",
      price: "Rp 999.000",
      benefits: [
        "Landing Page Only",
        "Desain Template",
        "Responsif & Mobile Friendly",
        "Social Media Integration",
        "Domain & Hosting 1 Tahun",
      ],
      isRecommended: false,
      buttonColor: "bg-lime-400 text-white hover:bg-lime-500",
      cardBorder: "border-lime-400"
    },
    {
      title: "Business Pro ⭐",
      price: "Rp 4.999.000",
      benefits: [
        "Multi-page Website",
        "Desain Kustom Eksklusif",
        "Content Management System (CMS)",
        "Basic SEO",
        "E-commerce Integration",
        "Priority Support",
      ],
      isRecommended: true,
      buttonColor: "bg-gray-800 text-white hover:bg-gray-900",
      cardBorder: "border-transparent"
    },
    {
      title: "Premium Suite 💼",
      price: "Rp 9.999.000",
      benefits: [
        "Custom Website Lengkap",
        "Digital Marketing Menyeluruh",
        "Google Analytics & Tag Manager",
        "Optimasi SEO Lanjutan",
        "Ads Management",
        "Pelatihan & Konsultasi Rutin",
      ],
      isRecommended: false,
      buttonColor: "bg-lime-400 text-white hover:bg-lime-500",
      cardBorder: "border-lime-400"
    },
  ];

  return (
    <section id="pricing" className="py-20 md:py-28 px-6 bg-[#0d0d0d] text-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Paket{" "}
          <span className="bg-gradient-to-r from-lime-400 to-green-600 bg-clip-text text-transparent">
            Harga Kami
          </span>
        </h2>
        <p className="text-gray-400 mb-12 max-w-2xl mx-auto">
          Pilih paket yang paling sesuai dengan kebutuhan bisnis Anda. Semua paket
          dirancang untuk memberikan nilai terbaik dan hasil yang optimal.
        </p>

        <div className="grid lg:grid-cols-3 gap-8 items-center">
          {packages.map((pkg, index) => (
            <PricingCard
              key={index}
              title={pkg.title}
              price={pkg.price}
              benefits={pkg.benefits}
              isRecommended={pkg.isRecommended}
              buttonColor={pkg.buttonColor}
              cardBorder={pkg.cardBorder}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
