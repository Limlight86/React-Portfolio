import React from "react";
import { Navigation, Footer } from "../../components/";
import styles from "./About.module.css";
import { ResumeButton, MyStory } from "../../components";


const About = ({ match }) => (
  <div className={styles.about}>
    <Navigation currentPath={match.path} />
    <div className={styles.hero}>
      <h1 className={styles.header}>Meet Laz!</h1>
      <span className={styles.caption}>
        My team, Meal-Fly, accepting our award for best project on pitch night
        C33. (Judges on left.)
      </span>
      <ResumeButton />
    </div>
    
    <MyStory />
    <Footer currentPath={match.path} />
  </div>
);

export default About;
