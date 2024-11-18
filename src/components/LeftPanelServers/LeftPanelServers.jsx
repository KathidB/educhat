import { NavLink } from "react-router-dom";
import ADD_ICON from "../../assets/AddServer.svg";
import styles from "./LeftPanelServers.module.css";

export function LeftPanelServers({ servers }) {
  console.log(servers.length);

  return (
    <ul className={styles.servers}>
      {servers.map((item) => {
        return (
          <li key={item.id}>
            <NavLink to={item.serverPath}>
              <img src={item.serverImg} alt={item.serverName} />
            </NavLink>
          </li>
        );
      })}
      <button>
        <img src={ADD_ICON} alt="add new server" />
      </button>
    </ul>
  );
}
