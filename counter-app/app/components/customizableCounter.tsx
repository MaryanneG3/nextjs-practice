"use client";

import { atom, useAtom } from "jotai";

const countAtom = atom<number>(0);
const incrementAtom = atom<number>(0);

export default function CustomizableCounter() {
  const [count, setCount] = useAtom(countAtom);
  const [incrementValue, setIncrementValue] = useAtom(incrementAtom);

  const increment = () => setCount(count + incrementValue);
  const increaseIncrementValue = () => setIncrementValue(incrementValue + 1);
  const decreaseIncrementValue = () => setIncrementValue(incrementValue - 1);

  return (
    <div className="flex items-center justify-evenly flex-row gap-4">
      <div className="flex items-center justify-evenly flex-col bg-blue-100 h-[300px] w-[300px] rounded-2xl p-6">
        <h1 className="text-2xl text-center">
          Customizable Counter - using Jotai
        </h1>
        <p className="text-xl">{count}</p>
        <button
          onClick={increment}
          className="cursor-pointer bg-blue-300 rounded-md p-[10px] text-white hover:bg-blue-400 "
        >
          Increment by {incrementValue}
        </button>
      </div>

      <div className="flex flex-col items-center justify-evenly bg-blue-100 h-[100px] w-[50px] rounded-2xl p-1 gap-1">
        <button
          onClick={increaseIncrementValue}
          className="w-full h-full rounded-tl-2xl rounded-tr-2xl bg-slate-100 hover:border-b-4 hover:border-b-purple-400"
        >
          +
        </button>
        <p>{incrementValue}</p>
        <button
          onClick={decreaseIncrementValue}
          className="w-full h-full rounded-bl-2xl rounded-br-2xl bg-slate-100 hover:border-t-4 hover:border-t-purple-400"
        >
          -
        </button>
      </div>
    </div>
  );
}
