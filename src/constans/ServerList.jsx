import { LeftPanelServers } from "../components/LeftPanelServers/LeftPanelServers";
import { JoinedServersProvider } from "../context/JoinedServersContext";

export function ServerList() {
  return (
    <JoinedServersProvider>
      <LeftPanelServers />
    </JoinedServersProvider>
  );
}
