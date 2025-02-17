// Format time in mm:ss
export const formatTime = (timeInSeconds) => {
  // Convert seconds to whole minutes
  const minutes = Math.floor(timeInSeconds / 60);
  // Find the remaining seconds after full minutes are counted
  const seconds = timeInSeconds % 60;
  // Return a string and ensure that it is always at least 2 digits long, adding a zero if necessary
  return `${minutes.toString().padStart(2, "0")}:${seconds
    .toString()
    .padStart(2, "0")}`;
};

// Function to ensure that the length is clamped between 1 and 60
// Limiting the value so it is not < 1 or > 60
export const validateLength = (length) => {
  return Math.min(Math.max(length, 1), 60);
};
