'use client'

import { useTypewriteStore } from "@/store/store";
import Headers from "./components/headers";
import { texts } from "@/data/text-data";
import { useState, useRef, useEffect } from "react";
import { AlertDialog, GameResultsDialog } from "@/lib/utils";

export default function Home() {
  const { points, earnedPoints, setPoints, setEarnedPoints, updatePoints } = useTypewriteStore();
  const [mistakes, setMistakes] = useState<number>(0);
  const [input, setInput] = useState<string>("");
  const [capsLock, setCapsLock] = useState<boolean>(false);
  const [currentText, setCurrentText] = useState<string>(texts[0]);
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const [isCompleted, setIsCompleted] = useState<boolean>(false);
  const [startTime, setStartTime] = useState<number | null>(null);
  const [endTime, setEndTime] = useState<number | null>(null);
  const [timer, setTimer] = useState<number>(30);

  useEffect(() => {
    setCurrentText(texts[Math.floor(Math.random() * texts.length)]);
    const focusInput = () => {
      setIsFocused(true);
      inputRef.current?.focus();
    };

    const handleClick = () => focusInput();

    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.getModifierState("CapsLock")) {
        setCapsLock(true);
      } else {
        setCapsLock(false);
      }
      focusInput();
    };

    window.addEventListener("keydown", handleKeyPress);
    window.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
      window.removeEventListener("click", handleClick);
    };
  }, []);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (isFocused && !isCompleted && timer > 0) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    } else if (timer <= 0) {
      setIsCompleted(true);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isFocused, isCompleted, timer]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!startTime) setStartTime(Date.now());
    if (isCompleted || timer <= 0) return;

    let newValue = event.target.value;
    let currentMistakes = mistakes;

    if (newValue.length >= currentText.length) {
      newValue = newValue.slice(0, currentText.length);
      setIsCompleted(true);
      setEndTime(Date.now());
      calculatePoints(currentMistakes);
    }

    if (!isCompleted && newValue.length > input.length) {
      const lastTypedChar = newValue[newValue.length - 1];
      const correctChar = currentText[newValue.length - 1];
      if (lastTypedChar !== correctChar) {
        currentMistakes += 1;
        setMistakes(currentMistakes);
      }
    }

    setInput(newValue);
  };

  const calculateWPM = () => {
    if (!startTime || !endTime) return 0;
    const timeTaken = (endTime - startTime) / 60000;
    const wordCount = currentText.split(" ").length;
    return (wordCount / timeTaken).toFixed(2);
  };

  const calculatePoints = (mistakes: number) => {
    const textLength = currentText.replace(/\s/g, "").length;
    let pointsEarned = 0;

    if (mistakes < textLength) {
      if (mistakes === 0) {
        pointsEarned = 100;
      } else if (mistakes <= 5) {
        pointsEarned = 80;
      } else if (mistakes <= 10) {
        pointsEarned = 60;
      } else if (mistakes <= 15) {
        pointsEarned = 40;
      } else {
        pointsEarned = 20;
      }
    }

    setEarnedPoints(pointsEarned);
  };

  const handleReplay = () => {
    setInput("");
    setMistakes(0);
    setIsCompleted(false);
    setEarnedPoints(0);
    setPoints(points + earnedPoints);
    inputRef.current?.focus();
    setTimer(30);
    setStartTime(null);
    setEndTime(null);
    setCurrentText(texts[Math.floor(Math.random() * texts.length)]);
    const newTotalPoints = Math.max(0, points + earnedPoints - mistakes);
    setPoints(newTotalPoints);
    updatePoints(earnedPoints, mistakes);
  };

  const renderText = (): JSX.Element[] => {
    const elements: JSX.Element[] = [];
    let inputIndex = 0;
    const textWords = currentText.split(/\s+/);
    textWords.forEach((word, wordIndex) => {
      for (let i = 0; i < word.length; i++) {
        const char = word[i];
        const inputChar = input[inputIndex];
        const className =
          inputIndex < input.length
            ? inputChar === char
              ? 'text-black dark:text-white'
              : 'text-red-600 dark:text-red-400'
            : 'text-gray-500 dark:text-gray-400';
        elements.push(
          <span key={`${wordIndex}-${i}`} className={className}>
            {char}
          </span>
        );
        inputIndex++;
      }
      if (wordIndex < textWords.length - 1) {
        elements.push(
          <span key={`space-${wordIndex}`} className="text-gray-500 dark:text-gray-400">
            {" "}
          </span>
        );
        inputIndex++;
      }
    });
    return elements;
  };

  return (
    <>
      {
        !isFocused && <AlertDialog />
      }
      {isCompleted ? (
        <GameResultsDialog calculateWPM={calculateWPM} points={points} mistakes={mistakes} earnedPoints={earnedPoints} handleReplay={handleReplay} />
      ) : (
        <main>
          <Headers timer={timer} mistakes={mistakes} points={points} capslock={capsLock} />
          <div className="max-w-6xl mx-auto mt-12 md:mt-24 text-2xl md:text-4xl text-center pointer-events-none">{renderText()}</div>
          <input
            type="text"
            value={input}
            ref={inputRef}
            onChange={handleChange}
            className="sr-only"
            placeholder="Start typing..."
            readOnly={isCompleted}
          />
        </main>
      )}
    </>
  );
}
