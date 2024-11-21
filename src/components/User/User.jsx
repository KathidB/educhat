import styles from "./User.module.css";
import { USER_DATA } from "../../constans/userData";

export function User() {
  return (
    <ul className={styles.profile}>
      {USER_DATA.map((user) => {
        return (
          <li key={user.id}>
            <img src={user.profileImg} alt={user.nickname} />
            <p>{user.nickname}</p>
            <span>@{user.tag}</span>
          </li>
        );
      })}
    </ul>
  );
}
