import styles from "./NavBar.module.css";
import { NavBarIcons } from "../../constans/NavBarIcons";

export function NavBar() {
  return (
    <ul className={styles.nav}>
      {NavBarIcons.map((icon) => {
        return (
          <li key={icon.id}>
            <button aria-label={icon.role}>{icon.icon}</button>
          </li>
        );
      })}
    </ul>
  );
}
