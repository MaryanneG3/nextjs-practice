"use client";

import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";

function ParallaxScrolling2() {
  const totalSections = 6;
  const sectionsRef = useRef([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    sectionsRef.current = sectionsRef.current.slice(0, totalSections);
  }, []);

  const scrollToSection = (index) => {
    if (index >= 0 && index < totalSections && sectionsRef.current[index]) {
      sectionsRef.current[index].scrollIntoView({ behavior: "smooth" });
      setTimeout(() => setCurrentIndex(index), 500);
    }
  };

  return (
    <div className="parallax-container relative">
      <div
        ref={(el) => (sectionsRef.current[0] = el)}
        className="min-h-screen flex justify-center items-center bg-fixed bg-no-repeat bg-cover bg-center"
        style={{ backgroundImage: 'url("/images/layer3.jpg")' }}
      ></div>

      <div
        ref={(el) => (sectionsRef.current[1] = el)}
        className="p-20 bg-opacity-30 bg-gradient-to-b from-purple-900 to-black"
      >
        <h2 className="mb-5 text-white">Sample parallax section</h2>
        <p className="text-white">Lorem ipsum dolor sit amet...</p>
      </div>

      <div
        ref={(el) => (sectionsRef.current[2] = el)}
        className="relative min-h-screen w-full flex justify-center items-center bg-fixed bg-no-repeat bg-cover bg-center"
        style={{ backgroundImage: 'url("/images/layer4.jpg")' }}
      >
        <motion.div
          className="absolute flex flex-row items-center gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.img
            src="/images/midground.png"
            alt="Image 1"
            className="w-auto h-64 rounded-lg shadow-lg"
            variants={{
              hidden: { opacity: 0, y: 100 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 1.4, ease: "easeOut" }}
          />
          <motion.img
            src="/images/midground.png"
            alt="Image 2"
            className="w-auto h-64 rounded-lg shadow-lg"
            variants={{
              hidden: { opacity: 0, y: 100 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          />
          <motion.img
            src="/images/midground.png"
            alt="Image 3"
            className="w-auto h-64 rounded-lg shadow-lg"
            variants={{
              hidden: { opacity: 0, y: 100 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 1.4, ease: "easeOut" }}
          />
        </motion.div>
      </div>

      <div
        ref={(el) => (sectionsRef.current[3] = el)}
        className="p-20 bg-opacity-30 bg-gradient-to-b from-purple-900 to-black"
      >
        <h2 className="mb-5 text-white">Another parallax section</h2>
        <p className="text-white">Lorem ipsum dolor sit amet...</p>
      </div>

      <div
        ref={(el) => (sectionsRef.current[4] = el)}
        className="min-h-screen flex justify-center items-center bg-fixed bg-no-repeat bg-cover bg-center"
        style={{ backgroundImage: 'url("/images/layer3.jpg")' }}
      ></div>

      <div
        ref={(el) => (sectionsRef.current[5] = el)}
        className="p-20 bg-opacity-30 bg-gradient-to-b from-purple-900 to-black"
      >
        <h2 className="mb-5 text-white">Another parallax section</h2>
        <p className="text-white">Lorem ipsum dolor sit amet...</p>
      </div>

      <div className="fixed bottom-10 left-1/2 transform -translate-x-1/2 flex gap-4">
        <button
          onClick={() => scrollToSection(currentIndex - 1)}
          disabled={currentIndex <= 0}
          className={`px-4 py-2 rounded-lg bg-gray-700 text-white ${
            currentIndex <= 0
              ? "opacity-50 cursor-not-allowed"
              : "hover:bg-gray-900"
          }`}
        >
          Previous
        </button>
        <button
          onClick={() => scrollToSection(currentIndex + 1)}
          disabled={currentIndex >= totalSections - 1}
          className={`px-4 py-2 rounded-lg bg-blue-500 text-white ${
            currentIndex >= totalSections - 1
              ? "opacity-50 cursor-not-allowed"
              : "hover:bg-blue-700"
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default ParallaxScrolling2;
