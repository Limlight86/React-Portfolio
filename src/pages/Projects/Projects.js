import React from "react";
import styles from "./Projects.module.css";

const Projects = () =>(
  <div className={styles.projects}>
    <h1>You are on the Projects page</h1>
    <p>
      This page will make a fetch to the github api and display my repos with the featured ones at the top
      and display them using a component that puts them out nice and neat. The component will be a link to the repo site.
    </p>
  </div>
)

export default Projects;