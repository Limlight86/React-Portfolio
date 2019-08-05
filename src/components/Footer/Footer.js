import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Footer.module.css";

const Footer = ({ currentPath }) => (
  <footer className={styles.footer}>
    <span className={styles.copyRight}>&copy;2019 Limlight designs</span>
    <span>
      <a href="https://github.com/Limlight86" target="blank">
        <i className="fab fa-github fa-lg" />
      </a>
      <a href="https://www.linkedin.com/in/lazq86/" target="blank">
        <i class="fab fa-linkedin fa-lg" />
      </a>
    </span>
    <span className={styles.footerLinks}>
      <NavLink className={currentPath === "/" ? styles.current : null} exact to="/">
        Home
      </NavLink> {" "}|&nbsp;
      <NavLink className={currentPath === "/about" ? styles.current : null} to="/about">
        About
      </NavLink>{" "}|&nbsp;
      <NavLink className={currentPath === "/projects" ? styles.current : null} to="/projects">
        Projects
      </NavLink>{" "}|&nbsp;
      <NavLink className={currentPath === "/contact" ? styles.current : null} to="/contact">
        Contact
      </NavLink>
    </span>
  </footer>
);

export default Footer;
