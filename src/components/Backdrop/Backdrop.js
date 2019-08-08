import React, { useContext } from "react";
import styles from "./Backdrop.module.css";
import { PortfolioContext } from "../../context/PortfolioContext";

const Backdrop = () => {
  const { show, setShow } = useContext(PortfolioContext);

  const clicked = () => {
    setShow(false);
  };

  return show ? <div className={styles.backdrop} onClick={clicked} /> : null;
};

export default Backdrop;
