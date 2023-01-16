import React from 'react';
import { Main } from './Home';
import styles from './Content.module.scss';

const About = () => {
    return (
        <Main className={styles.main}>
            <h2 className={styles.postTitle}>About</h2>
            <p className={styles.nameBlock}>This blog about posts</p>
        </Main>
    );
};

export default About;
