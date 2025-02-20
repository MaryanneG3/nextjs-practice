import { NextRequest, NextResponse } from "next/server";
import { model, session } from "@/utils/chatService";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { userResponse, sessionId } = body;

    // Fetch the session history
    const sessionData = session[sessionId] || { history: [] };
    const historyContext = sessionData.history
      .map(
        (entry) => `User: ${entry.usersResponse}\nOcto: ${entry.octosResponse}`
      )
      .join("\n");

    const dynamicPrompt = `
    You are Octo, the friendly octopus. 
    You are to play the role of a chatbot to help the user determine what tasks to add to their to do list.

    Here is the conversation history:
    ${historyContext}

    Based on the user's most recent response ${userResponse} generate a response to continue the conversation. 
    Answer any questions the user may have. 
    When listing steps, use numbered bullet points and put each step in a newline.
    Be polite but fun. 
    Keep response short and concise.
    `;

    const response = await model.generateContent(dynamicPrompt);
    console.log("Fetched reponse from Gemini: ", response);

    // to do: find out why response from gemini is wack

    const octosResponseText =
      response.response?.candidates[0]?.content.parts[0].text ||
      "Error generating response.";

    // Update the session history
    session[sessionId] = {
      history: [
        ...sessionData.history,
        { usersResponse: userResponse, octosResponse: octosResponseText },
      ],
    };

    return NextResponse.json({
      octosResponse: octosResponseText,
    });
  } catch (error) {
    console.error("Error generating response:", error);
    // res.status(500).json({ error: "Internal Server Error" });
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
