import Chatbot from "./components/chatbot";
import DraggableOctoCharacter from "./components/octoCharacter";

export default function Octo() {
  return (
    <main className="flex flex-col justify-center items-center w-[100%] h-[100%] bg-purple-50">
      <div className="flex flex-row justify-evenly items-end w-[60%] h-[85%] p-[10] gap-4">
        <DraggableOctoCharacter />
        <Chatbot />
      </div>
    </main>
  );
}
