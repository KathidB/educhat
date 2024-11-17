import { LeftPanel } from "../LeftPanel/LeftPanel";
import styles from "./Layout.module.css";

export function Layout() {
  return (
    <div className={styles.layout}>
      <LeftPanel />
    </div>
  );
}
