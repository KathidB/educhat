import { ServerList } from "../../constans/serverList";
import { LeftPanelFooter } from "../LeftPanelFooter/LeftPanelFooter";
import { LeftPanelLogo } from "../LeftPanelLogo/LeftPanelLogo";
import styles from "./LeftPanel.module.css";

export function LeftPanel() {
  return (
    <nav className={styles.leftPanel}>
      <LeftPanelLogo />
      <ServerList />
      <LeftPanelFooter />
    </nav>
  );
}
