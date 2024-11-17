import { NavLink } from "react-router-dom";
import { SERVER_CATEGORIES_LIST } from "../../constans/serverCategoriesList";
import styles from "./ServerCategories.module.css";

export function ServerCategories() {
  return (
    <>
      <ul className={styles.serverList}>
        <h3>Explore</h3>
        {SERVER_CATEGORIES_LIST.map((server) => {
          return (
            <li key={server.serverCategory}>
              <NavLink to={server.serverCategoryPath}>
                <img src={server.img} /> {server.serverCategory}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </>
  );
}