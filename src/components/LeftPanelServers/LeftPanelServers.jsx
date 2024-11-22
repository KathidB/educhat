import { useState } from "react";
import { NavLink } from "react-router-dom";
import ADD_ICON from "../../assets/AddServer.svg";
import LOGO from "../../assets/Group1.svg";
import styles from "./LeftPanelServers.module.css";

import { useContext } from "react";
import { JoinedServersContext } from "../../context/JoinedServersContext";

export function LeftPanelServers() {
  const { servers, setServers } = useContext(JoinedServersContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newServerName, setNewServerName] = useState("");

  function createNewServer() {
    if (newServerName.trim()) {
      setServers((prevV) => [
        ...prevV,
        {
          id: prevV.length, // Ensure unique ID
          ServerName: newServerName,
          serverPath: `/${newServerName.toLowerCase().replace(/ /g, "-")}`,
          serverImg: LOGO,
        },
      ]);
      setNewServerName(""); // Reset input
      setIsModalOpen(false); // Close modal
    }
  }

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
      <button onClick={() => setIsModalOpen(true)}>
        <img src={ADD_ICON} alt="add new server" />
      </button>

      {/* Modal */}
      {isModalOpen && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <h2>Create a New Server</h2>
            <input
              type="text"
              placeholder="Enter server name"
              value={newServerName}
              onChange={(e) => setNewServerName(e.target.value)}
            />
            <button onClick={createNewServer}>Create</button>
            <button onClick={() => setIsModalOpen(false)}>Cancel</button>
          </div>
        </div>
      )}
    </>
  );
}
