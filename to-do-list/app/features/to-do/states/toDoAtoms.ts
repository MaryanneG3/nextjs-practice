import { atom } from "jotai";

export const showListAtom = atom<boolean>(false);
export const showListTitleAtom = atom<boolean>(false);
export const listTitleAtom = atom<string>("");
export const tasksAtom = atom<string[]>([]);
export const isEditingTitleAtom = atom<boolean>(false);
export const editingTaskIndexAtom = atom<number>(null);
export const editingTaskValueAtom = atom<string>("");
