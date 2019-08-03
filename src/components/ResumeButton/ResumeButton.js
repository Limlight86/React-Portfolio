import React from "react";
import { Link } from "react-router-dom";
import { Resume } from "../../assets";
import styles from "./ResumeButton.module.css";

const ResumeButton = () => (
  <button className={styles.resumeButton}>
    <Link to={Resume} target="_blank" download>
      Download Resume
    </Link>
  </button>
);

export default ResumeButton;
