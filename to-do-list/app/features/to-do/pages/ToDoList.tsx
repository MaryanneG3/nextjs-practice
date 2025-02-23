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
    editingTaskIndex,
    setEditingTaskIndex,
    editingTaskValue,
    setEditingTaskValue,
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

  const handleTaskEdit = (index) => {
    setEditingTaskIndex(index);
    setEditingTaskValue(tasks[index]);
  };

  const handleTaskEditInput = (e) => {
    setEditingTaskValue(e.target.value);
  };

  const handleTaskEditSubmit = (e) => {
    if (e.key === "Enter") {
      const newTasks = [...tasks];
      newTasks[editingTaskIndex] = editingTaskValue;
      setTasks(newTasks);
      setEditingTaskIndex(null);
      setEditingTaskValue("");
    }
  };

  return (
    <div className="checkerboard flex flex-col justify-center items-center h-[650px] w-[30%]  border rounded-2xl mr-20 ml-20 shadow-lg shadow-purple-100">
      {!showList ? (
        <button
          onClick={() => {
            setShowList(true);
          }}
          className="text-purple-700 hover:text-purple-850 hover:text-xl"
        >
          + Create a new to do list!
        </button>
      ) : (
        <div className="flex flex-col justify-center items-center h-full w-full gap-4">
          {!showListTitle || isEditingTitle ? (
            <input
              placeholder="Enter a title for your new list"
              value={listTitle}
              onChange={(e) => setListTitle(e.target.value)}
              onKeyDown={handleListTitleInput}
              className="w-[80%] text-center rounded-lg p-[5] focus:outline-none shadow-lg shadow-purple-300 border border-purple-100"
            />
          ) : (
            <p
              onClick={() => setIsEditingTitle(true)}
              className="text-lg text-white text-fuchsia-700 bg-white w-[80%] text-center rounded-lg p-[5] shadow-lg shadow-purple-300 "
            >
              {listTitle}
            </p>
          )}
          <div className="border border-purple-100 bg-white rounded-lg w-[80%] h-[80%]  p-6">
            <div
              id="scrollbarContainer"
              className="w-[100%] h-[100%] overflow-y-scroll custom-scrollbar"
            >
              <div className="flex flex-col justify-start items-start w-[100%] h-[100%]">
                {tasks.map((task, index) => (
                  <div
                    key={index}
                    className="flex flex-row justify-start items-start gap-5 mb-4"
                  >
                    <input
                      type="checkbox"
                      checked={checkedTasks[index]}
                      onChange={() => handleCheckboxChange(index)}
                    />
                    {editingTaskIndex === index ? (
                      <input
                        value={editingTaskValue}
                        onChange={handleTaskEditInput}
                        onKeyDown={handleTaskEditSubmit}
                      />
                    ) : (
                      <div
                        onClick={() => handleTaskEdit(index)}
                        className="text-sm max-w-[80%] w-fit break-words"
                      >
                        {task}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <input
            placeholder="+ add new task"
            onKeyDown={handleTaskInput}
            className="w-[80%] text-center rounded-lg p-[5] focus:outline-none shadow-lg shadow-purple-300 border border-purple-100"
          />
        </div>
      )}
    </div>
  );
}
