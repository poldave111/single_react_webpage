import React from 'react';
import styles from './ServicesBox.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ServicesBox = (props) => {
    return (
        <section className={`${styles["services-box"]}`}>
            <div className={styles.icon}>
                <FontAwesomeIcon icon={props.icon} />
            </div>
            <h3>{props.title}</h3>
            <p className={styles.subtitle}>{props.subtitle}</p>
        </section>
    )
}

export default ServicesBox;