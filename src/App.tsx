import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Features from "./components/features";
import Footer from "./components/footer";
import Whatsapp from "./components/whatsapp";
import About from "./components/about";
import Contact from "./components/contact";


export default function App() {
return (
<div className="bg-[#1a1a1a] text-white min-h-screen flex flex-col">
  <Navbar />
  <Hero />
  <About />
  <Features />
  <Contact />
  <Footer />
  <Whatsapp />
</div>
);
}