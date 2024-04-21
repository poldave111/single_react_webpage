import React from "react";
import styles from './Menu.module.scss';

function Menu() {
  return (
    <div className={styles.menu}>
        <div className={styles.logo}>
            <p>iStuff</p>
        </div>
        <div className={styles["menu-items"]}>
            <p>Home</p>
            <p>Services</p>
            <p>Portfolio</p>
            <p>About</p>
            <p>Contact</p>
        </div>
    </div>
  );
}

export default Menu;
