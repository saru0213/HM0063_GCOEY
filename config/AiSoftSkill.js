/*
 * Install the Generative AI SDK
 *
 * $ npm install @google/generative-ai
 */

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

export const AiSoftSkill = model.startChat({
  generationConfig,
  history: [
    {
      role: "user",
      parts: [
        {
          text: "Question:When working in a group project, how do you contribute to the team’s success?,user Answer:In group projects, I strive for success by actively contributing to brainstorming, taking on tasks that align with my strengths, and offering constructive feedback to teammates. I value open communication and collaborative problem-solving, ensuring everyone feels heard and respected. My focus is on achieving a high-quality product that reflects the collective efforts of the team. ,depends \n      on the question and user answer for communication skill of soft skill interview question \n      please give us rating out of five for answer and feedback as area of\n      improvement if any in just 3 to 5 lines to\n      improve it in JSON format with rating field, feedback field, suggested answer and how to improve",
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: '```json\n{\n  "rating": 4,\n  "feedback": "This is a good response that highlights key contributions to group success.  To make it even stronger, consider adding a specific example of how you\'ve used your strengths in a group project to achieve a positive outcome. ",\n  "suggested_answer": "In group projects, I strive for success by actively contributing to brainstorming, taking on tasks that align with my strengths, like [mention a specific skill], and offering constructive feedback to teammates. For example, in [mention a past project], I was able to [mention a specific achievement] by [explain how you used your skill]. I value open communication and collaborative problem-solving, ensuring everyone feels heard and respected. My focus is on achieving a high-quality product that reflects the collective efforts of the team.",\n  "how_to_improve": "Provide a concrete example to showcase your skills and contribution in a real-world scenario." \n}\n``` \n',
        },
      ],
    },
  ],
});
