import React, { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import CourseExam from "./CourseExam";
import { AiGenerateCourseMcq } from "../../../../config/AllAiModels";
import LoadingDialog from "../../components/LoadingDialog";

function McqExam({ topicName }) {
  const [examStatus, setExamStatus] = useState(false);
  const [loading, setLoading] = useState(false);
  const [content, setContent] = useState(null);
  const [exam, setExam] = useState(null);

  // Load content from localStorage
  useEffect(() => {
    const storedContent = localStorage.getItem("content");
    if (storedContent) {
      try {
        setContent(JSON.parse(storedContent));
      } catch (error) {
        console.error("Error parsing content from localStorage:", error);
      }
    }
  }, []);

  // Load exam data from localStorage
  useEffect(() => {
    const storedExam = localStorage.getItem("combinedExamDate");
    if (storedExam) {
      try {
        setExam(JSON.parse(storedExam));
        setExamStatus(true);
      } catch (error) {
        console.error("Error parsing exam data from localStorage:", error);
      }
    }
  }, []);

  const courseExam = async () => {
    if (!content) {
      console.error("Content is not available.");
      return;
    }

    setLoading(true);

    const prompt = `Generate 5 MCQ questions based on the following syllabus. Include question, answer, options, and explanation. Syllabus: ${JSON.stringify(
      content
    )}. Return in JSON format.`;

    try {
      const result = await AiGenerateCourseMcq.sendMessage(prompt);
      const responseText = await result.response.text();
      
      let jsonResponse;
      try {
        jsonResponse = JSON.parse(responseText);
      } catch (parseError) {
        console.error("Error parsing AI response:", parseError);
        setLoading(false);
        return;
      }

      localStorage.setItem("combinedExamDate", JSON.stringify(jsonResponse));
      setExam(jsonResponse);
      setExamStatus(true);
    } catch (error) {
      console.error("Error fetching MCQ data:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {examStatus ? (
        <CourseExam exam={exam} topicName={topicName} />
      ) : (
        <div className="bg-slate-50 p-4 md:p-8">
          <div className="max-w-3xl mx-auto">
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="text-xl">You have completed the Chapter</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-lg">
                  Have you completed the exam? Let&apos;s take it! Just click on the Start Exam button.
                </p>
              </CardContent>
            </Card>
            <Button variant="outline" onClick={courseExam}>
              Start Exam
            </Button>
            <LoadingDialog loading={loading} />
          </div>
        </div>
      )}
    </>
  );
}

export default McqExam;
