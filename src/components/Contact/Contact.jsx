import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

import git from "/src/assets/contact/githubIcon.png";
import linkedin from "/src/assets/contact/linkedinIcon.png";
import email from "/src/assets/contact/emailIcon.png";



export const Contact = () => {

    const target_url="https://mail.google.com/mail/?view=cm&fs=1&to=shiva518375@gmail.com&su=Hello&body=I%20would%20like%20to%20contact%20you."

  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={email} alt="Email icon" />
          <a href={target_url}>shiva518375@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={linkedin}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/shiva51/">linkedin.com/Shiva51</a>
        </li>
        <li className={styles.link}>
          <img src={git} alt="Github icon" />
          <a href="https://github.com/shiva-51">github.com/Shiva51</a>
        </li>
      </ul>
    </footer>
  );
};