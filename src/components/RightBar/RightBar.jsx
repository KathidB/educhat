import { useEffect, useState } from "react";
import { NavBar } from "../NavBar/NavBar";
import { NewMembers } from "../NewMembers/NewMembers";
import { RightWrapper } from "../RightWrapper/RightWrapper";
import { User } from "../User/User";
import styles from "./RightBar.module.css";

export function RightBar() {
  const [userList, setUserList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=10")
      .then((res) => {
        if (res.ok) {
          setIsError(false);
          return res.json();
        }
        throw new Error("Error loading data...");
      })
      .then((res) => {
        setUserList(res);
        setIsLoading(false);
      })
      .catch((e) => {
        setIsError(true);
        setIsLoading(false);
        console.error(e);
      });
  }, []);

  return (
    <div className={styles.rightBar}>
      <NavBar />
      <RightWrapper>
        <User />
        <NewMembers
          userList={userList}
          error={isError}
          isLoading={isLoading}
          title={"New Members"}
        />
        <NewMembers
          userList={userList}
          error={isError}
          isLoading={isLoading}
          title={"Recent Activity"}
        />
      </RightWrapper>
    </div>
  );
}
