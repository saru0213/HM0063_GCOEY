import Image from "next/image";
import React, { useState, useEffect } from "react";

const QuestionLoader = () => {
  const [selectedDept, setSelectedDept] = useState("CS");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  const departments = {
    CS: "Computer Science",
    CE: "Civil Engineering",
    EE: "Electrical Engineering",
    EXTC: "Electronics & Telecom",
    ME: "Mechanical Engineering",
  };

  const items = {
    CS: [
      {
        question: "What is React Fiber?",
        answer: "A rendering engine.",
      },
      {
        question: "What is the purpose of `useMemo`?",
        answer: "Memoize values.",
      },
      {
        question: "What does Concurrent Mode do?",
        answer: "Improves responsiveness.",
      },
      {
        question: "What is an HOC in React?",
        answer: "A component wrapper.",
      },
      {
        question: "Why use `useReducer`?",
        answer: "Handles complex state.",
      },
    ],
    CE: [
      {
        question: "Main component of cement?",
        answer: "Limestone",
      },
      {
        question: "Unit of force?",
        answer: "Newton",
      },
      {
        question: "Basic surveying tool?",
        answer: "Theodolite",
      },
    ],
    EE: [
      {
        question: "Unit of current?",
        answer: "Ampere",
      },
      {
        question: "Best conductor?",
        answer: "Silver",
      },
      {
        question: "AC frequency in India?",
        answer: "50 Hz",
      },
    ],
    EXTC: [
      {
        question: "Full form GSM?",
        answer: "Global System for Mobile",
      },
      {
        question: "Unit of frequency?",
        answer: "Hertz",
      },
      {
        question: "Common WiFi frequency?",
        answer: "2.4 GHz",
      },
    ],
    ME: [
      {
        question: "Unit of pressure?",
        answer: "Pascal",
      },
      {
        question: "Basic lathe operation?",
        answer: "Turning",
      },
      {
        question: "SI unit of temperature?",
        answer: "Kelvin",
      },
    ],
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuestion((prev) => (prev + 1) % items[selectedDept].length);
      setShowAnswer(false);
    }, 3000);

    return () => clearInterval(interval);
  }, [selectedDept]);

  return (
    <>
      <div className="flex justify-center ">
        <Image src={"/reading.gif"} alt="loader" width={100} height={100} />
      </div>
      <div className="max-w-xl mx-auto bg-white rounded-lg shadow-sm  border-gray-200 -mt-5">
        <div className="p-6">
          <div className="text-center mb-3">
            <p className="text-gray-800">
              {items[selectedDept][currentQuestion].question}
            </p>
          </div>
          <div className="flex flex-col items-center gap-4">
            <p className="text-gray-600 font-medium">
              {items[selectedDept][currentQuestion].answer}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default QuestionLoader;
