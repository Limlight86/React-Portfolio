import React from "react";
import styles from "./Contact.module.css";
import { Navigation } from '../../components/'

const Contact = ({ match }) => (
  <div className={styles.contact}>
    <Navigation currentPath={match.path} />
    <h1 className={styles.header}>You are on the Contact page</h1>
    <p>Simple contact form for sending me a message to my email.</p>
  </div>
) 

export default Contact;