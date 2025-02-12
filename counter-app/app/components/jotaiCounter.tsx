"use client";

import { atom, useAtom } from "jotai";

const countAtom = atom<number>(0);

export default function JotaiCounter() {
  const [count, setCount] = useAtom(countAtom);

  const increment = () => setCount(count + 1);

  return (
    <div className="flex items-center justify-evenly flex-col bg-blue-100 h-[300px] w-[300px] rounded-2xl p-4">
      <h1 className="text-2xl text-center">Counter App - using Jotai</h1>
      <p className="text-xl">{count}</p>
      <button
        onClick={increment}
        className="cursor-pointer bg-blue-300 rounded-md p-[10px] text-white hover:bg-blue-400 "
      >
        Increment by 1
      </button>
    </div>
  );
}
