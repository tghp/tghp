import { atom } from "jotai";

type HousePlaces = "initial" | "zoom" | "zoom2" | "zoom3";
export const housePlaceAtom = atom<HousePlaces>("initial");
