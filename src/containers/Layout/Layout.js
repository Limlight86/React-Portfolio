import React from "react";
import styles from "./Layout.module.css";
import { Backdrop } from "../../components/";

const Layout = ({ children }) => (
  <div className={styles.layout}>
    <Backdrop />
    {children}
  </div>
);

export default Layout;
