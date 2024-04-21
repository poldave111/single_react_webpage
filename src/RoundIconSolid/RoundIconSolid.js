import styles from './RoundIconSolid.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function RoundIconSolid(props) {
    console.log(props);
    return (
        <div>
            <FontAwesomeIcon className={`${styles["round-icon"]}`} icon={props.icon} />
        </div>
    );
}

export default RoundIconSolid; 