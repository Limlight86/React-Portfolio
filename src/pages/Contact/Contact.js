import React from "react";
import styles from "./Contact.module.css";
import { Navigation, ContactForm, SocialLinks } from "../../components/";

const Contact = ({ match }) => (
  <div className={styles.contact}>
    <Navigation currentPath={match.path} />
    <h1 className={styles.header}>Contact Me</h1>
    <p>Thank you for taking your time to reach out to me. I will get back to you ASAP!</p>
    <ContactForm />
    <div className={styles.links}>
      <SocialLinks />
    </div>
  </div>
);

export default Contact;
