import { atom, useAtom } from "jotai";

const showListAtom = atom(false);

export default function ToDoList() {
  const [showList, setShowList] = useAtom(showListAtom);
  return (
    <div>
      {!showList ? (
        <button
          onClick={() => {
            setShowList(true);
          }}
        >
          + Create a new to do list
        </button>
      ) : (
        <p>Enter tasks</p>
      )}
    </div>
  );
}
