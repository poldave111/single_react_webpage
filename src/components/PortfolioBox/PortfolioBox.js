import React from 'react';
import styles from './PortfolioBox.module.scss';
import SectionTitle from '../SectionTitle/SectionTitle';
import img1 from '../../images/splash_photo.jpg';


const PortfolioBox = () => {
    return (
        <section className={`${styles["portfolio-box"]}`}>
            <img src={img1} alt="Polaroid Picture" />
            <div className="caption">
                <h2>Title</h2>
                <p>Subtitle</p>
            </div>
        </section>
    )
}

export default PortfolioBox;