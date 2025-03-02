"use client";
import React, { useState, useEffect } from "react";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Briefcase, ChevronRight, ArrowLeft } from "lucide-react";

const JobsRole = ({ setConform, setRole }) => {
  const [loading, setLoading] = useState(true);
  const [skills, setSkills] = useState(null);
  const [jobRoll, setJobRoll] = useState(null);
  // const [roadmap, setroadmap] = useState(false);

  useEffect(() => {
    const jobs = localStorage.getItem("jobs");
    if (jobs) {
      try {
        const parsedJobs = JSON.parse(jobs);
        setSkills(parsedJobs);
        setJobRoll(parsedJobs?.branch || "");
      } catch (error) {
        console.error("Error parsing jobs from localStorage:", error);
      }
    }
    setLoading(false);
  }, []);

  if (!skills) {
    return (
      <div className="flex justify-center items-center h-screen ">
        <Card className="p-8 text-center max-w-md">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">
            Oops! No skills data available
          </h2>
          <p className="text-gray-600 mb-6">
            Please go back and select a job role to view skills.
          </p>
          <Button
            onClick={() =>
              (window.location.href = "/jobPreparation/departmentjobs")
            }
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition-colors duration-300"
          >
            <ArrowLeft className="mr-2" size={16} />
            Go Back
          </Button>
        </Card>
      </div>
    );
  }
  const handleRoleClick = (job) => {
    localStorage.setItem("role", job);
    setConform(true);
  };

  return (
    <div className="container mx-auto p-6 ">
      <Card className="w-full max-w-4xl mx-auto shadow-xl overflow-hidden rounded-lg">
        <CardHeader className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-8">
          <div className="flex items-center space-x-4 mb-4">
            <Briefcase size={32} className="text-blue-200" />
            <h2 className="text-4xl font-extrabold">{jobRoll} Career Paths</h2>
          </div>
          <p className="text-blue-100 text-lg">
            Discover exciting roles and opportunities in the world of {jobRoll}
          </p>
        </CardHeader>
        <CardContent className="p-8 mt-5">
          {skills.jobRoles.map((role, index) => (
            <div key={index} value={role.category}>
              <p className="text-xl font-bold mb-2 text-blue-600 mt-5">
                {index + 1} .{role.category || ""}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {role.roles.map((job, idx) => (
                  <Card
                    className="hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                    onClick={() => {
                      handleRoleClick(job), setRole(job);
                    }}
                  >
                    <CardContent className="p-4 flex items-center space-x-4 cursor-pointer">
                      <Badge
                        variant="secondary"
                        className="h-10 w-10 rounded-full flex items-center justify-center bg-gradient-to-br from-blue-500 to-indigo-600 text-white font-bold"
                      >
                        {idx + 1}
                      </Badge>
                      <span className="font-medium text-base">{job || ""}</span>
                      <ChevronRight className="ml-auto text-blue-500" />
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};

export default JobsRole;
