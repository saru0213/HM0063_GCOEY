"use client";
import React, { useState } from "react";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ShowJobRoll = ({ roadmap }) => {
  const handleRoleClick = () => {
    alert(roadmap.branch);
    window.location.href = "/params/page?page=JobsRoll";
  };
  const backInst = () => {
    window.location.href = "/params/page?page=instruction";
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">
        {roadmap.branch} Job Roles
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {roadmap.jobRoles.map((category, index) => (
          <Card
            key={index}
            className="border-2 hover:shadow-lg transition-shadow duration-300"
          >
            <CardHeader>
              <h2 className="text-xl font-semibold">{category.category}</h2>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {category.roles.map((role, roleIndex) => (
                  <li key={roleIndex} className="flex items-center">
                    <span className="mr-2">•</span>
                    <span>{role}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="flex justify-between mt-8">
        <Button
          onClick={() => {
            backInst();
          }}
        >
          Back to instructions
        </Button>
        <Button
          onClick={() => {
            handleRoleClick();
          }}
        >
          Know About Skills
        </Button>
      </div>
    </div>
  );
};

export default ShowJobRoll;
