import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Clock, Layers, GraduationCap } from "lucide-react";

import { useState } from "react";

import {
  AiChapterContent,
  AiEngagingContent,
} from "../../../../config/AllAiModels";
import LoadingDialog from "@/app/components/LoadingDialog";
import service from "../../../../config/service";

function PreviewCourse({ activeStep, handleBack, content }) {
  const [loading, setLoading] = useState(false);

  const StartChapter = async () => {
    const topicName = localStorage.getItem("topicName");
    setLoading(true);
    const topic = localStorage.getItem("topicName");
    const combinedResponses = [];

    for (const [index, chapterName] of content?.chapters.entries()) {
      const total = index + 1;
      const Prompt = `explain the concept in details on topic:${topic},chapter:${chapterName.chapterName}.include title:title of content.description:detailed descritpion.code:code example (<precode> formate ) if applicable.in json formate`;
      if (index <= total) {
        try {
          const result = await AiChapterContent.sendMessage(Prompt);
          const responseText = await result.response.text();
          console.log("Response Text: ", responseText);
          const videoResponse = await service.getVideos(
            `${topicName}+${chapterName.chapterName}`
          );
          const videoId = videoResponse[0]?.id?.videoId;

          const chapterData = {
            chapterName: chapterName.chapterName,
            content: JSON.parse(responseText),
            videoId,
          };

          combinedResponses.push(chapterData);
        } catch (error) {
          console.error("Error fetching chapter data: ", error);
        }
      }
    }

    localStorage.setItem(
      "combinedChapterData",
      JSON.stringify(combinedResponses)
    );
    window.location.href = "/course/start";
    setLoading(false);
  };

  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <Card className="max-w-3xl mx-auto bg-white shadow-lg">
          <CardHeader className="border-b pb-6">
            <h2 className="text-2xl font-bold text-blue-800 mb-4">
              Course Preview
            </h2>
            {/* <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl shadow-sm border border-blue-100 p-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                
                <div className="flex items-center space-x-3 bg-blue-50/80 rounded-xl p-4 hover:bg-blue-100/80 transition-all duration-300 transform hover:scale-105">
                  <div className="bg-blue-600 rounded-xl p-2.5 shadow-md">
                    <BookOpen className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-blue-700 font-medium">Topic</p>
                    <p className="text-gray-900 font-semibold">Python</p>
                  </div>
                </div>

                
                <div className="flex items-center space-x-3 bg-blue-50/80 rounded-xl p-4 hover:bg-blue-100/80 transition-all duration-300 transform hover:scale-105">
                  <div className="bg-blue-600 rounded-xl p-2.5 shadow-md">
                    <GraduationCap className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-blue-700 font-medium">Level</p>
                    <p className="text-gray-900 font-semibold">Beginner</p>
                  </div>
                </div>

                
                <div className="flex items-center space-x-3 bg-blue-50/80 rounded-xl p-4 hover:bg-blue-100/80 transition-all duration-300 transform hover:scale-105">
                  <div className="bg-blue-600 rounded-xl p-2.5 shadow-md">
                    <Clock className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-blue-700 font-medium">
                      Duration
                    </p>
                    <p className="text-gray-900 font-semibold">1 hour</p>
                  </div>
                </div>

                
                <div className="flex items-center space-x-3 bg-blue-50/80 rounded-xl p-4 hover:bg-blue-100/80 transition-all duration-300 transform hover:scale-105">
                  <div className="bg-blue-600 rounded-xl p-2.5 shadow-md">
                    <Layers className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-blue-700 font-medium">
                      Chapters
                    </p>
                    <p className="text-gray-900 font-semibold">5</p>
                  </div>
                </div>

                
                <div className="flex items-center space-x-3 bg-blue-50/80 rounded-xl p-4 hover:bg-blue-100/80 transition-all duration-300 transform hover:scale-105">
                  <div className="bg-blue-600 rounded-xl p-2.5 shadow-md">
                  </div>
                  <div>
                    <p className="text-sm text-blue-700 font-medium">
                      Category
                    </p>
                    <p className="text-gray-900 font-semibold">Programming</p>
                  </div>
                </div>
              </div>
            </div> */}
          </CardHeader>

          <CardContent className="space-y-8 pt-6">
            {/* Course Content */}
            <div className="space-y-6">
              <div className="bg-blue-50 rounded-xl p-6">
                <h3 className="text-xl text-blue-800 font-bold mb-2">
                  {content?.courseName || "Introduction to Python Programming"}
                </h3>
                <p className="text-gray-600">
                  {content?.description ||
                    "Learn the fundamentals of Python programming language with hands-on exercises and practical examples."}
                </p>
              </div>

              {/* Chapters */}
              <div className="space-y-4">
                {(content?.chapters || []).map((chapter, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl p-6 border border-blue-100 hover:border-blue-300 transition-colors"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="bg-blue-100 rounded-full w-8 h-8 flex items-center justify-center text-blue-700 font-semibold">
                        {index + 1}
                      </div>
                      <h4 className="text-lg text-gray-900 font-semibold">
                        {chapter.chapterName}
                      </h4>
                    </div>
                    <p className="mt-3 text-gray-600">{chapter.about}</p>
                    <div className="mt-3 flex items-center text-sm text-blue-600">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>{chapter.duration}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
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
                  onClick={StartChapter}
                >
                  {activeStep === 3 && "Start course"}
                </Button>
                <LoadingDialog loading={loading} />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}

export default PreviewCourse;
