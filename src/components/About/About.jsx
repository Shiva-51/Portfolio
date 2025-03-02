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
                <h3>Frontend Web Developer</h3>
                <p>I'm a Frontend Developer, and a Web Performance Enthusiast. 
                  <br></br>
                  I specialize in crafting fast, accessible, and visually appealing web applications.
                </p>
              </div>
            </li>
            <li className={styles.aboutItem}>
              <img src={uiIcon} alt= "uiIcon" />
              <div className={styles.aboutItemText}>
                <h3>App Developer</h3>
                <p>
                  I design and develop mobile applications with a focus on performance and usability.Using Flutter and native technologies, I create cross-platform apps with smooth user experiences.
                  I build scalable and efficient mobile solutions.
                </p>
              </div>
            </li>
            <li className={styles.aboutItem}>
              <img src={serverIcon} alt= "serverIcon" />
              <div className={styles.aboutItemText}>
                <h3>Competitive Programmer</h3>
                <p>I enjoy solving complex algorithmic problems and optimizing solutions for efficiency.
                    I actively participate in coding contests and continuously improve my logical thinking skills.
                </p>
              </div>
            </li>
          </ul>
        </div>
    </section>
    );
}