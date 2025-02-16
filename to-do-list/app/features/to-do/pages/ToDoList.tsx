"use client";

import { useTodo } from "../hooks/useToDo";
import CheckBox from "../components/CheckBox";

export default function ToDoList() {
  const {
    showList,
    setShowList,
    showListTitle,
    setShowListTitle,
    listTitle,
    setListTitle,
    tasks,
    setTasks,
  } = useTodo();

  const handleListTitleInput = (e) => {
    if (e.key === "Enter") {
      setListTitle(e.target.value);
      setShowListTitle(true);
    }
  };

  const handleTaskInput = (e) => {
    if (e.key === "Enter") {
      setTasks([...tasks, e.target.value]);
      e.target.value = "";
    }
  };

  return (
    <div className="flex flex-col justify-center items-center h-[300px] w-[300px] border rounded-lg">
      {!showList ? (
        <button
          onClick={() => {
            setShowList(true);
          }}
        >
          + Create a new to do list
        </button>
      ) : (
        <div className="flex flex-col justify-center items-center h-full w-full gap-4">
          {!showListTitle ? (
            <input
              placeholder="Enter a title for your new list"
              onKeyDown={handleListTitleInput}
            />
          ) : (
            <p>{listTitle}</p>
          )}

          <div className="flex flex-col justify-start items-start bg-pink-50 w-[80%] h-[200px] p-[20] rounded-lg overflow-y-scroll">
            {tasks.map((task, index) => (
              <div
                key={index}
                className="flex flex-row justify-center items-start gap-5 p-[5]"
              >
                <CheckBox />
                <p>{task}</p>
              </div>
            ))}
          </div>
          <input placeholder="+ add new task" onKeyDown={handleTaskInput} />
        </div>
      )}
    </div>
  );
}
