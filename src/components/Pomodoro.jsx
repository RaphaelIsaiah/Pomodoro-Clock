import { useState, useEffect, useRef, useCallback } from "react";
import { formatTime, validateLength } from "../utils/helper";
import TimerDisplay from "./TimerDisplay";
import TimerControls from "./TimerControls";
import LengthControls from "./LengthControls";
import beepSound from "../assets/beepSound.wav";

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

  // Function to switch between "Session" and "Break"
  const switchTimer = useCallback(() => {
    if (timerLabel === "Session") {
      // Switch to Break
      setTimerLabel("Break");
      setTimeLeft(breakLength * 60);
    } else {
      // Switch to Session
      setTimerLabel("Session");
      setTimeLeft(sessionLength * 60);
    }

    // Play beepSound when timer switches
    audioRef.current.play();
  }, [timerLabel, sessionLength, breakLength]);

  // UseEffect for Timer Logic
  useEffect(() => {
    if (isRunning) {
      // If isRunning, start the timer
      intervalRef.current = setInterval(() => {
        setTimeLeft((prevTime) => {
          if (prevTime === 0) {
            // if time reaches 0, switch between session and break
            switchTimer();
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
  }, [isRunning, switchTimer]); // Re-run effect when isRunning changes

  // Function to reset the timer
  const resetTimer = () => {
    // reset all state variables to their default values
    setBreakLength(5);
    setSessionLength(25);
    setTimerLabel("Session");
    setTimeLeft(25 * 60);
    setIsRunning(false);
    // Stop and reset beepSound
    audioRef.current.pause();
    audioRef.current.currentTime = 0;
  };

  // Function to Start and Stop the Timer
  const handleStartStop = () => {
    setIsRunning((prev) => !prev); // Toggle isRunning value between True and False
  };

  // Function to handle changes in Break Length
  const handleBreakIncrement = () => {
    setBreakLength((prev) => validateLength(prev + 1));
  };
  const handleBreakDecrement = () => {
    setBreakLength((prev) => validateLength(prev - 1));
  };

  // Function to handle changes in Session Length
  const handleSessionIncrement = () => {
    setSessionLength((prev) => validateLength(prev + 1)); //
    setTimeLeft((prev) => prev + 60); // Add 60s to the current time
  };

  const handleSessionDecrement = () => {
    setSessionLength((prev) => validateLength(prev - 1));
    setTimeLeft((prev) => prev - 60); // Subtract 60s from the current time
  };

  return (
    <div>
      <TimerDisplay timerLabel={timerLabel} timeLeft={formatTime(timeLeft)} />

      <TimerControls
        onStartStop={handleStartStop}
        onReset={resetTimer}
        isRunning={isRunning}
      />

      {/* Break length controls */}
      <LengthControls
        label={"Break"}
        length={breakLength}
        onIncrement={handleBreakIncrement}
        onDecrement={handleBreakDecrement}
      />
      {/* Session length controls */}
      <LengthControls
        label={"Session"}
        length={sessionLength}
        onIncrement={handleSessionIncrement}
        onDecrement={handleSessionDecrement}
      />

      <audio src={beepSound} id="beep" ref={audioRef}></audio>
    </div>
  );
};

export default Pomodoro;
