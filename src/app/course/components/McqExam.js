import React, { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import CourseExam from "./CourseExam";
import { AiGenerateCourseMcq } from "../../../../config/AllAiModels";
import LoadingDialog from "../../components/LoadingDialog";

function McqExam({ topicName }) {
  const [examStatus, setExamStatus] = useState(false);
  const [loading, setLoading] = useState(false);
  const [content, setContent] = useState();
  const localStorageContent = localStorage.getItem("content");
  const [exam, setExam] = useState("");

  useEffect(() => {
    if (localStorageContent) {
      setContent(JSON.parse(localStorageContent));
    }
  }, []);

  useEffect(() => {
    const exam = localStorage.getItem("combinedExamDate");
    if (exam) {
      setExam(JSON.parse(exam));
      setExamStatus(true);
    }
  }, []);

  const courseExam = async () => {
    setLoading(true);
    const Prompt = `generate 5 mcq question by on give syllabus.include question,answer,options,explaination.syllabus :${JSON.stringify(
      localStorageContent
    )}.in json formate.`;
    // alert(Prompt);
    try {
      const result = await AiGenerateCourseMcq.sendMessage(Prompt);
      const responseText = await result.response.text();
      console.log("Response Text: ", responseText);
      const jsonreponse = JSON.parse(responseText);
      localStorage.setItem("combinedExamDate", JSON.stringify(jsonreponse));
      setExam(jsonreponse);
      setExamStatus(true);
    } catch (error) {
      console.error("Error fetching chapter data: ", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {examStatus ? (
        <>
          <CourseExam exam={exam} topicName={topicName} />
        </>
      ) : (
        <>
          <div className="bg-slate-50 p-4 md:p-8">
            <div className="max-w-3xl mx-auto">
              <Card className="mb-6">
                <CardHeader>
                  <CardTitle className="text-xl">
                    You have completed the Chapter
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-lg">
                    Have you completed the exam?.Let's give it just Click on
                    Start Exam button.
                  </p>
                </CardContent>
              </Card>
              <Button
                variant="outline"
                onClick={() => {
                  courseExam();
                }}
                // className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white hover:text-white hover:font-bold"
              >
                Start Exam
              </Button>
              <LoadingDialog loading={loading} />
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default McqExam;
