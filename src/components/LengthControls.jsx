import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretUp, faCaretDown } from "@fortawesome/free-solid-svg-icons";

// Handle the Break and Session Length Controls
const LengthControls = ({ label, length, onIncrement, onDecrement }) => {
  return (
    <div className="length bg-green-300 rounded gap-2 flex flex-wrap items-center justify-center shadow-3xl">
      <div
        id={`${label.toLowerCase()}-label`}
        className="length-controls py-2 px-1 w-3/5"
      >
        {label} Length
      </div>

      <div className="length-controls p-2 w-1/3">
        <button id={`${label.toLowerCase()}-decrement`} onClick={onDecrement}>
          <FontAwesomeIcon icon={faCaretDown} />
        </button>
        <span id={`${label.toLowerCase()}-length`} className="px-3">
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
