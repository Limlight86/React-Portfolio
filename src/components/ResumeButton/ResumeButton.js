import React from "react";
import { Link } from "react-router-dom";
import { Resume } from "../../assets";
import styles from "./ResumeButton.module.css";

const ResumeButton = () => (
  <Link to={Resume} target="_blank" download>
    <button className={styles.resumeButton}>Download Resume</button>
  </Link>
);

export default ResumeButton;
