import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import PropTypes from "prop-types";

const CircularProgressBar = ({ percentage }) => {
  return (
    <CircularProgressbar
      value={percentage}
      text={`${percentage.toFixed(0)}%`}
      strokeWidth={6}
      styles={buildStyles({
        pathColor: `rgba(62, 152, 199, ${percentage / 100})`,
        textColor: "#f88",
        trailColor: "#d6d6d6",
        backgroundColor: "#3e98c7",
        boxShadow: "0px 2px 4px 2px black",
      })}
    />
  );
};

CircularProgressBar.propTypes = {
  percentage: PropTypes.number.isRequired,
};

export default CircularProgressBar;
