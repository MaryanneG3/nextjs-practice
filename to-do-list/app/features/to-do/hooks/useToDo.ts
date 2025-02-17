import { useAtom } from "jotai";
import {
  showListAtom,
  showListTitleAtom,
  listTitleAtom,
  tasksAtom,
  isEditingTitleAtom,
  editingTaskIndexAtom,
  editingTaskValueAtom,
} from "../states/toDoAtoms";

export const useTodo = () => {
  const [showList, setShowList] = useAtom(showListAtom);
  const [showListTitle, setShowListTitle] = useAtom(showListTitleAtom);
  const [listTitle, setListTitle] = useAtom(listTitleAtom);
  const [tasks, setTasks] = useAtom(tasksAtom);
  const [isEditingTitle, setIsEditingTitle] = useAtom(isEditingTitleAtom);
  const [editingTaskIndex, setEditingTaskIndex] = useAtom(editingTaskIndexAtom);
  const [editingTaskValue, setEditingTaskValue] = useAtom(editingTaskValueAtom);

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
    editingTaskIndex,
    setEditingTaskIndex,
    editingTaskValue,
    setEditingTaskValue,
  };
};
