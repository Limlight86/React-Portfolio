import React from "react"; 
import { mealFly, wynMusic, list, portfolio } from "../../assets";
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
      <a className={styles.tooltip} href="https://github.com/Limlight86/Care-List" target='blank'>
        <span className={styles.tooltiptext}>Care-List</span>
        <img src={list} alt="careList" />
      </a>
      <a className={styles.tooltip} href="https://github.com/Limlight86/React-Portfolio" target='blank'>
        <span className={styles.tooltiptext}>React-Portfolio</span>
        <img src={portfolio} alt="portfolio" />
      </a>
    </div>
  </div>
);

export default FeaturedProjects;
