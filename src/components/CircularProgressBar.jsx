import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import PropTypes from "prop-types";

const CircularProgressBar = ({ percentage }) => {
  return (
    <CircularProgressbar
      value={percentage}
      text={`${percentage.toFixed(0)}%`}
      styles={buildStyles({
        pathColor: `rgba(62, 152, 199, ${percentage / 100})`,
        textColor: "#f88",
        trailColor: "#d6d6d6",
        backgroundColor: "#3e98c7",
      })}
    />
  );
};

CircularProgressBar.propTypes = {
  percentage: PropTypes.number.isRequired,
};

export default CircularProgressBar;
