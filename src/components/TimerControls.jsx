import PropTypes from "prop-types";
import {
  faRotateRight,
  faPlay,
  faPause,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Handle the Start/Pause and Reset Buttons
const TimerControls = ({ onStartStop, onReset, isRunning }) => {
  return (
    <div className="bg-cyan-400 rounded p-1 flex gap-4 justify-center">
      <button
        id="start_stop"
        onClick={onStartStop}
        className="bg-amber-600 rounded w-2/5 p-2"
      >
        {isRunning ? (
          <FontAwesomeIcon icon={faPause} />
        ) : (
          <FontAwesomeIcon icon={faPlay} />
        )}
      </button>
      <button
        id="reset"
        onClick={onReset}
        className="bg-amber-500 rounded w-2/5 p-2"
      >
        <FontAwesomeIcon icon={faRotateRight} />
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
