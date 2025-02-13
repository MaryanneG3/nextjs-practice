"use client";

import { atom, useAtom } from "jotai";

const showListAtom = atom<boolean>(false);
const showTitleAtom = atom<boolean>(false);
const titleAtom = atom<string>("");
// const showTasksAtom = atom<boolean>(false);

export default function ToDoList() {
  const [showList, setShowList] = useAtom(showListAtom);
  const [showTitle, setShowTitle] = useAtom(showTitleAtom);
  const [title, setTitle] = useAtom(titleAtom);
  // const [showTasks, setShowTasks] = useAtom(showTasksAtom);

  const handleInput = (e) => {
    if (e.key === "Enter") {
      setTitle(e.target.value);
      setShowTitle(true);
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
        <div>
          {!showTitle ? (
            <input
              placeholder="Enter a title for your to do list"
              onKeyDown={handleInput}
            />
          ) : (
            <p>{title}</p>
          )}
        </div>
      )}
    </div>
  );
}
