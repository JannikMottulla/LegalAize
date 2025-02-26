import React from "react";

const LargeLoadingSpinner: React.FC = () => {
  return (
    <div className="flex flex-col items-center space-y-6">
      {/* Spinner Container */}
      <div className="relative w-24 h-24">
        {/* Outer Spinning Ring */}
        <div className="absolute inset-0 w-full h-full border-8 border-transparent border-t-purple-600 rounded-full animate-spin"></div>

        {/* Middle Pulsing Ring */}
        <div className="absolute inset-0 w-full h-full border-8 border-purple-300 rounded-full animate-pulse"></div>

        {/* Inner Static Ring */}
        <div className="absolute inset-3 w-18 h-18 border-8 border-purple-200 rounded-full"></div>

        {/* Glowing Dot */}
        <div className="absolute top-1/2 left-1/2 w-6 h-6 -translate-x-1/2 -translate-y-1/2 bg-purple-600 rounded-full shadow-lg animate-ping"></div>
      </div>

      {/* Loading Text */}
      <div className="text-center">
        <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100">
          Analyzing...
        </h2>
        <p className="text-md text-slate-600 dark:text-slate-400">
          Please wait. This may take a few moments.
        </p>
      </div>
    </div>
  );
};

export default LargeLoadingSpinner;
