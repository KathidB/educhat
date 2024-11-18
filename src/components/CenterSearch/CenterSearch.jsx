import { useState } from "react";
import SEARCH_ICON from "../../assets/Search.svg";
import styles from "./CenterSearch.module.css";

export function CenterSearch() {
  const [search, setSearch] = useState("");

  return (
    <>
      <div className={styles.center}>
        <img src={SEARCH_ICON} />
        <input
          type="search"
          placeholder="Explore"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
    </>
  );
}
