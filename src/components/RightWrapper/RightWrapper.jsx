import styles from "./RightWrapper.module.css";

export function RightWrapper({ children }) {
  return <div className={styles.wrapper}>{children}</div>;
}
