import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.css"

const Navigation = () => (
  <header>
    <span>
      Lazaro Quintana
    </span>
    <ul className={styles.linkList}>
      <li>
        <NavLink exact to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
      <li>
        <NavLink to="/projects">Projects</NavLink>
      </li>
      <li>
        <NavLink to="/contact">Contact</NavLink>
      </li>
    </ul>
  </header>
);

export default Navigation;