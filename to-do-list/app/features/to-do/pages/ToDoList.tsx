"use client";

import { useTodo } from "../hooks/useToDo";
import { useAtom } from "jotai";
import { checkedTaskAtom } from "../states/checkBoxAtoms";
import { useEffect } from "react";

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
    isEditingTitle,
    setIsEditingTitle,
  } = useTodo();

  const [checkedTasks, setCheckedTasks] = useAtom(checkedTaskAtom);

  useEffect(() => {
    if (checkedTasks.length === 0) {
      setCheckedTasks(new Array(tasks.length).fill(false));
    }
  }, [setCheckedTasks]);

  const handleListTitleInput = (e) => {
    if (e.key === "Enter") {
      setListTitle(e.target.value);
      setShowListTitle(true);
      setIsEditingTitle(false);
    }
  };

  const handleTaskInput = (e) => {
    if (e.key === "Enter") {
      setTasks([...tasks, e.target.value]);
      setCheckedTasks([...checkedTasks, false]);
      e.target.value = "";
    }
  };

  const handleCheckboxChange = (index: number) => {
    const newCheckedTasks = [...checkedTasks];
    newCheckedTasks[index] = !newCheckedTasks[index];
    console.log(`Index ${index}: ${newCheckedTasks[index]}`);
    setCheckedTasks(newCheckedTasks);
  };

  return (
    <div className="flex flex-col justify-center items-center h-[300px] w-[300px] border rounded-lg p-[10]">
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
          {!showListTitle || isEditingTitle ? (
            <input
              placeholder="Enter a title for your new list"
              value={listTitle}
              onChange={(e) => setListTitle(e.target.value)}
              onKeyDown={handleListTitleInput}
              className="w-[80%] text-center rounded-lg p-[5] focus:border-none"
            />
          ) : (
            <p onClick={() => setIsEditingTitle(true)}>{listTitle}</p>
          )}

          <div className="flex flex-col justify-start items-start bg-pink-50 w-[80%] h-[200px] p-[20] rounded-lg overflow-y-scroll">
            {tasks.map((task, index) => (
              <div
                key={index}
                className="flex flex-row justify-center items-center gap-5 p-[5]"
              >
                <input
                  type="checkbox"
                  checked={checkedTasks[index]}
                  onChange={() => handleCheckboxChange(index)}
                  className="focus:border-none"
                />
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
