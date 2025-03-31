import React from "react";
import styles from "./Hero.module.css";
import heroImage from "/src/assets/hero/heroImage2.png";

export const Hero = () => {
    const target_url="https://mail.google.com/mail/?view=cm&fs=1&to=shiva518375@gmail.com&su=Hello&body=I%20would%20like%20to%20contact%20you."
    return <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi, I'm Shiva</h1>
            <p className={styles.description}> Coding Enthusiast | Full Stack Developer </p>            
            <div className={styles.btnContainer}>
                <a href="https://drive.google.com/file/d/1hU8524rknnvygHhoFfToaeL_PojDGPdF/view?usp=sharing" target="_blank" className={styles.contactBtn}>Resume</a>
                <a href={target_url} target="_blank" className={styles.contactBtn}>Contact Me</a>
            </div>
        </div>
        <img 
            src={heroImage} 
            alt="Hero Image"
            className={styles.heroImg}
        />
        <div className={styles.topBlur} />
        <div className={styles.bottomBlur} />
    </section>
};