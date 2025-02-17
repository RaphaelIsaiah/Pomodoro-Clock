import PropTypes from "prop-types";
import { faRotateLeft, faPlay, faPause } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Handle the Start/Pause and Reset Buttons
const TimerControls = ({ onStartStop, onReset, isRunning }) => {
  return (
    <div>
      <button id="start_stop" onClick={onStartStop}>
        {isRunning ? <FontAwesomeIcon icon={faPause} /> : <FontAwesomeIcon icon={faPlay} />}
      </button>
      <button id="reset" onClick={onReset}>
        <FontAwesomeIcon icon={faRotateLeft} />
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
