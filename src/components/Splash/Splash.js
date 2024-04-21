import React from 'react';
import styles from './Splash.module.scss';
import Menu from '../Menu/Menu';
import Header from '../Header/Header';
import SectionTitle from '../SectionTitle/SectionTitle';

const Splash = () => {
    return (
        <section className={` ${styles.splash}`}>
            <Menu />
            <Header />
        </section>
    )
}

export default Splash; 