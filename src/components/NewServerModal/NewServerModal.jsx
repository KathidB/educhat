import { useState } from "react";
import styles from "./NewServerModal.module.css";
import LOGO from "../../assets/Group1.svg";
import HEADER from "../../assets/header.png";

export function NewServerModal({ setServers, onClose }) {
  const [newServerName, setNewServerName] = useState("");

  function handleSubmit() {
    console.log("wysłane!");
    const serverPathTrimmer = newServerName
      .trim()
      .toLowerCase()
      .replace(" ", "-");

    if (serverPathTrimmer) {
      setServers((prevV) => [
        ...prevV,
        {
          id: 7,
          ServerName: newServerName,
          serverPath: serverPathTrimmer,
          serverImg: LOGO,
        },
      ]);
    }

    setNewServerName("");
    onClose();
  }

  return (
    <div className={styles.modal}>
      <form
        onSubmit={handleSubmit}
        style={{
          backgroundImage: `url(${HEADER})`,
          backgroundRepeat: "no-repeat",
        }}
      >
        <h3>Create a new server</h3>
        <label htmlFor="serverName">Server name</label>
        <input
          id="serverName"
          type="text"
          placeholder="Minumum 3 characters"
          onChange={(e) => setNewServerName(e.target.value)}
        />

        <label htmlFor="serverIcon">Server icon</label>
        <input type="file" id="serverIcon" />

        <div>
          <button
            disabled={newServerName.length > 2 ? false : true}
            onClick={handleSubmit}
          >
            Create
          </button>
          <button onClick={onClose}>Close</button>
        </div>
      </form>
    </div>
  );
}
