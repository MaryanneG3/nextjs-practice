"use client";

import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState<number>(0);

  const addCount = () => {
    setCount(count + 1);
  };

  return (
    <div className="flex items-center justify-evenly flex-col bg-blue-100 h-[300px] w-[300px] rounded-2xl p-4">
      <h1 className="text-2xl text-center">Counter App - using useState</h1>
      <p className="text-xl">{count}</p>
      <button
        onClick={addCount}
        className="cursor-pointer bg-blue-300 rounded-md p-[10px] text-white hover:bg-blue-400 "
      >
        Increment by 1
      </button>
    </div>
  );
}
