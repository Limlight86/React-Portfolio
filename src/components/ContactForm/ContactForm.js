import React from "react";
import styles from "./ContactForm.module.css";
import { email } from "../../assets";

const ContactForm = () => {
  
  const shadow = {
    boxShadow: "0 2px 4px 0 rgba(0, 0, 0, 0.2)",
    WebkitBoxShadow: "0 2px 4px 0 rgba(0, 0, 0, 0.2)"
  }

  return(
    <form action="https://formspree.io/lquin008@gmail.com" method="POST" className={styles.contactForm}>
      <div className={styles.personal}>
        <input style={shadow} type="text" name="name" autoComplete="off" placeholder="Name" required />
        <input style={shadow} type="email" name="email" autoComplete="off" placeholder="Email" required />
        <input style={shadow} type="phone" name="phone" autoComplete="off" placeholder="Phone Number" />
      </div>
      <textarea name="message" placeholder="Message" rows="10" cols="100" className={styles.textArea} required />
      <button className={styles.contactButton} type="submit"><img src={email} alt="send"/></button>
    </form>
  )
}
    


export default ContactForm;
