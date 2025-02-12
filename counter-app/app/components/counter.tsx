"use client";

import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  const addCount = () => {
    setCount(count + 1);
  };

  return (
    <div className="flex items-center justify-evenly flex-col bg-blue-100 h-[500] w-[500] rounded-2xl">
      <h1 className="text-3xl">Counter App</h1>
      <p className="text-xl">{count}</p>
      <button
        onClick={addCount}
        className="cursor-pointer bg-blue-300 rounded-md p-[10] text-white hover:bg-blue-400 "
      >
        Increment by 1
      </button>
    </div>
  );
}
