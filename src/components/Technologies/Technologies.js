import React from "react";
import { jsLogo, reactLogo, rubyLogo } from "../../assets";
import styles from "./Technologies.module.css";

const Technologies = () => (
  <div className={styles.technologies}>
    <p>My favorite coding technologies include</p>
    <ul className={styles.imgCollection}>
      <li>
        <h3>React</h3>
        <img className={styles.react} src={reactLogo} alt="reactjs" />
      </li>
      <li>
        <h3>Javacript</h3>
        <img className={styles.techImg} src={jsLogo} alt="js" />
      </li>
      <li>
        <h3>Ruby</h3>
        <img className={styles.techImg} src={rubyLogo} alt="ruby" />
      </li>
    </ul>
  </div>
);

export default Technologies;
