const {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} = require("@google/generative-ai");

const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash-002",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: "application/json",
};

export const JobRoleSkill = model.startChat({
  generationConfig,
  // safetySettings: Adjust safety settings
  // See https://ai.google.dev/gemini-api/docs/safety-settings
  history: [
    {
      role: "user",
      parts: [
        { text: "skills required to become a Web Developer.in json formate" },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: '```json\n{\n  "essentialSkills": [\n    {\n      "category": "Frontend Development",\n      "skills": [\n        "HTML5",\n        "CSS3",\n        "JavaScript",\n        "Responsive Design",\n        "Frontend Frameworks (React, Angular, Vue.js - at least one)",\n        "Version Control (Git)",\n        "Testing Frameworks (Jest, Mocha, Cypress - at least one)"\n      ]\n    },\n    {\n      "category": "Backend Development",\n      "skills": [\n        "Server-side language (Node.js, Python, PHP, Java, Ruby on Rails - at least one)",\n        "Databases (SQL, NoSQL - at least one)",\n        "API design and development (REST, GraphQL)",\n        "API Integration"\n      ]\n    },\n    {\n      "category": "General Development Skills",\n      "skills": [\n        "Problem-solving",\n        "Debugging",\n        "Software Design Principles",\n        "Data Structures and Algorithms (basic understanding)",\n        "Command Line Interface (CLI)"\n      ]\n    },\n    {\n      "category": "Other Important Skills",\n      "skills": [\n        "Communication",\n        "Teamwork",\n        "Time Management",\n        "Understanding of Web Security",\n        "Deployment and Hosting"\n      ]\n    }\n  ],\n  "desirableSkills": [\n    {\n      "category": "Frontend Enhancement",\n      "skills": [\n        "UI/UX Design Principles (basic understanding)",\n        "Accessibility (WCAG)",\n        "Performance Optimization"\n      ]\n    },\n    {\n      "category": "Backend Enhancement",\n      "skills": [\n        "Cloud Platforms (AWS, Azure, Google Cloud)",\n        "DevOps practices",\n        "Containerization (Docker, Kubernetes)"\n      ]\n    },\n    {\n      "category": "Specific Technologies",\n      "skills": [\n        "Specific CMS experience (WordPress, Drupal, etc.)",\n        "Specific libraries and tools (depending on project needs)"\n      ]\n    }\n  ]\n}\n```\n',
        },
      ],
    },
  ],
});
