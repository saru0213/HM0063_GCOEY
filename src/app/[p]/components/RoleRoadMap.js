"use client";
import { useEffect, useState } from "react";
import { AiGenerateRollRoadmap } from "../../../../config/AllAiModels";
import StudentRoadMap from "../../[p]/components/RoadMap";
import LoadingDialog from "@/app/components/LoadingDialog";

export default function RoleRoadMap() {
  const [inputValue, setInputValue] = useState("");
  const [submittedValue, setSubmittedValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [tree, setTree] = useState(false);
  const [roadmap, setRoadmap] = useState("");
  const [branch, setBranch] = useState("");

  useEffect(() => {
    const role = localStorage.getItem("role");
    const branch = localStorage.getItem("branch");
    setBranch(branch);
    setInputValue(role);
  }, []);

  useEffect(() => {
    const local = localStorage.getItem("roadmap");
    if (local) {
      setTree(true);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const BASIC_PROMPT = `generate Simple,Focused,Progressive, and Outcome-Oriented roadmap for ${inputValue} of branch ${branch},include introducation,goal,objective,stages,topic,subtopics,time required,real worldprojects,challenges,resources,skill required to master.in json formate.`;
    try {
      const result = await AiGenerateRollRoadmap.sendMessage(BASIC_PROMPT);
      const responseText = await result.response.text();
      const parsedResult = JSON.parse(responseText);
      setSubmittedValue(parsedResult);
      localStorage.setItem("roadmap", JSON.stringify(parsedResult));
      console.log(responseText);
      setTree(true);
    } catch (error) {
      console.error("Error parsing JSON:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-200 to-blue-400">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-xl w-full max-w-md mt-8"
      >
        <h1 className="text-2xl font-semibold text-center text-gray-800 mb-6">
          Generate Your Roadmap
        </h1>
        <div className="mb-6">
          <label
            htmlFor="userInput"
            className="block text-gray-600 text-sm font-medium mb-2"
          >
            Topic:
          </label>
          <input
            type="text"
            id="userInput"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            readOnly
            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
            placeholder="Enter your topic here..."
          />
        </div>
        <button
          type="submit"
          className={`w-full py-3 rounded-lg text-white font-semibold transition duration-200 ${
            loading
              ? "bg-blue-400 cursor-not-allowed"
              : "bg-blue-500 hover:bg-blue-600"
          }`}
          disabled={loading}
        >
          {loading ? "Generating..." : "Generate"}
        </button>
      </form>
      {loading && <LoadingDialog loading={loading} />}

      {tree && (
        <div className="mt-8 w-full max-w-4xl">
          <StudentRoadMap roadmap={submittedValue} setTree={setTree} />
        </div>
      )}
    </div>
  );
}
