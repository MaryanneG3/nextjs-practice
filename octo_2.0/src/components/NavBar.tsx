"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

function NavBar() {
  const [toolsMenuIsOpen, setToolsMenuIsOpen] = useState(false);

  const toggleDropdownMenu = () => {
    setToolsMenuIsOpen(!toolsMenuIsOpen);
  };

  // useEffect(() => {
  //   setToolsMenuIsOpen(false);
  // }, []);

  return (
    <div className=" flex flex-row justify-evenly items-center h-[100px] w-[100%] bg-gradient-to-b from-purple-900  to-black">
      <Link
        id="leftSection"
        className="flex flex-row justify-start items-center gap-5 m-5 w-[60%] h-[60%] "
        href="/"
      >
        <Image
          src="/images/Octo 2.0.png"
          alt="Octo character"
          width={70}
          height={70}
        />
        <h1 className="text-2xl text-white pl-[10px] pr-[10px] pt-[5px] pb-[5px]">
          Octo 2.0
        </h1>
      </Link>

      <div
        id="navlink-buttons"
        className="w-[40%] h-[60%] flex flex-row justify-around items-center gap-5 ml-10 mr-10"
      >
        <Link id="navlink" href="/">
          Home
        </Link>
        <Link id="navlink" href="/about">
          About Octo
        </Link>
        <div id="dropdownMenuContainer" className="relative w-[180px]">
          <button id="navlink" onMouseEnter={toggleDropdownMenu}>
            Tools
          </button>
          {toolsMenuIsOpen && (
            <div
              onMouseLeave={toggleDropdownMenu}
              id="dropdownMenu"
              className="absolute z-1000 top-[85px] w-full bg-pink-50 flex flex-col"
            >
              <Link id="navlink" href="/ai-chatbot">
                Octo Chatbot
              </Link>
              <Link id="navlink" href="/simple-parallax">
                Simple Parallax
              </Link>
              <Link id="navlink" href="/parallax">
                Parallax Scrolling
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default NavBar;
