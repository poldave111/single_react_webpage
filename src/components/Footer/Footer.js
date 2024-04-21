import RoundIconSolid from '../../RoundIconSolid/RoundIconSolid';
import styles from './Footer.module.scss';
import { faReact } from '@fortawesome/free-brands-svg-icons';
import { faVuejs } from '@fortawesome/free-brands-svg-icons';
import { faAngular } from '@fortawesome/free-brands-svg-icons';

function Footer() {
    return (
        <footer>
            <div className={`container  ${styles.footer}`}>
                <div className={styles["footer-text"]}>
                    <p>&copy; Copyright 2024 Dave's company limited.</p>
                </div>
                <div className={styles["icon-wrapper"]}>
                    <div className={styles.icon}>
                        <RoundIconSolid icon={faReact} />
                    </div>
                    <div className={styles.icon}>
                        <RoundIconSolid icon={faVuejs} />
                    </div>
                    <div className={styles.icon}>
                        <RoundIconSolid icon={faAngular} />
                    </div>
                </div>
            </div>
        </footer >
    );
}

export default Footer; 