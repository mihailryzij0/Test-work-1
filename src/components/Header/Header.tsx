import React from "react";
import ButtonWhit from "../Buttons/ButtonWhit/ButtonWhit";
import styles from "./header.module.css";
export default function Header() {
  return (
    <header className={styles.header}>
      <h2 className={styles.logo}>CONCERT CLUB</h2>
      <div className={styles.buttonGroup}>
        <ButtonWhit text={"Версия для слабовидящих"} />
        <ButtonWhit text={"Мой профиль"} />
      </div>
    </header>
  );
}
