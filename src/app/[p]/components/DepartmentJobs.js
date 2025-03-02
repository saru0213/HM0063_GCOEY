"use client";
import { useEffect, useState } from "react";
import { AiRoleMoreInfo, JobRolls } from "../../../../config/AllAiModels";
import JobsRole from "./CategoryRole";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
} from "@/components/ui/alert-dialog";
import LoadingDialog from "@/app/components/LoadingDialog";

export default function DepartmentJobRoles() {
  const [selectedBranch, setSelectedBranch] = useState("");
  const [customBranch, setCustomBranch] = useState("");
  const [submittedValue, setSubmittedValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [tree, setTree] = useState(false);
  const [status, setStatus] = useState(false);
  const [role, setRole] = useState("");
  const [conform, setConform] = useState(false);
  const [localrole, setLocalRole] = useState("");

  useEffect(() => {
    const jobs = localStorage.getItem("jobs");
    const localrole = localStorage.getItem("role");
    if (jobs) {
      setSubmittedValue(JSON.parse(jobs));
      setTree(true);
    }
    if (localrole) {
      setLocalRole(localrole);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const inputValue =
      selectedBranch === "Other" ? customBranch : selectedBranch;
    const BASIC_PROMPT = `generate which type of job roll are available in branch ${inputValue},it include category,role in json formate`;
    try {
      const result = await JobRolls.sendMessage(BASIC_PROMPT);
      const responseText = await result.response.text();
      // console.log("Response Text: ", responseText);
      const parsedResult = JSON.parse(responseText);
      localStorage.setItem("jobs", JSON.stringify(parsedResult));
      localStorage.setItem("branch", inputValue);
      setSubmittedValue(parsedResult);
      setTree(true);
      window.location.reload();
    } catch (error) {
      // console.error("Error parsing JSON:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleMoreInfo = async () => {
    setStatus(true);
    const prompt = `Describe the role of "${role}". Include detailed information on the following aspects:
    Core Responsibilities, Skills and Qualifications, latest Tools and Technologies ,Work Environment, Career Path, Challenges and Rewards, Industry Relevance,companies hire,average salery(in rupees).in json formate.`;
    try {
      const result = await AiRoleMoreInfo.sendMessage(prompt);
      const role = await result.response.text();
      const json = JSON.parse(role);
      localStorage.setItem("moreInfo", JSON.stringify(json));
      console.log(json);
      window.location.href = "/page?page=MoreInfoRole";
    } catch (error) {
      console.error("Error parsing JSON:", error);
    } finally {
      setConform(false);
      setStatus(false);
    }
  };

  return (
    <div className=" flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-xl w-full max-w-md mt-5"
      >
        <h1 className="text-2xl font-semibold text-center text-gray-800 mb-6">
          Check Job Roles
        </h1>
        <div className="mb-6">
          <label
            htmlFor="branchSelect"
            className="block text-gray-600 text-sm font-medium mb-2"
          >
            Department:
          </label>
          <select
            id="branchSelect"
            value={selectedBranch}
            onChange={(e) => setSelectedBranch(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
          >
            <option value="" disabled>
              Select your department...
            </option>
            <option value="Computer engineering">Computer Engineering</option>
            <option value="Electrical engineering">
              Electrical Engineering
            </option>
            <option value="Mechanical engineering">
              Mechanical Engineering
            </option>
            <option value="Civil engineering">Civil Engineering</option>
            <option value="Electronics and Telecommunication engineering">
              Electronics and Telecommunication Engineering
            </option>
            <option value="Chemical engineering">Chemical Engineering</option>
            <option value="Other">Other (Please specify)</option>
          </select>
        </div>

        {selectedBranch === "Other" && (
          <div className="mb-6">
            <label
              htmlFor="customBranchInput"
              className="block text-gray-600 text-sm font-medium mb-2"
            >
              Custom Department:
            </label>
            <input
              type="text"
              id="customBranchInput"
              value={customBranch}
              onChange={(e) => setCustomBranch(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
              placeholder="Enter your department here..."
            />
          </div>
        )}
        <Button
          type="submit"
          className={`w-full py-3 rounded-lg text-white font-semibold transition duration-200 ${
            loading
              ? "bg-blue-400 cursor-not-allowed"
              : "bg-blue-500 hover:bg-blue-600"
          }`}
          disabled={loading}
        >
          {loading ? "Generating..." : "Generate"}
        </Button>
      </form>
      {!tree && (
        <div className="text-center text-gray-600 text-sm font-medium mt-6">
          <Image src={"/department.png"} alt="tree" width={300} height={300} />
        </div>
      )}
      {loading && <LoadingDialog loading={loading} />}
      {tree && (
        <>
          <JobsRole setConform={setConform} setRole={setRole} />
        </>
      )}

      <AlertDialog open={conform}>
        <AlertDialogContent>
          Do You want to continue or Want More Info About this?
          <AlertDialogFooter>
            <AlertDialogCancel
              onClick={() => setConform(false)}
              disabled={status}
            >
              Cancel
            </AlertDialogCancel>
            {localrole == role ? (
              <Button
                onClick={() => {
                  window.location.href = "/page?page=MoreInfoRole";
                }}
              >
                View More Info
              </Button>
            ) : (
              <Button
                onClick={() => {
                  handleMoreInfo();
                }}
                disabled={status}
              >
                {status ? "Generating..." : "More Info"}
              </Button>
            )}
            <AlertDialogAction
              onClick={() => {
                window.location.href = "/page?page=RoleRoadMap";
              }}
              disabled={status}
            >
              Continue
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
