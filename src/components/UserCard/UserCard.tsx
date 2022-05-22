import { Avatar, Button } from "@mui/material";
import React from "react";
import { User } from "../../store/slices/usersSlice";
import styles from "./userCard.module.css";
import myPhoto from "./../../asset/myPhoto.jpg";
interface UserCardProps {
  userData: User;
}
export default function UserCard({ userData }: UserCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.contentBox}>
        <div className={styles.content}>
          <Avatar src={myPhoto} sx={{ mr: 2, width: "60px", height: "60px" }} />
          <div className={styles.contentText}>
            <h3 className={styles.card__name}>{userData.name}</h3>
            <p className={styles.card__city}>{userData.address.city}</p>
          </div>
        </div>
        <Button sx={{ mt: 2 }} variant="contained">
          Смотреть профиль
        </Button>
      </div>
    </div>
  );
}
