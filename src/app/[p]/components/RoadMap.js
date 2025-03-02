

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Clock,
  BookOpen,
  Target,
  Trophy,
  AlertCircle,
  Book,
  ChevronRight,
  ArrowLeft,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const StudentRoadMap = ({ setTree }) => {
  const roadmap = JSON.parse(localStorage.getItem("roadmap"));

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-4 md:p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header Section with improved visual hierarchy */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 tracking-tight">
            {roadmap.title}
          </h1>
          <p className="text-lg text-blue-700 max-w-2xl mx-auto">
            {roadmap.introduction}
          </p>
        </div>

        {/* Goal and Objectives in a grid */}
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white/80 backdrop-blur border-2 border-blue-100 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-blue-900">
                <Target className="h-6 w-6 text-blue-600" />
                Learning Goal
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-blue-700 text-lg">{roadmap.goal}</p>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur border-2 border-blue-100 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-blue-900">
                <Trophy className="h-6 w-6 text-blue-600" />
                Key Objectives
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {roadmap.objectives.map((objective, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="h-6 w-6 flex-shrink-0 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-sm font-medium">
                      {index + 1}
                    </div>
                    <span className="text-blue-700">{objective}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Learning Journey Stages */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-blue-900 text-center mb-8">
            Your Learning Journey
          </h2>

          {roadmap.stages.map((stage, index) => (
            <Card
              key={index}
              className="bg-white/80  border-2 border-blue-100 shadow-lg transform hover:scale-[1.02] transition-transform duration-300"
            >
              <CardHeader className="border-b border-blue-100">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <Badge className="bg-blue-100 text-blue-700 mb-2">
                      Stage {stage.stage}
                    </Badge>
                    <CardTitle className="text-2xl text-blue-900">
                      {stage.topic}
                    </CardTitle>
                  </div>
                  <Badge className="bg-blue-600 flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {stage.timeRequired}
                  </Badge>
                </div>
              </CardHeader>

              <CardContent className="grid gap-8 p-6">
                {/* Subtopics with improved interaction */}
                <div>
                  <h3 className="text-lg font-semibold text-blue-900 mb-4 flex items-center gap-2">
                    <BookOpen className="h-5 w-5" />
                    Learning Modules
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                    {stage.subtopics.map((subtopic, idx) => (
                      <button
                        key={idx}
                        onClick={() => {
                          window.location.href = `course?course=${encodeURIComponent(
                            subtopic
                          )}&role=${encodeURIComponent(roadmap.title)}`;
                        }}
                        className="flex items-center justify-between p-3 bg-blue-50 hover:bg-blue-100 text-blue-700 rounded-lg transition-colors duration-200"
                      >
                        <span>{subtopic}</span>
                        <ChevronRight className="h-4 w-4" />
                      </button>
                    ))}
                  </div>
                </div>

                {/* Projects and Resources Grid */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-blue-900">
                      Real World Projects
                    </h3>
                    <ul className="space-y-2">
                      {stage.realWorldProjects.map((project, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <div className="h-2 w-2 rounded-full bg-blue-400 mt-2" />
                          <span className="text-blue-700">{project}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-blue-900 flex items-center gap-2">
                      <Book className="h-5 w-5" />
                      Learning Resources
                    </h3>
                    <ul className="space-y-2">
                      {stage.resources.map((resource, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <div className="h-2 w-2 rounded-full bg-blue-400 mt-2" />
                          <span className="text-blue-700">{resource}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Skills and Challenges */}
                <div className="grid md:grid-cols-2 gap-6 bg-blue-50 p-4 rounded-lg">
                  <div>
                    <h3 className="text-lg font-semibold text-blue-900 mb-3">
                      Required Skills
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {stage.skillsRequired.map((skill, idx) => (
                        <Badge
                          key={idx}
                          className="bg-white text-blue-700 border border-blue-200"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-blue-900 mb-3 flex items-center gap-2">
                      <AlertCircle className="h-5 w-5" />
                      Challenges
                    </h3>
                    <p className="text-blue-700">{stage.challenges}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between pt-6 pb-12">
          <Button
            onClick={() => setTree(false)}
            className="bg-white text-blue-700 hover:bg-blue-50 border border-blue-200 flex items-center gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Back
          </Button>

          <Button
            onClick={() => {
              window.location.href = "/course";
            }}
            className="bg-blue-600 hover:bg-blue-700 text-white flex items-center gap-2"
          >
            Start Learning
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default StudentRoadMap;
