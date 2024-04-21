import React from 'react';
import styles from './Portfolio.module.scss';
import SectionTitle from '../SectionTitle/SectionTitle';
import PortfolioBox from '../PortfolioBox/PortfolioBox';


const Portfolio = () => {
    return (
        <section className={`${styles.portfolio}`}>
            <SectionTitle title="Our portfolio" subtitle="Lorem situm dolor oret gusto primo." />
            <div className={`container ${styles["box-wrapper"]}`}>
                <PortfolioBox />
                <PortfolioBox />
                <PortfolioBox />
                <PortfolioBox />
                <PortfolioBox />
                <PortfolioBox />
            </div>
        </section>
    )
}

export default Portfolio;