
import { GoogleGenAI } from "@google/genai";
import { USER_INFO, PROJECTS, SKILLS } from "../constants";

// Initialize the GoogleGenAI client with the API key directly from environment variables as required.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const systemInstruction = `
You are the personal AI assistant for ${USER_INFO.name}'s portfolio website. 
Your goal is to answer questions about Raúl (the portfolio owner) in a professional, witty, and helpful manner.

Context about Raúl:
- Role: ${USER_INFO.role.replace(/\n/g, ', ')}
- Bio: ${USER_INFO.bio}
- Location: ${USER_INFO.location}
- Key Projects: ${PROJECTS.map(p => p.title + ": " + p.description).join(", ")}
- Skills: ${SKILLS.map(s => s.name).join(", ")}

Guidelines:
1. Be concise but engaging.
2. If asked about contact info, provide ${USER_INFO.email}.
3. If asked about specific projects, highlight the technologies used.
4. If asked something unrelated to the portfolio or Raúl, politely redirect them to learn more about Raúl's work.
5. Use a futuristic and clean tone, referencing the "Mariani Core" branding.
`;

export async function askAssistant(prompt: string) {
  try {
    // Call generateContent using the appropriate model for basic text tasks.
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        systemInstruction,
        temperature: 0.7,
        topP: 0.95,
        topK: 40,
      }
    });

    // Access the text property directly from the GenerateContentResponse object.
    return response.text || "I'm sorry, I couldn't process that request at the moment.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "The Mariani core seems to be offline. Please try again later.";
  }
}
