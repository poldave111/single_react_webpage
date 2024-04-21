import React from 'react';
import styles from './SectionTitle.module.scss';

const SectionTitle = ({title, subtitle}, props) => {
    return (
        <section className={styles["section-title"]}> 
            <h1 className={styles["title"]}>{title}</h1>
            <p className={styles["subtitle"]}>{subtitle}</p>
        </section>
    )
}
export default SectionTitle;