import React from "react";
import { Link } from "react-router-dom";
import { Navigation } from '../../components/'
import styles from "./About.module.css";
import Resume from '../../assets/Lazaro_Quintana_Resume.pdf'

const About = ({ match }) =>(
  <div className={styles.about}>
    <Navigation currentPath={match.path} />
    <h1 className={styles.header}>You are on the About page</h1>
    <p>This page will have a small story about my journey as a dev.</p>
    <button><Link to={Resume} target="_blank" download>Download my Resume</Link></button>
  </div>
) 

export default About;
