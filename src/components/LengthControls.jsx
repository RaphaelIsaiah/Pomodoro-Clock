import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretUp, faCaretDown } from "@fortawesome/free-solid-svg-icons";

// Handle the Break and Session Length Controls
const LengthControls = ({ label, length, onIncrement, onDecrement }) => {
  return (
    <div>
      <div id={`${label.toLowerCase()}-label`}>{label} Length</div>
      <button id={`${label.toLowerCase()}-decrement`} onClick={onDecrement}>
        <FontAwesomeIcon icon={faCaretUp} />
      </button>
      <span id={`${label.toLowerCase()}-length`}>{length}</span>
      <button id={`${label.toLowerCase()}-increment`} onClick={onIncrement}>
        <FontAwesomeIcon icon={faCaretDown} />
      </button>
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
