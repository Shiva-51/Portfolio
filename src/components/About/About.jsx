import React from "react";

import aboutImg from "/src/assets/about/aboutImage2.png";
import cursorIcon from "/src/assets/about/cursorIcon.png";
import serverIcon from "/src/assets/about/serverIcon.png";
import uiIcon from "/src/assets/about/uiIcon.png";
import styles from "./About.module.css";


export const About = () => {

  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
        <div className={styles.content}>
          <img 
            src={aboutImg}
            alt="Me sitting"
            className={styles.aboutImage}
          />
          <ul className={styles.aboutItems}>
            <li className={styles.aboutItem}>
              <img src={cursorIcon} alt= "cursorIcon" />
              <div className={styles.aboutItemText}>
                <h3>Frontend Developer</h3>
                <p>I'm a frontend Developer with experience and I develop Optimised Web pages.</p>
              </div>
            </li>
            <li className={styles.aboutItem}>
              <img src={serverIcon} alt= "serverIcon" />
              <div className={styles.aboutItemText}>
                <h3>Backend Developer</h3>
                <p>I'm a Backend Developer with experience and I develop Optimised Web pages.</p>
              </div>
            </li>
            <li className={styles.aboutItem}>
              <img src={uiIcon} alt= "uiIcon" />
              <div className={styles.aboutItemText}>
                <h3>Ui Developer</h3>
                <p>I'm a Ui Developer with experience and I develop Optimised Web pages.</p>
              </div>
            </li>
          </ul>
        </div>
    </section>
    );
}