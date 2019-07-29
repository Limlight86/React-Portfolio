import React from "react"; 
import { mealFly, wynMusic } from "../../assets";
import styles from "./FeaturedProjects.module.css";

const FeaturedProjects = () => {
  return (
    <div className={styles.wrapper}>
      <h1>Featured Projects</h1>
      <span className={styles.disc}>Please be patient while free servers boot up</span>
      <div className={styles.featured}>
        <a className={styles.tooltip} href="https://meal-fly.herokuapp.com/" target='blank'>
          <span className={styles.tooltiptext}>Meal-Fly</span>
          <img src={mealFly} alt="meal-fly" />
        </a>
        <a className={styles.tooltip} href="https://wyn-music.herokuapp.com/" target='blank'>
          <span className={styles.tooltiptext}>WynMusic</span>
          <img src={wynMusic} alt="wyn-music" />
        </a>
      </div>
    </div>
  );
};

export default FeaturedProjects;
