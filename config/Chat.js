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
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "application/json",
};

export const chatSession = model.startChat({
  generationConfig,
  history: [
    {
      role: "user",
      parts: [
        {
          text: "Generate project idea of three level start,intermidiate,advance,on topic webdevelopment,include time:time requeired.topic:topics requeired for project.in json formate",
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: '```json\n{\n  "projects": [\n    {\n      "level": "Beginner",\n      "title": "Simple To-Do List",\n      "description": "Create a basic to-do list application using HTML, CSS, and JavaScript. Users should be able to add, delete, and mark tasks as complete.",\n      "topics": [\n        "HTML",\n        "CSS",\n        "JavaScript",\n        "DOM Manipulation"\n      ],\n      "time": "10-20 hours"\n    },\n    {\n      "level": "Intermediate",\n      "title": "Dynamic Weather App",\n      "description": "Build a weather application that fetches real-time weather data from an API (e.g., OpenWeatherMap). Display current conditions, forecasts, and allow users to search for different locations.",\n      "topics": [\n        "HTML",\n        "CSS",\n        "JavaScript",\n        "AJAX",\n        "API Integration",\n        "Data Visualization"\n      ],\n      "time": "20-40 hours"\n    },\n    {\n      "level": "Advanced",\n      "title": "E-commerce Website with Payment Integration",\n      "description": "Create a fully functional e-commerce website that allows users to browse products, add items to their cart, proceed to checkout, and make secure payments using a payment gateway (e.g., Stripe, PayPal).",\n      "topics": [\n        "HTML",\n        "CSS",\n        "JavaScript",\n        "Node.js",\n        "Express.js",\n        "Database (MongoDB, PostgreSQL)",\n        "Server-Side Rendering",\n        "Payment Gateway Integration",\n        "Security"\n      ],\n      "time": "100+ hours"\n    }\n  ]\n}\n```\n',
        },
      ],
    },
  ],
});
