import styles from "./LeftPanelFooter.module.css";
import { USER_DATA } from "../../constans/userData";
import ADD from "../../assets/add.png";
import MIC from "../../assets/mic.png";
import HEADPHONES from "../../assets/headphones.png";
import VECTOR from "../../assets/Vector.svg";

export function LeftPanelFooter() {
  return (
    <div>
      <div className={styles.talk}>
        <img src={VECTOR} />
      </div>
      <div className={styles.footer}>
        <ul className={styles.left}>
          {USER_DATA.map((user) => {
            return (
              <li key={user.id}>
                <img src={user.avatar} />
                <span>{user.nickname}</span>
              </li>
            );
          })}
        </ul>
        <div className={styles.action}>
          <img src={MIC} alt="" />
          <img src={HEADPHONES} alt="" />
          <img src={ADD} alt="" />
        </div>
      </div>
    </div>
  );
}
