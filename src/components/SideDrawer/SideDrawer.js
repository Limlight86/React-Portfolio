import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { PortfolioContext } from "../../context/PortfolioContext";
import styles from "./SideDrawer.module.css";

const SideDrawer = () => {
  const { show, setShow } = useContext(PortfolioContext);

  const handleClick = () => {
    setShow(false);
  };

  let attachedClasses = [styles.sideDrawer, styles.closed];

  if (show) {
    attachedClasses = [styles.sideDrawer, styles.open];
  }

  return (
    <React.Fragment>
      <div className={attachedClasses.join(" ")}>
        <nav>
          <NavLink exact to="/" onClick={handleClick}>
            Home
          </NavLink>
          <NavLink to="/about" onClick={handleClick}>
            About
          </NavLink>
          <NavLink to="/projects" onClick={handleClick}>
            Projects
          </NavLink>
          <NavLink to="/contact" onClick={handleClick}>
            Contact
          </NavLink>
        </nav>
      </div>
    </React.Fragment>
  );
};

export default SideDrawer;
