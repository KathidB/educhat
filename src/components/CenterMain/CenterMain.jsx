import { Outlet } from "react-router-dom";
import { CenterHeader } from "../CenterHeader/CenterHeader";
import { CenterWrapper } from "../CenterWrapper/CenterWrapper";
import styles from "./CenterMain.module.css";

export function CenterMain() {
  return (
    <main className={styles.main}>
      <CenterWrapper>
        <CenterHeader />
        <Outlet />
      </CenterWrapper>
    </main>
  );
}
