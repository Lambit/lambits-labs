
import styles from '../../styles/SwapBtn.module.css';

/* A second button created to be used throughout the application while
accepting different handles. */ 

export function SwapButton() {
    return (
        <a className={styles.a}>
        <span className={styles.span}></span>
        <span className={styles.span}></span>
        <span className={styles.span}></span>
        <span className={styles.span}></span>
        SWAP
        </a>
    )
};
