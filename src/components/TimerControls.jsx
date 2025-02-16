import PropTypes from "prop-types";

// Handle the Start/Pause and Reset Buttons
const TimerControls = ({ onStartStop, onReset, isRunning }) => {
  return (
    <div>
      <button id="start_stop" onClick={onStartStop}>
        {isRunning ? "Pause" : "Start"}
      </button>
      <button id="reset" onClick={onReset}>
        Reset
      </button>
    </div>
  );
};

TimerControls.propTypes = {
  onStartStop: PropTypes.func.isRequired,
  onReset: PropTypes.func.isRequired,
  isRunning: PropTypes.bool.isRequired,
};

export default TimerControls;
