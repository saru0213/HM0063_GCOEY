"use client";
import React, { useEffect, useState } from "react";
import { ChevronRight } from "lucide-react";
import EditCourse from "./components/EditCourse";
import BasicData from "./components/BasicData";
import PreviewCourse from "./components/PreviewCourse";
import ProgressSteps from "./components/ProgressStep";

const CreateCoursePage = () => {
  const [activeStep, setActiveStep] = useState(1);
  const [content, setContent] = useState();
  const localStorageContent = localStorage.getItem("content");

  useEffect(() => {
    if (localStorageContent) {
      setContent(JSON.parse(localStorageContent));
    }
  }, []);

  const handleNext = () => {
    setActiveStep((prev) => Math.min(prev + 1, 3));
  };

  const handleBack = () => {
    localStorage.removeItem("content");
    setActiveStep((prev) => Math.max(prev - 1, 1));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <div className="bg-blue-700 py-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/api/placeholder/1920/400')] opacity-10 bg-cover bg-center" />
        <div className="container mx-auto px-4 relative">
          <h1 className="text-4xl font-bold text-white mb-2">
            Create New Course
          </h1>
          <div className="flex items-center space-x-2 text-blue-100">
            <span className="text-sm">Course Creation</span>
            <ChevronRight className="h-4 w-4" />
            <span className="text-sm font-medium">
              {activeStep === 1
                ? "Basic Details"
                : activeStep === 2
                ? "Content"
                : "Review"}
            </span>
          </div>
        </div>
      </div>

      {/* Progress Steps */}
      <ProgressSteps activeStep={activeStep} />

      {activeStep == 1 && (
        <BasicData
          activeStep={activeStep}
          handleBack={handleBack}
          handleNext={handleNext}
          setContent={setContent}
        />
      )}

      {activeStep == 2 && (
        <EditCourse
          content={content}
          activeStep={activeStep}
          handleBack={handleBack}
          handleNext={handleNext}
        />
      )}
      {activeStep === 3 && (
        <PreviewCourse
          content={content}
          activeStep={activeStep}
          handleBack={handleBack}
        />
      )}
    </div>
  );
};

export default CreateCoursePage;
