import { createContext, useState } from "react";
import LOGO from "../assets/Group1.svg";
import LOGO2 from "../assets/ing.png";
import LOGO3 from "../assets/deer.png";
import LOGO4 from "../assets/house.png";
import LOGO5 from "../assets/ai.png";

// Create the context
export const JoinedServersContext = createContext();

// Context provider component
export function JoinedServersProvider({ children }) {
  const [servers, setServers] = useState([
    {
      id: 0,
      ServerName: "Default",
      serverPath: "/",
      serverImg: LOGO,
    },
    {
      id: 1,
      ServerName: "Music",
      serverPath: "/music",
      serverImg: LOGO2,
    },
    {
      id: 2,
      ServerName: "Education",
      serverPath: "/education",
      serverImg: LOGO3,
    },
    {
      id: 3,
      ServerName: "Programming",
      serverPath: "/programming",
      serverImg: LOGO4,
    },
    {
      id: 4,
      ServerName: "AI",
      serverPath: "/ai",
      serverImg: LOGO5,
    },
  ]);

  return (
    <JoinedServersContext.Provider value={{ servers, setServers }}>
      {children}
    </JoinedServersContext.Provider>
  );
}
