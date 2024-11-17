import { LeftPanel } from "../LeftPanel/LeftPanel";
import { LeftPanelFooter } from "../LeftPanelFooter/LeftPanelFooter";
import { ServerCategories } from "../ServerCategories/ServerCategories";

import styles from "./LeftBar.module.css";

export function LeftBar() {
  return (
    <div className={styles.leftBar}>
      <div className={styles.top}>
        <LeftPanel />
        <ServerCategories />
      </div>

      <LeftPanelFooter />
    </div>
  );
}
