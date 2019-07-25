import React from "react";
import styles from "./Home.module.css";
import { Navigation } from "../../components/";

const Home = ({ match }) => (
  <div className={styles.home}>
    <Navigation currentPath={match.path} />
    <h1 className={styles.header}>You are on the HOME page</h1>
    <p>
      Home Page, make it pretty, highlight what tech I know, show off a couple
      of featured projects.
    </p>
  </div>
);

export default Home;
