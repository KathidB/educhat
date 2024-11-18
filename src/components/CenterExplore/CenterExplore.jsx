import { CenterSearch } from "../CenterSearch/CenterSearch";
import styles from "./CenterExplore.module.css";

export function CenterExplore() {
  return (
    <div className={styles.explore}>
      <CenterSearch />
    </div>
  );
}
