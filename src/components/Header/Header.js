import React from 'react';
import styles from './Header.module.scss';
import Button from '../Button/Button';

const Header = ({ buttonColor }) => {

    return (
        <section className={styles.header}>
            <p className={styles["over-title"]}>Welcome To Our Studio!</p>
            <h1 className={styles.title}>It's not so nice to meet you</h1>
            <Button modifier="three">Tell me more</Button>
        </section>
    )
}

export default Header;