import { Center } from "../Center/Center";
import { LeftBar } from "../LeftBar/LeftBar";
import { RightBar } from "../RightBar/RightBar";
import styles from "./Layout.module.css";

export function Layout() {
  return (
    <div className={styles.layout}>
      <LeftBar />
      <Center />
      <RightBar />
    </div>
  );
}
