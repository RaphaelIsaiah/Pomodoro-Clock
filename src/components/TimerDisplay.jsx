import PropTypes from "prop-types";

// Displays the current time label and the time leftF
const TimerDisplay = ({ timerLabel, timeLeft }) => {
  return (
    <div id="timer">
      <div id="timer-label">{timerLabel}</div>
      <div id="time-left">{timeLeft}</div>
    </div>
  );
};

TimerDisplay.propTypes = {
  timerLabel: PropTypes.string.isRequired,
  timeLeft: PropTypes.string.isRequired,
};

export default TimerDisplay;
