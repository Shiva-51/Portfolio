import React from 'react';

import skills from "../../data/skills.json";
import history from "../../data/history.json";

import cpp from "/src/assets/skills/C++.png";
import css from "/src/assets/skills/css.png";
import firebase from "/src/assets/skills/firebase.png";
import flutter from "/src/assets/skills/flutter.png";
import html from "/src/assets/skills/html.png";
import javascript from "/src/assets/skills/javascript.png";
import node from "/src/assets/skills/node.png";
import reactjs from "/src/assets/skills/react.png";
import cc from "/src/assets/history/codechef.png";
import cf from "/src/assets/history/codeforces.png";
import lc from "/src/assets/history/leetcode.png";
import py from "/src/assets/skills/Python.png"
import C from "/src/assets/skills/c.png";
import Tailwind from "/src/assets/skills/tailwind.png";
import styles from "./Experience.module.css";

export const Experience = () => {

  const imgData = {
    "HTML" : html,
    "CSS" : css,
    "Tailwind" :Tailwind,
    "JavaScript" : javascript,
    "React" : reactjs,
    "Flutter" : flutter,
    "Firebase" : firebase,
    "C++" : cpp,
    "C" : C,
    "Python" : py,
    "Node" : node,
    "Codechef" : cc,
    "Codeforces" : cf,
    "Leetcode" : lc,
  };

  return (
    <section className={styles.container} id="skills">
      <h2 className={styles.title}>Skills</h2>
        <div className={styles.content}>
          <div className={styles.skills}>
            {skills.map((skill, id) => {
              return (
                <div key={id} className={styles.skill}>
                  <div className={styles.skillImageContainer}>
                    <img src={imgData[skill.title]} alt={skill.title} />
                  </div>
                  <p>{skill.title}</p>
                </div>  
              );
            })}
          </div>
          <ul className={styles.history}>
          {
            history.map((historyItem,id) => {
              return (
                <li key={id} className={styles.historyItem}>
                  <img 
                    src={imgData[historyItem.organisation]}
                    alt={historyItem.organisation}
                  />
                  <div className={styles.historyItemDetails}>
                    <h3>{`${historyItem.role}, ${historyItem.organisation}`}</h3>
                    <p>{`${historyItem.endDate}`}</p>
                    <ul>
                      {historyItem.experiences.map((experience, id) => {
                        return <li key={id}>{experience}</li>
                      })}
                    </ul>
                  </div>
                </li>
              );
            })
          }
          </ul>
        </div>
    </section>
    
  );
};