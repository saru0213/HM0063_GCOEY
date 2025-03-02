// import React, { useState } from "react";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Progress } from "@/components/ui/progress";

// function ChapterExam({ setRestart, setComplete, topicName }) {
//   const [currentQuestion, setCurrentQuestion] = useState(0);
//   const [selectedAnswer, setSelectedAnswer] = useState(null);
//   const [score, setScore] = useState(0);
//   const [showExplanation, setShowExplanation] = useState(false);
//   const [examCompleted, setExamCompleted] = useState(false);
//   const exam = JSON.parse(localStorage.getItem("chapterExam"));

//   const handleAnswerSelection = (option) => {
//     setSelectedAnswer(option);
//     setShowExplanation(true);
//   };

//   const moveToNextQuestion = () => {
//     // Check if selected answer is correct
//     if (selectedAnswer === exam[currentQuestion].answer) {
//       setScore((prevScore) => prevScore + 1);
//     }

//     // Move to next question or complete exam
//     if (currentQuestion + 1 < exam.length) {
//       setCurrentQuestion((prevQuestion) => prevQuestion + 1);
//       setSelectedAnswer(null);
//       setShowExplanation(false);
//     } else {
//       setExamCompleted(true);
//     }
//   };

//   const restartExam = () => {
//     setCurrentQuestion(0);
//     setSelectedAnswer(null);
//     setScore(0);
//     setShowExplanation(false);
//     setExamCompleted(false);
//     setRestart(true);
//   };

//   if (examCompleted) {
//     return (
//       <div className="min-h-screen bg-blue-50 flex items-center justify-center p-4">
//         <Card className="w-full max-w-md">
//           <CardHeader className="bg-blue-600 text-white">
//             <CardTitle className="text-center">Exam Results</CardTitle>
//           </CardHeader>
//           <CardContent className="p-6 text-center">
//             <div className="mb-4">
//               <Progress
//                 value={(score / exam.length) * 100}
//                 className="w-full h-4 mb-2"
//                 indicatorColor="bg-green-500"
//               />
//               <p className="text-xl font-bold text-blue-700">
//                 {score} / {exam.length}
//               </p>
//             </div>
//             <p className="text-gray-700 mb-4">
//               {score >= exam.length * 0.7
//                 ? "Great job! You've passed the exam."
//                 : "Keep practicing. You can improve!"}
//             </p>

//             {score >= exam.length * 0.7 ? (
//               <Button
//                 className="w-full bg-blue-600 hover:bg-blue-700"
//                 onClick={() => {
//                   setComplete(true);
//                   window.location.reload();
//                   localStorage.removeItem("expandindex");
//                 }}
//               >
//                 Next Chapater
//               </Button>
//             ) : (
//               <>
//                 <Button
//                   onClick={restartExam}
//                   className="w-full bg-blue-600 hover:bg-blue-700"
//                 >
//                   Restart Exam
//                 </Button>
//               </>
//             )}
//           </CardContent>
//         </Card>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-blue-50 flex items-center justify-center p-4">
//       <Card className="w-full max-w-md">
//         <CardHeader className="bg-blue-600 text-white">
//           <CardTitle className="text-center">
//             {topicName} Chapter Exam
//           </CardTitle>
//         </CardHeader>
//         <CardContent className="p-6">
//           <div className="mb-4">
//             <Progress
//               value={((currentQuestion + 1) / exam.length) * 100}
//               className="w-full h-2 mb-4"
//               indicatorColor="bg-blue-700"
//             />
//             <p className="text-sm text-gray-600 mb-2">
//               Question {currentQuestion + 1} of {exam.length}
//             </p>
//             <h2 className="text-lg font-semibold text-blue-900 mb-4">
//               {exam[currentQuestion]?.question}
//             </h2>
//           </div>

//           <div className="space-y-3 w-full">
//             {exam[currentQuestion].options.map((option, index) => (
//               <Button
//                 key={index}
//                 onClick={() => handleAnswerSelection(option)}
//                 className={`w-full ${
//                   selectedAnswer === option
//                     ? option === exam[currentQuestion].answer
//                       ? "bg-green-500 hover:bg-green-600"
//                       : "bg-red-500 hover:bg-red-600"
//                     : "bg-blue-100 text-blue-800 hover:bg-blue-200"
//                 } text-left justify-start`}
//                 disabled={selectedAnswer !== null}
//               >
//                 {option}
//               </Button>
//             ))}
//           </div>

//           {showExplanation && (
//             <div
//               className={`mt-4 p-3 rounded ${
//                 selectedAnswer === exam[currentQuestion].answer
//                   ? "bg-green-100"
//                   : "bg-red-100"
//               }`}
//             >
//               <p className="text-sm font-medium">
//                 {selectedAnswer === exam[currentQuestion].answer
//                   ? "Correct! "
//                   : "Incorrect. "}
//                 {exam[currentQuestion]?.explanation}
//               </p>
//             </div>
//           )}

//           {selectedAnswer && (
//             <Button
//               onClick={moveToNextQuestion}
//               className="w-full mt-4 bg-blue-600 hover:bg-blue-700"
//             >
//               {currentQuestion + 1 < exam.length
//                 ? "Next Question"
//                 : "Finish Exam"}
//             </Button>
//           )}
//         </CardContent>
//       </Card>
//     </div>
//   );
// }

// export default ChapterExam;

import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

function ChapterExam({ setRestart, setComplete, topicName }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [showExplanation, setShowExplanation] = useState(false);
  const [examCompleted, setExamCompleted] = useState(false);
  const exam = JSON.parse(localStorage.getItem("chapterExam"));

  const handleAnswerSelection = (option) => {
    setSelectedAnswer(option);
    setShowExplanation(true);
  };

  const moveToNextQuestion = () => {
    if (selectedAnswer === exam[currentQuestion].answer) {
      setScore((prevScore) => prevScore + 1);
    }

    if (currentQuestion + 1 < exam.length) {
      setCurrentQuestion((prevQuestion) => prevQuestion + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    } else {
      setExamCompleted(true);
    }
  };

  const restartExam = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setScore(0);
    setShowExplanation(false);
    setExamCompleted(false);
    setRestart(true);
  };

  if (examCompleted) {
    return (
      <div className="min-h-screen bg-blue-50 flex items-center justify-center p-4">
        <Card className="w-full max-w-2xl mx-auto">
          <CardHeader className="bg-blue-600 text-white">
            <CardTitle className="text-center">Exam Results</CardTitle>
          </CardHeader>
          <CardContent className="p-6 text-center">
            <div className="mb-4">
              <Progress
                value={(score / exam.length) * 100}
                className="w-full h-4 mb-2"
                indicatorColor="bg-green-500"
              />
              <p className="text-xl font-bold text-blue-700">
                {score} / {exam.length}
              </p>
            </div>
            <p className="text-gray-700 mb-4">
              {score >= exam.length * 0.7
                ? "Great job! You've passed the exam."
                : "Keep practicing. You can improve!"}
            </p>

            {score >= exam.length * 0.7 ? (
              <Button
                className="w-full bg-blue-600 hover:bg-blue-700"
                onClick={() => {
                  setComplete(true);
                  window.location.reload();
                  localStorage.removeItem("expandindex");
                }}
              >
                Next Chapter
              </Button>
            ) : (
              <Button
                onClick={restartExam}
                className="w-full bg-blue-600 hover:bg-blue-700"
              >
                Restart Exam
              </Button>
            )}
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-blue-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl mx-auto">
        <CardHeader className="bg-blue-600 text-white p-6">
          <CardTitle className="text-center text-xl">
            {topicName} Chapter Exam
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <div className="mb-6">
            <Progress
              value={((currentQuestion + 1) / exam.length) * 100}
              className="w-full h-2 mb-4"
              indicatorColor="bg-blue-700"
            />
            <p className="text-sm text-gray-600 mb-3">
              Question {currentQuestion + 1} of {exam.length}
            </p>
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <h2 className="text-lg font-semibold text-blue-900 mb-4 break-words">
                {exam[currentQuestion]?.question}
              </h2>
            </div>
          </div>

          <div className="space-y-3 w-full">
            {exam[currentQuestion].options.map((option, index) => (
              <Button
                key={index}
                onClick={() => handleAnswerSelection(option)}
                className={`w-full min-h-[3rem] h-auto whitespace-normal text-left justify-start px-4 py-3 ${
                  selectedAnswer === option
                    ? option === exam[currentQuestion].answer
                      ? "bg-green-500 hover:bg-green-600 text-white"
                      : "bg-red-500 hover:bg-red-600 text-white"
                    : "bg-blue-100 text-blue-800 hover:bg-blue-200"
                }`}
                disabled={selectedAnswer !== null}
              >
                <span className="break-words">{option}</span>
              </Button>
            ))}
          </div>

          {showExplanation && (
            <div
              className={`mt-6 p-4 rounded-lg ${
                selectedAnswer === exam[currentQuestion].answer
                  ? "bg-green-100"
                  : "bg-red-100"
              }`}
            >
              <p className="text-sm font-medium break-words">
                {selectedAnswer === exam[currentQuestion].answer
                  ? "Correct! "
                  : "Incorrect. "}
                {exam[currentQuestion]?.explanation}
              </p>
            </div>
          )}

          {selectedAnswer && (
            <Button
              onClick={moveToNextQuestion}
              className="w-full mt-6 bg-blue-600 hover:bg-blue-700 py-3"
            >
              {currentQuestion + 1 < exam.length
                ? "Next Question"
                : "Finish Exam"}
            </Button>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

export default ChapterExam;
