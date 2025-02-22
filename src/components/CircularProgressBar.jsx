import { motion } from "framer-motion";
import PropTypes from "prop-types";

const CircularProgressBar = ({ percentage }) => {
  const radius = 50; // Radius of the circle
  const circumference = 2 * Math.PI * radius; // Total circumference
  // const strokeDashoffset = circumference - (circumference * percentage) / 100;
  const strokeDashoffset = !isNaN(percentage)
    ? circumference - (circumference * percentage) / 100
    : circumference - (circumference * 0) / 100;

  return (
    <svg width="120" height="120" viewBox="0 0 120 120">
      {/* Background Circle */}
      <circle
        cx="60"
        cy="60"
        r={radius}
        stroke="#7F7F7F"
        strokeWidth="6"
        fill="transparent"
      />

      {/* Animated Progress Circle */}
      <motion.circle
        cx="60"
        cy="60"
        r={radius}
        stroke="rgba(5, 7, 7, 1)"
        strokeWidth="6"
        fill="transparent"
        strokeDasharray={circumference}
        strokeDashoffset={circumference}
        animate={{ strokeDashoffset }}
        transition={{ duration: 1, ease: "easeOut" }}
        transform="rotate(270, 60, 60)"
      />

      {/* Percentage Text */}
      <text
        x="60"
        y="65"
        fontSize="24"
        fontWeight="bold"
        textAnchor="middle"
        fill="#050707"
      >
        {/* {percentage.toFixed(0)}% */}
        {!isNaN(percentage) ? `${percentage.toFixed(0)}%` : `0%`}
      </text>
    </svg>
  );
};

CircularProgressBar.propTypes = {
  percentage: PropTypes.number.isRequired,
};

export default CircularProgressBar;
