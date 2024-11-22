import styles from "./RightPanelTitle.module.css";

export function RightPanelTitle({ children }) {
  return (
    <div className={styles.title}>
      <h3 style={{ fontSize: "15px", color: "rgba(255, 255, 255, 0.55)" }}>
        {children}
      </h3>
      <button>See all</button>
    </div>
  );
}
