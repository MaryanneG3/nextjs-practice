import { useAtom } from "jotai";
import {
  showListAtom,
  showListTitleAtom,
  listTitleAtom,
  tasksAtom,
  isEditingTitleAtom,
} from "../states/toDoAtoms";

export const useTodo = () => {
  const [showList, setShowList] = useAtom(showListAtom);
  const [showListTitle, setShowListTitle] = useAtom(showListTitleAtom);
  const [listTitle, setListTitle] = useAtom(listTitleAtom);
  const [tasks, setTasks] = useAtom(tasksAtom);
  const [isEditingTitle, setIsEditingTitle] = useAtom(isEditingTitleAtom);

  return {
    showList,
    setShowList,
    showListTitle,
    setShowListTitle,
    listTitle,
    setListTitle,
    tasks,
    setTasks,
    isEditingTitle,
    setIsEditingTitle,
  };
};
