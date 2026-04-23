import { GoogleGenAI } from "@google/genai";

async function getNonprofitInfo() {
  const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: "Tell me about the non-profit 'Six Feet Above' in Louisiana, founded by Kyah Spriggs. What are their recent activities, mission details, and any specific programs or 'posts' that are publicly known? I need this to update their website.",
    config: {
      tools: [{ googleSearch: {} }],
    },
  });

  console.log(response.text);
}

getNonprofitInfo();
