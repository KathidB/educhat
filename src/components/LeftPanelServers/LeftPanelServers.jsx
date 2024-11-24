import { useState } from "react";
import { NavLink } from "react-router-dom";
import ADD_ICON from "../../assets/AddServer.svg";
import styles from "./LeftPanelServers.module.css";
import { createPortal } from "react-dom";
import { useContext } from "react";
import { JoinedServersContext } from "../../context/JoinedServersContext";
import { NewServerModal } from "../NewServerModal/NewServerModal";

export function LeftPanelServers() {
  const { servers, setServers } = useContext(JoinedServersContext);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <ul className={styles.servers}>
        {servers.map((item) => (
          <li key={item.id}>
            <NavLink to={item.serverPath}>
              <img src={item.serverImg} alt={item.ServerName} />
            </NavLink>
          </li>
        ))}
      </ul>
      <button className={styles.newServer} onClick={() => setIsModalOpen(true)}>
        <img src={ADD_ICON} alt="add new server" />
      </button>

      {isModalOpen &&
        createPortal(
          <NewServerModal
            setServers={setServers}
            onClose={() => {
              setIsModalOpen(false);
            }}
          />,
          document.body
        )}
    </>
  );
}
