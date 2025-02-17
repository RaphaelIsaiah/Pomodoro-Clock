import PropTypes from "prop-types";

// Handle the Break and Session Length Controls
const LengthControls = ({ label, length, onIncrement, onDecrement }) => {
  return (
    <div>
      <div id={`${label.toLowerCase()}-label`}>{label} Length</div>
      <button id={`${label.toLowerCase()}-decrement`} onClick={onDecrement}>
        -
      </button>
      <span id={`${label.toLowerCase()}-length`}>{length}</span>
      <button id={`${label.toLowerCase()}-increment`} onClick={onIncrement}>
        +
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
