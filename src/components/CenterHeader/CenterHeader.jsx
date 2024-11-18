import styles from "./CenterHeader.module.css";
// import HEADER_LOGO from "../../assets/header.png";

export function CenterHeader() {
  return (
    <div className={styles.header}>
      <h1>
        Find Your Community
        <br /> on Daccord
      </h1>
    </div>
  );
}
