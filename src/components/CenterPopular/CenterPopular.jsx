import { CommunityTitle } from "../CommunityTitle/CommunityTitle";
import styles from "./CenterPopular.module.css";

export function CenterPopular({ servers }) {
  return (
    <div className={styles.popular}>
      <CommunityTitle>Popular Right Now</CommunityTitle>
    </div>
  );
}
