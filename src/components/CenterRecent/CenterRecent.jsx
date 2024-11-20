import { CommunityTitle } from "../CommunityTitle/CommunityTitle";
import styles from "./CenterRecent.module.css";

export function CenterRecent({ servers }) {
  const recentFiltered = servers.filter((server) => server.new);

  return (
    <div className={styles.recent}>
      <CommunityTitle>Recently Added</CommunityTitle>

      <ul>
        {recentFiltered.map((server) => {
          return (
            <li
              key={server.id}
              style={{
                backgroundImage: `url(${server.serverImg})`,
                backgroundRepeat: "no-repeat",
              }}
            >
              <div>
                <img src="" alt="" />

                <h3>{server.ServerName}</h3>
                <p>{server.serverDescription}</p>
                <span>👨‍💻 {server.serverMembers} Members</span>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
