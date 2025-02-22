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
    <div className="p-1 flex gap-4 justify-center ">
      <button
        id="start_stop"
        onClick={onStartStop}
        className="bg-gold rounded-full w-2/5 p-2 outline-none transition-all duration-150
        ease-in-out hover:bg-pewter hover:text-[1.1rem]
        active:bg-pewter active:text-[1.1rem] shadow-4xl"
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
        className="bg-gold rounded-full w-2/5 p-2 transition-all duration-150 ease-in-out hover:bg-pewter hover:text-[1.1rem]
         active:bg-pewter active:text-[1.1rem] shadow-4xl"
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
