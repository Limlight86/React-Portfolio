import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.css";

const Navigation = ({ currentPath }) => (
    <header className={styles.navBar}>
    <span className={styles.navTitle}>Lazaro Quintana, Full-Stack Web Developer</span>
    <span className={styles.linkList}>
      <NavLink className={currentPath === '/' ? styles.current : null} exact to="/"> 
        Home
      </NavLink>
      <NavLink className={currentPath === '/about' ? styles.current : null} to="/about">
        About
      </NavLink>
      <NavLink className={currentPath === '/projects' ? styles.current : null} to="/projects">
        Projects
      </NavLink>
      <NavLink className={currentPath === '/contact' ? styles.current : null} to="/contact">
        Contact
      </NavLink>
    </span>
  </header>
);
  
export default Navigation;
