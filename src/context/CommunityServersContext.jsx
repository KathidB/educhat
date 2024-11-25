import { createContext } from "react";
import { useState } from "react";

import LOGO1 from "../assets/servers/1.png";
import ICON1 from "../assets/servers/1icon.svg";
import LOGO2 from "../assets/servers/2.png";
import ICON2 from "../assets/servers/2icon.svg";
import LOGO3 from "../assets/servers/3.png";
import ICON3 from "../assets/servers/3icon.svg";
import LOGO4 from "../assets/servers/4.png";
import ICON4 from "../assets/servers/4icon.png";
import OCTA_ICON from "../assets/octaicon.png";
import OCTA_ICON2 from "../assets/octaicon2.svg";
import OCTA_ICON3 from "../assets/octaicon3.svg";
import BG5 from "../assets/bg5.png";
import BG6 from "../assets/bg6.png";
import BG7 from "../assets/bg7.png";

export const CommunityServersContext = createContext();

export function CommunityServerFunctionContext({ children }) {
  const [servers, setServers] = useState([
    {
      id: 0,
      ServerName: "Virtual Reality",
      serverIcon: ICON1,
      serverImg: LOGO1,
      serverDescription:
        "A community for VR and novices alike, regular and friendly chat",
      serverOnline: "5678",
      serverMembers: "345678",
      serverPath: "/music",
      featured: true,
      popular: false,
    },
    {
      id: 1,
      ServerName: "Gaming",
      serverIcon: ICON2,
      serverImg: LOGO2,
      serverDescription:
        "Always a new challenge. Great place to make new friends",
      serverOnline: "28628",
      serverMembers: "527678",
      serverPath: "/music",
      featured: true,
      popular: false,
    },
    {
      id: 2,
      ServerName: "3D Art",
      serverIcon: ICON3,
      serverImg: LOGO3,
      serverDescription: "A great place to discuss art.",
      serverOnline: "18628",
      serverMembers: "145678",
      serverPath: "/music",
      featured: false,
      popular: true,
    },
    {
      id: 3,
      ServerName: "NFT",
      serverIcon: ICON4,
      serverImg: LOGO4,
      serverDescription:
        "An NFT community so that everyone can share their NFT's.",
      serverOnline: "38628",
      serverMembers: "887678",
      serverPath: "/music",
      featured: false,
      popular: true,
    },
    {
      id: 4,
      ServerName: "Kathid - Streamer",
      serverIcon: OCTA_ICON,
      serverImg: BG5,
      serverDescription: "Kathid - Twitch Streamer and his community.",
      serverOnline: "12",
      serverMembers: "67",
      serverPath: "/music",
      featured: false,
      popular: false,
      new: true,
    },
    {
      id: 5,
      ServerName: "Cooking",
      serverIcon: OCTA_ICON2,
      serverImg: BG6,
      serverDescription: "Hungry? Let's cook!",
      serverOnline: "112",
      serverMembers: "59",
      serverPath: "/music",
      featured: false,
      popular: false,
      new: true,
    },
    {
      id: 6,
      ServerName: "Programming",
      serverIcon: OCTA_ICON3,
      serverImg: BG7,
      serverDescription: "Best place to learn programming.",
      serverOnline: "2112",
      serverMembers: "223678",
      serverPath: "/music",
      featured: false,
      popular: false,
      new: true,
    },
    {
      id: 7,
      ServerName: "3D Art",
      serverIcon: ICON3,
      serverImg: LOGO3,
      serverDescription: "A great place to discuss art.",
      serverOnline: "18628",
      serverMembers: "145678",
      serverPath: "/music",
      featured: false,
      popular: false,
    },
    {
      id: 8,
      ServerName: "NFT",
      serverIcon: ICON4,
      serverImg: LOGO4,
      serverDescription:
        "An NFT community so that everyone can share their NFT's.",
      serverOnline: "38628",
      serverMembers: "887678",
      serverPath: "/music",
      featured: false,
      popular: false,
    },
    {
      id: 9,
      ServerName: "Kathid - Streamer",
      serverIcon: OCTA_ICON,
      serverImg: BG5,
      serverDescription: "Kathid - Twitch Streamer and his community.",
      serverOnline: "12",
      serverMembers: "67",
      serverPath: "/music",
      featured: false,
      popular: false,
      new: false,
    },
    {
      id: 10,
      ServerName: "Cooking",
      serverIcon: OCTA_ICON2,
      serverImg: BG6,
      serverDescription: "Hungry? Let's cook!",
      serverOnline: "112",
      serverMembers: "59",
      serverPath: "/music",
      featured: false,
      popular: false,
      new: false,
    },
    {
      id: 11,
      ServerName: "Singing",
      serverIcon: OCTA_ICON2,
      serverImg: BG6,
      serverDescription: "Hungry? Let's cook!",
      serverOnline: "112",
      serverMembers: "59",
      serverPath: "/music",
      featured: false,
      popular: false,
      new: false,
    },
  ]);

  return (
    <CommunityServersContext.Provider value={{ servers, setServers }}>
      {children}
    </CommunityServersContext.Provider>
  );
}
