import React from "react";
import { githubLogo, linkedinLogo } from "../../assets/";
import styles from "./SocialLinks.module.css";

const SocialLinks = () => (
  <div className={styles.socialLinks}>
    <a href="https://github.com/Limlight86" target="blank">
      <img src={githubLogo} alt="github" />
    </a>
    <a href="https://www.linkedin.com/in/lazq86/" target="blank">
      <img src={linkedinLogo} alt="linkedin" />
    </a>
  </div>
);

export default SocialLinks;
