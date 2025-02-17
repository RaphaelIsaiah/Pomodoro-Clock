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

// Functioin to reset the timer
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
  if (!isRunning) {
    // Only update when timer is not running
    setBreakLength((prev) => validateLength(prev + 1));
  }
};
export const handleBreakDecrement = (
  breakLength,
  setBreakLength,
  isRunning
) => {
  if (!isRunning) {
    // Only update when timer is not running
    setBreakLength((prev) => validateLength(prev - 1));
  }
};

// Function to handle changes in Session Length
export const handleSessionIncrement = (
  sessionLength,
  setSessionLength,
  isRunning,
  setTimeLeft
) => {
  if (!isRunning) {
    // Increment session length (max:60)
    const newSessionLength = validateLength(sessionLength + 1);
    setSessionLength(newSessionLength);
    // Only update timeLeft when the timer is not running.
    setTimeLeft(newSessionLength * 60);
  }
};

export const handleSessionDecrement = (
  sessionLength,
  setSessionLength,
  isRunning,
  setTimeLeft
) => {
  if (!isRunning) {
    // Decrement session length (min:1)
    const newSessionLength = validateLength(sessionLength - 1);
    setSessionLength(newSessionLength);
    // Only update timeLeft when the timer is not running.
    setTimeLeft(newSessionLength * 60);
  }
};
