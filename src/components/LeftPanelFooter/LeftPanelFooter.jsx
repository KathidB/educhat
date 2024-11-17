import PROFILE_IMG from "../../assets/Profile.svg";
import styles from "./LeftPanelFooter.module.css";

export function LeftPanelFooter() {
  return (
    <div className={styles.footer}>
      <img src={PROFILE_IMG} alt="Kathid" />
    </div>
  );
}
