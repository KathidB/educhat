import { ServerList } from "../../constans/ServerList";
import { LeftPanelLogo } from "../LeftPanelLogo/LeftPanelLogo";
import styles from "./LeftPanel.module.css";

export function LeftPanel() {
  return (
    <nav className={styles.leftPanel}>
      <LeftPanelLogo />
      <ServerList />
    </nav>
  );
}
