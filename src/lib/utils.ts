import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { lazy } from "react"


export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const AlertDialog = lazy(() => import("../app/components/alert"))
export const GameResultsDialog = lazy(() => import("../app/components/game-results"))