import { useState } from "react";
import "./App.css";
import HeroSection from "./pages/HeroSection";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { ComponentCarousel } from "./components/ComponentCarousel";
import HowItWorks from "./pages/HowItWorks";
import Footer from "./components/Footer";
import Testimonials from "./components/Testemonials";
import Features from "./pages/Features";
import FeatureList from "./components/FeatureList";

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const handleScroll = (e) => {
    const { scrollTop, scrollHeight, clientHeight } = e.target;
    const position = Math.ceil(
      (scrollTop / (scrollHeight - clientHeight)) * 100
    );
    setIsScrolled(position > 32);
  };
  return (
    <div className="overflow-x-hidden">
      <nav
        className={`fixed top-0 left-0 w-full z-50 p-4 md:bg-violet-950/90  ${
          isScrolled ? "bg-[#685091] text-white" : "text-white"
        }`}
      >
        <div className="max-w-7xl mx-auto flex justify-end items-center">
          <div className="flex md:hidden  cursor-pointer bg-violet-950/80 shadow-2xl text-white p-2 rounded-2xl">
            <HiOutlineMenuAlt3 className="h-6 w-6" />
          </div>
          <ul className="space-x-4 hidden md:flex">
            <li>
              <a href="#" className="hover:text-gray-300">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <div className="bg-[#664D90]">
        <section className="relative">
          <HeroSection />
        </section>

        <section className="relative flex flex-col bg-violet-950">
          <HowItWorks />
        </section>

        <section className="relative flex flex-col">
          <FeatureList />
        </section>

        <section className="flex bg-violet-800 relative">
          <Testimonials />
        </section>
        <section className="bg-violet-800 relative pt-24">
          <Footer />
        </section>
      </div>
    </div>
  );
}

export default App;
