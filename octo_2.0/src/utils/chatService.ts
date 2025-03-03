import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";
dotenv.config();

interface SessionData {
  history: { octosResponse: string; usersResponse: string }[];
}

export const session: Record<string, SessionData> = {};

const apiKey = process.env.GEMINI_API_KEY;
if (!apiKey) {
  throw new Error("GEMINI_API_KEY is not set in the environment variables.");
}

// Initialize Google Generative AI once
const genAI = new GoogleGenerativeAI(apiKey || "");
export const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
