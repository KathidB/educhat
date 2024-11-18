import styles from "./CenterWrapper.module.css";

export function CenterWrapper({ children }) {
  return <div className={styles.wrapper}>{children}</div>;
}
