import styles from "./RightPanelTitle.module.css";

export function RightPanelTitle({ children }) {
  return (
    <div className={styles.title}>
      <h3>{children}</h3>
      <button>See all</button>
    </div>
  );
}
