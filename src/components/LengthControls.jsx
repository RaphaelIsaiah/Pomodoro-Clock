import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretUp, faCaretDown } from "@fortawesome/free-solid-svg-icons";

// Handle the Break and Session Length Controls
const LengthControls = ({
  label,
  length,
  onIncrement,
  onDecrement,
  onSetLength,
  isRunning,
}) => {
  const [inputValue, setInputValue] = useState(length.toString());
  // const intervalIdRef = useRef(null);

  // Sync inputValue with length when it changes in parent
  useEffect(() => {
    setInputValue(length.toString());
  }, [length]);

  // Update input value as user types; allow only numbers and clamp to 60
  const handleChange = (e) => {
    const value = e.target.value;
    // Only allow digits
    if (/^\d*$/.test(value)) {
      if (value !== "") {
        const num = parseInt(value, 10);
        if (num > 60) {
          // if greater than 60, clamp immediately and update parent's state
          setInputValue("60");
          onSetLength(60);
        } else {
          setInputValue(value);
          onSetLength(num);
        }
      } else {
        // Allow empty input temporarily; will be corrected on blur
        setInputValue("");
      }
    }
  };

  // On blur, validate the value and ensure it is between 1 and 60
  const handleBlur = () => {
    let newLength = parseInt(inputValue, 10);
    if (isNaN(newLength) || newLength < 1) newLength = 1;
    if (newLength > 60) newLength = 60;
    setInputValue(newLength.toString());
    onSetLength(newLength);
  };

  return (
    <div
      className="length bg-black text-gold rounded flex flex-wrap p-1 items-center
    justify-evenly shadow-3xl"
    >
      <label
        htmlFor={`${label.toLowerCase()}-length`}
        id={`${label.toLowerCase()}-label`}
        className="length-controls py-2 px-1 w-3xs font-three font-extrabold"
      >
        {label} Length
      </label>

      <div className="length-controls p-2 w-2/5 flex items-center justify-center">
        <button
          id={`${label.toLowerCase()}-decrement`}
          onClick={onDecrement}
          className="outline-none hover:text-ivory active:text-ivory"
        >
          <FontAwesomeIcon icon={faCaretDown} />
        </button>
        <input
          id={`${label.toLowerCase()}-length`}
          type="text"
          name={`${label.toLowerCase()}-length`}
          value={inputValue}
          onChange={handleChange}
          onBlur={handleBlur}
          className="mx-2 text-center w-12 bg-transparent border-none outline-none
          font-two font-bold caret-ivory"
          disabled={isRunning}
        />
        <button
          id={`${label.toLowerCase()}-increment`}
          onClick={onIncrement}
          className="outline-none hover:text-ivory active:text-ivory"
        >
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
  onSetLength: PropTypes.func.isRequired,
  isRunning: PropTypes.bool.isRequired,
};

export default LengthControls;
