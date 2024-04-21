import styles from "./Button.module.scss";

const Button = (props) => {

    const classes = [styles["btn"]];

    if (props.modifier) {
        classes.push(styles[`btn-${props.modifier}`]);
    }

    return (
        <div className={ classes.join(" ") } onClick={() => props.action() }>
            {props.children}
        </div>
    )
}

export default Button; 