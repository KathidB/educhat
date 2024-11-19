import styles from "./CenterFeatured.module.css";

export function CenterFeatured({ servers }) {
  const featuresServers = servers.filter((item) => item.featured);

  console.log(featuresServers);

  return (
    <div className={styles.featured}>
      <div className={styles.top}>
        <h2>Featured Community</h2>
        <button>See all</button>
      </div>
      <ul>
        {featuresServers.map((featured) => (
          <li
            style={{ backgroundImage: `url(${featured.serverImg})` }}
            key={featured.id}
          >
            <div className={styles.background}>
              <img src={featured.serverIcon} />
              <div className={styles.description}>
                <h3> {featured.ServerName}</h3>
                <p>{featured.serverDescription}</p>
              </div>
              <div className={styles.members}>
                <span>👨‍💻{featured.serverMembers}</span>
                <span>🎧{featured.serverOnline}</span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
