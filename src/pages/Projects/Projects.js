import React, { useContext } from "react";
import styles from "./Projects.module.css";
import { Navigation, ProjectCard, Footer } from "../../components/";
import { PortfolioContext } from "../../context/PortfolioContext";

const Projects = ({ match }) => {
  const { repoData } = useContext(PortfolioContext);
  return (
    <div className={styles.projects}>
      <Navigation currentPath={match.path} />
      <h1 className={styles.header}>My GitHub Repositories</h1>
      <p>
        Thank you for taking the time to look at some of the work I have done.
        Feel free to click on a card to visit the repo for that specific
        project.
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
      <Footer currentPath={match.path} />
    </div>
  );
};

export default Projects;
