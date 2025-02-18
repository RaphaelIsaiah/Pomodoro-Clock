import PropTypes from "prop-types";

// Displays the current time label and the time leftF
const TimerDisplay = ({ timerLabel, timeLeft }) => {
  return (
    <div
      id="timer"
      className="timer bg-black text-gold rounded-xl p-1 flex flex-wrap justify-evenly
       items-center gap-2 shadow-3xl "
    >
      <div
        id="timer-label"
        className="timer-content font-three tracking-widest font-extrabold p-2 rounded  "
      >
        {timerLabel}
      </div>

      <div
        id="time-left"
        className="timer-content font-two tracking-widest font-bold p-2 rounded "
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
