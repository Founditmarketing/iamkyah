import { GoogleGenAI } from "@google/genai";

async function findLogo() {
  const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: "Find the official logo URL for the non-profit 'Six Feet Above' founded by Kyah Spriggs. It might be on their Facebook page or website. I need a direct image link if possible.",
    config: {
      tools: [{ googleSearch: {} }],
    },
  });

  console.log(response.text);
}

findLogo();
