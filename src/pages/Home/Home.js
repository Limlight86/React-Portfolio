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
      <div className={styles.header}>
        <h1>Hello World!</h1>
        <p>Full-Stack Web Developer, Lazaro Quintana</p>
      </div>
      <img className={styles.avatar} src={avatar_url} alt="Limlight86" />
      <p>
        I am a junior full-stack web developer, recipient of the Spirit of
        <a href="https://wyncode.co/" target="blank">Wyncode</a> award for Cohort 33.
      </p>
    </div>
  );
};

export default Home;
