import React, { useContext } from "react";
import styles from "./Projects.module.css";
import { Navigation, ProjectCard } from "../../components/";
import { PortfolioContext } from "../../context/PortfolioContext";

const Projects = ({ match }) => {
  const { repoData } = useContext(PortfolioContext);
  console.log(repoData);
  return (
    <div className={styles.projects}>
      <Navigation currentPath={match.path} />
      <h1 className={styles.header}>You are on the Projects page</h1>
      <p>
        This page will make a fetch to the github api and display my repos with
        the featured ones at the top and display them using a component that
        puts them out nice and neat. The component will be a link to the repo
        site.
      </p>
      <div className={styles.repoGrid}>
        {repoData.map(repo => {
          return (
            <ProjectCard
              key={repo.id}
              name={repo.name}
              description={repo.description}
              language={repo.language}
              html_url={repo.html_url}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
