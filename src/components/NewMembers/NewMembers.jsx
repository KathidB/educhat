import { RightPanelTitle } from "../RightPanelTitle/RightPanelTitle";
import styles from "./NewMembers.module.css";

export function NewMembers({ userList, isError, isLoading, title }) {
  if (isError) {
    return <p>Error loading data...</p>;
  }

  return (
    <div>
      <RightPanelTitle>{title}</RightPanelTitle>

      {isLoading ? (
        <span>Loading...</span>
      ) : (
        <ul className={styles.members}>
          {userList.results.map((user) => {
            return (
              <li key={user.email}>
                <img src={user.picture.medium} alt={user.login.username} />
                <div>
                  <p>{user.login.username}</p>
                  <span>{user.location.country}</span>
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
