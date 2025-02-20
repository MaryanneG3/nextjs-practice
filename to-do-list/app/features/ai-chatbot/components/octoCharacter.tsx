"use client";

import { atom, useAtom } from "jotai";
import { useEffect, useRef } from "react";
// import Image from "next/image";

import dynamic from "next/dynamic";

// this is done to avoid ssr issues because spline is asynchroneous
// this means that spline characters can not be used in client side rendering unless ...

// we dynamically import the Spline library to ensure it's only loaded on the client side
const Spline = dynamic(() => import("@splinetool/react-spline"), {
  ssr: false,
});

// const positionAtom = atom<{ x: number; y: number }>({ x: 0, y: 0 });
const positionAtom = atom<{ x: number; y: number }>({
  x: 0,
  y: window.innerHeight - 400,
});

export default function DraggableOctoCharacter() {
  const [position, setPosition] = useAtom(positionAtom);
  const isDragging = useRef<boolean>(false);
  const offset = useRef<{ x: number; y: number }>({
    x: 0,
    y: window.innerHeight - 400,
  });
  const positionRef = useRef<{ x: number; y: number }>({
    x: 0,
    y: window.innerHeight - 400,
  });

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    isDragging.current = true;
    offset.current = {
      x: e.clientX - positionRef.current.x,
      y: e.clientY - positionRef.current.y,

      //   e.clientX and e.clientY properties are part of the MouseEvent interface in JavaScript,
      //   they determine the coordinates of the mouse pointer relative to the viewport when the event occurred.

      //   the value of offset.current.x is updated to the difference between e.clientX (the current mouse's
      //   X-coordinate relative to the viewport) and positionRef.current.x (the stored X-coordinate of the element's initial position).
    };
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (
        e.target instanceof HTMLElement &&
        e.target.closest(".spline-container")
      ) {
        return;
      }

      if (!isDragging.current) return;

      positionRef.current = {
        x: e.clientX - offset.current.x,
        y: e.clientY - offset.current.y,
      };

      // Only update the state when position changes to reduce re-renders
      setPosition(positionRef.current);
    };

    const handleMouseUp = () => {
      isDragging.current = false;
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [setPosition]);

  return (
    <div
      className="fixed w-50 h-50 flex flex-col justify-start items-center cursor-grab active:cursor-grabbing "
      style={{ left: `${position.x}px`, top: `${position.y}px` }}
      onMouseDown={handleMouseDown}
    >
      {/* <Image
        src="/images/Octo.jpg"
        alt="Octo character"
        width={50}
        height={50}
      /> */}

      <h1 className="text-center"> [ x ]</h1>

      <div className="w-[255px] h-[340px] spline-container">
        <Spline
          scene="https://prod.spline.design/BMBMUzzbIMpRYGl8/scene.splinecode"
          width={250}
          height={300}
        />
      </div>
    </div>
  );
}
