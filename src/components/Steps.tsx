import { motion } from "framer-motion";

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

const Steps = () => {
  return (
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
  );
};

export default Steps;
