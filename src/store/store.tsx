import { create } from "zustand";
import { persist } from "zustand/middleware";

type TypeWriteState = {
  points: number;
  earnedPoints: number;
  setPoints: (points: number) => void;
  setEarnedPoints: (earnedPoints: number) => void;
  updatePoints: (earnedPoints: number, mistakes: number) => void;
}

export const useTypewriteStore = create<TypeWriteState>()(
  persist(
    (set) => ({
      points: 100,
      earnedPoints: 0,
      setPoints: (points) => set(() => ({ points })),
      setEarnedPoints: (earnedPoints) => set(() => ({ earnedPoints })),
      updatePoints: (earnedPoints, mistakes) => set((state) => ({ 
        points: Math.max(0, state.points + earnedPoints - mistakes) 
      })),
    }), {
    name: 'global-store'
  }
  )
)