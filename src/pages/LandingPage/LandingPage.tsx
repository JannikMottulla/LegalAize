import HeroSection from "./Sections/HeroSection";
import HowItWorks from "./Sections/HowItWorks";
import FeatureList from "./Sections/FeatureList";
import Testimonials from "./Components/Testemonials";
import "../../App.css";

const LandingPage = () => {
  return (
    <div className="overflow-x-hidden">
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
      </div>
    </div>
  );
};

export default LandingPage;
