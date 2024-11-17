import { LeftBar } from "../LeftBar/LeftBar";
import styles from "./Layout.module.css";

export function Layout() {
  return (
    <div className={styles.layout}>
      <LeftBar />
    </div>
  );
}
