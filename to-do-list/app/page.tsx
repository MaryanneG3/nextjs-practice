import ToDoList from "./features/to-do/pages/ToDoList";
import Octo from "./features/ai-chatbot/components/components/octo";

export default function Home() {
  return (
    <div className="flex flex-row justify-between items-center h-screen w-screen">
      <Octo />
      <ToDoList />
    </div>
  );
}
