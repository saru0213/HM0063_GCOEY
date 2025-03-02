"use client";

import React, { useState, useEffect } from "react";

const QuizPage = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [showDescription, setShowDescription] = useState(false);
  const [timeLeft, setTimeLeft] = useState(600); // 10 minutes in seconds
  const [studentCount, setStudentCount] = useState(127); // Mock data
  const [myRank, setMyRank] = useState(14); // Mock data

  const questions = [
    {
      question: "What does PHP stand for?",
      options: [
        "Personal Home Page",
        "Hypertext Preprocessor",
        "Preprocessor Hypertext",
        "Programming Hypertext Processor",
      ],
      correct_answer: "Hypertext Preprocessor",
      description:
        "PHP stands for Hypertext Preprocessor. It's a server-side scripting language primarily used for web development.",
    },
    {
      question: "Which symbol is used to start a PHP code block?",
      options: ["<?php", "<php>", "{php}", "<script>"],
      correct_answer: "<?php",
      description:
        "The `<?php` tag is used to start a PHP code block within an HTML file. The closing tag is `?>`.",
    },
    {
      question: "What is the correct way to output 'Hello, World!' in PHP?",
      options: [
        "print('Hello, World!');",
        "echo 'Hello, World!';",
        "write('Hello, World!');",
        "display('Hello, World!');",
      ],
      correct_answer: "echo 'Hello, World!';",
      description:
        "`echo` is a language construct used to output data to the screen. `print()` is also possible, but `echo` is generally preferred for its simplicity.",
    },
    {
      question: "What data type is best suited for storing a person's age?",
      options: ["string", "float", "integer", "boolean"],
      correct_answer: "integer",
      description:
        "Age is typically a whole number, making `integer` the most appropriate data type.",
    },
    {
      question: "How do you declare a variable in PHP?",
      options: [
        "var myVar = 10;",
        "int myVar = 10;",
        "myVar = 10;",
        "$myVar = 10;",
      ],
      correct_answer: "$myVar = 10;",
      description:
        "In PHP, you declare a variable by using the $ symbol followed by the variable name and assigning a value using the `=` operator. No explicit type declaration is needed (though type hinting is possible in later PHP versions).",
    },
    {
      question: "What does the `$` symbol signify in PHP?",
      options: [
        "It's a mathematical operator",
        "It's used for comments",
        "It precedes variable names",
        "It's used to define functions",
      ],
      correct_answer: "It precedes variable names",
      description: "The `$` symbol is used to denote variables in PHP.",
    },
    {
      question:
        "Which operator is used for concatenation (joining) strings in PHP?",
      options: ["+", "-", "*", "."],
      correct_answer: ".",
      description:
        "The `.` operator is used to concatenate strings in PHP. For example, `'Hello' . ' World!'` would result in `'Hello World!'`.",
    },
    {
      question: "What function is used to get the length of a string?",
      options: ["strlen()", "length()", "stringLength()", "size()"],
      correct_answer: "strlen()",
      description:
        "`strlen()` is the built-in function to determine the number of characters in a string.",
    },
    {
      question: "Which statement is used for conditional execution?",
      options: ["if", "for", "while", "switch"],
      correct_answer: "if",
      description:
        "The `if` statement is fundamental for conditional logic in PHP, allowing code to execute based on whether a condition is true or false.",
    },
    {
      question: "What does the `==` operator do?",
      options: [
        "Checks for strict equality",
        "Checks for assignment",
        "Checks for loose equality",
        "Checks for inequality",
      ],
      correct_answer: "Checks for loose equality",
      description:
        "`==` performs loose comparison, meaning type coercion might happen before the comparison. `===` is used for strict equality, checking both value and type.",
    },
  ];

  const currentQuestion = questions[currentQuestionIndex];

  // Format time from seconds to MM:SS
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${remainingSeconds
      .toString()
      .padStart(2, "0")}`;
  };

  // Timer effect
  useEffect(() => {
    if (timeLeft > 0 && !showResult) {
      const timer = setTimeout(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0 && !showResult) {
      // Auto-submit when timer reaches zero
      handleFinish();
    }
  }, [timeLeft, showResult]);

  // Mock rank update (would be replaced with real API call in production)
  useEffect(() => {
    const rankInterval = setInterval(() => {
      setMyRank((prevRank) => {
        // Randomly adjust rank slightly to simulate real-time changes
        const adjustment = Math.floor(Math.random() * 3) - 1; // -1, 0, or 1
        const newRank = Math.max(1, prevRank + adjustment);
        return newRank;
      });

      // Also randomly adjust student count occasionally
      if (Math.random() > 0.7) {
        setStudentCount((prev) => prev + 1);
      }
    }, 5000);

    return () => clearInterval(rankInterval);
  }, []);

  const handleAnswerSelect = (option) => {
    if (!showDescription) {
      setSelectedAnswer(option);
    }
  };

  const handleNext = () => {
    // Check if answer is correct before moving to next question
    if (selectedAnswer === currentQuestion.correct_answer) {
      setScore(score + 1);
    }

    // Save user's answer for this question
    const newUserAnswers = [...userAnswers];
    newUserAnswers[currentQuestionIndex] = selectedAnswer;
    setUserAnswers(newUserAnswers);

    if (showDescription) {
      // If showing description, move to next question
      setShowDescription(false);
      setSelectedAnswer(null);

      if (currentQuestionIndex === questions.length - 1) {
        setShowResult(true);
        // Scroll to top of results
        setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 100);
      } else {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      }
    } else {
      // Show description first
      setShowDescription(true);
    }
  };

  const handleFinish = () => {
    // Check final answer if not already checked
    if (!showDescription && selectedAnswer === currentQuestion.correct_answer) {
      setScore(score + 1);
    }

    // Save the last answer if not already saved
    if (selectedAnswer && !showDescription) {
      const newUserAnswers = [...userAnswers];
      newUserAnswers[currentQuestionIndex] = selectedAnswer;
      setUserAnswers(newUserAnswers);
    }

    setShowResult(true);
    // Scroll to top of results
    setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 100);
  };

  // Track user answers for review
  const [userAnswers, setUserAnswers] = useState(
    Array(questions.length).fill(null)
  );

  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setScore(0);
    setShowResult(false);
    setShowDescription(false);
    setTimeLeft(600); // Reset timer
    setUserAnswers(Array(questions.length).fill(null));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-100 py-8 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Header section with timer and stats */}
        <div className="flex justify-between items-center mb-6 bg-white rounded-lg shadow-md p-4">
          <div className="flex flex-col">
            <span className="text-xs text-gray-500">Students Online</span>
            <span className="text-lg font-bold text-indigo-600">
              {studentCount}
            </span>
          </div>

          <div className="flex flex-col items-center">
            {!showResult && (
              <div
                className={`text-2xl font-mono ${
                  timeLeft < 60
                    ? "text-red-500 animate-pulse"
                    : timeLeft < 180
                    ? "text-amber-500"
                    : "text-green-600"
                }`}
              >
                {formatTime(timeLeft)}
              </div>
            )}
            <span className="text-xs text-gray-500">Time Remaining</span>
          </div>

          <div className="flex flex-col items-end">
            <span className="text-xs text-gray-500">Your Rank</span>
            <span className="text-lg font-bold text-indigo-600">#{myRank}</span>
          </div>
        </div>

        {/* Quiz container */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          {!showResult ? (
            <div className="p-6">
              {/* Progress bar */}
              <div className="w-full bg-gray-200 rounded-full h-2.5 mb-6">
                <div
                  className="bg-indigo-600 h-2.5 rounded-full transition-all duration-300"
                  style={{
                    width: `${
                      ((currentQuestionIndex + (showDescription ? 0.5 : 0)) /
                        questions.length) *
                      100
                    }%`,
                  }}
                ></div>
              </div>

              {/* Question counter */}
              <div className="flex justify-between items-center mb-4">
                <span className="text-sm font-medium text-gray-500">
                  Question {currentQuestionIndex + 1} of {questions.length}
                </span>
                <span className="text-sm font-medium text-indigo-600">
                  Score: {score}
                </span>
              </div>

              {/* Question */}
              <h3 className="text-xl font-bold text-gray-800 mb-6">
                {currentQuestion.question}
              </h3>

              {/* Options */}
              <div className="space-y-3 mb-6">
                {currentQuestion.options.map((option, index) => (
                  <div
                    key={index}
                    onClick={() => handleAnswerSelect(option)}
                    className={`
                      p-4 rounded-lg border-2 cursor-pointer transition-all
                      ${
                        !showDescription && selectedAnswer === option
                          ? "border-indigo-600 bg-indigo-50"
                          : "border-gray-200 hover:border-indigo-300"
                      }
                      ${
                        showDescription &&
                        option === currentQuestion.correct_answer
                          ? "border-green-500 bg-green-50"
                          : showDescription &&
                            selectedAnswer === option &&
                            option !== currentQuestion.correct_answer
                          ? "border-red-500 bg-red-50"
                          : ""
                      }
                    `}
                  >
                    <div className="flex items-center">
                      <div
                        className={`
                        w-6 h-6 rounded-full flex items-center justify-center mr-3 
                        ${
                          !showDescription && selectedAnswer === option
                            ? "bg-indigo-600 text-white"
                            : "bg-gray-200 text-gray-700"
                        }
                        ${
                          showDescription &&
                          option === currentQuestion.correct_answer
                            ? "bg-green-500 text-white"
                            : showDescription &&
                              selectedAnswer === option &&
                              option !== currentQuestion.correct_answer
                            ? "bg-red-500 text-white"
                            : ""
                        }
                      `}
                      >
                        {String.fromCharCode(65 + index)}
                      </div>
                      <span className="text-gray-800">{option}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Description (shown after answering) */}
              {showDescription && (
                <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <h4 className="font-bold text-blue-800 mb-1">Explanation:</h4>
                  <p className="text-blue-700">{currentQuestion.description}</p>
                </div>
              )}

              {/* Navigation buttons */}
              <div className="flex justify-between mt-8">
                {currentQuestionIndex === questions.length - 1 &&
                showDescription ? (
                  <button
                    onClick={handleFinish}
                    className="w-full py-3 px-6 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors"
                  >
                    Finish Quiz
                  </button>
                ) : (
                  <button
                    onClick={handleNext}
                    disabled={selectedAnswer === null}
                    className={`
                      w-full py-3 px-6 font-medium rounded-lg transition-colors
                      ${
                        selectedAnswer !== null
                          ? "bg-indigo-600 text-white hover:bg-indigo-700"
                          : "bg-gray-300 text-gray-500 cursor-not-allowed"
                      }
                    `}
                  >
                    {showDescription ? "Next Question" : "Check Answer"}
                  </button>
                )}
              </div>
            </div>
          ) : (
            /* Results screen */
            <div className="p-8">
              <div className="text-center mb-8">
                <div className="w-24 h-24 rounded-full bg-indigo-100 flex items-center justify-center mx-auto mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-12 w-12 text-indigo-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>

                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                  Quiz Completed!
                </h2>

                <div className="flex justify-center space-x-8 mb-6">
                  <div className="text-center">
                    <p className="text-gray-500 text-sm">Your Score</p>
                    <p className="text-3xl font-bold text-indigo-600">
                      {score}/{questions.length}
                    </p>
                  </div>

                  <div className="text-center">
                    <p className="text-gray-500 text-sm">Accuracy</p>
                    <p className="text-3xl font-bold text-indigo-600">
                      {Math.round((score / questions.length) * 100)}%
                    </p>
                  </div>

                  <div className="text-center">
                    <p className="text-gray-500 text-sm">Time Used</p>
                    <p className="text-3xl font-bold text-indigo-600">
                      {formatTime(600 - timeLeft)}
                    </p>
                  </div>
                </div>

                {/* Feedback based on score */}
                <div className="my-6 p-4 rounded-lg bg-gray-50 max-w-xl mx-auto">
                  <h3 className="font-bold text-lg text-gray-800 mb-2">
                    Your Performance Feedback
                  </h3>
                  <p className="text-gray-700">
                    {score === questions.length
                      ? "Excellent work! You've mastered the PHP fundamentals with a perfect score. You have a strong understanding of the core concepts of PHP."
                      : score >= questions.length * 0.8
                      ? "Great job! You have a solid understanding of PHP basics. Just a few concepts to review for complete mastery."
                      : score >= questions.length * 0.6
                      ? "Good effort! You have a decent grasp of PHP, but there are several important concepts you might want to review."
                      : score >= questions.length * 0.4
                      ? "You're making progress with PHP, but you should review the fundamentals more thoroughly to strengthen your knowledge."
                      : "You should focus on the PHP basics and core concepts. Consider reviewing PHP syntax, variables, and basic operations before proceeding."}
                  </p>
                </div>
              </div>

              {/* Answer review section */}
              <div className="mt-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">
                  Question Review
                </h3>
                <div className="space-y-6">
                  {questions.map((q, idx) => (
                    <div
                      key={idx}
                      className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm"
                    >
                      <div className="flex items-center mb-2">
                        <div
                          className={`w-6 h-6 rounded-full flex items-center justify-center mr-3 ${
                            q.options.includes(q.correct_answer)
                              ? "bg-green-500 text-white"
                              : "bg-red-500 text-white"
                          }`}
                        >
                          {idx + 1}
                        </div>
                        <h4 className="font-medium text-gray-800">
                          {q.question}
                        </h4>
                      </div>

                      <div className="ml-9 space-y-1 mb-3">
                        {q.options.map((option, optIdx) => (
                          <div
                            key={optIdx}
                            className={`p-2 rounded text-sm ${
                              option === q.correct_answer
                                ? "bg-green-100 border-l-4 border-green-500 text-green-800"
                                : userAnswers[idx] === option
                                ? "bg-red-50 border-l-4 border-red-300 text-red-800"
                                : "text-gray-700"
                            }`}
                          >
                            <span className="font-medium">
                              {String.fromCharCode(65 + optIdx)}:
                            </span>{" "}
                            {option}
                            {option === q.correct_answer && (
                              <span className="ml-2 font-medium text-green-700">
                                ✓ Correct Answer
                              </span>
                            )}
                            {userAnswers[idx] === option &&
                              option !== q.correct_answer && (
                                <span className="ml-2 font-medium text-red-500">
                                  ✗ Your Answer
                                </span>
                              )}
                            {userAnswers[idx] === option &&
                              option === q.correct_answer && (
                                <span className="ml-2 font-medium text-green-700">
                                  ✓ Your Answer
                                </span>
                              )}
                          </div>
                        ))}
                      </div>

                      <div className="ml-9 bg-blue-50 p-3 rounded text-sm text-blue-800">
                        <span className="font-medium">Explanation:</span>{" "}
                        {q.description}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row justify-center mt-8 space-y-4 sm:space-y-0 sm:space-x-4">
                <button
                  onClick={handleRestart}
                  className="py-3 px-6 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors"
                >
                  Restart Quiz
                </button>

                <button
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }
                  className="py-3 px-6 bg-white border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Back to Summary
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Footer with copyright */}
        <div className="mt-8 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} PHP Quiz. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default QuizPage;
