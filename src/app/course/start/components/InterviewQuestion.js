import React, { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const InterviewQuestionUI = ({ questions, chapter }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  const handleNext = () => {
    if (currentQuestionIndex < questions.questions?.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setShowAnswer(false);
    }
  };

  const handlePrev = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      setShowAnswer(false);
    }
  };

  const formatMarkdown = (text) => {
    return text
      .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
      .replace(
        /`(.*?)`/g,
        '<code class="bg-gray-100 px-1 py-0.5 rounded">$1</code>'
      )
      .split("\n")
      .map((line, i) => (
        <p
          key={i}
          className="mb-2"
          dangerouslySetInnerHTML={{ __html: line }}
        />
      ));
  };

  return (
    <div className="max-w-4xl  p-4">
      <Card className="bg-white shadow-lg">
        <CardHeader className="border-b">
          <CardTitle className="text-2xl font-bold">
            Practice interview questions
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <div className="mb-8">
            <div className="text-sm text-gray-500 mb-2">
              Question {currentQuestionIndex + 1} of{" "}
              {questions.questions?.length}
            </div>
            <div className="h-1 w-full bg-gray-200 rounded-full">
              <div
                className="h-1 bg-blue-600 rounded-full transition-all duration-300"
                style={{
                  width: `${
                    ((currentQuestionIndex + 1) / questions.questions?.length) *
                    100
                  }%`,
                }}
              />
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-4">
              {questions.questions[currentQuestionIndex]?.question}
            </h3>

            <Button
              onClick={() => setShowAnswer(!showAnswer)}
              variant="outline"
              className="mb-4"
            >
              {showAnswer ? "Hide Answer" : "Show Answer"}
            </Button>

            {showAnswer && (
              <div className="bg-gray-50 p-4 rounded-lg">
                {questions.questions[currentQuestionIndex]?.idealAnswer}
              </div>
            )}
          </div>

          <div className="flex justify-between">
            <Button
              onClick={handlePrev}
              disabled={currentQuestionIndex === 0}
              variant="outline"
            >
              <ChevronLeft className="w-4 h-4 mr-2" />
              Previous
            </Button>
            <Button
              onClick={handleNext}
              disabled={
                currentQuestionIndex === questions.questions?.length - 1
              }
            >
              Next
              <ChevronRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default InterviewQuestionUI;
