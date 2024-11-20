import { CommunityTitle } from "../CommunityTitle/CommunityTitle";
import styles from "./CenterPopular.module.css";
import POPULAR_BG from "../../assets/popularbg.png";

export function CenterPopular({ servers }) {
  const filteredPopular = servers.filter((popular) => popular.popular);

  return (
    <div className={styles.popular}>
      <CommunityTitle>Popular Right Now</CommunityTitle>

      <ul>
        {filteredPopular.map((server) => {
          return (
            <li
              key={server.id}
              className={styles.popularImgLeft}
              style={{
                backgroundImage: `url(${server.serverImg})`,
                backgroundRepeat: "no-repeat",
              }}
            >
              <div
                className={styles.popularImgRight}
                style={{ backgroundImage: `url(${POPULAR_BG})` }}
              >
                <img src={server.serverIcon} />
                <div className={styles.description}>
                  <div>
                    <h3>{server.ServerName}</h3>
                    <p>{server.serverDescription}</p>
                  </div>
                  <span>👨‍💻 {server.serverMembers} Members</span>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
