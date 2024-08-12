import { create } from "zustand";
import { persist } from "zustand/middleware";

type TypeWriteState = {
  points: number;
  earnedPoints: number;
  setPoints: (points: number) => void;
  setEarnedPoints: (earnedPoints: number) => void;
}

export const useTypewriteStore = create<TypeWriteState>()(
  persist(
    (set) => ({
      points: 100,
      earnedPoints: 0,
      setPoints: (points) => set(() => ({ points })),
      setEarnedPoints: (earnedPoints) => set(() => ({ earnedPoints })),
    }), {
    name: 'global-store'
  }
  )
);