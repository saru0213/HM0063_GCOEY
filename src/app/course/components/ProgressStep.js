import React from "react";
import { Check, Pencil, Eye } from "lucide-react";
import { FaWpforms } from "react-icons/fa";
const ProgressSteps = ({ activeStep }) => {
  const steps = [
    { number: 1, title: "Basic Info", icon: FaWpforms },
    { number: 2, title: "Content", icon: Pencil },
    { number: 3, title: "Review", icon: Eye },
  ];

  return (
    <div className="container mx-auto px-4 mt-8">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-6">
        <div className="relative flex justify-between">
          {/* Progress Line */}
          <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-200 -translate-y-1/2" />
          <div
            className="absolute top-1/2 left-0 h-1 bg-blue-600 -translate-y-1/2 transition-all duration-300"
            style={{ width: `${(Math.max(0, activeStep - 1) / 2) * 100}%` }}
          />

          {/* Steps */}
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="relative z-10 flex flex-col items-center"
            >
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                  step.number < activeStep
                    ? "bg-blue-600 text-white"
                    : step.number === activeStep
                    ? "bg-blue-600 text-white ring-4 ring-blue-100"
                    : "bg-white border-2 border-gray-200 text-gray-400"
                }`}
              >
                {step.number < activeStep ? (
                  <Check className="w-6 h-6" />
                ) : (
                  <step.icon className="w-5 h-5" />
                )}
              </div>

              <div className="mt-3 text-center">
                <p
                  className={`text-sm font-medium ${
                    step.number <= activeStep
                      ? "text-blue-600"
                      : "text-gray-400"
                  }`}
                >
                  {step.title}
                </p>
                {step.number === activeStep && (
                  <div className="w-full h-1 bg-blue-600 mt-1 rounded-full" />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProgressSteps;
