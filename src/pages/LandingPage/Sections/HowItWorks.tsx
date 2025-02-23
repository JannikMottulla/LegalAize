import { motion } from "framer-motion";
import { Upload } from "lucide-react";
import { useNavigate } from "react-router-dom";

const steps = [
  {
    number: "1",
    title: "Upload your Contract",
    description:
      "Simply upload a .pdf-file of the contract you want to analyze and discuss with our AI.",
  },
  {
    number: "2",
    title: "Let the AI do the work",
    description:
      "Get a detailed summary of the contract, highlighting the most important parts and potential risks.",
  },
  {
    number: "3",
    title: "Ask your questions",
    description:
      "Discuss the contract with our AI and get answers to your questions.",
  },
];

const HowItWorks = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    // Navigate to the '/app' route without reloading the page
    navigate("/app");
  };
  return (
    <div className="w-full flex flex-col items-center">
      <svg
        className="absolute h-[10vh] md:h-[15vh] -top-2 left-0 w-full"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#664D90"
          fillOpacity="1"
          d="M0,320L48,293.3C96,267,192,213,288,192C384,171,480,181,576,202.7C672,224,768,256,864,261.3C960,267,1056,245,1152,234.7C1248,224,1344,224,1392,224L1440,224L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        />
      </svg>
      <div className="pt-[10vh] md:pt-[15vh] container">
        <motion.h4
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-xl md:text-xl font-bold text-center mt-8 text-white/60"
        >
          HOW TO
        </motion.h4>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center text-white"
        >
          Three simple steps
        </motion.h2>
        <div className="pt-24 bg-purple text-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8 md:gap-12">
              {steps.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="text-center relative"
                >
                  <div className="mb-6">
                    <span className="text-6xl font-bold">{step.number}</span>
                  </div>
                  {index < steps.length - 1 && (
                    <div className="hidden md:block bg-white/40 absolute top-8 left-[66%] w-[80%] h-[2px]">
                      <div className="w-full h-full bg-purple-light/30" />
                    </div>
                  )}
                  <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                  <p className="text-purple-light/90 leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mt-16 mb-8 px-6 py-3 bg-purple-500 text-white rounded-lg"
        onClick={handleClick}
      >
        Upload your contract now <Upload className="w-5 h-5 inline" />
      </motion.button>
    </div>
  );
};

export default HowItWorks;
