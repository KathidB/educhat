import styles from "./CommunityTitle.module.css";

export function CommunityTitle({ children }) {
  return (
    <div className={styles.top}>
      <h2>{children}</h2>
      <button>See all</button>
    </div>
  );
}
