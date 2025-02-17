"use client";

import { atom, useAtom } from "jotai";

const showListAtom = atom<boolean>(false);
const showMealCategoryAtom = atom<boolean>(false);
const mealCategoryAtom = atom<string>("");
const mealsAtom = atom<string[]>([]);

export default function MealPlanner() {
  const [showList, setShowList] = useAtom(showListAtom);
  const [showMealCategory, setShowMealCategory] = useAtom(showMealCategoryAtom);
  const [mealCategory, setMealCategory] = useAtom(mealCategoryAtom);
  const [meals, setMeals] = useAtom(mealsAtom);

  const handleMealCategoryInput = (e) => {
    if (e.key === "Enter") {
      setMealCategory(e.target.value);
      setShowMealCategory(true);
    }
  };

  const handleMealTitleInput = (e) => {
    if (e.key === "Enter") {
      setMeals([...meals, e.target.value]);
      e.target.value = "";
    }
  };

  return (
    <div className="flex flex-col justify-center items-center h-[300px] w-[300px] border rounded-lg">
      {!showList ? (
        <button
          onClick={() => {
            setShowList(true);
          }}
        >
          + Create a Meal
        </button>
      ) : (
        <div className="flex flex-col justify-center items-center h-full w-full gap-4">
          {!showMealCategory ? (
            <input
              placeholder="Enter meal category - i.e. Breakfast, Beef, Chicken"
              onKeyDown={handleMealCategoryInput}
            />
          ) : (
            <p>{mealCategory}</p>
          )}

          {meals.map((meal, index) => (
            <p key={index}>{meal}</p>
          ))}
          <input
            placeholder="+ Enter meal title"
            onKeyDown={handleMealTitleInput}
          />
        </div>
      )}
    </div>
  );
}
