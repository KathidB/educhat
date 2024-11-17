import { Link } from "react-router-dom";
import LOGO from "../../assets/logo.png";
import styles from "./LeftPanelLogo.module.css";

export function LeftPanelLogo() {
  return (
    <Link className={styles.leftPanelLogo}>
      <img src={LOGO} alt="EDU CHAT LOGO" />
    </Link>
  );
}
