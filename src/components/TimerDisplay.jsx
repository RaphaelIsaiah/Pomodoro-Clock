import PropTypes from "prop-types";

// Displays the current time label and the time leftF
const TimerDisplay = ({ timerLabel, timeLeft }) => {
  return (
    <div
      id="timer"
      className="timer bg-emerald-400 rounded p-1 flex  gap-2 justify-center"
    >
      <div
        id="timer-label"
        className="timer-content bg-fuchsia-600 p-2 rounded w-3/5"
      >
        {timerLabel}
      </div>
      <div
        id="time-left"
        className="timer-content bg-fuchsia-400 p-2 rounded w-1/3"
      >
        {timeLeft}
      </div>
    </div>
  );
};

TimerDisplay.propTypes = {
  timerLabel: PropTypes.string.isRequired,
  timeLeft: PropTypes.string.isRequired,
};

export default TimerDisplay;
