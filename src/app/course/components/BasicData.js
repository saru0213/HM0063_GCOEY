import React, { useEffect, useState } from "react";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { BookOpen, Layers, BookType, GraduationCap } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { AiCourseContent } from "../../../../config/AllAiModels";
import LoadingDialog from "@/app/components/LoadingDialog";

function BasicData({ activeStep, handleBack, handleNext, setContent }) {
  const searchParams = useSearchParams();

  const [formData, setFormData] = useState({
    topicName: "",
    chapters: "",
    category: "",
    difficulty: "",
  });

  const [isCustomCategory, setIsCustomCategory] = useState(false);
  const [loading, setLoading] = useState(false);

  const isFormValid = Object.values(formData).every(
    (value) => value.trim() !== ""
  );

  useEffect(() => {
    const role = searchParams?.get("role");
    const courseTitle = searchParams?.get("course");

    if (courseTitle && role) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        topicName: `${courseTitle} for ${role}`,
      }));
    }
  }, [searchParams]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleNextStep = async () => {
    localStorage.setItem("category", formData.category);
    localStorage.setItem("topicName", formData.topicName);
    setLoading(true);

    const Basic_PROMPT = `category:${formData.category},topic:${formData.topicName},level:${formData.difficulty},noofchapter:${formData.chapters}. Generate a course tutorial on the basics of given data. Include:
    - courseName: Name of course
    - description: Short description
    - chapters: Name of chapters
    - about: About the chapter
    - duration: Time required to complete
    in JSON format.`;

    try {
      const results = await AiCourseContent.sendMessage(Basic_PROMPT);
      const responseText = await results.response.text();
      const responseJson = JSON.parse(responseText);

      localStorage.setItem("content", JSON.stringify(responseJson));
      setContent(responseJson);
      handleNext();
    } catch (error) {
      console.error("Error generating course content:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="max-w-3xl mx-auto bg-white shadow-lg">
        <CardHeader className="border-b">
          <h2 className="text-2xl font-semibold text-gray-800">Course Details</h2>
          <p className="text-gray-500">Fill in the basic information about your course</p>
        </CardHeader>

        <CardContent className="space-y-8 pt-6">
          {/* Topic Name */}
          <div className="space-y-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">Topic Name</label>
            <div className="relative">
              <BookType className="absolute left-3 top-3 h-5 w-5 text-blue-500" />
              <Input
                name="topicName"
                value={formData.topicName}
                onChange={handleChange}
                placeholder="Enter course topic name"
                className="pl-10 py-6 text-base"
                title="E.g. Python, Circuit Design, Road Design, Network"
              />
            </div>
          </div>

          {/* Course Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Number of Chapters */}
            <div className="space-y-4">
              <label className="block text-sm font-medium text-gray-700">Number of Chapters</label>
              <div className="relative">
                <Layers className="absolute left-3 top-3 h-5 w-5 text-blue-500" />
                <select
                  name="chapters"
                  value={formData.chapters}
                  onChange={handleChange}
                  title="E.g. 1, 2, 3, 4, 5, 6"
                  className="w-full pl-10 pr-4 py-2 border border-blue-100 rounded-md focus:ring-blue-500 focus:border-blue-500 bg-white"
                >
                  <option value="">Select chapters</option>
                  {[1, 2, 3, 4, 5, 6, 7, 8, "9+"].map((num) => (
                    <option key={num} value={num}>{num}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Category */}
            <div className="space-y-4">
              <label className="block text-sm font-medium text-gray-700">Category</label>
              <div className="relative">
                <BookOpen className="absolute left-3 top-3 h-5 w-5 text-blue-500" />
                <select
                  name="category"
                  value={formData.category}
                  onChange={(e) => {
                    const value = e.target.value;
                    setIsCustomCategory(value === "other");
                    setFormData((prev) => ({
                      ...prev,
                      category: value === "other" ? "" : value,
                    }));
                  }}
                  className="w-full pl-10 pr-4 py-2 border border-blue-100 rounded-md focus:ring-blue-500 focus:border-blue-500 bg-white"
                >
                  <option value="">Select a category</option>
                  {[
                    "Engineering & Technology", "Programming & Code", "Design",
                    "Health & Medicine", "Marketing", "Business & Management",
                    "Environmental Studies", "Arts & Humanities", "Science",
                    "Lifestyle", "Social Sciences", "Personal Development",
                    "Engineering Software"
                  ].map((cat) => (
                    <option key={cat} value={cat.toLowerCase()}>{cat}</option>
                  ))}
                  <option value="other">Other</option>
                </select>

                {isCustomCategory && (
                  <Input
                    type="text"
                    title="Enter category"
                    placeholder="Enter your category"
                    value={formData.category}
                    onChange={handleChange}
                    className="mt-2 w-full px-4 py-2 border border-blue-100 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  />
                )}
              </div>
            </div>

            {/* Difficulty Level */}
            <div className="space-y-4">
              <label className="block text-sm font-medium text-gray-700">Difficulty Level</label>
              <div className="relative">
                <GraduationCap className="absolute left-3 top-3 h-5 w-5 text-blue-500" />
                <select
                  name="difficulty"
                  value={formData.difficulty}
                  onChange={handleChange}
                  title="E.g. Beginner, Intermediate, Advanced"
                  className="w-full pl-10 pr-4 py-2 border border-blue-100 rounded-md focus:ring-blue-500 focus:border-blue-500 bg-white"
                >
                  <option value="">Select difficulty</option>
                  {["Beginner", "Intermediate", "Advanced"].map((level) => (
                    <option key={level} value={level.toLowerCase()}>{level}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-between items-center pt-6 border-t">
            <Button variant="outline" onClick={handleBack} disabled={activeStep === 1}>
              Back
            </Button>
            {loading && <LoadingDialog loading={loading} />}
            <Button className="w-32 bg-blue-700 hover:bg-blue-800" onClick={handleNextStep} disabled={!isFormValid}>
              {activeStep === 3 ? "Submit" : "Next Step"}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default BasicData;
