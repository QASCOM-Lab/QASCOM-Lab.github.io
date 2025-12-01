import { GoogleGenAI } from "@google/genai";
import { ABOUT_TEXT, RESEARCH_PILLARS, TAGLINE } from "../constants";

// Initialize Gemini Client
// NOTE: process.env.API_KEY is assumed to be available in the environment.
const apiKey = process.env.API_KEY || ''; 
const ai = new GoogleGenAI({ apiKey });

export const generateLabAssistantResponse = async (userMessage: string): Promise<string> => {
  if (!apiKey) {
    return "I'm sorry, I cannot connect to the AI service right now (Missing API Key). However, feel free to browse our Research section!";
  }

  const modelId = "gemini-2.5-flash";
  
  // Construct a context-aware system instruction
  const researchContext = RESEARCH_PILLARS.map(p => `- ${p.title}: ${p.description}`).join('\n');
  const systemInstruction = `
    You are QASCOM-Bot, the virtual assistant for the QASCOM Lab (Quantum-AI-Space Communications).
    Your goal is to answer visitor questions about the lab based strictly on the provided context.
    
    Lab Tagline: ${TAGLINE}
    Lab Description: ${ABOUT_TEXT}
    
    Research Pillars:
    ${researchContext}
    
    Tone: Professional, scientific, yet accessible and welcoming.
    If you don't know the answer based on the context, politely suggest they contact Phuc Hao Do directly via the Contact page.
    Keep answers concise (under 150 words) unless asked for details.
  `;

  try {
    const response = await ai.models.generateContent({
      model: modelId,
      contents: userMessage,
      config: {
        systemInstruction: systemInstruction,
      }
    });

    return response.text || "I apologize, I couldn't generate a response at this time.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I am currently experiencing high traffic. Please try again later.";
  }
};