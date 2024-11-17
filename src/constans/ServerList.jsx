import { useState } from "react";
import { LeftPanelServers } from "../components/LeftPanelServers/LeftPanelServers";
import LOGO from "../assets/Group1.svg";

export function ServerList() {
  const [servers, setServers] = useState([
    {
      id: 0,
      ServerName: "Default",
      serverPath: "/default",
      serverImg: LOGO,
    },
    {
      id: 1,
      ServerName: "Music",
      serverPath: "/music",
      serverImg: LOGO,
    },
    {
      id: 2,
      ServerName: "Education",
      serverPath: "/education",
      serverImg: LOGO,
    },
    {
      id: 3,
      ServerName: "Programming",
      serverPath: "/programming",
      serverImg: LOGO,
    },
  ]);

  return <LeftPanelServers servers={servers} setServers={setServers} />;
}
