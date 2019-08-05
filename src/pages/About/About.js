import React from "react";
import { Navigation, Footer } from "../../components/";
import styles from "./About.module.css";
import { ResumeButton, MyStory } from "../../components";
import { mealFlyWin } from "../../assets";

const About = ({ match }) => (
  <div className={styles.about}>
    <Navigation currentPath={match.path} />
    <h1 className={styles.header}>Meet Laz!</h1>
    <ResumeButton />
    <div className={styles.mealFly}>
      <img src={mealFlyWin} alt="ptich night c33" />
      <span className={styles.caption}>My team, Meal-Fly, accepting our award for best project on pitch night C33. (Judges on left.)</span>
    </div>
    <MyStory />
    <Footer currentPath={match.path}/>
  </div>
);

export default About;
