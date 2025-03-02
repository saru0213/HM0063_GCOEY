import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { PieChart, Pie, Cell } from "recharts";
import {
  CheckCircle,
  XCircle,
  Clock,
  BookOpen,
  Target,
  TrendingUp,
} from "lucide-react";

const PerformanceDashboard = ({ analyse }) => {
  const COLORS = ["#22c55e", "#ef4444"];
  //   const analyse = {
  //     Date: "2024-10-27",
  //     Overall_Performance: {
  //       TotalQuestions: 5,
  //       CorrectAnswers: 2,
  //       IncorrectAnswers: 3,
  //       PercentageCorrect: 40,
  //       Grade: "D",
  //     },
  //     Detailed_Performance_Breakdown: {
  //       BySubject: {
  //         HTML: {
  //           TotalQuestions: 5,
  //           CorrectAnswers: 2,
  //           IncorrectAnswers: 3,
  //         },
  //       },
  //       ByQuestionType: {
  //         MultipleChoice: {
  //           TotalQuestions: 5,
  //           CorrectAnswers: 2,
  //           IncorrectAnswers: 3,
  //         },
  //       },
  //     },
  //     Strengths: [
  //       "Demonstrated basic understanding of HTML paragraph tags and the meaning of HTML.",
  //     ],
  //     Areas_for_Improvement: [
  //       "Needs to review HTML image and hyperlink tags.  Understanding of unordered list tags also needs improvement.",
  //       "Accuracy in selecting correct HTML tags requires attention.",
  //       "Review core HTML concepts related to lists and image insertion.",
  //     ],
  //     Time_Management_Insights: {
  //       TimeTaken: "01:11 min",
  //       TimeAllowed: "15:00 min",
  //       TimeRemaining: "13:49 min",
  //       Analysis:
  //         "The exam was completed very quickly. While this might suggest confidence, it also suggests a lack of thoroughness or double-checking of answers, which could account for the lower accuracy.",
  //     },
  //     Recommendations: [
  //       "Review the incorrect answers thoroughly and understand why the chosen option was wrong and the correct answer is correct.",
  //       "Practice more HTML exercises focusing on image embedding, hyperlinks, and list creation.",
  //       "Utilize online resources and tutorials to strengthen understanding of core HTML concepts.",
  //       "In future tests, allocate time for reviewing answers before submitting.",
  //       "Try timed practice tests to improve speed and accuracy.",
  //     ],
  //     Conclusion: {
  //       EncouragingRemarks:
  //         "You showed some understanding of basic HTML concepts.  With focused study and practice, you can significantly improve your score.  Don't get discouraged; consistent effort will lead to success.",
  //       SummaryOfNextSteps:
  //         "Prioritize reviewing the areas identified for improvement.  Use online resources and practice questions to solidify your understanding of HTML.  Develop a study plan to address weak areas and aim for a higher score on the next assessment.",
  //     },
  //   };

  return (
    <div className="w-full max-w-6xl mx-auto space-y-6 p-6 bg-gray-50">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Performance Report
        </h1>
        <p className="text-gray-600">{analyse.Date}</p>
      </div>

      {/* Main Stats */}
      <div className=" mb-8">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg font-semibold flex items-center gap-2">
              <Target className="h-5 w-5 text-blue-500" />
              Overall Grade
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-bold text-center text-gray-900">
              {analyse.Overall_Performance.Grade}
            </div>
            <div className="text-sm text-gray-500 text-center">
              {analyse.Overall_Performance.PercentageCorrect}% Correct
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg font-semibold flex items-center gap-2 mt-5">
              <Clock className="h-5 w-5 text-blue-500" />
              Time Management
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-center text-gray-900">
              {analyse.Time_Management_Insights.TimeTaken}
            </div>
            <div className="text-sm text-gray-500 text-center">
              Minutes Used
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Performance Chart */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-lg font-semibold flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-blue-500" />
            Performance Breakdown
          </CardTitle>
        </CardHeader>
        <CardContent className="flex justify-center items-center">
          <div className="w-48 h-48">
            <PieChart width={200} height={200}>
              <Pie
                data={[
                  {
                    name: "Correct",
                    value: analyse?.Overall_Performance?.CorrectAnswers,
                  },
                  {
                    name: "Incorrect",
                    value: analyse?.Overall_Performance?.IncorrectAnswers,
                  },
                ]}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                paddingAngle={5}
                dataKey="value"
              >
                {analyse?.Overall_Performance?.CorrectAnswers +
                  analyse?.Overall_Performance?.IncorrectAnswers >
                  0 &&
                  COLORS.map((color, index) => (
                    <Cell key={`cell-${index}`} fill={color} />
                  ))}
              </Pie>
            </PieChart>
          </div>
          <div className="flex flex-col gap-2 ml-8">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-green-500 rounded"></div>
              <span>
                Correct ({analyse?.Overall_Performance.CorrectAnswers})
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-red-500 rounded"></div>
              <span>
                Incorrect ({analyse?.Overall_Performance.IncorrectAnswers})
              </span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Strengths & Improvements */}
      <div className="grid grid-cols-1 md:grid-cols-1 gap-6 mb-8">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg font-semibold flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-green-500" />
              Strengths
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {analyse?.Strengths?.map((strength, index) => (
                <li key={index} className="flex items-start gap-2 text-justify">
                  <div className="min-w-4 mt-1">•</div>
                  <span>{strength}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg font-semibold flex items-center gap-2">
              <XCircle className="h-5 w-5 text-red-500" />
              Areas for Improvement
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {analyse?.Areas_for_Improvement?.map((improvement, index) => (
                <li key={index} className="flex items-start gap-2 text-justify">
                  <div className="min-w-4 mt-1">•</div>
                  <span>{improvement}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>

      {/* Recommendations */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg font-semibold">
            Recommendations
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {analyse?.Recommendations?.map((recommendation, index) => (
              <li key={index} className="flex items-start gap-2 text-justify">
                <div className="min-w-4 mt-1">•</div>
                <span>{recommendation}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      {/* conclusion */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg font-semibold">conclusion</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            <li className="flex items-start gap-2 text-justify">
              <div className="min-w-4 mt-1">•</div>
              <span>{analyse?.Conclusion?.EncouragingRemarks}</span>
            </li>
            <li className="flex items-start gap-2 text-justify">
              <div className="min-w-4 mt-1">•</div>
              <span>{analyse?.Conclusion?.SummaryOfNextSteps}</span>
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default PerformanceDashboard;
