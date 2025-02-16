import { atom } from "jotai";

export const showListAtom = atom<boolean>(false);
export const showListTitleAtom = atom<boolean>(false);
export const listTitleAtom = atom<string>("");
export const tasksAtom = atom<string[]>([]);
