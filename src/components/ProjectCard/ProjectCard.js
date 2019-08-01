import React from "react";
import styles from "./ProjectCard.module.css";

const ProjectCard = ({ name, description, language, html_url }) => (
  <a className={styles.repoLink} href={html_url} target="blank">
    <div className={styles.repoCard}>
      <h1>{name}</h1>
      <p>{description}</p>
      <p>{language}</p>
    </div>
  </a>
);

export default ProjectCard;
