import React from 'react'; 
import styles from './Services.module.scss';
import SectionTitle from '../SectionTitle/SectionTitle';
import ServicesBox from '../ServicesBox/ServicesBox';
import { faLinux } from '@fortawesome/free-brands-svg-icons'
import { faHippo } from '@fortawesome/free-solid-svg-icons'
import { faPhp } from '@fortawesome/free-brands-svg-icons';


const Services = () => {
    return (
        <section className={`${styles.services}`}>
            <SectionTitle title="services" subtitle="Lorem ipsum sit doloret." />
            <div className={`container ${styles["icons-section"]}`}>
                <div className={styles.icon}>
                    <ServicesBox icon={faLinux} title="AT" subtitle="w końcu sprzęt z 286"/>
                </div>
                <div className={styles.icon}>
                    <ServicesBox icon={faHippo} title="ps/2" subtitle="fajny klasyczny ibm"/>
                </div>
                <div className={styles.icon}> 
                    <ServicesBox icon={faPhp} title="IBM XT" subtitle="niechciany następca"/>
                </div>
                {/* <FontAwesomeIcon icon={faLinux} />
                <FontAwesomeIcon icon={faHippo} />
                <FontAwesomeIcon icon={faPhp} /> */}
            </div>
        </section>
    );
};

export default Services; 