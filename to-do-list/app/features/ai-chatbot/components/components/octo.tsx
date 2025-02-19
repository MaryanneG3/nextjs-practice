import Spline from "@splinetool/react-spline/next";
import Chatbot from "./chatbot";

export default function Octo() {
  return (
    <main className="flex flex-col justify-center items-center w-[70%] h-[100%] bg-purple-50">
      <div className="flex flex-row justify-evenly items-end w-[100%] h-[85%] p-[10] gap-4">
        <div className="w-[250px] h-[340px] flex flex-col justify-center items-center ">
          <Spline
            scene="https://prod.spline.design/BMBMUzzbIMpRYGl8/scene.splinecode"
            width={250}
            height={300}
          />
        </div>
        <Chatbot />
      </div>
    </main>
  );
}
