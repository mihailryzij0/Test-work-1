import { CircularProgress } from "@mui/material";
import React, { useEffect } from "react";
import styles from "./style/ListUsers.module.css";
import {
  useAppDispatch,
  useAppSelector,
} from "../components/hooks/redux-hooks";
import UserCard from "../components/UserCard/UserCard";
import { getListUsers } from "../store/slices/usersSlice";
import Banner from "../components/Banner/Banner";

export default function StartPage() {
  const dispatch = useAppDispatch();
  const userState = useAppSelector((state) => state.users);
  useEffect(() => {
    dispatch(getListUsers());
  }, []);
  return userState.status === "pending" ? (
    <CircularProgress />
  ) : (
    <>
      <Banner />
      <div className={`${styles.content} ${styles.container}`}>
        <section className={styles.listUsers}>
          {userState.users?.map((userData) => (
            <UserCard key={userData.id} userData={userData} />
          ))}
        </section>
        <section className={styles.previewAllPosts}></section>
      </div>
    </>
  );
}
