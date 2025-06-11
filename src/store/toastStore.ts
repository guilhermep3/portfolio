"use client"
import { create } from "zustand";

type toastStoreType = {
  isToastOpen: boolean;
  setIsToastOpen: (newValue: boolean) => void;
  toastText: string | null
  setToastText: (newText: string | null) => void;
}

export const useToastStore = create<toastStoreType>((set) => ({
  isToastOpen: false,
  toastText: null,
  setIsToastOpen: (newValue) => set({ isToastOpen: newValue }),
  setToastText: (newText) => set({ toastText: newText })
}))