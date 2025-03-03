
import React, { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shuffle, Trophy, Timer } from "lucide-react";

const Matchthepair = () => {
  const [elements, setElements] = useState([]);
  const [descriptions, setDescriptions] = useState([]);
  const [selectedElement, setSelectedElement] = useState(null);
  const [selectedDescription, setSelectedDescription] = useState(null);
  const [matchedPairs, setMatchedPairs] = useState([]);
  const [score, setScore] = useState(0);
  const [match, setMatch] = useState(null);
  const [attempts, setAttempts] = useState(0);
  const [timer, setTimer] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    try {
      const engagingContent = localStorage.getItem("engagingContent");
      if (engagingContent) {
        const parsedContent = JSON.parse(engagingContent);
        setMatch(parsedContent);
      }
    } catch (error) {
      console.error("Error loading content:", error);
    }
  }, []);

  useEffect(() => {
    if (match?.activities?.matchThePairs?.length > 0) {
      shuffleCards();
    }
  }, [match]);

  useEffect(() => {
    let intervalId;
    if (isActive) {
      intervalId = setInterval(() => {
        setTimer((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(intervalId);
  }, [isActive]);

  const shuffleCards = () => {
    if (!match?.activities?.matchThePairs) return;

    const shuffledElements = [...match.activities.matchThePairs].sort(
      () => Math.random() - 0.5
    );
    const shuffledDescriptions = [...match.activities.matchThePairs].sort(
      () => Math.random() - 0.5
    );
    setElements(shuffledElements);
    setDescriptions(shuffledDescriptions);
    setMatchedPairs([]);
    setScore(0);
    setAttempts(0);
    setTimer(0);
    setIsActive(true);
    setSelectedElement(null);
    setSelectedDescription(null);
  };

  const handleElementClick = (element) => {
    if (matchedPairs.includes(element.term)) return;
    setSelectedElement(element);
    checkMatch(element, selectedDescription);
  };

  const handleDescriptionClick = (description) => {
    if (matchedPairs.includes(description.term)) return;
    setSelectedDescription(description);
    checkMatch(selectedElement, description);
  };

  const checkMatch = (element, description) => {
    if (!element || !description) return;

    setAttempts((prev) => prev + 1);

    if (element.term === description.term) {
      setMatchedPairs([...matchedPairs, element.term]);
      setScore(score + 1);
      if (score + 1 === match.activities.matchThePairs.length) {
        setIsActive(false);
      }
    }

    setTimeout(() => {
      setSelectedElement(null);
      setSelectedDescription(null);
    }, 1000);
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  if (!match) {
    return (
      <div className="flex items-center justify-center min-h-[200px]">
        <div className="animate-pulse space-y-4">
          <div className="h-4 bg-gray-200 rounded w-48"></div>
          <div className="h-4 bg-gray-200 rounded w-32"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-6xl mx-auto bg-gradient-to-br from-blue-50 to-purple-50 min-h-screen">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
          {match.chapterName}
        </h1>

        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <div className="flex items-center justify-center gap-2 text-blue-600">
              <Trophy className="w-5 h-5" />
              <span className="text-xl font-semibold">
                {score}/{match.activities.matchThePairs.length}
              </span>
            </div>
            <p className="text-sm text-gray-600 mt-1">Score</p>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-md">
            <div className="flex items-center justify-center gap-2 text-purple-600">
              <Timer className="w-5 h-5" />
              <span className="text-xl font-semibold">{formatTime(timer)}</span>
            </div>
            <p className="text-sm text-gray-600 mt-1">Time</p>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-md">
            <div className="text-xl font-semibold text-green-600">
              {attempts}
            </div>
            <p className="text-sm text-gray-600 mt-1">Attempts</p>
          </div>
        </div>

        <Button
          onClick={shuffleCards}
          className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-2 rounded-full shadow-lg transform transition-all hover:scale-105"
        >
          <Shuffle className="w-4 h-4 mr-2" /> Shuffle Cards
        </Button>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <h2 className="text-xl font-semibold mb-4 text-blue-600">Terms</h2>
          <div className="grid grid-cols-1 gap-4">
            {elements.map((item, index) => (
              <Card
                key={`element-${index}`}
                className={`transform transition-all duration-300 hover:scale-102 cursor-pointer ${
                  matchedPairs.includes(item.term)
                    ? "bg-green-100 border-green-300"
                    : selectedElement?.term === item.term
                    ? "bg-blue-100 border-blue-300"
                    : "hover:shadow-lg hover:border-blue-200 bg-white"
                }`}
                onClick={() => handleElementClick(item)}
              >
                <CardContent className="p-4 text-center">
                  <code className="text-base font-semibold">{item.term}</code>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-semibold mb-4 text-purple-600">
            Descriptions
          </h2>
          <div className="grid grid-cols-1 gap-4">
            {descriptions.map((item, index) => (
              <Card
                key={`desc-${index}`}
                className={`transform transition-all duration-300 hover:scale-102 cursor-pointer ${
                  matchedPairs.includes(item.term)
                    ? "bg-green-100 border-green-300"
                    : selectedDescription?.term === item.term
                    ? "bg-purple-100 border-purple-300"
                    : "hover:shadow-lg hover:border-purple-200 bg-white"
                }`}
                onClick={() => handleDescriptionClick(item)}
              >
                <CardContent className="p-4">
                  <p className="text-base">{item.match}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {score === match.activities.matchThePairs.length && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded-xl shadow-2xl transform animate-fadeIn">
            <div className="text-center">
              <Trophy className="w-16 h-16 text-yellow-500 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-green-600 mb-4">
                Congratulations! 🎉
              </h2>
              <div className="space-y-2 mb-6">
                <p className="text-lg">Time: {formatTime(timer)}</p>
                <p className="text-lg">Attempts: {attempts}</p>
                <p className="text-lg">
                  Accuracy: {((score / attempts) * 100).toFixed(1)}%
                </p>
              </div>
              <Button
                onClick={shuffleCards}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full shadow-lg transform transition-all hover:scale-105"
              >
                Play Again
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Matchthepair;
