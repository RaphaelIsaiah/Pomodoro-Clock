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
        pathColor: `rgba(5, 7, 7, ${percentage / 50})`,
        textColor: "#050707",
        trailColor: "#7F7F7F",
        backgroundColor: "#7F7F7F",
      })}
    />
  );
};

CircularProgressBar.propTypes = {
  percentage: PropTypes.number.isRequired,
};

export default CircularProgressBar;
