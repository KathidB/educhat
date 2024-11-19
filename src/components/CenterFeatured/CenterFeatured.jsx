import styles from "./CenterFeatured.module.css";
import BG from "../../assets/bg.png";
import { CommunityTitle } from "../CommunityTitle/CommunityTitle";

export function CenterFeatured({ servers }) {
  const featuresServers = servers.filter((item) => item.featured);

  console.log(featuresServers);

  return (
    <div className={styles.featured}>
      <CommunityTitle>Featured Community</CommunityTitle>
      <ul>
        {featuresServers.map((featured) => (
          <li
            style={{ backgroundImage: `url(${featured.serverImg})` }}
            key={featured.id}
          >
            <img className={styles.bgImg} src={BG} />
            <div className={styles.background}>
              <img src={featured.serverIcon} />
              <div className={styles.description}>
                <h3> {featured.ServerName}</h3>
                <p>{featured.serverDescription}</p>
              </div>
              <div className={styles.members}>
                <span>🎧{featured.serverOnline} Online</span>
                <span>👨‍💻{featured.serverMembers} Members</span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
