import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";

function FlishCard({
  courseData,
  currentFlashcardIndex,
  setCurrentFlashcardIndex,
}) {
  const [isFlipped, setIsFlipped] = useState(false);
  const handleNextFlashcard = () => {
    setCurrentFlashcardIndex((prev) =>
      prev < courseData?.activities?.flashcards?.length - 1 ? prev + 1 : 0
    );
    setIsFlipped(false);
  };
  const handlePrevFlashcard = () => {
    setCurrentFlashcardIndex((prev) =>
      prev < courseData?.activities?.flashcards?.length + 1 ? prev - 1 : 0
    );
    setIsFlipped(false);
  };

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };
  return (
    <>
      <div className="flex flex-col items-center justify-center p-4">
        <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
          <div
            className="text-center p-4 bg-blue-500 text-white flex items-center justify-center rounded-lg curser-pointer shadow-lg h-[250px] w-[200px] md:h-[350px] md:w-[300px]"
            onClick={() => handleClick()}
          >
            <p className="curser-pointer">
              {courseData?.activities?.flashcards[currentFlashcardIndex]
                ?.front || "Content not available"}
            </p>
          </div>

          <div
            className="text-center p-4 bg-white text-blue-500 flex items-center justify-center rounded-lg curser-pointer shadow-lg h-[250px] w-[200px] md:h-[350px] md:w-[300px]"
            onClick={() => handleClick()}
          >
            <p className="curser-pointer">
              {courseData?.activities?.flashcards[currentFlashcardIndex]
                ?.back || "Content not available"}
            </p>
          </div>
        </ReactCardFlip>
      </div>

      <div className="text-center text-sm text-gray-500 mt-4">
        Click the card to flip it
      </div>

      <div className="flex justify-between mt-4 gap-5">
        <Button
          onClick={handlePrevFlashcard}
          className="bg-blue-600 hover:bg-blue-700"
          disabled={currentFlashcardIndex === 0}
        >
          <ChevronLeft className="ml-2 h-4 w-4" />
          Prev Card
        </Button>
        <Button
          onClick={handleNextFlashcard}
          className="bg-blue-600 hover:bg-blue-700"
          disabled={
            currentFlashcardIndex ===
            courseData?.activities?.flashcards?.length - 1
          }
        >
          Next Card
          <ChevronRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </>
  );
}

export default FlishCard;
