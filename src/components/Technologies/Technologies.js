import React from "react";
import { jsLogo, reactLogo, rubyLogo } from "../../assets";
import styles from "./Technologies.module.css";

const Technologies = () => (
  <div className={styles.technologies}>
    <p>My favorite coding technologies include</p>
    <ul className={styles.imgCollection}>
      <li>
        <h3>React</h3>
        <img src={reactLogo} alt="reactjs" style={{ width: "280px" }} />
      </li>
      <li>
        <h3>Javacript</h3>
        <img src={jsLogo} alt="js" />
      </li>
      <li>
        <h3>Ruby</h3>
        <img src={rubyLogo} alt="ruby" />
      </li>
    </ul>
  </div>
);

export default Technologies;
