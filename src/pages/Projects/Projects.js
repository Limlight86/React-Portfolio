import React from "react";
import styles from "./Projects.module.css";
import { Navigation } from '../../components/'

const Projects = ({ match }) =>(
  <div className={styles.projects}>
    <Navigation currentPath={match.path} />
    <h1 className={styles.header}>You are on the Projects page</h1>
    <p>
      This page will make a fetch to the github api and display my repos with the featured ones at the top
      and display them using a component that puts them out nice and neat. The component will be a link to the repo site.
    </p>
  </div>
)

export default Projects;