import { motion } from "framer-motion";
import Carousel from "../components/ComponentCarousel";
import { ChatWindow } from "../components/ChatWindow";
import { ContractAnalysis } from "../components/ContractAnalysis";
import ContractSummary from "../components/ContractSumary";
import { Upload } from "lucide-react";

export default function HeroSection() {
  return (
    <div className="w-full flex flex-col text-center items-center bg-violet-950 text-white">
      <svg
        className="absolute bottom-0 md:top-0 left-0 w-full h-1/2 md:h-full"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#ffffff"
          fillOpacity="0.1"
          d="M0,160L48,144C96,128,192,96,288,101.3C384,107,480,149,576,165.3C672,181,768,171,864,154.7C960,139,1056,117,1152,117.3C1248,117,1344,139,1392,149.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
      <svg
        className="absolute bottom-0 md:top-0 left-0 w-full h-1/2 md:h-full"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#ffffff"
          fillOpacity="0.1"
          d="M0,224L48,208C96,192,192,160,288,154.7C384,149,480,171,576,176C672,181,768,171,864,144C960,117,1056,75,1152,64C1248,53,1344,75,1392,85.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
      <svg
        className="absolute bottom-0 md:top-0 left-0 w-full h-1/2 md:h-full"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#ffffff"
          fillOpacity="0.1"
          d="M0,160L48,180C96,200,192,240,288,250C384,260,480,240,576,210C672,180,768,140,864,130C960,120,1056,140,1152,160C1248,180,1344,200,1392,210L1440,220L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>

      <div className="relative z-10 max-w-3xl pt-18">
        <motion.h1
          className="text-5xl md:text-6xl font-bold"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Legal
          <span className="text-purple-500">AI</span>
          ze
        </motion.h1>
        <p className="mt-4 text-lg md:text-xl">
          Your AI-based contract analysis tool
        </p>
        <p className="text-lg md:text-xl">Because we cannot all be lawyers</p>
        <motion.button
          className="my-8 px-6 py-3 bg-purple-500 text-white rounded-lg"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: 1 }}
        >
          Upload your first contract <Upload className="w-5 h-5 inline" />
        </motion.button>
      </div>

      <div className="w-full flex flex-col justify-center items-center">
        <div className="h-[60vh] hidden md:flex mx-5 p-4 max-w-7xl gap-4 bg-[#170d2c] z-30 rounded-md">
          <ChatWindow />
          <div className="flex flex-col flex-1">
            <ContractAnalysis />
          </div>
        </div>
        <Carousel
          autoPlay={true}
          interval={8000}
          className="pb-8 flex md:hidden"
          items={[
            <div className="flex-1 flex flex-col mx-5 p-4 gap-4 bg-[#170d2c] z-30 rounded-md">
              <div className="h-[60vh]">
                <ChatWindow />
              </div>
            </div>,
            <div className="flex-1 relative flex flex-col mx-5 p-4 gap-4 bg-[#170d2c] z-30 rounded-md h-[calc(60vh+2rem)]">
              <div className="absolute w-[calc(100%-2rem)] h-[calc(100%-2rem)] top-4 left-4">
                <ContractAnalysis />
              </div>
            </div>,
            <div className="flex-1 relative flex flex-col mx-5 p-4 gap-4 bg-[#170d2c] z-30 rounded-md h-[calc(60vh+2rem)]">
              <div className="absolute w-[calc(100%-2rem)] h-[calc(100%-2rem)] top-4 left-4">
                <ContractSummary />
              </div>
            </div>,
          ]}
        />
        {/* <Features /> */}
      </div>
    </div>
  );
}
