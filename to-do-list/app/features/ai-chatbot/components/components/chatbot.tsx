"use client";

import { atom, useAtom } from "jotai";

const responseAtom = atom<{ type: string; text: string }[]>([
  { type: "Octo", text: "Hello, I'm Octo! How can I help you?" },
]);

export default function Chatbot() {
  const [responses, setResponses] = useAtom(responseAtom);

  const handleSubmitUserResponse = async (userResponse) => {
    if (!userResponse.trim()) {
      alert("Please provide a valid response.");
      return;
    }

    setResponses((prevResponses) => [
      ...prevResponses,
      { type: "User", text: userResponse },
    ]);

    try {
      // Send the user's response to the API
      const response = await fetch("/api/octo-chatbot/process-response", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userResponse }),
      });

      // Check if the response is not OK
      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Server Error: ${errorText}`);
      }

      // Parse the JSON response
      const data = await response.json();
      console.log("Response received:", data);

      // Add Octo's response to the state
      setResponses((prevResponses) => [
        ...prevResponses,
        { type: "Octo", text: data.octosResponse },
      ]);

      {
        responses.forEach((response) => {
          console.log(response);
        });
      }
    } catch (err) {
      console.error("Error:", err);
      setResponses((prevResponses) => [
        ...prevResponses,
        {
          type: "Octo",
          text: "Sorry, something went wrong. Please try again.",
        },
      ]);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center gap-10 w-[60%] h-[100%] bg-white rounded-2xl shadow-lg shadow-purple-100 border border-purple-100">
      <div className="border border-blue-100 rounded-lg w-[80%] h-[70%] p-4">
        <div
          id="scrollbarContainer"
          className="w-[100%] h-[100%] overflow-y-scroll custom-scrollbar"
        >
          <div
            id="chatContainer"
            className="w-[100%] h-[100%] rounded-lg gap-4 p-4"
          >
            <div
              id="responseContainer"
              className="flex flex-col justify-start items-start h-auto w-[100%] p-[10] mb-[10] rounded-lg "
            >
              {responses.map((response, index) => (
                <div
                  key={index}
                  className={
                    response.type === "Octo"
                      ? "max-w-[70%] w-fit break-words p-3 m-2 rounded-xl bg-purple-50"
                      : "max-w-[70%] w-fit break-words p-3 mt-2 mb-2 ml-auto mr-4 rounded-xl bg-pink-50"
                  }
                >
                  {response.text}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-row justify-between items-center w-[80%] pl-[20] pr-[20] pt-[10] pb-[10] rounded-xl border border-blue-100 ">
        <input
          placeholder="Speak with Octo"
          className="w-[80%] p-[10] rounded-xl focus:outline-none"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              handleSubmitUserResponse(e.target.value);
              e.target.value = "";
            }
          }}
        />
        <button onClick={() => handleSubmitUserResponse("")}>Send</button>
      </div>
    </div>
  );
}
