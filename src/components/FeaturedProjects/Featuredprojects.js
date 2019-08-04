import React from "react"; 
import { mealFly, wynMusic } from "../../assets";
import styles from "./FeaturedProjects.module.css";

const FeaturedProjects = () => (
  <div className={styles.wrapper}>
    <h1>Featured Projects</h1>
    <div className={styles.featured}>
      <a className={styles.tooltip} href="https://github.com/Limlight86/Meal-Fly" target='blank'>
        <span className={styles.tooltiptext}>Meal-Fly</span>
        <img src={mealFly} alt="meal-fly" />
      </a>
      <a className={styles.tooltip} href="https://github.com/Limlight86/WynMusic" target='blank'>
        <span className={styles.tooltiptext}>WynMusic</span>
        <img src={wynMusic} alt="wyn-music" />
      </a>
    </div>
  </div>
);

export default FeaturedProjects;
