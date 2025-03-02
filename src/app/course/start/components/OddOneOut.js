import React, { useEffect, useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

import {
  AlertCircle,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  RotateCcw,
} from "lucide-react";
import Matchthepair from "./Matchthepair";
import FlishCard from "./FlishCard";

const EducationalActivities = ({ courseData, activeChapter }) => {
  const [currentOddOneOutIndex, setCurrentOddOneOutIndex] = useState(0);
  const [currentFlashcardIndex, setCurrentFlashcardIndex] = useState(0);

  const [selectedOddOneOut, setSelectedOddOneOut] = useState(null);
  const [showOddOneOutExplanation, setShowOddOneOutExplanation] =
    useState(false);

  const [matchedPairs, setMatchedPairs] = useState([]);
  const [selectedElement, setSelectedElement] = useState(null);

  const [ooo, setooo] = useState("0");
  const [match, setMatch] = useState("");

  useEffect(() => {
    const match = localStorage.getItem("engagingContent");
    if (match) {
      setMatch(JSON.parse(match));
    }
  }, []);

  // const courseData = {
  //   chapterName: "Basic Structure of an HTML Document",
  //   chapterDescription:
  //     "Understanding the `<html>`, `<head>`, and `<body>` elements. The role of the `<title>` tag and other essential elements.",
  //   activities: [
  //     {
  //       type: "Odd One Out",
  //       title: "HTML Element Odd One Out",
  //       description:
  //         "Identify the element that doesn't belong in each group.  Explain your answer.",
  //       questions: [
  //         {
  //           group: ["<html>", "<head>", "<body>", "<p>"],
  //           oddOne: "<p>",
  //           explanation:
  //             "<p> is a content element, while the others are structural elements.",
  //         },
  //         {
  //           group: ["<h1>", "<h2>", "<p>", "<title>"],
  //           oddOne: "<title>",
  //           explanation:
  //             "<title> is a meta-data element; the others are content elements.",
  //         },
  //         {
  //           group: ["<meta>", "<link>", "<title>", "<style>"],
  //           oddOne: "<title>",
  //           explanation:
  //             "<title> is for the page title; the others are for linking external resources or adding styles.",
  //         },
  //         {
  //           group: ["<div>", "<span>", "<img>", "<body>"],
  //           oddOne: "<body>",
  //           explanation:
  //             "<body> is the main container; the others are inline or block level containers.",
  //         },
  //         {
  //           group: ["<script>", "<link>", "<img>", "<style>"],
  //           oddOne: "<img>",
  //           explanation:
  //             "<img> displays an image; the others involve external or embedded code.",
  //         },
  //         {
  //           group: ["<header>", "<footer>", "<section>", "<a>"],
  //           oddOne: "<a>",
  //           explanation:
  //             "<a> is a hyperlink, while the others are structural elements.",
  //         },
  //         {
  //           group: ["<ul>", "<ol>", "<li>", "<p>"],
  //           oddOne: "<p>",
  //           explanation: "<p> is a paragraph; the others are list elements.",
  //         },
  //         {
  //           group: ["<article>", "<aside>", "<nav>", "<p>"],
  //           oddOne: "<p>",
  //           explanation:
  //             "<p> is a paragraph, while the others are structural elements for different content types.",
  //         },
  //         {
  //           group: ["<h1>", "<h2>", "<h3>", "<br>"],
  //           oddOne: "<br>",
  //           explanation: "<br> is a line break, while the others are headings.",
  //         },
  //         {
  //           group: ["<main>", "<section>", "<article>", "<body>"],
  //           oddOne: "<body>",
  //           explanation:
  //             "<body> encompasses all content; the others are content sections within the body.",
  //         },
  //       ],
  //     },
  //     {
  //       type: "Match the Pair",
  //       title: "HTML Element Matching",
  //       description: "Match the HTML element with its best description.",
  //       questions: [
  //         {
  //           element: "<html>",
  //           description: "The root element of the HTML page",
  //         },
  //         {
  //           element: "<head>",
  //           description: "Contains meta-information about the HTML page",
  //         },
  //         {
  //           element: "<body>",
  //           description: "Contains the visible content of the HTML page",
  //         },
  //         {
  //           element: "<title>",
  //           description: "Specifies a title for the HTML page",
  //         },
  //         {
  //           element: "<meta>",
  //           description: "Provides meta-information (e.g., character set)",
  //         },
  //         {
  //           element: "<link>",
  //           description: "Links to external resources (e.g., CSS)",
  //         },
  //         {
  //           element: "<script>",
  //           description: "Embeds client-side scripts (e.g., JavaScript)",
  //         },
  //         { element: "<style>", description: "Contains style information" },
  //         { element: "<p>", description: "Defines a paragraph" },
  //         { element: "<h1>", description: "Defines a level 1 heading" },
  //       ],
  //     },
  //     {
  //       type: "Flashcard",
  //       title: "HTML Element Flashcards",
  //       description:
  //         "Use these flashcards to test your knowledge of HTML elements.",
  //       questions: [
  //         { front: "<html>", back: "The root element of the HTML page" },
  //         {
  //           front: "<head>",
  //           back: "Contains meta-information (title, links, scripts)",
  //         },
  //         { front: "<body>", back: "Contains the visible page content" },
  //         {
  //           front: "<title>",
  //           back: "Sets the title displayed in the browser tab",
  //         },
  //         {
  //           front: '<meta charset="UTF-8">',
  //           back: "Specifies character encoding",
  //         },
  //         {
  //           front: '<link rel="stylesheet" href="style.css">',
  //           back: "Links an external stylesheet",
  //         },
  //         {
  //           front: '<script src="script.js"></script>',
  //           back: "Includes an external JavaScript file",
  //         },
  //         { front: "<p>", back: "Represents a paragraph of text" },
  //         { front: "<h1>", back: "Defines a level 1 heading" },
  //         { front: "<div>", back: "A generic container for grouping elements" },
  //       ],
  //     },
  //   ],
  // };

  // Odd One Out handlers
  const handleOddOneOutSelect = (answer) => {
    setSelectedOddOneOut(answer);
    setShowOddOneOutExplanation(true);
  };

  const handleNextOddOneOut = () => {
    setCurrentOddOneOutIndex((prev) =>
      prev < courseData?.activities?.oddOneOut?.length - 1 ? prev + 1 : 0
    );
    setSelectedOddOneOut(null);
    setShowOddOneOutExplanation(false);
  };
  const handlePrevOddOneOut = () => {
    setCurrentOddOneOutIndex((prev) =>
      prev < courseData?.activities?.oddOneOut?.length + 1 ? prev - 1 : 0
    );
    setSelectedOddOneOut(null);
    setShowOddOneOutExplanation(false);
  };

  // Flashcard handlers

  return (
    <div className="min-h-screen bg-slate-50 p-4 md:p-8">
      <Card className="max-w-4xl mx-auto">
        <CardHeader className="bg-blue-600 text-white rounded-t-lg">
          <CardTitle className="text-2xl font-bold">
            {courseData.chapterName}
          </CardTitle>
          <CardDescription className="text-blue-100">
            Choose an activity to begin learning
          </CardDescription>
        </CardHeader>

        <CardContent className="p-6">
          <Tabs defaultValue="oddoneout" className="space-y-6">
            <TabsList className="grid grid-cols-3 gap-4 bg-blue-50 p-2">
              <TabsTrigger
                value="oddoneout"
                className="data-[state=active]:bg-blue-600 data-[state=active]:text-white"
              >
                Odd One Out
              </TabsTrigger>
              <TabsTrigger
                value="matching"
                className="data-[state=active]:bg-blue-600 data-[state=active]:text-white"
              >
                Match the Pair
              </TabsTrigger>
              <TabsTrigger
                value="flashcards"
                className="data-[state=active]:bg-blue-600 data-[state=active]:text-white"
              >
                Flashcards
              </TabsTrigger>
            </TabsList>

            {/* Odd One Out Content */}
            <TabsContent value="oddoneout" className="space-y-4">
              <div className="text-sm text-blue-600 mb-2">
                Question {currentOddOneOutIndex + 1} of{" "}
                {courseData?.activities?.oddOneOut?.length || 0}
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {courseData?.activities?.oddOneOut[
                  currentOddOneOutIndex
                ].options.map((item, index) => (
                  <Button
                    key={index}
                    variant={selectedOddOneOut === item ? "default" : "outline"}
                    className={`h-auto py-4 px-6 text-base ${
                      selectedOddOneOut === item
                        ? "bg-blue-600 text-white"
                        : "hover:bg-blue-50"
                    }`}
                    onClick={() => handleOddOneOutSelect(item)}
                  >
                    {item}
                  </Button>
                ))}
              </div>

              {showOddOneOutExplanation && (
                <div
                  className={`mt-6 p-4 rounded-lg ${
                    selectedOddOneOut ===
                    courseData?.activities?.oddOneOut[currentOddOneOutIndex]
                      .oddOne
                      ? "bg-green-50 border border-green-200"
                      : "bg-red-50 border border-red-200"
                  }`}
                >
                  <div className="flex items-start gap-3">
                    {selectedOddOneOut ===
                    courseData?.activities?.oddOneOut[currentOddOneOutIndex]
                      .oddOne ? (
                      <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                    ) : (
                      <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                    )}
                    <div>
                      <div className="font-medium mb-1">
                        {selectedOddOneOut ===
                        courseData?.activities?.oddOneOut[currentOddOneOutIndex]
                          .oddOne
                          ? "Correct!"
                          : "Not quite right"}
                      </div>
                      <div className="text-sm">
                        {
                          courseData?.activities?.oddOneOut[
                            currentOddOneOutIndex
                          ].reason
                        }
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <div className="flex justify-end mt-4 gap-5">
                <Button
                  onClick={handlePrevOddOneOut}
                  className="bg-blue-600 hover:bg-blue-700"
                  disabled={currentOddOneOutIndex === 0}
                >
                  <ChevronLeft className="ml-2 h-4 w-4" />
                  Prev Question
                </Button>
                <Button
                  onClick={handleNextOddOneOut}
                  className="bg-blue-600 hover:bg-blue-700"
                  disabled={
                    currentOddOneOutIndex ===
                    courseData?.activities?.oddOneOut?.length - 1
                  }
                >
                  Next Question
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </TabsContent>

            {/* Match the Pair Content */}
            <TabsContent value="matching" className="space-y-4">
              <Matchthepair match={courseData} />
            </TabsContent>

            {/* Flashcards Content */}
            <TabsContent value="flashcards" className="space-y-4">
              <div className="text-sm text-blue-600 mb-2">
                Card {currentFlashcardIndex + 1} of{" "}
                {courseData?.activities?.flashcards?.length}
              </div>
              <FlishCard
                courseData={courseData}
                currentFlashcardIndex={currentFlashcardIndex}
                setCurrentFlashcardIndex={setCurrentFlashcardIndex}
              />
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default EducationalActivities;
