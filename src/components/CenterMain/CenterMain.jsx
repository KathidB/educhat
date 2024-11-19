import { CommunityServers } from "../../constans/CommunityServers";

import { CenterHeader } from "../CenterHeader/CenterHeader";
import { CenterWrapper } from "../CenterWrapper/CenterWrapper";
import styles from "./CenterMain.module.css";

export function CenterMain() {
  return (
    <main className={styles.main}>
      <CenterWrapper>
        <CenterHeader />
        <CommunityServers />
      </CenterWrapper>
    </main>
  );
}
