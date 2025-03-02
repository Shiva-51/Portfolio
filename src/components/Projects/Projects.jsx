import React from 'react';
import styles from './Projects.module.css';
import sample from "/src/assets/projects/temp3.png";


export const Projects = () => {

    return (

        <section className={styles.container} id="projects">
            <h2 className={styles.title}>Projects</h2>
            
            <div className={styles.containerForImg}>
                <div className={styles.imgContainer}>
                    <a href="https://github.com/Shiva-51/MedGenie" target="_blank"><img src={sample} className={styles.image}/></a>
                    {/* <h2>MedGenie</h2> */}
                </div>
                <div className={styles.imgContainer}>
                    <a><img src={sample} className={styles.image}/></a>
                    {/* <h2>MedGenie</h2> */}
                </div>
            </div>

        </section>

    );


};