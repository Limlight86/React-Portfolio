import React from "react";
import styles from "./ProjectCard.module.css";

const ProjectCard = ({ name, description, language, html_url }) => (
  <a href={html_url} target="blank">
    <div className={styles.repoCard}>
      <p>{name}</p>
      <p>{description}</p>
      <p>{language}</p>
    </div>
  </a>
);

export default ProjectCard;
