import { validateLength } from "./helper";

// Function to switch between session and break
export const switchTimer = (
  timerLabel,
  sessionLength,
  breakLength,
  setTimerLabel,
  setTimeLeft,
  audioRef
) => {
  if (timerLabel === "Session") {
    // Switch to Break
    setTimerLabel("Break");
    setTimeLeft(breakLength * 60);
  } else {
    // Switch to Session
    setTimerLabel("Session");
    setTimeLeft(sessionLength * 60);
  }

  //   Play the beepSound when timer switches
  audioRef.current.play();
};

// Function to reset the timer
export const resetTimer = (
  setBreakLength,
  setSessionLength,
  setTimerLabel,
  setTimeLeft,
  setIsRunning,
  audioRef
) => {
  // Reset all state variables to their default values
  setBreakLength(5);
  setSessionLength(25);
  setTimerLabel("Session");
  setTimeLeft(25 * 60);
  setIsRunning(false);
  // Stop and reset beepSound
  audioRef.current.pause();
  audioRef.current.currentTime = 0;
};

// Function to start and stop the timer
export const toggleTimer = (setIsRunning) => {
  // Toggle value between True and False
  setIsRunning((prev) => !prev);
};

// Function to handle changes in Break Length
export const handleBreakIncrement = (
  breakLength,
  setBreakLength,
  isRunning
) => {
  if (!isRunning && breakLength < 60) {
    // Only update when timer is not running
    // setBreakLength((prev) => validateLength(prev + 1));
    const newBreakLength = validateLength(breakLength + 1);
    setBreakLength(newBreakLength);
    console.log("Break incremented:", newBreakLength);
  }
};
export const handleBreakDecrement = (
  breakLength,
  setBreakLength,
  isRunning
) => {
  if (!isRunning && breakLength > 1) {
    // Only update when timer is not running
    // setBreakLength((prev) => validateLength(prev - 1));
    const newBreakLength = validateLength(breakLength - 1);
    setBreakLength(newBreakLength);
    console.log("Break decremented:", newBreakLength);
  }
};

// Function to handle changes in Session Length
export const handleSessionIncrement = (
  sessionLength,
  setSessionLength,
  isRunning,
  setTimeLeft,
  timerLabel
) => {
  if (!isRunning && sessionLength < 60) {
    // Increment session length (max:60)
    const newSessionLength = validateLength(sessionLength + 1);
    setSessionLength(newSessionLength);

    if (timerLabel === "Session") {
      // Only update timeLeft when the timer is not running.
      setTimeLeft(newSessionLength * 60);
      console.log("Session incremented:", newSessionLength);
    }
  }
};

export const handleSessionDecrement = (
  sessionLength,
  setSessionLength,
  isRunning,
  setTimeLeft,
  timerLabel
) => {
  if (!isRunning && sessionLength > 1) {
    // Decrement session length (min:1)
    const newSessionLength = validateLength(sessionLength - 1);
    setSessionLength(newSessionLength);

    if (timerLabel === "Session") {
      // Only update timeLeft when the timer is not running.
      setTimeLeft(newSessionLength * 60);
      console.log("Session decremented:", newSessionLength);
    }
  }
};
