import Counter from "./components/counter";
import CustomizableCounter from "./components/customizableCounter";
import JotaiCounter from "./components/jotaiCounter";

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="grid grid-cols-1 sm:grid-cols-2  gap-10 p-4">
        <Counter />
        <JotaiCounter />
        <CustomizableCounter />
      </div>
    </div>
  );
}
