import { CenterExplore } from "../CenterExplore/CenterExplore";
import { CenterMain } from "../CenterMain/CenterMain";
import styles from "./Center.module.css";

export function Center() {
  return (
    <>
      <div className={styles.center}>
        <CenterExplore />
        <CenterMain />
      </div>
    </>
  );
}
