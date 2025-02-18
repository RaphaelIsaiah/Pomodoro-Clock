import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretUp, faCaretDown } from "@fortawesome/free-solid-svg-icons";

// Handle the Break and Session Length Controls
const LengthControls = ({ label, length, onIncrement, onDecrement }) => {
  return (
    <div className="length bg-green-700 rounded p-1 flex flex-wrap gap-2 justify-center">
      <div
        id={`${label.toLowerCase()}-label`}
        className="length-controls bg-emerald-200 rounded py-2 px-1 w-3/5"
      >
        {label} Length
      </div>

      <div className="length-controls bg-gray-400 rounded p-2 w-1/3">
        <button id={`${label.toLowerCase()}-decrement`} onClick={onDecrement}>
          <FontAwesomeIcon icon={faCaretDown} />
        </button>
        <span id={`${label.toLowerCase()}-length`} className="px-2">
          {length}
        </span>
        <button id={`${label.toLowerCase()}-increment`} onClick={onIncrement}>
          <FontAwesomeIcon icon={faCaretUp} />
        </button>
      </div>
    </div>
  );
};

LengthControls.propTypes = {
  label: PropTypes.string.isRequired,
  length: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
};

export default LengthControls;
