const {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} = require("@google/generative-ai");

const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: "application/json",
};

export const JobRolls = model.startChat({
  generationConfig,
  // safetySettings: Adjust safety settings
  // See https://ai.google.dev/gemini-api/docs/safety-settings
  history: [
    {
      role: "user",
      parts: [
        {
          text: "generate which type of job roll are available in branch computer engineering,it include category,role in json formate",
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: '```json\n{\n  "branch": "Computer Engineering",\n  "jobRoles": [\n    {\n      "category": "Software Development",\n      "roles": [\n        "Software Engineer",\n        "Web Developer",\n        "Mobile App Developer",\n        "Data Scientist",\n        "Machine Learning Engineer",\n        "AI Engineer",\n        "Game Developer",\n        "DevOps Engineer",\n        "Cloud Engineer",\n        "Embedded Software Engineer",\n        "Full Stack Developer",\n        "Frontend Developer",\n        "Backend Developer",\n        "Software Architect",\n        "Security Engineer"\n      ]\n    },\n    {\n      "category": "Hardware Engineering",\n      "roles": [\n        "Hardware Engineer",\n        "Computer Architect",\n        "Embedded Systems Engineer",\n        "VLSI Designer",\n        "Robotics Engineer",\n        "Network Engineer",\n        "Computer Network Architect",\n        "Systems Analyst",\n        "Technical Support Specialist"\n      ]\n    },\n    {\n      "category": "Data Science & Analytics",\n      "roles": [\n        "Data Analyst",\n        "Data Scientist",\n        "Business Intelligence Analyst",\n        "Database Administrator",\n        "Data Engineer",\n        "Machine Learning Engineer"\n      ]\n    },\n    {\n      "category": "Networking & Cybersecurity",\n      "roles": [\n        "Network Engineer",\n        "Cybersecurity Analyst",\n        "Security Engineer",\n        "Penetration Tester",\n        "Information Security Manager",\n        "Cloud Security Engineer"\n      ]\n    },\n    {\n      "category": "Research & Development",\n      "roles": [\n        "Research Scientist",\n        "Research Engineer",\n        "Algorithm Developer",\n        "Robotics Researcher"\n      ]\n    },\n    {\n      "category": "Management & Leadership",\n      "roles": [\n        "Project Manager",\n        "Product Manager",\n        "Engineering Manager",\n        "IT Manager",\n        "Director of Engineering"\n      ]\n    },\n    {\n      "category": "Testing & Quality Assurance",\n      "roles": [\n        "Software Tester",\n        "Quality Assurance Engineer",\n        "Test Automation Engineer"\n      ]\n    }\n  ]\n}\n```\n',
        },
      ],
    },
  ],
});
