import ToDoList from "./components/toDoList";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <ToDoList />
    </div>
  );
}
