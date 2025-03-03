"use client";

import { useEffect, useState } from "react";
// import Image from "next/image";

function ParallaxScrolling() {
  const [offsetY, setOffsetY] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffsetY(window.scrollY);
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // When user scrolls past 150px, show elements
  const showElements = scrollY > 100;

  return (
    <div className="relative h-[300vh] overflow-hidden bg-black">
      {/* Background Layers */}
      <div
        className="absolute top-0 left-0 w-full h-screen bg-cover bg-center"
        style={{
          backgroundImage: 'url("/images/layer3.jpg")',
          transform: `translateY(${offsetY * 0.7}px)`,
        }}
      ></div>

      {/* Foreground Content */}
      <div className="relative z-10 flex flex-col items-center justify-start top-20 h-screen">
        <h1 className="text-5xl text-white">Introducing Octo 2.0</h1>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-start top-20 h-screen">
        <p className="text-white text-3xl mb-10">
          Octo is an AI Agent created to aid in automating tasks such as
        </p>
      </div>

      {/* Container for Animated Elements (Pops up below the first sentence) */}
      <div
        className={`relative z-10 flex flex-col items-center justify-center w-full transition-all duration-5000 ${
          showElements
            ? "translate-y-0 opacity-100"
            : "translate-y-20 opacity-0"
        }`}
      >
        <p className="text-white text-3xl mt-10">Creating To-do lists</p>

        <p className="text-white text-3xl mt-10">Planning Weekly Meals</p>
      </div>
    </div>
  );
}

export default ParallaxScrolling;
