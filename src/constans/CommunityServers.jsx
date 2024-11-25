import { useContext } from "react";

import { CenterFeatured } from "../components/CenterFeatured/CenterFeatured";
import { CenterPopular } from "../components/CenterPopular/CenterPopular";
import { CenterRecent } from "../components/CenterRecent/CenterRecent";

import { CommunityServersContext } from "../context/CommunityServersContext";

export function CommunityServers() {
  const { servers } = useContext(CommunityServersContext);

  return (
    <>
      <CenterFeatured servers={servers} />
      <CenterPopular servers={servers} />
      <CenterRecent servers={servers} />
    </>
  );
}
