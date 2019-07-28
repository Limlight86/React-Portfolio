import React, { useContext } from "react";
import styles from "./Home.module.css";
import { PortfolioContext } from "../../context/PortfolioContext";
import { Navigation } from "../../components/";

const Home = ({ match }) => {
  const { githubData } = useContext(PortfolioContext);
  const { avatar_url } = githubData;
  return (
    <div className={styles.home}>
      <Navigation currentPath={match.path} />
      <h1 className={styles.header}>You are on the HOME page</h1>
      <img src={avatar_url} alt="Limlight86" />
      <p>
        Home Page, make it pretty, highlight what tech I know, show off a couple
        of featured projects.
      </p>
    </div>
  );
};

export default Home;
