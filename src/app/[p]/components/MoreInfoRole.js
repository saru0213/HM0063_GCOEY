import React, { useEffect, useState } from "react";
import {
  ChevronDown,
  Code,
  Brain,
  Building2,
  Trophy,
  Terminal,
  ArrowLeft,
  ArrowRight,
  DollarSign,
  Briefcase,
  Users,
  Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const MoreInfoRole = () => {
  const [activeSection, setActiveSection] = useState("description");
  const [role, setRole] = useState(null);

  useEffect(() => {
    const jobs = localStorage.getItem("moreInfo");
    if (jobs) {
      try {
        const parsedJobs = JSON.parse(jobs);
        setRole(parsedJobs);
      } catch (error) {
        console.error("Error parsing jobs from localStorage:", error);
      }
    } else {
      window.location.href = "/page?page=DepartmentJobRolls";
    }
  }, []);

  const SectionCard = ({ title, icon, content, isActive, onClick }) => (
    <div
      className={`group transition-all duration-300 ease-in-out ${
        isActive ? "bg-blue-50" : "bg-white hover:bg-gray-50"
      }`}
      onClick={onClick}
    >
      <div className="flex items-center justify-between p-6 cursor-pointer">
        <div className="flex items-center gap-4">
          <div
            className={`p-3 rounded-lg ${
              isActive ? "bg-blue-100" : "bg-gray-100 group-hover:bg-gray-200"
            }`}
          >
            {icon}
          </div>
          <h3 className="text-lg font-medium">{title}</h3>
        </div>
        <ChevronDown
          className={`w-5 h-5 transition-transform duration-300 ${
            isActive ? "rotate-180 text-blue-500" : "text-gray-400"
          }`}
        />
      </div>
      {isActive && (
        <div className="px-6 pb-6 pt-2 border-t border-gray-100">{content}</div>
      )}
    </div>
  );

  const ListContent = ({ items }) => (
    <ul className="space-y-4 mt-4">
      {items?.map((item, index) => (
        <li key={index} className="flex items-start gap-3">
          <div className="w-2 h-2 rounded-full bg-blue-500 mt-2" />
          <span className="text-gray-700">{item}</span>
        </li>
      ))}
    </ul>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 rounded-2xl p-8 mb-8 text-white shadow-xl">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold mb-4">{role?.role}</h1>
            <p className="text-xl text-blue-50 leading-relaxed">
              {role?.description}
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid gap-4 bg-white border rounded-2xl shadow-sm divide-y divide-gray-200">
          <SectionCard
            title="Core Responsibilities"
            icon={<Code className="w-6 h-6 text-blue-500" />}
            content={<ListContent items={role?.coreResponsibilities} />}
            isActive={activeSection === "responsibilities"}
            onClick={() =>
              setActiveSection(
                activeSection === "responsibilities" ? "" : "responsibilities"
              )
            }
          />

          <SectionCard
            title="Skills & Qualifications"
            icon={<Brain className="w-6 h-6 text-blue-500" />}
            content={<ListContent items={role?.skillsAndQualifications} />}
            isActive={activeSection === "skills"}
            onClick={() =>
              setActiveSection(activeSection === "skills" ? "" : "skills")
            }
          />

          <SectionCard
            title="Latest Tools & Technologies"
            icon={<Terminal className="w-6 h-6 text-blue-500" />}
            content={<ListContent items={role?.latestToolsAndTechnologies} />}
            isActive={activeSection === "tools"}
            onClick={() =>
              setActiveSection(activeSection === "tools" ? "" : "tools")
            }
          />

          <SectionCard
            title="Work Environment"
            icon={<Building2 className="w-6 h-6 text-blue-500" />}
            content={<ListContent items={role?.workEnvironment} />}
            isActive={activeSection === "environment"}
            onClick={() =>
              setActiveSection(
                activeSection === "environment" ? "" : "environment"
              )
            }
          />

          <SectionCard
            title="Career Path"
            icon={<Trophy className="w-6 h-6 text-blue-500" />}
            content={
              <div className="mt-4">
                <div className="flex flex-col gap-4">
                  {role?.careerPath?.map((path, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-500 font-medium">
                        {index + 1}
                      </div>
                      <span className="text-gray-700">{path}</span>
                    </div>
                  ))}
                </div>
              </div>
            }
            isActive={activeSection === "career"}
            onClick={() =>
              setActiveSection(activeSection === "career" ? "" : "career")
            }
          />

          <SectionCard
            title="Challenges & Rewards"
            icon={<Star className="w-6 h-6 text-blue-500" />}
            content={
              <div className="space-y-8 mt-4">
                <div>
                  <h4 className="text-lg font-medium text-gray-900 mb-4">
                    Challenges
                  </h4>
                  <ListContent items={role?.challengesAndRewards?.challenges} />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-gray-900 mb-4">
                    Rewards
                  </h4>
                  <ListContent items={role?.challengesAndRewards?.rewards} />
                </div>
              </div>
            }
            isActive={activeSection === "challenges"}
            onClick={() =>
              setActiveSection(
                activeSection === "challenges" ? "" : "challenges"
              )
            }
          />

          <SectionCard
            title="Companies That Hire"
            icon={<Briefcase className="w-6 h-6 text-blue-500" />}
            content={
              <div className="mt-4">
                <ListContent items={role?.companiesThatHire} />
                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <h4 className="font-medium text-gray-900 mb-2">
                    Industry Relevance
                  </h4>
                  <p className="text-gray-700">{role?.industryRelevance}</p>
                </div>
              </div>
            }
            isActive={activeSection === "companies"}
            onClick={() =>
              setActiveSection(activeSection === "companies" ? "" : "companies")
            }
          />

          <SectionCard
            title="Average Salary (INR)"
            icon={<DollarSign className="w-6 h-6 text-blue-500" />}
            content={
              <div className="space-y-6 mt-4">
                <p className="text-sm text-gray-500 italic">
                  {role?.averageSalaryInRupees?.note}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    {
                      level: "Junior",
                      salary:
                        role?.averageSalaryInRupees?.entryLevel ||
                        role?.averageSalaryInRupees?.junior,
                    },
                    {
                      level: "Mid Level",
                      salary: role?.averageSalaryInRupees?.midLevel,
                    },
                    {
                      level: "Senior",
                      salary:
                        role?.averageSalaryInRupees?.senior ||
                        role?.averageSalaryInRupees?.seniorLevel,
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6"
                    >
                      <h4 className="text-gray-600 font-medium mb-2">
                        {item.level}
                      </h4>
                      <p className="text-xl font-semibold text-blue-600">
                        {item.salary}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            }
            isActive={activeSection === "salary"}
            onClick={() =>
              setActiveSection(activeSection === "salary" ? "" : "salary")
            }
          />
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-8">
          <Button
            onClick={() =>
              (window.location.href = "/page?page=DepartmentJobRoles")
            }
            className="flex items-center gap-2 bg-white hover:bg-gray-50 text-gray-700"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Departments
          </Button>
          <div className="flex gap-5">
            <Button
              onClick={() => (window.location.href = "/checkcareer")}
              className="flex items-center gap-2 bg-gray-700 hover:bg-gray-800 text-white"
            >
              Check My Career
              <ArrowRight className="w-4 h-4" />
            </Button>
            <Button
              onClick={() => (window.location.href = "/page?page=RoleRoadMap")}
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white"
            >
              Continue to Roadmap
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoreInfoRole;
