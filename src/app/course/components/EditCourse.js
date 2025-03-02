import React, { useState, useEffect } from "react";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, EditIcon } from "lucide-react";

function EditCourse({ activeStep, handleBack, handleNext }) {
  // State for editable content
  const [content, setContent] = useState({
    courseName: "",
    description: "",
    chapters: [],
  });

  // Load content from localStorage on mount
  useEffect(() => {
    const localStorageContent = localStorage.getItem("content");
    if (localStorageContent) {
      setContent(JSON.parse(localStorageContent));
    }
  }, []);

  // Handle course name update
  const handleCourseNameChange = (e) => {
    const updatedContent = { ...content, courseName: e.target.value };
    setContent(updatedContent);
    localStorage.setItem("content", JSON.stringify(updatedContent));
  };

  // Handle chapter name update
  const handleChapterNameChange = (index, value) => {
    const updatedChapters = [...content.chapters];
    updatedChapters[index].chapterName = value;
    const updatedContent = { ...content, chapters: updatedChapters };
    setContent(updatedContent);
    localStorage.setItem("content", JSON.stringify(updatedContent));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="max-w-3xl mx-auto bg-white shadow-lg">
        <CardHeader className="border-b">
          <div className="flex justify-start">
            <input
              type="text"
              value={content.courseName}
              onChange={handleCourseNameChange}
              placeholder="Enter Course Name"
              title="Edit Course Name"
              className="w-full text-2xl font-semibold text-gray-800 bg-transparent outline-none border-b focus:border-blue-500"
            />
            <EditIcon />
          </div>

          <p className="text-gray-500">
            {content.description || "No Description Available"}
          </p>
        </CardHeader>

        <CardContent className="space-y-8 pt-6">
          <div className="space-y-4">
            {(content.chapters || []).map((chapter, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 border border-blue-100 hover:border-blue-300 transition-colors"
              >
                <div className="flex items-center space-x-3">
                  <div className="bg-blue-100 rounded-full w-8 h-8 flex items-center justify-center text-blue-700 font-semibold">
                    {index + 1}
                  </div>
                  <div className="flex justify-between ">
                    <input
                      type="text"
                      value={chapter.chapterName}
                      title="Edit Chapter Name"
                      onChange={(e) =>
                        handleChapterNameChange(index, e.target.value)
                      }
                      placeholder="Enter Chapter Name"
                      className="text-lg text-gray-900 font-semibold bg-transparent outline-none border-b focus:border-blue-500 w-full"
                    />
                  </div>
                </div>
                <p className="mt-3 text-gray-600">{chapter.about}</p>
                <div className="mt-3 flex items-center text-sm text-blue-600">
                  <Clock className="h-4 w-4 mr-1" />
                  <span>{chapter.duration}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex justify-between items-center pt-6 border-t">
            <div className="space-x-4">
              <Button
                variant="outline"
                className="border-blue-200 text-blue-700 hover:bg-blue-50"
                onClick={handleBack}
                disabled={activeStep === 1}
              >
                Back
              </Button>
              <Button
                className="w-32 bg-blue-700 hover:bg-blue-800"
                onClick={handleNext}
                disabled={activeStep === 3}
              >
                {activeStep === 3 ? "Start" : "Next Step"}
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default EditCourse;
