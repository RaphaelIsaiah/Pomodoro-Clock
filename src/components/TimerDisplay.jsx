import PropTypes from "prop-types";

// Displays the current time label and the time leftF
const TimerDisplay = ({ timerLabel, timeLeft }) => {
  return (
    <div
      id="timer"
      className="timer bg-emerald-300 rounded-xl p-1 flex flex-wrap gap-2 justify- shadow-3xl font-bold"
    >
      <div id="timer-label" className="timer-content p-2 rounded w-3/5">
        {timerLabel}
      </div>

      <div id="time-left" className="timer-content p-2 rounded w-1/3">
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
