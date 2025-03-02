import React, { useState, useEffect } from "react";
import { Award, CheckCircle, XCircle, Info, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

import PerformanceDashboard from "../start/components/Report";
import { AiCourseMcqFeedbackReport } from "../../../../config/AllAiModels";
import LoadingDialog from "../../components/LoadingDialog";

const CourseExam = ({ exam, topicName, totalTime = 30 * 60 }) => {
  // Default 30 minutes
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [answers, setAnswers] = useState([]);
  const [showExplanation, setShowExplanation] = useState(false);
  const [optionSelected, setOptionSelected] = useState(false);
  const passingScore = Math.round((75 / 100) * exam.mcqs.length);
  const restartpass = Math.round((65 / 100) * exam.mcqs.length);
  const [timeRemaining, setTimeRemaining] = useState(totalTime);
  const [isTimerRunning, setIsTimerRunning] = useState(true);
  const [timeTaken, setTimeTaken] = useState(0);
  const [loading, setLoading] = useState(false);
  const [analyzer, setAnalyzer] = useState("");

  // Timer effect
  useEffect(() => {
    // If timer is running and time is not up, continue countdown
    if (isTimerRunning && timeRemaining > 0) {
      const timer = setTimeout(() => {
        setTimeRemaining((prevTime) => prevTime - 1);
        setTimeTaken((prevTimeTaken) => prevTimeTaken + 1);
      }, 1000);

      // Clean up the timer
      return () => clearTimeout(timer);
    }

    // If time runs out, automatically finish the exam
    if (timeRemaining === 0) {
      setIsTimerRunning(false);
      setShowResult(true);
    }
  }, [timeRemaining, isTimerRunning]);

  // Format time to MM:SS
  const formatTime = (totalSeconds) => {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  const handleOptionSelect = (option) => {
    if (!optionSelected) {
      setSelectedOption(option);
      setShowExplanation(true);
      setOptionSelected(true);
    }
  };

  const handleNextQuestion = () => {
    // Check if answer is correct
    const isCorrect = selectedOption === exam.mcqs[currentQuestion].answer;

    // Store the answer details
    setAnswers((prev) => [
      ...prev,
      {
        question: exam.mcqs[currentQuestion].question,
        selected: selectedOption,
        correct: isCorrect,
        correctAnswer: exam.mcqs[currentQuestion].answer,
      },
    ]);

    // Update score
    if (isCorrect) {
      setScore((prev) => prev + 1);
    }

    // Move to next question or show results
    if (currentQuestion + 1 < exam.mcqs.length) {
      setCurrentQuestion((prev) => prev + 1);
      setSelectedOption(null);
      setShowExplanation(false);
      setOptionSelected(false);
    } else {
      setShowResult(true);
      setIsTimerRunning(false);
    }
  };

  const restartExam = () => {
    setCurrentQuestion(0);
    setSelectedOption(null);
    setScore(0);
    setShowResult(false);
    setAnswers([]);
    setShowExplanation(false);
    setOptionSelected(false);
    setTimeRemaining(totalTime);
    setIsTimerRunning(true);
    setTimeTaken(0);
  };

  if (showResult) {
    const handleHowToImprove = async () => {
      setLoading(true);
      const prompt = `analyze and give feedback report for mcq exam data,include Overall_Performance,Detailed Performance Breakdown:By Subject/Topic or By Question Type,Strengths, Areas_for_Improvement,Time Management Insights,Recommendations,Conclusion:Encouraging remarks and summary of next steps.in json formate.Date:${JSON.stringify(
        answers
      )},Time Taken: ${formatTime(timeTaken)} min out of 15:00 min.`;
      try {
        const result = await AiCourseMcqFeedbackReport.sendMessage(prompt);
        const responseText = await result.response.text();
        console.log("Response Text: ", responseText);
        const jsonreponse = JSON.parse(responseText);
        setAnalyzer(jsonreponse);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    return (
      <div className="min-h-screen bg-blue-50 flex items-center justify-center p-4">
        <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-2xl text-center">
          <Award className="mx-auto text-blue-600 mb-6" size={80} />
          <h1 className="text-3xl font-bold mb-4 text-blue-800">
            {topicName} Exam Results
          </h1>

          <div className="mb-6">
            <p className="text-xl">
              Your Score:{" "}
              <span className="font-bold text-blue-600">
                {score} / {exam.mcqs.length}
              </span>
            </p>
            <p className="text-gray-600 mb-2">
              Percentage: {((score / exam.mcqs.length) * 100).toFixed(2)}%
            </p>
            <div className="flex justify-center items-center space-x-2 text-gray-600 mb-4">
              <Clock size={20} />
              <span>Time Taken: {formatTime(timeTaken)}</span>
            </div>
            {timeRemaining === 0 && (
              <p className="text-red-600 font-medium mb-4">
                Time's up! Exam automatically submitted.
              </p>
            )}
          </div>

          <div className="space-y-4">
            {answers.map((answer, index) => (
              <div
                key={index}
                className={`p-4 rounded-lg flex items-center ${
                  answer.correct ? "bg-green-100" : "bg-red-100"
                }`}
              >
                {answer.correct ? (
                  <CheckCircle className="mr-3 text-green-600" />
                ) : (
                  <XCircle className="mr-3 text-red-600" />
                )}
                <div>
                  <p className="font-semibold">{answer.question}</p>
                  <p className="text-sm">
                    Your Answer: {answer.selected}
                    {!answer.correct &&
                      ` | Correct Answer: ${answer.correctAnswer}`}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {score >= passingScore ? (
            <p className="text-green-600 font-semibold">
              Congratulations! You’re on the right track—keep up the hard work!
            </p>
          ) : (
            <>
              <p className="text-red-600 font-semibold">
                Great effort! Keep practicing, and success will follow soon!
              </p>
              <Button
                onClick={handleHowToImprove}
                className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300"
              >
                How to Improve
              </Button>
              <LoadingDialog loading={loading} />
              {analyzer && <PerformanceDashboard analyse={analyzer} />}
            </>
          )}
          {score < passingScore && score > restartpass && (
            <button
              onClick={restartExam}
              className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Restart Exam
            </button>
          )}
          {score >= 75 && (
            <button className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300">
              Completed
            </button>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-blue-50 flex items-center justify-center p-4">
      <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-2xl">
        <div className="mb-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-800 capitalize">
            {topicName} exam
          </h1>
          <div className="flex items-center space-x-2 text-blue-600">
            <Clock size={20} />
            <span
              className={`font-bold ${
                timeRemaining <= 60 ? "text-red-600" : ""
              }`}
            >
              {formatTime(timeRemaining)}
            </span>
          </div>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">
            {exam.mcqs[currentQuestion].question}
          </h2>

          <div className="space-y-4">
            {exam.mcqs[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleOptionSelect(option)}
                disabled={optionSelected}
                className={`w-full text-left p-4 rounded-lg transition duration-300 ${
                  selectedOption === option
                    ? "bg-blue-600 text-white"
                    : optionSelected
                    ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                    : "bg-blue-100 text-blue-800 hover:bg-blue-200"
                }`}
              >
                {option}
              </button>
            ))}
          </div>

          {/* Explanation Section */}
          {showExplanation && (
            <div className="mt-4 p-4 bg-blue-50 rounded-lg flex items-start">
              <Info className="mr-3 mt-1 text-blue-600 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-blue-800 mb-2">
                  Explanation
                </h3>
                <p className="text-gray-700">
                  {exam.mcqs[currentQuestion].explanation}
                </p>
                {selectedOption === exam.mcqs[currentQuestion].answer ? (
                  <p className="mt-2 text-green-600 font-medium">
                    Correct Answer!
                  </p>
                ) : (
                  <p className="mt-2 text-red-600 font-medium">
                    Incorrect. The correct answer is:{" "}
                    {exam.mcqs[currentQuestion].answer}
                  </p>
                )}
              </div>
            </div>
          )}
        </div>

        <button
          onClick={handleNextQuestion}
          disabled={!selectedOption}
          className={`w-full py-3 rounded-lg transition duration-300 ${
            selectedOption
              ? "bg-blue-600 text-white hover:bg-blue-700"
              : "bg-gray-300 text-gray-500 cursor-not-allowed"
          }`}
        >
          {currentQuestion === exam.mcqs.length - 1
            ? "Finish Exam"
            : "Next Question"}
        </button>
      </div>
    </div>
  );
};

export default CourseExam;
