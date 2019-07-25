import React from "react";
import styles from "./About.module.css";
import { Navigation } from '../../components/'

const About = ({ match }) =>(
  <div className={styles.about}>
    <Navigation currentPath={match.path} />
    <h1 className={styles.header}>You are on the About page</h1>
    <p>This page will have a small story about my journey as a dev.</p>
  </div>
) 

export default About;
