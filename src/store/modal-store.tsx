import { projectType } from "@/data/projects";
import { create } from "zustand";

type modalStoreType = {
   isModalOpen: boolean;
   setIsModalOpen: (newValue: boolean) => void;
   modalProject: projectType | null
   setModalProject: (newProject: projectType | null) => void;
}

export const useModalStore = create<modalStoreType>((set) => ({
   isModalOpen: false,
   modalProject: null,
   setIsModalOpen: (newValue) => set({isModalOpen: newValue}),
   setModalProject: (newProject) => set({ modalProject: newProject})
}))