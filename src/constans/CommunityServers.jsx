import { useState } from "react";

import LOGO1 from "../assets/servers/1.png";
import ICON1 from "../assets/servers/1icon.svg";
import LOGO2 from "../assets/servers/2.png";
import ICON2 from "../assets/servers/2icon.svg";
import LOGO3 from "../assets/servers/3.png";
import ICON3 from "../assets/servers/3icon.svg";
import LOGO4 from "../assets/servers/4.png";
import ICON4 from "../assets/servers/4icon.png";
import { CenterFeatured } from "../components/CenterFeatured/CenterFeatured";
import { CenterPopular } from "../components/CenterPopular/CenterPopular";

export function CommunityServers() {
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
      serverPath: "/virtual-reality",
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
      serverPath: "/gaming",
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
      serverPath: "/3d-art",
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
      serverPath: "/nft",
      featured: false,
      popular: true,
    },
    {
      id: 4,
      ServerName: "Kathid - Streamer",
      serverIcon: ICON1,
      serverImg: LOGO1,
      serverDescription: "Twitch Streamer Kathid and his community",
      serverOnline: "12",
      serverMembers: "678",
      serverPath: "/kathid",
      featured: false,
      popular: false,
    },
    {
      id: 5,
      ServerName: "Cooking",
      serverIcon: ICON1,
      serverImg: LOGO1,
      serverDescription: "Hungry? Let's cook!",
      serverOnline: "112",
      serverMembers: "2678",
      serverPath: "/cooking",
      featured: false,
      popular: false,
    },
    {
      id: 6,
      ServerName: "Programming",
      serverIcon: ICON1,
      serverImg: LOGO1,
      serverDescription: "Best place to learn programming.",
      serverOnline: "2112",
      serverMembers: "223678",
      serverPath: "/programming",
      featured: false,
      popular: false,
    },
  ]);

  return (
    <>
      <CenterFeatured servers={servers} />
      <CenterPopular servers={servers} />
    </>
  );
}
