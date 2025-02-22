import { useState, useEffect, useRef, useCallback } from "react";
import { formatTime } from "../utils/helper";
import TimerDisplay from "./TimerDisplay";
import TimerControls from "./TimerControls";
import LengthControls from "./LengthControls";
import beepSound from "../assets/beepSound.wav";
import {
  switchTimer,
  resetTimer,
  toggleTimer,
  handleBreakDecrement,
  handleBreakIncrement,
  handleSessionDecrement,
  handleSessionIncrement,
} from "../utils/timerLogic";
import CircularProgressBar from "./CircularProgressBar";

const Pomodoro = () => {
  // State Variables
  const [breakLength, setBreakLength] = useState(5);
  const [sessionLength, setSessionLength] = useState(25);
  const [timerLabel, setTimerLabel] = useState("Session");
  const [timeLeft, setTimeLeft] = useState(sessionLength * 60);
  const [isRunning, setIsRunning] = useState(false);

  // Refs
  // Store the interval ID for the timer
  const intervalRef = useRef(null);
  // Reference the audio element for the beep sound
  const audioRef = useRef(null);

  // Memoized switchTimer function
  const memoizedSwitchTimer = useCallback(() => {
    switchTimer(
      timerLabel,
      sessionLength,
      breakLength,
      setTimerLabel,
      setTimeLeft,
      audioRef
    );
  }, [timerLabel, sessionLength, breakLength]);

  // UseEffect for Timer Logic
  useEffect(() => {
    if (isRunning) {
      // If isRunning, start the timer
      intervalRef.current = setInterval(() => {
        setTimeLeft((prevTime) => {
          if (prevTime === 0) {
            // if time reaches 0, switch between session and break
            memoizedSwitchTimer();
            // keep the time at 0 temporarily
            return prevTime;
          }
          // decrease time by 1 second
          return prevTime - 1;
        });
      }, 1000); // This will run every 1000ms ~ 1s
    } else {
      // if !isRunning (paused), clear the interval
      clearInterval(intervalRef.current);
    }

    // Cleanup: Clear the interval when the component unmounts or isRunning changes
    return () => clearInterval(intervalRef.current);
  }, [isRunning, memoizedSwitchTimer]); // Re-run effect when isRunning and memoizedSwitchTimer changes

  // Calculate percentage for Circular Progress Bar
  const totalTime =
    timerLabel === "Session" ? sessionLength * 60 : breakLength * 60;
  const percentage = ((totalTime - timeLeft) / totalTime) * 100;

  return (
    <div className="pomodoro bg-ivory w-full max-w-2xl rounded p-5 shadow-4xl ">
      <div className="mb-2">
        <TimerDisplay timerLabel={timerLabel} timeLeft={formatTime(timeLeft)} />
      </div>

      <div className="p-2 rounded mb-2">
        <div className="w-4/5 mx-auto flex justify-center items-center mb-4 cn-shadow font-two font-semibold border-none ">
          <CircularProgressBar percentage={percentage} />
        </div>

        <TimerControls
          onStartStop={() => toggleTimer(setIsRunning)}
          onReset={() =>
            resetTimer(
              setBreakLength,
              setSessionLength,
              setTimerLabel,
              setTimeLeft,
              setIsRunning,
              audioRef
            )
          }
          isRunning={isRunning}
        />
      </div>

      <div className="flex flex-col gap-2">
        {/* Break length controls */}
        <LengthControls
          label={"Break"}
          length={breakLength}
          onIncrement={() =>
            handleBreakIncrement(breakLength, setBreakLength, isRunning)
          }
          onDecrement={() =>
            handleBreakDecrement(breakLength, setBreakLength, isRunning)
          }
          onSetLength={(newLength) => {
            setBreakLength(newLength);
            if (!isRunning && timerLabel === "Break") {
              setTimeLeft(newLength * 60);
            }
          }}
          isRunning={isRunning}
        />
        {/* Session length controls */}
        <LengthControls
          label={"Session"}
          length={sessionLength}
          onIncrement={() =>
            handleSessionIncrement(
              sessionLength,
              setSessionLength,
              isRunning,
              setTimeLeft,
              timerLabel
            )
          }
          onDecrement={() =>
            handleSessionDecrement(
              sessionLength,
              setSessionLength,
              isRunning,
              setTimeLeft,
              timerLabel
            )
          }
          onSetLength={(newLength) => {
            setSessionLength(newLength);
            if (!isRunning && timerLabel === "Session") {
              setTimeLeft(newLength * 60);
            }
          }}
          isRunning={isRunning}
        />

        <audio src={beepSound} id="beep" ref={audioRef}></audio>
      </div>
    </div>
  );
};

export default Pomodoro;
