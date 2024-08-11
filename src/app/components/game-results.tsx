import React from 'react';
import { AlertDialog, AlertDialogAction, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "@/components/ui/alert-dialog"

type GameResultsProps = {
  calculateWPM: () => string | 0;
  points: number;
  mistakes: number;
  earnedPoints: number;
  handleReplay: () => void;
};

export default function GameResults({
  calculateWPM,
  points,
  mistakes,
  earnedPoints,
  handleReplay,
}: GameResultsProps) {
  return (
    <AlertDialog defaultOpen>
      <AlertDialogContent className='antialiased space-y-4'>
        <AlertDialogHeader>
          <AlertDialogTitle className='text-2xl/4'>Game Results</AlertDialogTitle>
          <AlertDialogDescription>
            Here&apos;s how you performed in this game:
          </AlertDialogDescription>
        </AlertDialogHeader>
        <div className="space-y-1">
          <p className="flex justify-between">
            <span>Words per min:</span>
            <span className="font-semibold">{calculateWPM()}</span>
          </p>
          <p className="flex justify-between">
            <span>Total Points:</span>
            <span className="font-semibold">{points - mistakes + earnedPoints}</span>
          </p>
          <p className="flex justify-between">
            <span>Points Earned:</span>
            <span className="font-semibold">{earnedPoints}</span>
          </p>
          <p className="flex justify-between">
            <span>Letter Mistakes:</span>
            <span className="font-semibold">{mistakes}</span>
          </p>
          <p className="flex flex-col">
            <span>Total Points Calculation:</span>
            <span className="font-semibold mt-4 text-sm text-center text-muted-foreground">
              {`(${points} points) - (${mistakes} mistakes) + (${earnedPoints} earned points) = ${
                points - mistakes + earnedPoints
              }`}
            </span>
          </p>
        </div>
        <AlertDialogFooter>
          <AlertDialogAction onClick={handleReplay}>
            Play Again
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}