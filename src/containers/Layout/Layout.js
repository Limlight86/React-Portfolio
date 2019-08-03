import React from "react";
import styles from "./Layout.module.css";
import { Backdrop, SideDrawer } from "../../components/";

const Layout = ({ children }) => (
  <div className={styles.layout}>
    <Backdrop />
    <SideDrawer/>
    {children}
  </div>
);

export default Layout;
