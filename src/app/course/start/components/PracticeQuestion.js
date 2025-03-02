import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Code, Eye, EyeOff } from "lucide-react";

function PracticeQuestion({ practice }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showSolution, setShowSolution] = useState(false);

  // practice = [
  //   {
  //     question:
  //       "Write a Python function that takes an array of integers as input and returns the sum of all the elements in the array.",
  //     solution_outline:
  //       "1. Initialize a variable `sum` to 0.\n2. Iterate through the array using a `for` loop.\n3. In each iteration, add the current element to the `sum` variable.\n4. After the loop completes, return the value of `sum`.",
  //     example_input: "[1, 2, 3, 4, 5]",
  //     example_output: "15",
  //   },
  //   {
  //     question:
  //       "Write a Python function that takes a string as input and returns the string reversed.",
  //     solution_outline:
  //       "1. Use string slicing: `string[::-1]`\n2. OR Use a `for` loop iterating backwards through the string, appending each character to a new string.",
  //     example_input: "hello",
  //     example_output: "olleh",
  //   },
  //   {
  //     question:
  //       "Write a Python function that takes a string as input and returns the number of times a specific character appears in the string.",
  //     solution_outline:
  //       "1. Initialize a counter variable to 0.\n2. Iterate through the string using a `for` loop.\n3. In each iteration, check if the current character is equal to the target character.\n4. If it is, increment the counter.\n5. After the loop, return the counter.",
  //     example_input: "hello world, how are you?",
  //     example_output: "3",
  //     target_character: "o",
  //   },
  //   {
  //     question:
  //       "Write a Python function that takes an array of strings as input and returns a new array containing only the strings that have a length greater than 5.",
  //     solution_outline:
  //       "1. Initialize an empty list called `result`.\n2. Iterate through the input array using a `for` loop.\n3. For each string, check its length using `len()`.\n4. If the length is greater than 5, append the string to the `result` list.\n5. Return the `result` list.",
  //     example_input: ["apple", "banana", "kiwi", "orange", "grapefruit"],
  //     example_output: ["banana", "grapefruit"],
  //   },
  //   {
  //     question:
  //       "Write a Python function that takes two strings as input and returns `True` if they are anagrams (contain the same characters, regardless of order), and `False` otherwise.",
  //     solution_outline:
  //       "1. Convert both strings to lowercase using `.lower()`.\n2. Remove spaces and punctuation (optional, for more robust solution).\n3. Sort the characters of both strings using `sorted()`.\n4. Compare the sorted strings; if they are equal, return `True`; otherwise, return `False`.",
  //     example_input: ["listen", "silent"],
  //     example_output: "True",
  //     example_input2: ["hello", "world"],
  //     example_output2: "False",
  //   },
  // ];

  const handleNext = () => {
    setCurrentQuestion((prev) => (prev + 1) % practice?.length);
    setShowSolution(false);
  };

  const handlePrevious = () => {
    setCurrentQuestion(
      (prev) => (prev - 1 + practice?.length) % practice?.length
    );
    setShowSolution(false);
  };

  const formatSolution = (solution) => {
    return solution.split("\n").map((line, index) => (
      <p key={index} className="mb-2">
        {line}
      </p>
    ));
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6 md:p-8">
      <div className="max-w-4xl mx-auto">
        <Card className="shadow-lg">
          <CardHeader className="border-b bg-white/50 backdrop-blur-sm">
            <div className="flex items-center justify-between">
              <CardTitle className="text-xl font-bold">
                Practice Question {currentQuestion + 1}/{practice?.length}
              </CardTitle>
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={handlePrevious}
                  className="h-8 w-8"
                  title="Previous"
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={handleNext}
                  className="h-8 w-8"
                  title="Next"
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-6">
            <div className="space-y-6">
              {/* Question */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold flex items-center gap-2">
                  <Code className="h-5 w-5" />
                  Question
                </h3>
                <p className="text-gray-700">
                  {practice[currentQuestion]?.question}
                </p>
              </div>

              {/* Examples */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Examples</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg flex gap-2">
                    <p className="text-sm font-medium text-gray-500">Input:</p>
                    <code className="text-sm" title="expected input">
                      {practice[currentQuestion]?.example_input}
                    </code>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg flex gap-2">
                    <p className="text-sm font-medium text-gray-500">Output:</p>
                    <code className="text-sm" title="expected output">
                      {practice[currentQuestion]?.example_output}
                    </code>
                  </div>
                </div>
              </div>

              {/* Solution */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold">Solution Outline</h3>
                  <Button
                    variant="ghost"
                    size="sm"
                    title="click here"
                    onClick={() => setShowSolution(!showSolution)}
                    className="flex items-center gap-2 border bg-blue-400 hover:bg-blue-600 text-white hover:text-white"
                  >
                    {showSolution ? (
                      <>
                        <EyeOff className="h-4 w-4" />
                        Hide Solution
                      </>
                    ) : (
                      <>
                        <Eye className="h-4 w-4" />
                        Show Solution
                      </>
                    )}
                  </Button>
                </div>
                {showSolution && (
                  <div className="bg-gray-50 p-4 rounded-lg">
                    {formatSolution(
                      practice[currentQuestion]?.solution_outline
                    )}
                  </div>
                )}
                <p className="p-2 text-gray-400">
                  <span>Note:-</span>:Use can use your local enviornment or
                  online compailer to run this program
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default PracticeQuestion;
